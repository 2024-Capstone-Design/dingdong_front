// src/pages/Sketch.jsx
import React, { useRef, useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./Sketch.css";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Sketch = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState("#000000");
  const [lineWidth, setLineWidth] = useState(5);
  const [isErasing, setIsErasing] = useState(false);
  const [script, setScript] = useState([]);

  const chatid = '66a0b8ffad6cbd25943e0747';
  var item = null;
  var charac = null;

  useEffect(() => {
      const fetchMessages = async () => {
          try {
              setScript([]);
              const response = await axios.get(`http://127.0.0.1:8000/v1/script/${chatid}`);
              setScript(response.data.coding);
              console.log("불러옴", response.data.coding);

          } catch (error) {
              console.error("Failed to fetch messages:", error);
          }
      };
      fetchMessages();
  }, []);

  const navigate = useNavigate();

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const finishDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    const { offsetX, offsetY } = getTouchPos(touch);
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const handleTouchMove = (e) => {
    if (!isDrawing) return;
    e.preventDefault();
    const touch = e.touches[0];
    const { offsetX, offsetY } = getTouchPos(touch);
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const handleTouchEnd = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const getTouchPos = (touch) => {
    const rect = canvasRef.current.getBoundingClientRect();
    return {
      offsetX: touch.clientX - rect.left,
      offsetY: touch.clientY - rect.top
    };
  };

  const clearCanvas = () => {
    contextRef.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
  };

  const submitDrawing = async () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // 흰색 배경을 설정
    const tempCanvas = document.createElement("canvas");
    const tempContext = tempCanvas.getContext("2d");
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;

    // 흰색 배경 그리기
    tempContext.fillStyle = "#FFFFFF";
    tempContext.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

    // 기존 캔버스의 내용 그리기
    tempContext.drawImage(canvas, 0, 0);

  

    tempCanvas.toBlob(async (blob) => {
      {Object.keys(script).map(key => {
        item = script[key];
        if (key === 'created_at' || key === 'id') return null;
        console.log("여기", item['1']['인물'][0]['인물이름']);
        charac = item['1']['인물'].map((person, index) => ({
          name: person['인물이름'],
          main: index === 0,
          prompt: person['프롬프트']
        }));
        console.log("캐릭터", charac);
    })}

      const storageRef = ref(storage, `sketches/${new Date().toISOString()}.png`);
      await uploadBytes(storageRef, blob);
      const url = await getDownloadURL(storageRef);
      console.log("Submitted drawing URL:", url);
      
      // API로 POST 요청 보내기
      const response = await fetch("/api/mj/submit/imagine", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          studentTaskId: 50,
          sketchImage: url,
          characters: charac
        })
      });

      if (response.ok) {
        navigate("/sketch-result", { state: { sketchUrl: url } });
      } else {
        const message = `An error has occurred: ${response.status}`;
        throw new Error(message);
      }
    }, 'image/png');
  };

  const handleColorChange = (newColor) => {
    setColor(newColor);
    if (contextRef.current) {
      contextRef.current.strokeStyle = newColor;
    }
    setIsErasing(false);
  };

  const handleLineWidthChange = (event) => {
    const width = event.target.value;
    setLineWidth(width);
    if (contextRef.current) {
      contextRef.current.lineWidth = width;
    }
  };

  const activateEraser = () => {
    setIsErasing(true);
    if (contextRef.current) {
      contextRef.current.strokeStyle = "#FFFFFF"; // Set eraser color to white
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.6;
    canvas.style.width = `${canvas.width}px`;
    canvas.style.height = `${canvas.height}px`;
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
    document.body.style.height = '100%';
  

    const context = canvas.getContext("2d");
    context.lineCap = "round";
    contextRef.current = context;

    // 초기 설정
    contextRef.current.strokeStyle = color;
    contextRef.current.lineWidth = lineWidth;

    return () => {
      // 컴포넌트 언마운트 시 스타일 제거
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.height = '';
    };
  }, []);

  const colors = ["#000000", "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FFA500", "#800080"];

  return (
    <div className="sketch-container">
      <h1>Sketch Page</h1>
      <h3>캐릭터의 몸 전체를 그려주세요!</h3>
      <div className="controls">
        <label htmlFor="colorPicker">Choose color:</label>
        <input
          type="color"
          id="colorPicker"
          value={color}
          onChange={(e) => handleColorChange(e.target.value)}
        />
        <div className="color-palette">
          {colors.map((color) => (
            <div
              key={color}
              className="color-swatch"
              style={{ backgroundColor: color }}
              onClick={() => handleColorChange(color)}
            />
          ))}
        </div>
        <label htmlFor="lineWidth">Line Width:</label>
        <input
          type="range"
          id="lineWidth"
          min="1"
          max="20"
          value={lineWidth}
          onChange={handleLineWidthChange}
        />
        <button className="control-button" onClick={activateEraser}>지우기</button>
        <button className="control-button" onClick={clearCanvas}>모두 지우기</button>
        <button className="control-button" onClick={submitDrawing}>완성했어요!</button>
      </div>

      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseUp={finishDrawing}
        onMouseMove={draw}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="sketch-canvas"
      />
    </div>
  );
};

export default Sketch;