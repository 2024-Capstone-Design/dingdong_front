import React from 'react';
import { useCallback } from "react";
import { getAccessToken, getRefreshToken } from '../api/auth';
import { useParams, useNavigate } from 'react-router-dom';
import { studentTaskStore } from "../stores/StudentTaskStore";
import { CODING_SITE_URL } from '../config';
import StudentSideBar from "../components/StudentSideBar";

const progressStages = {
  NOT_STARTED: {
    description: "아무것도 시작하지 않았습니다.",
    percentage: 0,
  },
  CHAT: {
    description: "채팅이 진행 중입니다.",
    percentage: 20,
  },
  SKETCH: {
    description: "그림을 그리고 있습니다.",
    percentage: 50,
  },
  CODING: {
    description: "애니메이션 코딩을 진행 중입니다.",
    percentage: 70,
  },
  COMPLETED: {
    description: "모든 과정을 완료했습니다!",
    percentage: 100,
  },
};

const StudentTaskDetail = () => {
  const navigate = useNavigate();
  const { studentTaskId } = useParams();
  const task = studentTaskStore.getTasks().find(task => task.studentTaskId === parseInt(studentTaskId));

  if (!task) {
    return <div>해당 과제를 찾을 수 없습니다.</div>;
  }

  const { fairytaleTitle, progress, taskTitle, finishDate } = task;
  const { description, percentage } = progressStages[progress] || progressStages.NOT_STARTED;

  const onHomeClick = useCallback(() => {
    navigate("/student-classroom");
  }, [navigate]);

  const navigateToSubdomain = (studentTaskId) => {
    // State를 객체로 구성
    const state = {
      studentTaskId
    };
  
    // State를 Base64로 인코딩
    const encodedState = btoa(JSON.stringify(state));
  
    // 새 URL 구성 (서브도메인 포함)
    const newUrl = `${CODING_SITE_URL}#${encodedState}`;
  
    // 새 URL로 리다이렉트
    window.location.href = newUrl;
  };

  const onContinueClick = useCallback(() => {
    switch (progress) {
      case "NOT_STARTED":
      case "CHAT":
        navigate(`/chat-room/${studentTaskId}`);
        break;
      case "SKETCH":
        navigate(`/sketch/${studentTaskId}`);
        break;
      case "CODING":
        navigateToSubdomain(studentTaskId);
        break;
      case "COMPLETED":
        alert("모든 과정을 완료했습니다!");
        break;
      default:
        alert("잘못된 상태입니다.");
        break;
    }
  }, [navigate, progress, studentTaskId]);

  const calculateDaysRemaining = (finishDate) => {
    const today = new Date();
    const finish = new Date(finishDate);
    const differenceInTime = finish.getTime() - today.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays > 0 ? `${differenceInDays}일 남았어요` : `오늘까지 해야해요!`;
  };
  
  const daysRemaining = calculateDaysRemaining(finishDate);

  // Image assets
  const progressBg = "/progress_bg.svg";
  const mascotImage = "/progress_mascot.svg";
  const toolTipImage = "/progress_tool_tip.svg";
  const bookImage = "/progress_book.svg";
  const paintingImage = "/progress_painting.svg";
  const codingImage = "/progress_coding.svg";
  const clockImage = "/progress_clock.svg";

  return (
    <div className="w-full flex">
      <StudentSideBar />
      <div className="flex-1 flex flex-col items-start justify-start p-8 bg-purple-50">
        {/* Search bar */}
        <div className="self-stretch rounded-31xl bg-grayscale-white flex flex-row items-start justify-start pt-[13px] px-[37px] pb-[12.5px] box-border gap-[10px] max-w-full">
          <div className="h-[50px] w-[736px] relative rounded-31xl bg-grayscale-white hidden max-w-full" />
          <img
            className="h-[24.5px] w-6 relative min-h-[25px] z-[1]"
            alt=""
            src="/iconlylight-outlinesearch.svg"
          />
          <input
            className="w-72 [border:none] [outline:none] bg-[transparent] h-[22px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border font-open-sans font-semibold text-mini text-gray-100"
            placeholder="Search Courses, Documents, Activities... "
            type="text"
          />
        </div>
        
        {/* Task Title and Deadline */}
        <div className="flex items-center mt-8 mb-4">
          <h1 className="text-3xl font-bold text-gray-800 mr-4">{fairytaleTitle}</h1>
          <span className="text-lg text-gray-600">{daysRemaining}</span>
        </div>

        {/* Progress Bar Section */}
        <div className="relative w-full bg-purple-100 rounded-lg overflow-hidden mb-8">
          <img
            src={progressBg}
            alt="Progress Background"
            className="w-full h-auto object-contain"
          />

          {/* Progress Bar */}
          <div
            className="absolute bottom-9 left-5 h-3 bg-purple-300 rounded-full transition-all duration-500"
            style={{ width: '90%' }}
          />
          <div
            className="absolute bottom-9 left-5 h-3 bg-purple-500 rounded-full transition-all duration-500"
            style={{ width: percentage===0 ? `1%` :`${percentage-10}%` }}
          />

          {/* Mascot */}
          <img
            src={mascotImage}
            alt="Mascot"
            className="absolute bottom-12 h-16 transform -translate-y-1/2 transition-all duration-500"
            style={{ left: percentage===0 ? `3%` :`${percentage-10}%` , transform: 'translateX(-50%)' }}
          />

          {/* Tool Tip */}
          <div
            className="absolute bottom-2 flex items-center justify-center"
            style={{ left: percentage===0 ? `3%` :`${percentage-10}%`, transform: 'translateX(-50%)' }}
          >
            <img src={toolTipImage} alt="Tool Tip" className="h-10 w-24" />
            <span className="absolute text-sm font-bold mt-2 text-gray-800">
              {percentage}%
            </span>
          </div>
        </div>

        {/* Remaining Tasks Section */}
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">남은 할 일</h2>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white p-8 rounded-lg shadow text-center flex flex-col items-center justify-center">
            <img src={bookImage} alt="Book Icon" className="mb-2 h-16" />
            <h3 className="text-xl font-bold mb-2 mt-0">동화 만들기</h3>
            <p className="mt-0 mb-0">{progress === "NOT_STARTED" ? `${taskTitle}를 완료했어요!` : "동화 결말을 만들어 보세요."}</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow text-center flex flex-col items-center justify-center">
            <img src={paintingImage} alt="Painting Icon" className="mb-2 h-16" />
            <h3 className="text-xl font-bold mb-2 mt-0">장면 그리기</h3>
            <p className="mt-0 mb-0">{progress === "SKETCH" ? "새로 만든 동화 속 주인공을 그리고 있습니다." : "주인공을 그려보세요."}</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow text-center flex flex-col items-center justify-center">
            <img src={codingImage} alt="Coding Icon" className="mb-2 h-16" />
            <h3 className="text-xl font-bold mb-2 mt-0">애니메이션 만들기</h3>
            <p className="mt-0 mb-0">{progress === "CODING" ? "애니메이션을 코딩하고 있습니다." : "주인공을 애니메이션으로 만들어보세요."}</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow text-center flex flex-col items-center justify-center">
            <img src={clockImage} alt="Clock Icon" className="mb-2 h-16" />
            <h3 className="text-xl font-bold mb-2 mt-0">예상 학습 시간</h3>
            <p className="mt-0 mb-0">{progress === "COMPLETED" ? "모든 과정을 완료했습니다!" : "학습을 완료하기 위해 2시간이 더 필요해요."}</p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className='flex w-full justify-end gap-4 mt-8'>
          <button 
            onClick={onHomeClick} 
            className="cursor-pointer w-[160px] h-[48px] py-2.5 px-4 bg-white rounded-lg flex items-center text-center justify-center border-2 border-solid border-[#9a4ef2] hover:bg-[#f0e8ff] transition">
            <b className="text-lg font-bold text-[#9a4ef2]">
              목록으로 이동
            </b>
          </button>

          <button 
            onClick={onContinueClick} 
            className="cursor-pointer w-[160px] h-[48px] py-2.5 px-4 bg-[#9a4ef2] rounded-lg flex items-center text-center justify-center hover:bg-[#813ee0] transition">
            <b className="text-lg font-bold text-white">
              이어서 하기
            </b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentTaskDetail;
