import React, { useEffect } from "react";
import { getAccessToken } from '../api/auth';
import StudentSideBar from "../components/StudentSideBar"; 
import { useNavigate } from "react-router-dom";
import StoryCards from "../components/StoryCards";
import { userStore } from "../stores/UserStore";
import { studentTaskStore } from "../stores/StudentTaskStore";
import { observer } from 'mobx-react-lite';
import { api } from "../api/index";


const StudentClass = observer(() => {
  const user = userStore.getUser();
  const tasks = studentTaskStore.getTasks();
  
  let username = user ? user.student.name : "";

  const navigate = useNavigate();

  useEffect(() => {
    if (!user && getAccessToken()) {
      api.getCurrentUser();
    }

    if (tasks.length === 0 && getAccessToken()) {
      api.getStudentTasks(user.student.id);
    }
  }, [user, tasks]);

  return (
    <div className="w-full relative bg-ghostwhite-200 overflow-hidden flex flex-row flex-wrap items-start justify-start gap-[22px] leading-[normal] tracking-[normal] text-center text-base-5 text-light-secondary1 font-inter">
      <StudentSideBar />
      <div className="flex-1 flex flex-col items-start justify-start pt-[43px] pb-0 pr-[5px] pl-0 box-border min-w-[482px] max-w-full text-xl text-black font-base-body mq450:pt-5 mq450:box-border mq800:min-w-full mq1125:pt-7 mq1125:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[48px] max-w-full mq1125:gap-[24px]">

          {/* 진행 중인 동화 */}
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
          </div>

          {/* 진행 중인 동화 리스트 */}
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-6 box-border gap-[12px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-1.5 pl-[3px] box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
                <h1 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[120px] mq450:text-base">
                  진행 중인 동화
                </h1>
              </div>
            </div>
            <div className="self-stretch grid flex-row items-start justify-start py-0 pr-[31px] pl-0 gap-[24px] grid-cols-[repeat(5,_minmax(164px,_1fr))] mq450:grid-cols-[minmax(164px,_1fr)] mq800:justify-center mq800:grid-cols-[repeat(2,_minmax(164px,_285px))]">
              {tasks
                .filter(task => !task.completed)  // 진행 중인 동화만 필터링
                .slice()
                .sort((a, b) => new Date(a.finishDate) - new Date(b.finishDate)) // finishDate 기준으로 정렬
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

          {/* 완료한 이야기 */}
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-6 box-border gap-[12px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-1.5 pl-[3px] box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
                <h1 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[120px] mq450:text-base">
                  완료한 이야기
                </h1>
              </div>
            </div>
            <div className="self-stretch grid flex-row items-start justify-start py-0 pr-[31px] pl-0 gap-[24px] grid-cols-[repeat(5,_minmax(164px,_1fr))] mq450:grid-cols-[minmax(164px,_1fr)] mq800:justify-center mq800:grid-cols-[repeat(2,_minmax(164px,_285px))]">
              {tasks
                .filter(task => task.completed)  // 완료한 이야기만 필터링
                .slice()
                .sort((a, b) => new Date(a.finishDate) - new Date(b.finishDate))  // finishDate 기준으로 정렬
                .map(task => (
                  <StoryCards
                    key={task.studentTaskId}
                    fairytaleTitle={task.fairytaleTitle}
                    fairytaleImageUrl={task.fairytaleImageUrl}
                    progress={task.progress}
                    onStoryCardsContainerClick={() => navigate(`/student-task/${task.studentTaskId}`)}
                  />
                ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
});

export default StudentClass;
