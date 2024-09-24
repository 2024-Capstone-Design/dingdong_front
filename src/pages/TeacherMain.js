import React, { useEffect, useCallback } from "react";
import { getAccessToken } from '../api/auth';
import TeacherSideBar from "../components/TeacherSideBar";
import { userStore } from "../stores/UserStore";
import { teacherTaskStore } from "../stores/TeacherTaskStore";
import { observer } from 'mobx-react-lite';
import { api } from "../api/index";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CustomCalendar.css'; // Import custom CSS

const colors = {
  green: 'bg-green-500',
  red: 'bg-red-500',
};

const getColorForDueDate = (finishDate) => {
  const now = new Date();
  const dueDate = new Date(finishDate);
  const timeDiff = dueDate - now;
  const daysDiff = timeDiff / (1000 * 60 * 60 * 24);

  if (daysDiff > 7) {
    return colors.green;
  } else {
    return colors.red;
  }
};

const TaskItem = ({ task }) => {
  const dueDateColor = getColorForDueDate(task.finishDate);

  return (
    <div className="self-stretch rounded-xl h-[100px] bg-ghostwhite-200 flex flex-row items-start justify-start py-[21px] pr-3.5 pl-4 gap-[7px] z-[1]">
      <div className="w-[50px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
        <div className="self-stretch h-[50px] relative">
          <div className={`absolute top-[0px] left-[0px] rounded-[50%] ${dueDateColor} w-full h-full z-[1]`} />
          <b className="absolute top-[8px] left-[18px] font-bold inline-block min-w-[15px] z-[2] mq450:text-xl">
            {new Date(task.finishDate).getDate()}
          </b>
        </div>
      </div>
      <div className="flex-1 flex flex-col pl-2 items-start justify-start gap-[4px] text-left text-3xs text-gray-100">
        <b className="relative text-mini font-bold text-light-primary inline-block min-w-[56px] z-[1]">{task.fairytaleTitle}</b>
        <div className="self-stretch flex flex-row items-start justify-start gap-[14px]">
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <b className="relative inline-block min-w-[86px] z-[1]">
              {`${new Date(task.startDate).toLocaleDateString()} - ${new Date(task.finishDate).toLocaleDateString()}`}
            </b>
          </div>
        </div>
        <b className="relative z-[1]">{task.taskSummary}</b>
      </div>
    </div>
  );
};

