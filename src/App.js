import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TeacherSignup from "./pages/TeacherSignup";
import StudentMain from "./pages/StudentMain";
import ChatRoom from "./pages/ChatRoom";

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
      case "/chat-room":
        title = "Chat Room";
        metaDescription = "Chat room page";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]',
      );
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
      <Route path="/teacher-signup" element={<TeacherSignup />} />
      <Route path="/student-main" element={<StudentMain />} />
      <Route path="/chat-room" element={<ChatRoom />} />
    </Routes>
  );
}

export default App;
