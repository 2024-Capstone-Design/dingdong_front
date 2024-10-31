import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TeacherSignup from "./pages/TeacherSignup";
import StudentMain from "./pages/StudentMain";
import StudentClass from "./pages/StudentClass";
import TeacherMain from "./pages/TeacherMain";
import StudentSetting from "./pages/StudentSetting";
import TeacherSetting from "./pages/TeacherSetting";
import ChatRoom from "./pages/ChatRoom";
import Sketch from "./pages/Sketch";
import SketchPad from "./pages/Sketch_before";
import StudentTaskDetail from "./pages/StudentTaskDetail";
import SketchResult from "./pages/SketchResult"; // Import SketchResult page

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Home";
        metaDescription = "Welcome to the home page";
        break;
      case "/login":
        title = "Login";
        metaDescription = "Login to your account";
        break;
      case "/signup":
        title = "Signup";
        metaDescription = "Create a new account";
        break;
      case "/teacher-signup":
        title = "Teacher Signup";
        metaDescription = "Signup for teachers";
        break;
      case "/student-main":
        title = "Student Main";
        metaDescription = "Main page for students";
        break;
      // case "/teacher-main":
      //   title = "Teacher Main";
      //   metaDescription = "Main page for teachers";
      //   break;
      case "/chat-room":
        title = "Chat Room";
        metaDescription = "Chat room page";
        break;
      case "/sketch":
        title = "Sketch";
        metaDescription = "Select and create sketches";
        break;
      case "/sketch-pad":
        title = "Sketch";
        metaDescription = "Draw and create sketches";
        break;
      case "/sketch-result":
        title = "Sketch Result";
        metaDescription = "View sketch result";
        break;
      case "/student-setting":
        title = "Student Setting";
        metaDescription = "Setting page for students";
        break;
      // case "/teacher-setting":
      //   title = "Teacher Setting";
      //   metaDescription = "Setting page for teachers";
      //   break;

      case "/student-classroom":
        title = "Student Class";
        metaDescription = "Class page for students";
        break;
      case "/student-task":
        title = "Student Task";
        metaDescription = "Task page for students";
        break;
      // case "/teacher-classroom":
      //   title = "Teacher Class";
      //   metaDescription = "Class page for teachers";
      //   break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector('head > meta[name="description"]');
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="/teacher-signup" element={<TeacherSignup />} /> */}
      <Route path="/student-main" element={<StudentMain />} />
      <Route path="/student-classroom" element={<StudentClass />} />
      {/* <Route path="/teacher-main" element={<TeacherMain />} /> */}
      <Route path="/student-setting" element={<StudentSetting />} />
      {/* <Route path="/teacher-setting" element={<TeacherSetting />} /> */}
      <Route path="/chat-room/:studentTaskId" element={<ChatRoom />} />
      <Route path="/sketch/:studentTaskId" element={<Sketch />} />
      <Route path="/sketch-pad/:studentTaskId" element={<SketchPad />} />
      <Route path="/sketch-result/:studentTaskId" element={<SketchResult />} /> {/* Add sketch-result route */}
      <Route path="/student-task/:studentTaskId" element={<StudentTaskDetail />} /> {/* StudentTaskDetail 경로 추가 */}
    </Routes>
  );
}

export default App;
