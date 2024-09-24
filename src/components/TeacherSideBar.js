import React, { useCallback } from "react";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { api } from "../api/index";

import { userStore } from "../stores/UserStore";
import { teacherTaskStore } from "../stores/TeacherTaskStore";

// 이미지 경로 변수 설정
import { ReactComponent as HomeIcon } from '../static/iconlyboldhome.svg';
import { ReactComponent as ClassroomIcon } from '../static/iconlylight-outline3-user.svg';
// import { ReactComponent as TasksIcon } from '../static/iconlyligh t-outlinetasks.svg';
// import { ReactComponent as SavedStoriesIcon } from '../static/iconlylight-outlinebookmark.svg';
import { ReactComponent as NotificationsIcon } from '../static/iconlylight-outlinechat.svg';
import { ReactComponent as SettingsIcon } from '../static/iconlylight-outlinesetting.svg';


const TeacherSideBar = () => {
  const location = useLocation();


  const navigate = useNavigate();

  const onSignOutContainerClick = useCallback(async (event) => {
    event.preventDefault();
    await api.logout();
    userStore.setUser(null);
    teacherTaskStore.setTasks([]);
    navigate("/");
  }, [navigate]);


  // 색상 설정
  const activeColor = "#AB72FF"; // 포커스 상태일 때 색상
  const inactiveColor = "#8A8A8A"; // 포커스되지 않은 상태일 때 색상

  // 하이라이트 스타일 설정
  const highlightStyle = {
    backgroundColor: '#F7F3FD', // 하이라이트 배경색
    boxShadow: 'inset 6px 0 0 0 #AB72FF', // 왼쪽에 두께 6, 색상 #AB72FF인 선 추가
  };

  return (
    <div className="w-[270px] rounded-tl-none rounded-tr-11xl rounded-br-11xl rounded-bl-none bg-grayscale-white flex flex-col items-end justify-start pt-[51px] px-0 pb-[55px] box-border gap-[114.1px] text-left text-3xl-7 text-mediumslateblue-100 font-ubuntu mq450:gap-[57px] mq450:pt-[21px] mq450:pb-[23px] mq450:box-border mq1125:pt-[33px] mq1125:pb-9 mq1125:box-border">
      <div className="self-stretch h-[1024px] relative rounded-tl-none rounded-tr-11xl rounded-br-11xl rounded-bl-none bg-grayscale-white hidden"></div>
      
      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[78px] pl-20 mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="flex-1 flex flex-row items-start justify-start gap-[5px] hover:cursor-pointer" onClick={() => navigate(`/teacher-main`)}>
          <img className="h-[34.9px] w-[29.9px] relative z-[1]" loading="lazy" src='/group-11.svg' />
          <div className="flex-1 flex flex-col items-start justify-start pt-[5.1px] px-0 pb-0">
            <a className="[text-decoration:none] self-stretch relative font-bold text-[inherit] z-[1] mq450:text-lg">Logo</a>
          </div>
        </div>
      </div>
      
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[252.9px] gap-[21px] mq800:pb-[164px] mq800:box-border">
        <NavLink 
            to="/teacher-main" 
            className="self-stretch flex flex-row items-center justify-start gap-[16.3px] text-left text-xl text-gray-100 font-open-sans no-underline"
            style={({ isActive }) => ({
                textDecoration: 'none',
                ...isActive && highlightStyle,
            })}
            >
            <div className="self-stretch flex flex-col items-center justify-center py-[17px] pl-16 pr-4">
                <HomeIcon fill={location.pathname === '/teacher-main' ? activeColor : inactiveColor} />
            </div>
            <b className="relative font-bold inline-block min-w-[19px] z-[2] mq450:text-base" style={{ color: location.pathname === '/teacher-main' ? activeColor : inactiveColor }}>홈</b>
        </NavLink>

        <NavLink 
            to="/teacher-classroom" 
            className="self-stretch flex flex-row items-center justify-start gap-[16.3px] text-left text-xl text-gray-100 font-open-sans no-underline"
            style={({ isActive }) => ({
              textDecoration: 'none',
              ...isActive && highlightStyle,
          })}
            >
            <div className="self-stretch flex flex-col items-center justify-center py-[17px] pl-16 pr-4">
                <ClassroomIcon fill={location.pathname === '/teacher-classroom' ? activeColor : inactiveColor} />
            </div>
            <b className="relative font-bold inline-block min-w-[61px] z-[2] mq450:text-base" style={{ color: location.pathname === '/teacher-classroom' ? activeColor : inactiveColor }}>내 교실</b>
        </NavLink>

        {/* <NavLink 
            to="/teacher-task" 
            className="self-stretch flex flex-row items-center justify-start gap-[16.3px] text-left text-xl text-gray-100 font-open-sans no-underline"
            style={({ isActive }) => ({
                textDecoration: 'none',
                ...isActive && highlightStyle,
            })}
            >
            <div className="self-stretch flex flex-col items-center justify-center py-[17px] pl-16 pr-4">
                <TasksIcon fill={location.pathname === '/teacher-task' ? activeColor : inactiveColor} />
            </div>
            <b className="relative font-bold inline-block min-w-[116px] z-[2]" style={{ color: location.pathname === '/teacher-task' ? activeColor : inactiveColor }}>저장된 이야기</b>
        </NavLink>

        <NavLink 
            to="/teacher-notifications" 
            className="self-stretch flex flex-row items-center justify-start gap-[16.3px] text-left text-xl text-gray-100 font-open-sans no-underline"
            style={({ isActive }) => ({
                textDecoration: 'none',
                ...isActive && highlightStyle,
            })}
            >
            <div className="self-stretch flex flex-col items-center justify-center py-[17px] pl-16 pr-4">
                <NotificationsIcon fill={location.pathname === '/teacher-notifications' ? activeColor : inactiveColor} />
            </div>
            <div className="flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-0">
                <b className="relative font-bold inline-block min-w-[61px] z-[2] mq450:text-base" style={{ color: location.pathname === '/teacher-notifications' ? activeColor : inactiveColor }}>내 알림</b>
            </div>
        </NavLink> */}

        <NavLink 
            to="/teacher-setting" 
            className="self-stretch flex flex-row items-center justify-start gap-[16.3px] text-left text-xl text-gray-100 font-open-sans no-underline"
            style={({ isActive }) => ({
                textDecoration: 'none',
                ...isActive && highlightStyle,
            })}
            >
            <div className="self-stretch flex flex-col items-center justify-center py-[17px] pl-16 pr-4">
                <SettingsIcon fill={location.pathname === '/teacher-setting' ? activeColor : inactiveColor} style={{ width: 24 }} />
            </div>
            <b className="relative font-bold inline-block min-w-[61px] z-[2] mq450:text-base" style={{ minWidth: 37, color: location.pathname === '/teacher-setting' ? activeColor : inactiveColor }}>설정</b>
        </NavLink>

      </div>
      
      <div className="self-stretch flex flex-row items-start justify-end py-0 px-[71px] text-xl text-indianred font-open-sans mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div onClick={onSignOutContainerClick} className="flex flex-row items-start justify-start gap-[10px] cursor-pointer z-[1]">
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <img className="w-6 h-[23.4px] relative object-cover" loading="lazy" alt="Sign Out" src='/iconlylight-outlinelogout@2x.png' />
          </div>
          <b className="relative font-bold inline-block min-w-[85px] mq450:text-base">Sign Out</b>
        </div>
      </div>
    </div>
  );
};

export default TeacherSideBar;
