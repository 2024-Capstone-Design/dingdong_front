import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Content from "../components/Content";
import FrameComponent from "../components/FrameComponent";
import Wrapper1 from "../components/Wrapper1";
import CallToActionV from "../components/CallToActionV";
import Wrapper from "../components/Wrapper";

const Frame = () => {
  const navigate = useNavigate();

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

  const onMasterSecondaryButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onMasterPrimaryButtonClick = useCallback(() => {
    navigate("/teacher-signup");
  }, [navigate]);

  return (
    <div className="w-full relative bg-grayscale-white overflow-hidden flex flex-col items-end justify-start leading-[normal] tracking-[normal]">
      <Header
        onLogoContainerClick={onLogoContainerClick}
        onAboutTextClick={onAboutTextClick}
        onNoticeTextClick={onNoticeTextClick}
        onFAQTextClick={onFAQTextClick}
        onMasterSecondaryButtonClick={onMasterSecondaryButtonClick}
        onMasterPrimaryButtonClick={onMasterPrimaryButtonClick}
      />
      <Content />
      <FrameComponent />
      <Wrapper1 />
      <CallToActionV />
      <Wrapper />
    </div>
  );
};

export default Frame;
