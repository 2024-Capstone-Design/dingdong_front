// src/pages/Sketch.jsx
import React, { useRef, useState, useEffect } from "react";
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
          characters: [
            {
              name: "백설공주",
              main: true,
              prompt: "A young woman with fair skin, rosy cheeks, and red lips. She has black, bobbed hair with a slight wave, adorned with a red bow. She wears a traditional medieval dress with a blue bodice, puffed sleeves, a high white collar, and a yellow skirt. She has a gentle and kind expression, often surrounded by woodland animals like birds and deer."
            },
            {
              name: "왕비",
              main: false,
              prompt: "A tall, regal woman with a strikingly beautiful yet sinister appearance. She has pale skin, sharp features, and arched eyebrows. Her hair is hidden under a high, black, and purple headdress adorned with a gold crown. She wears a long, flowing black robe with purple and red accents, a high collar, and a long red cape. Her expression is cold and calculating."
            },
            {
              name: "왕자",
              main: false,
              prompt: "A handsome young man with a noble bearing. He has fair skin, wavy brown hair, and a charming smile. He is dressed in a medieval prince outfit with a white tunic, blue and gold doublet, brown trousers, and knee-high brown boots. He often carries a sword at his side and rides a white horse."
            }
          ]
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
    canvas.height = window.innerHeight * 0.8;
    canvas.style.width = `${canvas.width}px`;
    canvas.style.height = `${canvas.height}px`;

    const context = canvas.getContext("2d");
    context.lineCap = "round";
    contextRef.current = context;

    // 초기 설정
    contextRef.current.strokeStyle = color;
    contextRef.current.lineWidth = lineWidth;
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
        className="sketch-canvas"
      />
    </div>
  );
};

export default Sketch;