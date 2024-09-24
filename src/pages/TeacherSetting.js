import React, { useEffect, useState } from "react";
import { getAccessToken } from '../api/auth';
import TeacherSideBar from "../components/TeacherSideBar";
import { userStore } from "../stores/UserStore";
import { observer } from 'mobx-react-lite';
import { api } from "../api/index";

const Frame4 = observer(() => {
  const [showPasswordDialog, setShowPasswordDialog] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const user = userStore.getUser();
  
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    if (user) {
      setUsername(user.teacher.name);
      setUserEmail(user.teacher.email);
      setUserId(user.teacher.id);
    }

    if (!user && getAccessToken()) {
      api.getCurrentUser();
    }
  }, [user]);

  const handlePasswordChange = async () => {
    if (newPassword === confirmPassword) {
      try {
        const response = await api.teacherResetPassword({
          userId: userId,
          oldPassword: oldPassword,
          newPassword: newPassword
        });
        if (response.ok) {
          alert("비밀번호가 변경되었습니다");
          setShowPasswordDialog(false);
        }
      } catch (error) {
        alert("잠시 후 다시 시도해주세요");
      }
    } else {
      alert("새로운 비밀번호와 비밀번호 확인이 일치하지 않습니다");
    }
  };

  return (
    <div className="w-full h-full flex bg-purple-50">
      <TeacherSideBar />
      <div className="flex-1 p-8">

        {/* 검색창 Section */}
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

        <h2 className="text-3xl font-bold mb-6">설정</h2>

        {/* 내 정보 Section */}
        <div className="bg-white pt-2 p-6 rounded-lg shadow-md mb-8 border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">내 정보</h3>
            <button className="bg-purple-300 text-white py-2 px-4 rounded">
              저장하기
            </button>
          </div>
          <div className="border-t border-gray-300 pt-4">
            <div className="flex items-center">
              <label className="block text-gray-700 text-sm font-bold w-24">이름</label>
              <input
                className="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-stone-200"
                type="text"
                value={username}
                disabled
              />
            </div>
          </div>
        </div>

        {/* 내 계정 Section */}
        <div className="bg-white pt-2 p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-xl font-semibold mb-4">내 계정</h3>
          <div className="border-t border-gray-300 pt-4">
            <div className="flex items-center mb-4">
              <p className="block text-gray-700 text-sm font-bold w-24">이메일</p>
              <p className="text-gray-700">{userEmail}</p>
            </div>
            <div className="flex items-center">
              <p className="block text-gray-700 text-sm font-bold w-24">비밀번호</p>
              <button
                className="text-blue-500 font-bold bg-white hover:cursor-pointer"
                onClick={() => setShowPasswordDialog(true)}
              >
                비밀번호 바꾸기
              </button>
            </div>
          </div>
        </div>
      </div>

      {showPasswordDialog && (
      <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-60">
        <div className="bg-white p-6 rounded-xl shadow-lg w-[24rem] max-w-full">
          <h3 className="text-2xl mt-2 mb-8 font-semibold text-gray-900 mb-6">비밀번호 변경</h3>
          <div className="space-y-4">
            <div className="mr-6">
              <label className="block text-gray-600 text-sm mb-1">기존 비밀번호</label>
              <input
                className="border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
            </div>
            <div className="mr-6">
              <label className="block text-gray-600 text-sm mb-1">새로운 비밀번호</label>
              <input
                className="border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="mr-6">
              <label className="block text-gray-600 text-sm mb-1">비밀번호 확인</label>
              <input
                className="border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-end mt-6 space-x-3">
            <button
              className="py-2 px-4 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100"
              onClick={() => setShowPasswordDialog(false)}
            >
              취소
            </button>
            <button
              className="py-2 px-4 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              onClick={handlePasswordChange}
            >
              변경
            </button>
          </div>
        </div>
      </div>
)}

    </div>
  );
});

export default Frame4;
