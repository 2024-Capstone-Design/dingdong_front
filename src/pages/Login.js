import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/index";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("student");
  const [classId, setClassId] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    // Please sync "서비스 소개" to the project
  }, []);

  const onNoticeTextClick = useCallback(() => {
    // Please sync "공지사항" to the project
  }, []);

  const onFAQTextClick = useCallback(() => {
    // Please sync "FAQ" to the project
  }, []);

  const onMasterPrimaryButtonClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onMasterPrimaryButton2Click = useCallback(async (event) => {
    event.preventDefault();
    
    if (role === "student" && (!classId || !username || !password)) {
      alert("모든 정보를 입력해 주세요.");
      return;
    } else if (role === "teacher" && (!username || !password)) {
      alert("모든 정보를 입력해 주세요.");
      return;
    }

    try {
      if (role === "student") {
        const loginData = { "groupId": classId, "username": username, "password":password };
        const response = await api.studentLogin(loginData);
        if(response.ok){
          navigate("/student-main");
        }
        
      } else {
        const loginData = { "email": username, "password":password };
        const response =  await api.teacherLogin(loginData);
        if(response.ok){
          navigate("/teacher-main");
        }
      }
    } catch (error) {
      // console.log("에러", error);
      if (error.response) {
        alert("아이디 혹은 비밀번호를 다시 확인해 주세요.");
      } else {
        console.error(error);
      }
    }
  }, [navigate, role, classId, username, password]);

  return (
    <div className="w-full h-screen flex flex-col bg-grayscale-white overflow-hidden">
      <Header
        onLogoContainerClick={onLogoContainerClick}
        onAboutTextClick={onAboutTextClick}
        onNoticeTextClick={onNoticeTextClick}
        onFAQTextClick={onFAQTextClick}
        onMasterPrimaryButtonClick={onMasterPrimaryButtonClick}
      />
      <main className="flex-grow flex items-center justify-center bg-grayscale-white overflow-hidden">
        <div className="w-full max-w-[1440px] flex flex-row items-end justify-end mq1125:items-center mq1125:justify-center px-4">
          <form className="w-[500px] flex flex-col items-start justify-start gap-[29.8px]">
              <div className="w-[274px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[8px]">
                <b className="relative text-lg tracking-[0.1em] leading-[20px] uppercase font-bold font-text-single-200-bold text-lightslategray text-left inline-block min-w-[71px] whitespace-nowrap z-[2]">
                  Log in
                </b>
                <h1 className="m-0 self-stretch relative text-25xl leading-[50px] font-bold font-text-single-200-bold text-neutral-colors-headings-black text-left z-[2] mq450:text-7xl mq450:leading-[30px] mq800:text-16xl mq800:leading-[40px]">
                  딩동 시작하기
                </h1>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[24.3px] z-[2]">
                <div className="flex items-center gap-4">
                  <label>
                    <input
                      type="radio"
                      value="student"
                      checked={role === "student"}
                      onChange={() => setRole("student")}
                    />
                    학생
                  </label>
                  {/* <label>
                    <input
                      type="radio"
                      value="teacher"
                      checked={role === "teacher"}
                      onChange={() => setRole("teacher")}
                    />
                    선생님
                  </label> */}
                </div>
                {role === "student" && (
                  <input
                    className="w-[500px] [border:none] [outline:none] bg-ghostwhite-100 self-stretch h-[50px] rounded-31xl flex flex-row items-start justify-start py-4 px-6 box-border font-text-single-200-bold text-base text-violet-950 min-w-[250px]"
                    placeholder="클래스ID"
                    type="text"
                    value={classId}
                    onChange={(e) => setClassId(e.target.value)}
                  />
                )}
                <input
                  className="w-[500px] [border:none] [outline:none] bg-ghostwhite-100 self-stretch h-[50px] rounded-31xl flex flex-row items-start justify-start py-4 px-6 box-border font-text-single-200-bold text-base text-violet-950 min-w-[250px]"
                  placeholder="아이디"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  className="w-[500px] [border:none] [outline:none] bg-ghostwhite-100 self-stretch h-[50px] rounded-31xl flex flex-row items-start justify-start py-4 px-6 box-border font-text-single-200-bold text-base text-violet-950 min-w-[250px]"
                  placeholder="비밀번호"
                  type="password" // 비밀번호 필드이므로 type을 "password"로 변경
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                className="cursor-pointer [border:none] py-[18px] px-[23px] bg-neutral-colors-headings-black rounded-11xl flex flex-row items-start justify-start gap-[8px] z-[2]"
                onClick={onMasterPrimaryButton2Click}
              >
                <img
                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden min-h-[18px]"
                  alt=""
                  src="/line-roundedsearch1.svg"
                />
                <b className="relative text-base leading-[18px] font-bold font-text-single-200-bold text-grayscale-white text-center inline-block min-w-[42px]">
                  Login
                </b>
                <img
                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden min-h-[18px]"
                  alt=""
                  src="/line-roundedarrow-right1.svg"
                />
              </button>
            </form>
          </div>
        <img
          className="absolute top-[calc(50%_-_287.5px)] left-[calc(50%_-_1003px)] w-[1069px] h-[620px] z-[3] mq1125:hidden"
          alt=""
          src="/imagedevicemacbook.svg"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Login;

