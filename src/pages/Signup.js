import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header1 from "../components/Header1";
import ContentElements from "../components/ContentElements";
import Wrapper from "../components/Wrapper";

const Frame2 = () => {
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

  const onContainerClick = useCallback(() => {
    navigate("/teacher-signup");
  }, [navigate]);

  return (
    <div className="w-full relative bg-grayscale-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">

      <Header1
        onLogoContainerClick={onLogoContainerClick}
        onAboutTextClick={onAboutTextClick}
        onNoticeTextClick={onNoticeTextClick}
        onFAQTextClick={onFAQTextClick}
        onMasterSecondaryButtonClick={onMasterSecondaryButtonClick}
      />
      <main className="self-stretch bg-grayscale-white flex flex-row flex-wrap items-start justify-start pt-[139.7px] px-[110px] pb-[141.5px] box-border gap-[40px] max-w-full text-left text-17xl text-grayscale-white font-text-single-200-bold mq800:pl-5 mq800:pr-5 mq800:box-border mq1125:gap-[20px] mq1125:pt-[91px] mq1125:px-[55px] mq1125:pb-[92px] mq1125:box-border">
        <div className="h-[744px] w-[1440px] relative bg-grayscale-white hidden max-w-full" />
        <div className="flex-1 flex flex-col items-start justify-start pt-[110.3px] pb-[108.6px] pr-5 pl-[69px] box-border relative gap-[23px] min-w-[383px] max-w-full mq450:pl-[34px] mq450:box-border mq450:min-w-full mq800:pt-[72px] mq800:pb-[71px] mq800:box-border">

          <div
            className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl bg-neutral-colors-headings-black box-border cursor-pointer z-[1] border-[1px] border-solid border-neutral-colors-color-800"
            onClick={onContainerClick}
          />
          <h1 className="m-0 w-[447px] relative text-inherit leading-[46px] font-bold font-inherit inline-block max-w-full z-[2] mq800:text-3xl mq800:leading-[28px] mq1125:text-10xl mq1125:leading-[37px]">

            선생님이신가요?
          </h1>
          <p className="m-0 w-[451px] relative text-lg leading-[30px] inline-block max-w-full z-[2]">
            선생님은 학교가 이용가능한 기관으로 등록되어 있어야 가입이
            가능합니다! 학교가 등록되어 있을 경우 아래 버튼을 눌러 시작해주세요
            :)
          </p>
          <button className="cursor-pointer py-[21px] px-[35px] bg-grayscale-white rounded-[36.55px] flex flex-row items-start justify-start gap-[8px] whitespace-nowrap z-[2] border-[1px] border-solid border-neutral-colors-color-600 hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-silver-200">

            <div className="w-[154px] relative text-lg leading-[18px] font-text-single-200-bold text-neutral-colors-headings-black text-center inline-block">
              선생님으로 시작하기
            </div>
            <img
              className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden min-h-[18px]"
              alt=""
              src="/line-roundedarrow-right4.svg"
            />
          </button>
        </div>
        <ContentElements />
      </main>
      <img
        className="w-5 h-5 relative overflow-hidden shrink-0 hidden"
        alt=""
        src="/icon-input-left.svg"
      />
      <Wrapper />
    </div>
  );
};

export default Frame2;
