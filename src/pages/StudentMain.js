import React, { useEffect, useCallback } from "react";
import { getAccessToken } from '../api/auth';
import StudentSideBar from "../components/StudentSideBar"; // 수정된 부분
import { useNavigate } from "react-router-dom";
import StoryCards from "../components/StoryCards";
import { userStore } from "../stores/UserStore";
import { studentTaskStore } from "../stores/StudentTaskStore";
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

const TaskItem = ({ task, onTaskCardsContainerClick }) => {
  const dueDateColor = getColorForDueDate(task.finishDate);

  return (
    <div className="self-stretch rounded-xl h-[100px] bg-ghostwhite-200 flex flex-row items-start justify-start py-[21px] pr-3.5 pl-4 gap-[7px] z-[1] hover:cursor-pointer" onClick={onTaskCardsContainerClick}>
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
  const navigate = useNavigate();

  const onMoreTaskClick = useCallback(() => {
    navigate("/student-classroom");
  }, [navigate]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[25px] text-center text-xl">
      <div className="w-[310px] flex flex-row items-start justify-start py-0 px-3 box-border">
        <div className="flex-1 flex flex-row items-end justify-between gap-[20px]">
          <b className="relative font-bold inline-block min-w-[98px] z-[1] mq450:text-base">해야할 숙제</b>
          <div onClick={onMoreTaskClick} className="w-9 flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border text-[13px] text-mediumslateblue-100 cursor-pointer">
            <b className="self-stretch relative font-bold inline-block min-w-[36px] z-[1]">더보기</b>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-end justify-start gap-[13px] text-6xl text-grayscale-white">
        <div className="flex-1 flex flex-col items-start justify-start gap-[10px] overflow-scroll max-w-[320px] max-h-[410px]">
          {tasks.map((task) => (
            <TaskItem key={task.studentTaskId} task={task} onTaskCardsContainerClick={() => navigate(`/student-task/${task.studentTaskId}`)}/>
          ))}
        </div>
      </div>
    </div>
  );
};

const Frame4 = observer(() => {
  const user = userStore.getUser();
  const tasks = studentTaskStore.getTasks();
  
  var username = "";

  if (user != null || user == '') {
    username = user.student.name;
  }

  const navigate = useNavigate();

  useEffect(() => {
    if (!user && getAccessToken()) {
      api.getCurrentUser();
    }

    if (getAccessToken()) {
      api.getStudentTasks(user.student.id);
    }
  }, [user, tasks]);

  const onGroupContainerClick = useCallback(() => {
    if (tasks.length > 0) {
      const firstTaskStudentTaskId = tasks[0].studentTaskId; // 첫 번째 task의 studentTaskId 가져오기
      navigate(`/chat-room/${firstTaskStudentTaskId}`); // studentTaskId를 URL 파라미터로 전달
    } else {
      console.error("No tasks available.");
    }
  }, [navigate, tasks]);

  const onGroupContainer1Click = useCallback(() => {
    navigate("/student-main");
  }, [navigate]);

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
      <StudentSideBar />
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
                      반가워요! {username} 친구
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
                    <p className="m-0">이번주에 해야하는 동화만들기가 거의 다 끝났어요!</p>
                    <p className="m-0">아래에서 계속 진행해보아요 :)</p>
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
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-6 box-border gap-[12px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-1.5 pl-[3px] box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
                <h1 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[120px] mq450:text-base">
                  진행 중인 동화
                </h1>
                <b onClick={() => navigate(`/student-classroom`)} className="w-14 relative font-semibold text-mediumslateblue-200 flex items-center justify-center min-w-[56px] mq450:text-base cursor-pointer">
                  더보기
                </b>
              </div>
            </div>
            <div className="self-stretch grid flex-row items-start justify-start py-0 pl-0 gap-[24px] grid-cols-[repeat(3,_minmax(164px,_1fr))] mq450:grid-cols-[minmax(164px,_1fr)] mq800:justify-center mq800:grid-cols-[repeat(2,_minmax(164px,_285px))]">
              {tasks
                .slice()
                .sort((a, b) => {
                  if (a.progress === 'COMPLETED' && b.progress !== 'COMPLETED') return 1;
                  if (a.progress !== 'COMPLETED' && b.progress === 'COMPLETED') return -1;
                  return 0;
                })
                .slice(0, 3)
                .map(task => (
                  <StoryCards
                    key={task.studentTaskId}
                    fairytaleTitle={task.fairytaleTitle}
                    fairytaleImageUrl={task.fairytaleImageUrl}
                    progress={task.progress}
                    completed={task.completed}
                    onStoryCardsContainerClick={() => navigate(`/student-task/${task.studentTaskId}`)}
                  />
                ))}
            </div>


          </div>
          {/* <div className="self-stretch flex flex-row items-start justify-start py-0 pr-2.5 pl-0.5 box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full">
              <div className="flex flex-row items-start justify-start py-0 px-px">
                <b className="w-[97px] relative font-semibold inline-block min-w-[97px] mq450:text-base">
                  새로 만들기
                </b>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center gap-[12px] max-w-full text-left text-3xs text-grayscale-white mq800:flex-wrap">
                <div
                  className="flex-1 rounded-3xs [background:linear-gradient(180deg,_#6363af,_#35346e)] flex flex-row items-start justify-start pt-[19px] pb-0.5 pr-3.5 pl-[21px] box-border gap-[14px] min-w-[231px] max-w-full cursor-pointer"
                  onClick={onGroupContainerClick}
                >
                  <div className="h-[124px] w-[356px] relative rounded-3xs [background:linear-gradient(180deg,_#6363af,_#35346e)] hidden max-w-full" />
                  <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                    <div className="w-[132px] relative text-lightsteelblue inline-block z-[1]">
                      Interactive Storytelling
                    </div>
                    <h3 className="m-0 w-[190px] relative text-mini font-semibold font-inherit inline-block z-[1]">
                      새로운 나만의 동화 만들기
                    </h3>
                    <div className="relative font-pretendard z-[1]">
                      내가 알던 동화의 내용을 내가 원하는대로 바꿀 수 있어요!
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                    <div className="flex flex-col items-end justify-start gap-[13.2px]">
                      <div className="flex flex-row items-start justify-end py-0 px-1.5">
                        <img
                          className="h-[8.8px] w-[16.6px] relative object-contain z-[1]"
                          loading="lazy"
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                      <img
                        className="w-[76px] h-[76px] relative object-cover z-[2]"
                        loading="lazy"
                        alt=""
                        src="/3dicons@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="flex-1 rounded-3xs [background:linear-gradient(180deg,_#7b9bf7,_#3457c7)] flex flex-row items-start justify-start pt-[19px] pb-0.5 pr-3.5 pl-[19px] box-border gap-[3px] min-w-[231px] max-w-full cursor-pointer text-lightsteelblue"
                  onClick={onGroupContainer1Click}
                >
                  <div className="h-[124px] w-[356px] relative rounded-3xs [background:linear-gradient(180deg,_#7b9bf7,_#3457c7)] hidden max-w-full" />
                  <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="w-[106.2px] relative inline-block z-[1]">
                        Block Coding
                      </div>
                      <h3 className="m-0 self-stretch relative text-mini font-semibold font-inherit text-grayscale-white z-[1] mt-[-0.6px]">
                        내가 만든 동화 애니메이션으로 만들기
                      </h3>
                    </div>
                    <div className="w-[231px] relative font-pretendard text-grayscale-white inline-block z-[1]">
                      내가 만든 나만의 동화를 애니메이션으로 만들 수 있어요!
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                    <div className="flex flex-col items-end justify-start gap-[13.2px]">
                      <div className="flex flex-row items-start justify-end py-0 px-2">
                        <img
                          className="h-[8.8px] w-[16.6px] relative object-contain z-[1]"
                          loading="lazy"
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                      <img
                        className="w-[76px] h-[76px] relative object-cover z-[1]"
                        loading="lazy"
                        alt=""
                        src="/3dicons-1@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="w-[385px] h-[100vh] rounded-tl-11xl rounded-tr-none rounded-br-none rounded-bl-11xl bg-grayscale-white flex flex-col items-start justify-start pt-[43px] pb-[22px] pr-[22px] pl-8 box-border gap-[61.1px] max-w-full text-left text-mini text-light-primary font-open-sans mq450:gap-[31px] mq450:pt-5 mq450:box-border mq1125:pt-7 mq1125:pb-5 mq1125:box-border">
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
                  Student
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