const TaskList = ({ tasks }) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[25px] text-center text-xl">
      <div className="w-[310px] flex flex-row items-start justify-start py-0 px-3 box-border">
        <div className="flex-1 flex flex-row items-end justify-between gap-[20px]">
          <b className="relative font-bold inline-block min-w-[98px] z-[1] mq450:text-base">해야할 숙제</b>
          <div className="w-9 flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border text-[13px] text-mediumslateblue-100">
            <b className="self-stretch relative font-bold inline-block min-w-[36px] z-[1]">더보기</b>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-end justify-start gap-[13px] text-6xl text-grayscale-white">
        <div className="flex-1 flex flex-col items-start justify-start gap-[10px] overflow-scroll max-w-[320px] max-h-[410px]">
          {tasks.map((task) => (
            <TaskItem key={task.taskId} task={task} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Frame4 = observer(() => {
  const user = userStore.getUser();
  const tasks = teacherTaskStore.getTasks();
  
  var username = "";

  if (user != null || user == '') {
    username = user.teacher.name;
  }

  useEffect(() => {
    if (!user && getAccessToken()) {
      api.getCurrentUser();
    }

    if (tasks.length === 0 && getAccessToken()) {
      api.getTeacherTasks(user.teacher.id);
    }
  }, [user, tasks]);

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const taskDates = tasks.map(task => new Date(task.finishDate).toLocaleDateString());
      if (taskDates.includes(date.toLocaleDateString())) {
        return <div className="dot"></div>;
      }
    }
    return null;
  };

  return (
    <div className="w-full relative bg-ghostwhite-200 overflow-hidden flex flex-row flex-wrap items-start justify-start gap-[22px] leading-[normal] tracking-[normal] text-center text-base-5 text-light-secondary1 font-inter">
      <TeacherSideBar />
      <div className="flex-1 flex flex-col items-start justify-start pt-[43px] pb-0 pr-[5px] pl-0 box-border min-w-[482px] max-w-full text-xl text-black font-base-body mq450:pt-5 mq450:box-border mq800:min-w-full mq1125:pt-7 mq1125:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[48px] max-w-full mq1125:gap-[24px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full text-left text-13xl text-grayscale-white font-open-sans">
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
            <div className="self-stretch rounded-xl [background:linear-gradient(90deg,_#ab72ff,_#7048a9)] flex flex-row items-start justify-between pt-[39px] pb-1 pr-[17px] pl-10 box-border relative max-w-full gap-[20px] mq800:flex-wrap">
              <div className="h-[175px] w-[736px] relative rounded-xl [background:linear-gradient(90deg,_#ab72ff,_#7048a9)] hidden max-w-full z-[0]" />
              <img
                className="h-[212px] w-[291px] relative object-cover hidden z-[1]"
                alt=""
                src="/cool-kids-avatar@2x.png"
              />
              <div className="w-[362px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[362px] max-w-full mq450:min-w-full mq800:flex-1">
                <div className="self-stretch flex flex-col items-start justify-start gap-[1px] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[2px] max-w-full mq450:flex-wrap">
                    <h1 className="m-0 h-[53px] flex-1 relative text-inherit tracking-[-0.03em] font-bold font-inherit inline-block min-w-[209px] max-w-full z-[1] mq450:text-lgi mq1125:text-7xl">
                      안녕하세요! {username} 선생님
                    </h1>
                    <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                      <img
                        className="w-[38px] h-[38px] relative object-cover z-[1]"
                        loading="lazy"
                        alt=""
                        src="/image-296@2x.png"
                      />
                    </div>
                  </div>
                  <h3 className="m-0 relative text-mini tracking-[0.02em] leading-[175.68%] font-normal font-inherit inline-block max-w-full z-[1]">
                    <p className="m-0">학생들이 주어진 목표 학습량의 00%를 완료했어요!</p>
                    <p className="m-0">아래에서 학생들의 성취도를 확인해보세요 :)</p>
                  </h3>
                </div>
              </div>
              <img
                className="h-[132px] w-[131px] relative object-contain z-[2] mq800:flex-1"
                loading="lazy"
                alt=""
                src="/backpack@2x.png"
              />
              <img
                className="h-[224.8px] w-[224.8px] absolute !m-[0] top-[-29px] right-[89.2px] object-contain z-[3]"
                alt=""
                src="/scholarcap-scroll@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[385px] rounded-tl-11xl rounded-tr-none rounded-br-none rounded-bl-11xl bg-grayscale-white flex flex-col items-start justify-start pt-[43px] pb-[22px] pr-[22px] pl-8 box-border gap-[61.1px] max-w-full text-left text-mini text-light-primary font-open-sans mq450:gap-[31px] mq450:pt-5 mq450:box-border mq1125:pt-7 mq1125:pb-5 mq1125:box-border">
        <div className="w-[385px] h-[1024px] relative rounded-tl-11xl rounded-tr-none rounded-br-none rounded-bl-11xl bg-grayscale-white hidden max-w-full" />
        <div className="w-[304px] flex flex-col items-end justify-start gap-[43px] mq450:gap-[21px]">
          <div className="w-[182px] rounded-3xs bg-ghostwhite-200 flex flex-row items-end justify-between pt-[4.9px] pb-[4.8px] pr-3 pl-[13px] box-border gap-[20px] z-[1]">
            <div className="h-[50px] w-[182px] relative rounded-3xs bg-ghostwhite-200 hidden" />
            <div className="flex flex-row items-start justify-start gap-[10px]">
              <div className="h-[40.3px] w-[47px] relative">
                <div className="absolute top-[0px] left-[2.9px] rounded-[9.59px] bg-mediumslateblue-100 w-[42.2px] h-[40.3px] z-[1]" />
                <img
                  className="absolute top-[0px] left-[0px] rounded-[9.59px] w-full h-full object-cover z-[2]"
                  alt=""
                  src="/allura-avatar@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-[12.1px] px-0 pb-0">
                <a className="[text-decoration:none] relative tracking-[-0.03em] font-semibold text-[inherit] inline-block min-w-[55px] z-[1]">
                  Teacher
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[12.2px]">
              <img
                className="w-3 h-3 relative object-contain z-[1]"
                alt=""
                src="/icon--chevron-left@2x.png"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start gap-[28px] text-xl">
            <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[5px] pl-0">
              <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                <b className="h-5 w-[122px] relative font-bold flex items-center shrink-0 z-[1] mq450:text-base">
                  나의 일정
                </b>
                <div className="w-[122px] flex flex-row items-end justify-start text-center text-base-5 text-gray-100">
                  <b className="flex-1 relative font-bold z-[1]">{new Date().getFullYear()}년 {new Date().getMonth() + 1}월</b>
                  <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3.5px] ml-[-12px]">
                    <img
                      className="w-[10.8px] h-[6.5px] relative z-[1]"
                      alt=""
                      src="/vector-2-stroke.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[293.6px] flex flex-row items-start justify-start gap-[13.5px] text-center text-base-5 font-inter">
              <Calendar
                locale="ko-KR"
                tileContent={tileContent}
              />
            </div>
          </div>
        </div>
        <TaskList tasks={tasks} />
      </div>
      <b className="w-[22.7px] relative hidden items-center justify-center h-5 shrink-0 z-[4]">30</b>
    </div>
  );
});

export default Frame4;
