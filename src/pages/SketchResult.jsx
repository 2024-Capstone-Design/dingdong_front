// src/pages/SketchResult.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './SketchResult.css';

const SketchResult = () => {
  const location = useLocation();
  const sketchUrl = location.state?.sketchUrl;
  const [characters, setCharacters] = useState({});
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/mj/task/studentTaskId/50');
        const data = await response.json();
        setCharacters(data.characters);
        setCompleted(data.completed);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 3000);

    return () => clearInterval(interval);
  }, []);

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
