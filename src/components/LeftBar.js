import React, { useState, useEffect } from 'react';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { api } from "../api/index";

const LeftBar = ({ className = "", finishChat, fairytaleId, messagesLength, isFinished }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');  // 초기값을 빈 문자열로 설정
  const [desc, setDesc] = useState('');

  console.log("isfinished", isFinished);
  // API 호출
  useEffect(() => {
    const fetchFairytale = async () => {
      try {
        // console.log("fairyId", fairytaleId);
        const response = await api.getFairytaleById(fairytaleId);
        if (response.ok) {
          const result = await response.json();
          // console.log("fairyId", result);
          setTitle(result.data.title);  // 제목 설정
          setDesc(result.data.content); // 설명 설정
        } else {
          // console.error("Failed to fetch fairytale data");
        }
      } catch (error) {
        // console.error("Error fetching fairytale data:", error);
      }
    };

    fetchFairytale();
  }, [fairytaleId]);

  const onQuitClick = useCallback(() => {
    navigate("/student-main");
  }, [navigate]);

  return (
    <div
      className={`w-[279px] rounded-tl-none rounded-tr-11xl rounded-br-11xl rounded-bl-none bg-grayscale-white flex flex-col items-start justify-start pt-[51px] pb-[69px] pr-5 pl-7 box-border gap-[60.1px] z-[1] text-left text-3xl-7 text-mediumslateblue-100 font-ubuntu mq450:gap-[55px] mq450:pt-[21px] mq450:pb-[29px] mq450:box-border mq1125:pt-[33px] mq1125:pb-[45px] mq1125:box-border ${className}`}
    >
      <div className="w-[279px] h-[1024px] relative rounded-tl-none rounded-tr-11xl rounded-br-11xl rounded-bl-none bg-grayscale-white hidden" />
      <div className="flex flex-row items-start justify-start py-0 px-[31px]">
        <div className="flex flex-row items-start justify-start gap-[3.7px]">
          <img
            className="h-[34.9px] w-[22.1px] relative z-[1]"
            loading="lazy"
            alt=""
            src="/group-1.svg"
          />
          <div className="flex flex-col items-start justify-start pt-[5.1px] px-0 pb-0">
            <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[56.9px] z-[1] mq450:text-lg">
              Logo
            </a>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[60px] gap-[78px] text-13xl text-black font-base-body mq800:pb-[55px] mq800:box-border">
        <h2 className="m-0 w-[223px] relative text-inherit font-semibold font-inherit flex items-center z-[2] mq450:text-lgi mq800:text-7xl">
          <span className="w-full">
            <p className="m-0">{`${title}`}</p>
            <p className="m-0">다시 만들기</p>
          </span>
        </h2>
        <div className="self-stretch flex flex-col items-start justify-start gap-[13px] text-center text-xl font-pretendard">
          <div className="flex flex-row items-start justify-start py-0 px-2.5">
            <div className="relative font-medium z-[2] mq450:text-base">
              원래 동화 내용 보기
            </div>
          </div>
          <div className="self-stretch h-[250px] relative z-[2] text-left text-sm text-light-secondary font-base-body overflow-y-auto">
            <div className="absolute h-[98%] w-full top-[0%] right-[0%] bottom-[2%] left-[0%] bg-grayscale-white" />
            <div className="absolute top-[14px] left-[16px] leading-[22px] inline-block min-w-[104px] z-[1]">
              {desc}
            </div>
            <div className="absolute h-[2%] w-full top-[98%] right-[0%] bottom-[0%] left-[0%] bg-whitesmoke-300 box-border hidden border-[1px] border-solid border-whitesmoke-300" />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[13px] pl-[5px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
          <button onClick={onQuitClick} className="cursor-pointer py-2.5 px-16 bg-grayscale-white self-stretch rounded-lg flex flex-row items-start justify-start gap-[8px] z-[1] border-[1px] border-solid border-corporate-purple">
            <b className="w-[83px] relative text-lg leading-[24px] font-bold font-base-body text-corporate-purple text-center inline-block min-w-[83px]">
              그만할래요
            </b>
          </button>
          <button onClick={finishChat} className={`cursor-pointer [border:none] py-3 px-[73px] ${messagesLength >= 10 ? 'bg-corporate-purple' : 'bg-stone-300'} border-[1px] border-solid border-corporate-purple self-stretch rounded-lg flex flex-row items-start justify-start gap-[8px] z-[1]`}>
            <b className="w-[67px] relative text-lg leading-[24px] font-bold font-base-body text-grayscale-white text-center inline-block min-w-[67px]">
              {isFinished ? "다음단계" : "다했어요"}
            </b>
          </button>
        </div>
      </div>
    </div>
  );
};

LeftBar.propTypes = {
  className: PropTypes.string,
  finishChat: PropTypes.func.isRequired,
  fairytaleId: PropTypes.number.isRequired, // fairytaleId prop의 타입 정의
  isFinished: PropTypes.bool.isRequired,
  messagesLength: PropTypes.number.isRequired,
};

export default LeftBar;
