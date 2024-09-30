import React, { useState, useEffect } from "react";
import { getAccessToken } from '../api/auth';
import { useNavigate, useParams } from "react-router-dom";
import { FAST_API_BASE_URL } from "../config";
import { api } from "../api/index";

const Sketch = () => {
  const { studentTaskId } = useParams();
  const [script, setScript] = useState([]);
  const [charac, setCharac] = useState([]);
  const [mainRoleName, setMainRoleName] = useState("");
  const [styleOptions, setStyleOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState({});
  const navigate = useNavigate();
  const [fairytaleId, setFairytaleId] = useState("");

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch(`${FAST_API_BASE_URL}/chat/v1/script/${studentTaskId}`);
        const scriptData = await response.json();
        setScript(scriptData.coding);

        for (const [key, item] of Object.entries(scriptData.coding)) {
          if (key !== 'created_at' && key !== 'id') {
            const mainRole = item[1]['인물'][0]['이름'];
            if (mainRole) {
              setMainRoleName(mainRole);
              break;
            }
          }
        }
      } catch (error) {
        console.error("Failed to fetch messages:", error);
      }
    };

    const fetchOptions = async () => {
      try {
        const response = await fetch("https://image.ding-dong.xyz/api/v1/styles", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${getAccessToken()}`,
          },
        });
        const options = await response.json();
        setStyleOptions(options);
      } catch (error) {
        console.error("Failed to fetch options:", error);
      }
    };

      fetchMessages();
      fetchOptions();
    }, [studentTaskId]);

    useEffect(() => {
      if(script.length > 0){
        setFairytaleId(script[0]['fairytaleId']);

        const peopleList = [];

        Object.keys(script).forEach((key) => {
          const item = script[key];
          if (key === 'created_at' || key === 'id') return;
          
          // '1', '2', '3', '4'의 키를 모두 처리
          ['1', '2', '3', '4'].forEach((num) => {
            if (item[num] && item[num]['인물']) {
              item[num]['인물'].forEach((person, index) => {
                const personData = {
                  name: person['이름'],
                  main: index === 0,
                  prompt: person['프롬프트'],
                };

                // 중복된 이름이 있는지 확인하고 없을 경우에만 추가
                if (!peopleList.some(p => p.name === personData.name)) {
                  peopleList.push(personData);
                }
              });
            }
          });

          setCharac(peopleList);
        });
      }
    }, [script])

    const handleOptionChange = (categoryId, optionId) => {
      setSelectedOptions(prev => ({...prev, [categoryId]: optionId}));
      
    };

    var item = null;

    const submitDrawing = async () => {
      // 선택되지 않은 카테고리 확인
      const unselectedCategories = styleOptions
        .filter(category => !selectedOptions[category.id])  // 선택되지 않은 옵션
        .map(category => category.name);  // 선택되지 않은 카테고리 이름

      if (unselectedCategories.length > 0) {
        // 선택되지 않은 카테고리가 있으면 경고 메시지 표시
        alert(`다음 항목을 선택해주세요: ${unselectedCategories.join(', ')}`);
        return; // 서버 요청을 보내지 않음
      }

      const optionIds = styleOptions.map(category => selectedOptions[category.id]);

      try {
        
        const response = await fetch("https://image.ding-dong.xyz/api/v1/imagine/generate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${getAccessToken()}`,
          },
          body: JSON.stringify({
            studentTaskId: studentTaskId,
            characters: charac,
            backgrounds: script[0]['1']['배경'],
            optionIds: optionIds,
            fairytaleId: fairytaleId
          }),
        });

          if (response.ok) {
            navigate(`/sketch-result/${studentTaskId}`, { state: { fairytaleId } });
          } else {
            throw new Error(`An error has occurred: ${response.status}`);
          }
        } catch (error) {
          console.error("Failed to submit drawing:", error);
        }
    };


  return (
    <div className="bg-ghostwhite-200 min-h-screen w-full p-8">
      <h1 className="text-4xl font-bold text-center text-stone-800 mb-4 mt-8">캐릭터 만들기</h1>
      <h3 className="text-2xl font-semibold text-center text-purple-600 mb-12">{mainRoleName}의 모습을 선택해주세요!</h3>
      
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-7xl mx-auto">
        {styleOptions.map((category) => (
          <div key={category.id} className="mb-12">
            <h2 className="text-xl font-bold text-purple-600 mb-6">{category.name}</h2>
            <div className="grid grid-cols-3 gap-4">
              {category.options.map((option) => (
                <label key={option.id} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    className="form-radio text-purple-600"
                    name={category.name}
                    value={option.id}
                    checked={selectedOptions[category.id] === option.id}
                    onChange={() => handleOptionChange(category.id, option.id)}
                  />
                  <span className="text-lg text-gray-700">{option.name}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
        
        <button 
          onClick={submitDrawing} 
          className="w-full mb-4 bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-4 rounded-full text-xl transition duration-300 ease-in-out cursor-pointer"
        >
          캐릭터 만들기 완료!
        </button>
      </div>
    </div>
  );
};

export default Sketch;