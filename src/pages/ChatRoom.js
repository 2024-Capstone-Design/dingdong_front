import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import LeftBar from "../components/LeftBar";
import { FAST_API_BASE_URL } from '../config';
import { studentTaskStore } from "../stores/StudentTaskStore";
import { userStore } from "../stores/UserStore";
import './ChatRoom.css';
import { api } from "../api/index";

const ChatRoom = () => {
  const user = userStore.getUser();

  const { studentTaskId } = useParams();  // useParams를 사용해 studentTaskId를 가져옴
  var task = studentTaskStore.getTasks().find(task => task.id === parseInt(studentTaskId));

  const [chatroomId, setChatroomId] = useState(null);  // chatroomId를 상태로 관리
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false);  // 로딩 상태 관리
  const [isFinished, setIsFinished] = useState(true);
  const [words, setWords] = useState([]);
  const [filteredWords, setFilteredWords] = useState([]); // 자동완성 추천 단어 목록
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();
  const inputRef = useRef(null);

  const Autocomplete = ({ suggestions, onSuggestionClick }) => {
    return (
      <div className="flex flex-wrap gap-2 mb-2">
        {suggestions.map((word, index) => (
          <span key={index} className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full font-bold text-xl cursor-pointer"
          onClick={() => onSuggestionClick(word)}>
            {word}
          </span>
        ))}
      </div>
      );
    };

  // Handle suggestion click
  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSuggestionClick = (suggestion) => {
    const inputWords = newMessage.split(' ');
    const lastWordIndex = inputWords.length - 1;
    const lastWord = inputWords[lastWordIndex];
    const lastWordStart = newMessage.lastIndexOf(lastWord);
    
    const updatedMessage = newMessage.slice(0, lastWordStart) + suggestion;
    setNewMessage(updatedMessage);
    setFilteredWords([]);
  
    // 커서 위치 설정을 위해 setTimeout 사용
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
        inputRef.current.setSelectionRange(updatedMessage.length, updatedMessage.length);
      }
    }, 0);
  };
  
  // 추천단어 코드
  useEffect(() => {
    // 입력값이 변경될 때마다 필터링된 단어 목록 업데이트
    const updateFilteredWords = () => {
      const inputWords = newMessage.split(' ');
      const lastWord = inputWords[inputWords.length - 1].toLowerCase();
      
      if(lastWord.length > 0){
        const filtered = words.filter(word => 
          word.toLowerCase().includes(lastWord) && word.toLowerCase() != lastWord
        );
        setFilteredWords(filtered);
      }
      if(newMessage.length == 0){
        setFilteredWords([]);
      }
    };

    updateFilteredWords();
  }, [newMessage, words]);

  useEffect(() => {
    if (!task) {
      return;
    }

    const fetchChatroomId = async () => {
      try {
        setLoading(true);  // 로딩 시작
        const response = await axios.get(`${FAST_API_BASE_URL}/chat/v1/room/${studentTaskId}`);
        setChatroomId(response.data.chatroomId);  // 가져온 chatroomId를 상태에 저장
      } catch (error) {
        console.error("Failed to fetch chatroomId:", error);
      } finally {
        setLoading(false);  // 로딩 종료
      }
    };

    fetchChatroomId();
  }, [studentTaskId, task]);

  // useEffect(() => {
  //   if (task && (task.progress === "NOT_STARTED" || task.progress === "CHAT")) {
  //     setIsFinished(false);
  //   } else {
  //     setIsFinished(true);
  //   }
  // }, [task]);

  useEffect(() => {
    if (isFinished) {
      inputRef.current.disabled = true;
    }
  }, [isFinished]);

  useEffect(() => {
    if (!chatroomId) return;

    const fetchMessages = async () => {
      try {
        setLoading(true);  // 로딩 시작
        setMessages([]);
        const response = await axios.get(`${FAST_API_BASE_URL}/chat/v1/chatroom/${chatroomId}`);
        setWords(response.data.words);
        const chat = response.data.chat;

        if (chat.length > 0) {
          const transformedMessages = chat.map(element => {
            const sender = Object.keys(element)[0] === "BOT" ? "bot" : "user";
            return { sender, text: element[Object.keys(element)[0]] };
          });
          setMessages(transformedMessages);
        } else {
          try {
            // setLoading(true);  // 로딩 시작
            // setMessages((prevMessages) => [...prevMessages, { sender: "bot", text: <StartLoadingDots /> }]);
            // const response = await axios.post(`${FAST_API_BASE_URL}/chat/v1/gpt`, {
            //   is_first: true,
            //   fairy_id: task.fairytaleId,
            //   chat_room_id: chatroomId,
            //   user_msg: '',
            //   q_type: task.questionType,
            // });
            // setMessages((prevMessages) => {
            //   const updatedMessages = [...prevMessages];
            //   updatedMessages[updatedMessages.length - 1] = { sender: "bot", text: response.data.question };
            //   setWords(response.data.words);
            //   return updatedMessages;
            // });
          } catch (error) {
            console.error("Failed to fetch messages:", error);
          } finally {
            setLoading(false);  // 로딩 종료
          }
        }
      } catch (error) {
        console.error("Failed to fetch messages:", error);
      } finally {
        setLoading(false);  // 로딩 종료
        // if(task.progress == "NOT_STARTED"){
        //   const progressUpdateResponse = await api.updateStudentTaskProgress(studentTaskId, {"progress":'CHAT'});
    
        //   if (progressUpdateResponse.status === 200) {
        //     await api.getStudentTasks(user.student.id);
        //     task = studentTaskStore.getTasks().find(task => task.studentTaskId === parseInt(studentTaskId));
        //   } else {
        //     alert(`Progress 업데이트에 실패했습니다. (error: ${progressUpdateResponse.status})`);
        //   }
        // }
      }
    };

    fetchMessages();
  }, [chatroomId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    // if (!loading && chatroomId) {
    //   console.log("message", newMessage.trim().length);
    //   if (newMessage.trim().length > 3) {
    //     try {
    //       setMessages((prevMessages) => [...prevMessages, { sender: "user", text: newMessage }]);
    //       setNewMessage("");
    //       setLoading(true);  // 로딩 시작
    //       setMessages((prevMessages) => [...prevMessages, { sender: "bot", text: <LoadingDots /> }]);

    //       const response = await axios.post(`${FAST_API_BASE_URL}/chat/v1/gpt`, {
    //         is_first: false,
    //         fairy_id: task.fairytaleId,
    //         chat_room_id: chatroomId,
    //         user_msg: newMessage,
    //         q_type: task.questionType,
    //       });

    //       setMessages((prevMessages) => {
    //         const updatedMessages = [...prevMessages];
    //         updatedMessages[updatedMessages.length - 1] = { sender: "bot", text: response.data.question };
    //         setWords(response.data.words);
    //         return updatedMessages;
    //       });
    //     } catch (error) {
    //       console.error("Failed to send message:", error);
    //       alert("잠시 후에 다시 시도해주세요");
    //     } finally {
    //       setLoading(false);  // 로딩 종료
    //     }
    //   } else {
    //     alert("메시지를 세글자보다 길게 입력해주세요");
    //   }
    // }
  };

  const finishChat = async () => {
    if (messages.length >= 10 || isFinished) {
      if (!loading && chatroomId) {
        if (isFinished) {
          navigate(`/sketch-result/${studentTaskId}`);
          return;
        }
        // 테스트용
        // if (isFinished && (task.progress == 'SKETCH_END' || task.progress == 'CODING' || task.progress == 'COMPLETED')) {
        //   navigate(`/sketch-result/${studentTaskId}`);
        //   return;
        // } else if (isFinished) {
        //   navigate(`/sketch/${studentTaskId}`);
        //   return;
        // }
        // try {
        //   setLoading(true);  // 로딩 시작
        //   setMessages((prevMessages) => [...prevMessages, { sender: "bot", text: <FinishLoadingDots /> }]);
          
        //   const response = await axios.post(`${FAST_API_BASE_URL}/chat/v1/gpt/summary`, {
        //     fairy_id: task.fairytaleId,
        //     chat_room_id: chatroomId,
        //     q_type: task.questionType,
        //   });
    
        //   const progressUpdateResponse = await api.updateStudentTaskProgress(studentTaskId, {"progress":'SKETCH'});
    
        //   if (progressUpdateResponse.status === 200) {
        //     await api.getStudentTasks(user.student.id);
        //     task = studentTaskStore.getTasks().find(task => task.studentTaskId === parseInt(studentTaskId));
        //   } else {
        //     alert(`Progress 업데이트에 실패했습니다. (error: ${progressUpdateResponse.status})`);
        //   }
    
        //   await axios.post(`${FAST_API_BASE_URL}/chat/v1/gpt/coding`, {
        //     fairy_id: task.fairytaleId,
        //     chat_room_id: chatroomId,
        //     q_type: task.questionType,
        //   });
  
        //   setMessages((prevMessages) => {
        //     const updatedMessages = [...prevMessages];
        //     updatedMessages[updatedMessages.length - 1] = { sender: "bot", text: response.data.summary };
        //     return updatedMessages;
        //   });
        // } catch (error) {
        //   console.error("Failed to send message:", error);
        // } finally {
        //   setLoading(false);  // 로딩 종료
        // }
      }
    } else {
      alert('다섯 번보다 많이 대화를 나눠야해요');
    }
    
  };
  

  return (
    <div className="w-full flex bg-ghostwhite h-screen">
      <LeftBar 
        finishChat={finishChat} 
        fairytaleId={task.id > 100 ? 2 : 11} 
        messagesLength={messages.length} 
        isFinished={isFinished} 
      />
      <main className="flex-1 flex flex-col p-5">
        <section className="flex-1 flex flex-col border border-gray-300 rounded-lg bg-white p-5 h-full">
          <div className="flex-1 overflow-y-auto p-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex mb-8 ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              {message.sender !== 'user' && (
                <img
                  className="h-10 w-10 rounded-full mr-2 object-cover"
                  alt="프로필 이미지"
                  src="/character-de1111a819-1@2x.png"
                />
              )}
              <div className={`max-w-70% p-4 z-[2] text-xl ${
                message.sender === 'user' 
                  ? 'bg-purple-200 text-black rounded-tr-none rounded-tl-2xl rounded-br-2xl rounded-bl-2xl' 
                  : 'bg-whitesmoke-100 text-black rounded-tl-none rounded-bl-2xl rounded-tr-2xl rounded-br-2xl'
              }`} style={{ whiteSpace: 'pre-line' }}>
                {message.text}
              </div>
            </div>
          ))}

            <div ref={messagesEndRef} />
          </div>
          <div className="relative flex items-center border-t border-gray-300 p-4 w-full">
            <div className='relative w-full'>
            <Autocomplete 
              suggestions={filteredWords} 
              onSuggestionClick={handleSuggestionClick}
            />
              <textarea
                ref={inputRef}
                value={newMessage}
                onChange={handleInputChange}
                className="text-xl mt-2 w-full border border-gray-300 rounded-lg p-3 resize-none shadow focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder={isFinished ? "대화가 완료되었습니다" : "메시지를 입력해주세요"}
                rows={2}
              />
              

            </div>
            
            <button
              onClick={handleSendMessage}
              className={`ml-10 font-bold w-[80px] text-lg text-white rounded-lg p-3 shadow ${loading || isFinished ? 'bg-stone-300' : 'bg-purple-500 hover:bg-purple-600' }`}
              disabled={loading || isFinished}  // 로딩 중일 때 버튼 비활성화
            >
              보내기
            </button>
          </div>

          
        </section>
      </main>
    </div>
  );
};

const LoadingDots = () => (
  <div className="loading-dots">
    <span>생각하는 중</span>
    <span>.</span>
    <span>.</span>
    <span>.</span>
  </div>
);

const StartLoadingDots = () => (
  <div className="loading-dots">
    <span>책 읽는 중</span>
    <span>.</span>
    <span>.</span>
    <span>.</span>
  </div>
);

const FinishLoadingDots = () => (
  <div className="loading-dots">
    <span>정리하는 중</span>
    <span>.</span>
    <span>.</span>
    <span>.</span>
  </div>
);

export default ChatRoom;
