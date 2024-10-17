import React, { useEffect, useState } from 'react';
import { getAccessToken } from '../api/auth';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { studentTaskStore } from "../stores/StudentTaskStore";
import { CODING_SITE_URL } from '../config';
import { userStore } from "../stores/UserStore";
import { api } from "../api/index";
import './SketchResult.css';

import { ref as databaseRef, get, child } from "firebase/database";
import { database } from '../firebase.js'; 

import JSZip from "jszip";
import { saveAs } from "file-saver";

const SketchResult = () => {
  const user = userStore.getUser();
  const { studentTaskId } = useParams();
  const location = useLocation();
  const fairytaleId = location.state?.fairytaleId;

  var task = studentTaskStore.getTasks().find(task => task.studentTaskId === parseInt(studentTaskId));

  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [backgrounds, setBackgrounds] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false); // 로딩 상태 추가
  const [realtimeId, setRealtimeId] = useState(null);

  const fetchRealtimeId = async () => {
      const dbRef = databaseRef(database);
      try {
        const snapshot = await get(child(dbRef, "studentTaskId"));
        if (snapshot.exists()) {
          setRealtimeId(snapshot.val());
          // console.log("realtimeId", realtimeId);
        } else {
          console.log("No data available for studentTaskId");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
  };

  const updateProgress = async () => {
    // 테스트를 위해 수정
    try {
      var new_progress = "";
      if (completed && task.progress == "SKETCH") {
        new_progress = "SKETCH_END";
      } else if (completed && (task.progress == "SKETCH_END" || task.progress == "CODING")) {
        new_progress = "CODING";
      } else {
        new_progress = "SKETCH";
      }
      if(new_progress != ""){
        const progressUpdateResponse = await api.updateStudentTaskProgress(studentTaskId, { "progress": new_progress });

        if (progressUpdateResponse.status === 200) {
          await api.getStudentTasks(user.student.id);
          task = studentTaskStore.getTasks().find(task => task.studentTaskId === parseInt(studentTaskId));
        } else {
          alert(`Progress 업데이트에 실패했습니다. (error: ${progressUpdateResponse.status})`);
        }
      }
    } catch (error) {
      console.error('Error update progress:', error);
    }
  };

  useEffect(() => {
    fetchRealtimeId();
  }, [studentTaskId]);

  useEffect(() => {
    const taskId = realtimeId;
    const fetchData = async () => {
      // console.log("가져옴", taskId);
      try {
        const response = await fetch(`https://image.ding-dong.xyz/api/v1/imagine/status/${taskId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${getAccessToken()}`,
          }
        });
        const data = await response.json();

        setCharacters(data.data.character);
        setBackgrounds(data.data.background);
        setCompleted(data.data.completed);

        let hasError = data.data.character.some((character) => character.status === 'failed') ||
          data.data.background.some((background) => background.status === 'failed');

        if (hasError) {
          setError(true);
          setCompleted(true);
        }

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    if(taskId != null){
      fetchData();
    }
    if (!completed && taskId != null) {
      const interval = setInterval(fetchData, 3000);
      return () => clearInterval(interval);
    } else if(!error) {
      updateProgress();
    }
  }, [completed, studentTaskId, realtimeId]);

  const handleRetry = () => {
    navigate(`/sketch/${studentTaskId}`);
  };

  const regenerate = async (imageId, promptType) => {
    try {
      await fetch("https://image.ding-dong.xyz/api/v1/imagine/regenerate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          'Authorization': `Bearer ${getAccessToken()}`,
        },
        body: JSON.stringify({
          studentTaskId: studentTaskId,
          imageId: imageId,
          promptType: promptType,
          fairytaleId: fairytaleId
        })
      });
      setCompleted(false);
    } catch (error) {
      console.error("Failed to regenerate:", error);
    }
  };

  // 기존 웹 페이지
  const navigateToSubdomain = (studentTaskId) => {
    const state = { studentTaskId };
    const encodedState = btoa(JSON.stringify(state));
    const newUrl = `${CODING_SITE_URL}#${encodedState}`;
    window.location.href = newUrl;
  };

  const goToNext = async () => {
    setLoading(true); // 로딩 상태 활성화
    // const zip = new JSZip();

    // // 캐릭터 이미지 파일을 ZIP에 추가
    // for (const character of characters) {
    //   for (const [index, url] of character.imageUrls.entries()) {
    //     const filename = `${character.name}_${index + 1}.png`;
    //     const response = await fetch(url);
    //     const blob = await response.blob();
    //     zip.file(`등장인물/${filename}`, blob);
    //   }
    // }

    // // 배경 이미지 파일을 ZIP에 추가
    // for (const background of backgrounds) {
    //   for (const [index, url] of background.imageUrls.entries()) {
    //     const filename = `${background.name}_${index + 1}.png`;
    //     const response = await fetch(url);
    //     const blob = await response.blob();
    //     zip.file(`배경/${filename}`, blob);
    //   }
    // }

    // // ZIP 파일 생성 및 다운로드 후 추가 코드 실행
    // zip.generateAsync({ type: "blob" }).then(function (content) {
    //   saveAs(content, "딩동.zip");
    //   setLoading(false); // 로딩 상태 비활성화
    //   updateProgress();
    //   navigateToSubdomain(studentTaskId);
    // });
    setLoading(false); // 로딩 상태 비활성화
    updateProgress();
    navigateToSubdomain(studentTaskId);
  };

  if (error) {
    return (
      <div className="sketch-result-container">
        <div className="error-message">
          무언가 문제가 생겼어요. 잠시 후에 다시 시도해주세요.
        </div>
        <button className='mt-8 cursor-pointer flex items-center justify-center w-[700px] h-[48px] bg-corporate-purple rounded-lg text-grayscale-white text-lg font-bold' onClick={handleRetry}>캐릭터 다시 만들러 가기</button>
      </div>
    );
  }

  return (
    <div className="sketch-result-container">
      {/* Characters Section */}
      <div className="characters-container">
        {characters.length > 0 && (
          <>
            {characters.map((character, index) => (
              <div key={character.id} className="character-card">
                <h3>{character.name || `캐릭터 ${index + 1}`}</h3>
                {character.imageUrls?.length > 0 ? (
                  <>
                    <img src={character.imageUrls[0]} alt={character.name || `캐릭터 ${index + 1}`} />
                    <div className="thumbnail-container">
                      {character.imageUrls.slice(1).map((url, idx) => (
                        <img key={idx} src={url} alt={`썸네일 ${idx + 1}`} className="thumbnail" />
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="placeholder">생성중</div>
                )}
                {completed ? (
                  <></>
                  // <button
                  //   className="bg-gray-500 text-white px-4 py-2 rounded mt-4 cursor-pointer font-bold"
                  //   onClick={() => regenerate(character.id, 'CHARACTER')}
                  // >
                  //   다시 만들어주세요
                  // </button>
                ) : (
                  <p>Progress: {character.progress}</p>
                )}
              </div>
            ))}
          </>
        )}
      </div>

      {/* Background Section */}
      <div className="backgrounds-container">
        {backgrounds.length > 0 && (
          <>
            {backgrounds.map((background, index) => (
              <div key={background.id} className="background-card">
                <h3>{background.name || `배경 ${index + 1}`}</h3>
                {background.imageUrls?.length > 0 ? (
                  <img src={background.imageUrls[0]} alt={background.name || `배경 ${index + 1}`} />
                ) : (
                  <div className="placeholder">생성중</div>
                )}
                {completed ? (
                  <button
                    className="bg-gray-500 text-white px-4 py-2 rounded mt-2"
                    onClick={() => regenerate(background.id, 'BACKGROUND')}
                  >
                    다시 만들어주세요
                  </button>
                ) : (
                  <p>Progress: {background.progress}</p>
                )}
              </div>
            ))}
          </>
        )}
      </div>

      {!completed && (
        <div className="loading-bar-container">
          <div className="loading-bar-text">
            선택한대로 그림이 만들어지지 않을 수 있어요
          </div>
          <div className="loading-bar"></div>
        </div>
      )}

      {completed && (
        <button
          onClick={goToNext}
          className={`mt-8 flex items-center justify-center w-[700px] h-[48px] rounded-lg text-grayscale-white text-lg font-bold ${loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-corporate-purple cursor-pointer'}`}
          disabled={loading} // 로딩 중 버튼 비활성화
        >
          {loading ? '다운로드 중...' : '다음단계'}
        </button>
      )}
    </div>
  );
};

export default SketchResult;
