import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header1 from "../components/Header1";
import Wrapper from "../components/Wrapper";

const Frame1 = () => {
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

  const onMasterPrimaryButtonClick = useCallback(() => {
    navigate("/teacher-signup");
  }, [navigate]);

  const onMasterPrimaryButton2Click = useCallback(() => {
    navigate("/student-main");

  }, [navigate]);

  return (
    <div className="w-full relative bg-grayscale-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">

      <Header1
        onLogoContainerClick={onLogoContainerClick}
        onAboutTextClick={onAboutTextClick}
        onNoticeTextClick={onNoticeTextClick}
        onFAQTextClick={onFAQTextClick}
        onMasterPrimaryButtonClick={onMasterPrimaryButtonClick}
      />
      <main className="self-stretch h-[781px] relative bg-grayscale-white overflow-hidden shrink-0 max-w-full mq1300:h-auto mq1300:min-h-[781]">
        <section className="absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-start gap-[494.7px] max-w-full h-full mq450:gap-[62px] mq800:gap-[124px] mq1300:flex-wrap mq1300:gap-[247px]">
          <div className="self-stretch w-[1440px] relative bg-grayscale-white hidden max-w-full" />
          <div className="self-stretch w-[1440px] relative bg-grayscale-white hidden max-w-full" />

          <div className="h-[781px] w-[410.9px] relative bg-neutral-colors-color-500 max-w-full z-[2]" />
          <div className="w-[416.4px] flex flex-col items-start justify-start pt-[195px] px-0 pb-0 box-border max-w-full">
            <form className="m-0 self-stretch flex flex-col items-start justify-start gap-[29.8px]">
              <div className="w-[274px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border gap-[8px]">
                <b className="relative text-lg tracking-[0.1em] leading-[20px] uppercase font-bold font-text-single-200-bold text-lightslategray text-left inline-block min-w-[71px] whitespace-nowrap z-[2]">
                  Log in
                </b>
                <h1 className="m-0 self-stretch relative text-25xl leading-[50px] font-bold font-text-single-200-bold text-neutral-colors-headings-black text-left z-[2] mq450:text-7xl mq450:leading-[30px] mq800:text-16xl mq800:leading-[40px]">

                  딩동 시작하기
                </h1>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[24.3px] z-[2]">
                <input
                  className="w-full [border:none] [outline:none] bg-ghostwhite-100 self-stretch h-[50px] rounded-31xl flex flex-row items-start justify-start py-4 px-6 box-border font-text-single-200-bold text-base text-neutral-colors-color-800 min-w-[250px]"
                  placeholder="클래스ID"
                  type="text"
                />
                <input
                  className="w-full [border:none] [outline:none] bg-ghostwhite-100 self-stretch h-[50px] rounded-31xl flex flex-row items-start justify-start py-4 px-6 box-border font-text-single-200-bold text-base text-neutral-colors-color-800 min-w-[250px]"
                  placeholder="아이디"
                  type="text"
                />
                <input
                  className="w-full [border:none] [outline:none] bg-ghostwhite-100 self-stretch h-[50px] rounded-31xl flex flex-row items-start justify-start py-4 px-6 box-border font-text-single-200-bold text-base text-neutral-colors-color-800 min-w-[250px]"
                  placeholder="비밀번호"
                  type="text"
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
        </section>
        <img
          className="absolute top-[calc(50%_-_287.5px)] left-[calc(50%_-_1003px)] w-[1069px] h-[620px] z-[3]"
          alt=""
          src="/imagedevicemacbook.svg"
        />
      </main>
      <Wrapper />
    </div>
  );
};

export default Frame1;
