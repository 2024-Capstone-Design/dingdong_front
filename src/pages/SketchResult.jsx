// src/pages/SketchResult.jsx
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './SketchResult.css';

const SketchResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const sketchUrl = location.state?.sketchUrl;
  const [characters, setCharacters] = useState({});
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/mj/task/studentTaskId/50');
        const data = await response.json();
        setCharacters(data.characters);
        setCompleted(data.completed);

        // Check for any character with status failed
        const hasError = Object.values(data.characters).some(
          (character) => character.status === 'failed'
        );
        if (hasError) {
          setError(true);
          setCompleted(true); // Stop fetching data if there's an error
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
  }, [completed]);

  const handleRetry = () => {
    navigate('/sketch');
  };

  if (error) {
    return (
      <div className="sketch-result-container">
        <div className="error-message">
          적합하지 않은 그림이에요. 다시 그려주세요.
        </div>
        <button onClick={handleRetry}>이전으로 돌아가기</button>
      </div>
    );
  }

  return (
    <div className="sketch-result-container">
      <div className="sketch-result-header">
        {sketchUrl && <img src={sketchUrl} alt="Sketch" />}
      </div>
      <div className="characters-container">
        {Object.keys(characters).map((key) => {
          const character = characters[key];
          return (
            <div key={key} className="character-card">
              <h3>{key}</h3>
              {character.image_url ? (
                <img src={character.image_url} alt={key} />
              ) : (
                <div className="placeholder">생성중</div>
              )}
              <p>Progress: {character.progress}</p>
            </div>
          );
        })}
      </div>
      {!completed && <div className="loading-bar"></div>}
      {completed && <p>Completed</p>}
    </div>
  );
};

export default SketchResult;
