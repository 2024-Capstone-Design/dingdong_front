import React, { useEffect, useState } from 'react';
import { getAccessToken } from '../api/auth';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { FAST_API_BASE_URL } from '../config';
import './SketchResult.css';

const SketchResult = () => {
  const { studentTaskId } = useParams();
  const location = useLocation();
  const fairytaleId = location.state?.fairytaleId;

  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [backgrounds, setBackgrounds] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false); // 로딩 상태 추가

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://image.ding-dong.xyz/api/v1/imagine/status/${studentTaskId}`, {
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

    fetchData();
    if (!completed) {
      const interval = setInterval(fetchData, 3000);
      return () => clearInterval(interval);
    }
  }, [completed, studentTaskId]);

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

  // const downloadImage = async () => {
  //   setLoading(true); // 다운로드 시작 시 로딩 상태 활성화
  //   try {
  //     await fetch(`${FAST_API_BASE_URL}/download/v1/images`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         student_task_id: studentTaskId,
  //         characters: characters,
  //         backgrounds: backgrounds
  //       })
  //     });
  //   } catch (error) {
  //     console.error("Failed to regenerate:", error);
  //   } finally {
  //     setLoading(false); // 다운로드 완료 시 로딩 상태 비활성화
  //   }
  // };

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
                  <img src={character.imageUrls[0]} alt={character.name || `캐릭터 ${index + 1}`} />
                ) : (
                  <div className="placeholder">생성중</div>
                )}
                {completed ? (
                  <button 
                    className="bg-gray-500 text-white px-4 py-2 rounded mt-4 cursor-pointer"
                    onClick={() => regenerate(character.id, 'CHARACTER')}
                  >
                    다시 만들어주세요
                  </button>
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

      {!completed && <div className="loading-bar"></div>}
      
      {/* 로딩 상태일 때 로딩창 표시 */}
      {loading && <div className="loading-modal">이미지를 다운로드 중입니다...</div>}

      {completed && 
        <button 
          
          className='mt-8 cursor-pointer flex items-center justify-center w-[700px] h-[48px] bg-corporate-purple rounded-lg text-grayscale-white text-lg font-bold'
        >
          다음단계
        </button>
      }
    </div>
  );
};

export default SketchResult;
