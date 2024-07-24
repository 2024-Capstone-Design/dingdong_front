import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅을 import
import LeftBar from "../components/LeftBar";
import { API_BASE_URL, FAST_API_BASE_URL } from '../config';
import './ChatRoom.css'; // CSS 파일을 import

const ChatRoom = ({ chatroomId }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false); // 로딩 상태 추가
  const [isFinished, setIsFinished] = useState(false); // 채팅 완료 여부 상태 추가
  const messagesEndRef = useRef(null);
  const navigate = useNavigate(); // useNavigate 훅 사용

  var chatid = '66a0b8ffad6cbd25943e0747';
  var fairyId = 4;

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        setMessages([]);
        const response = await axios.get(`${API_BASE_URL}/v1/chatroom/${chatid}`);
        const chat = response.data.chat;

        if (chat.length > 0) {
          const transformedMessages = chat.map(element => {
            const sender = Object.keys(element)[0] === "BOT" ? "bot" : "user";
            return { sender, text: element[Object.keys(element)[0]] };
          });
          setMessages(transformedMessages);
        } else {
          try {
            setLoading(true); // 로딩 상태 설정
            setMessages((prevMessages) => [...prevMessages, { sender: "bot", text: <StartLoadingDots /> }]); // 로딩 메시지 추가
            const response = await axios.post(`${FAST_API_BASE_URL}/v1/gpt`, {
              is_first: true,
              fairy_id: fairyId,
              chat_room_id: chatid,
              user_msg: '',
              q_type: "주인공 성격바꾸기",
            });
            // 로딩 메시지를 실제 응답으로 교체
            setMessages((prevMessages) => {
              const updatedMessages = [...prevMessages];
              updatedMessages[updatedMessages.length - 1] = { sender: "bot", text: response.data.question };
              return updatedMessages;
            });
          } catch (error) {
            console.error("Failed to fetch messages:", error);
          } finally {
            setLoading(false);
          }
        }
      } catch (error) {
        console.error("Failed to fetch messages:", error);
      }
    };
    fetchMessages();
  }, [chatroomId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if(!loading){
      if (newMessage.trim()) {
        try {
          setMessages((prevMessages) => [...prevMessages, { sender: "user", text: newMessage }]);
          setNewMessage("");
          setLoading(true); // 로딩 상태 설정
          setMessages((prevMessages) => [...prevMessages, { sender: "bot", text: <LoadingDots /> }]); // 로딩 메시지 추가
  
          const response = await axios.post(`${FAST_API_BASE_URL}/v1/gpt`, {
            is_first: false,
            fairy_id: fairyId,
            chat_room_id: chatid,
            user_msg: newMessage,
            q_type: "주인공 성격바꾸기",
          });
  
          // 로딩 메시지를 실제 응답으로 교체
          setMessages((prevMessages) => {
            const updatedMessages = [...prevMessages];
            updatedMessages[updatedMessages.length - 1] = { sender: "bot", text: response.data.question };
            return updatedMessages;
          });
        } catch (error) {
          console.error("Failed to send message:", error);
          alert("잠시 후에 다시 시도해주세요");
        } finally {
          setLoading(false); // 로딩 상태 해제
        }
      } else {
        console.log("Message is empty. Please enter a message.");
        alert("메시지를 입력해주세요");
      }
    }
  };

  const finishChat = async () => {
    if(!loading){
      if (isFinished) {
        navigate('/scatch'); // 이미 완료된 상태라면 '/scatch'로 이동
        return;
      }
      try {
        setLoading(true); // 로딩 상태 설정
        setMessages((prevMessages) => [...prevMessages, { sender: "bot", text: <FinishLoadingDots /> }]); // 로딩 메시지 추가
        const response = await axios.post(`${FAST_API_BASE_URL}/v1/gpt/summary`, {
          fairy_id: fairyId,
          chat_room_id: chatid,
          q_type: "주인공 성격바꾸기",
        });
  
        setMessages((prevMessages) => {
          const updatedMessages = [...prevMessages];
          updatedMessages[updatedMessages.length - 1] = { sender: "bot", text: response.data.summary };
          return updatedMessages;
        });
  
        const script = await axios.post(`${FAST_API_BASE_URL}/v1/gpt/coding`, {
          fairy_id: fairyId,
          chat_room_id: chatid,
          q_type: "주인공 성격바꾸기",
        });
  
        setIsFinished(true); // 채팅 완료 상태 설정
      } catch (error) {
        console.error("Failed to send message:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="w-full flex bg-ghostwhite h-screen">
      <LeftBar finishChat={finishChat} />
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
                }`}>
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="flex items-center border-t border-gray-300 p-4">
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="text-xl flex-1 border border-gray-300 rounded-lg p-3 mr-4 resize-none shadow focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="메시지를 입력하세요..."
              rows={2}
            />
            <button
              onClick={handleSendMessage}
              className="font-bold text-lg bg-purple-500 text-white rounded-lg p-3 shadow hover:bg-purple-600"
              disabled={loading} // 로딩 중일 때 버튼 비활성화
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
