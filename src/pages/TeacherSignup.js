import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";

const Frame3 = () => {
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

  const onFormBottomClick = useCallback(() => {
    // Please sync "회원가입 - 선생님" to the project
  }, []);

  return (
    <div className="w-full relative bg-grayscale-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">

      <Header
        onLogoContainerClick={onLogoContainerClick}
        onAboutTextClick={onAboutTextClick}
        onNoticeTextClick={onNoticeTextClick}
        onFAQTextClick={onFAQTextClick}
        onMasterSecondaryButtonClick={onMasterSecondaryButtonClick}
        onMasterPrimaryButtonClick={onMasterPrimaryButtonClick}
      />
      <main className="self-stretch bg-grayscale-white flex flex-col items-end justify-start pt-[45px] pb-[336px] pr-[719px] pl-[180px] box-border gap-[127px] max-w-full text-left text-lg text-lightslategray font-text-single-200-bold mq450:gap-[32px] mq450:pl-5 mq450:pr-5 mq450:box-border mq1125:gap-[63px] mq1125:pt-[29px] mq1125:pb-[218px] mq1125:pr-[359px] mq1125:pl-[90px] mq1125:box-border">
        <div className="w-[1440px] h-[744px] relative bg-grayscale-white hidden max-w-full" />

        <div className="flex flex-col items-start justify-start gap-[8px]">
          <b className="relative tracking-[0.1em] leading-[20px] uppercase font-bold inline-block min-w-[78px] z-[2]">
            SIGN in
          </b>
          <h1 className="m-0 relative text-25xl leading-[50px] font-bold font-inherit text-neutral-colors-headings-black z-[2] mq450:text-7xl mq450:leading-[30px] mq1125:text-16xl mq1125:leading-[40px]">

            OOOO 가입하기
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start max-w-full text-17xl text-grayscale-white">

          <div className="w-[451px] flex flex-col items-start justify-start gap-[23px] max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit leading-[46px] font-bold font-inherit z-[1] mq450:text-3xl mq450:leading-[28px] mq1125:text-10xl mq1125:leading-[37px]">

              선생님이신가요?
            </h1>
            <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-lg">
              <p className="m-0 flex-1 relative leading-[30px] inline-block max-w-full z-[1]">
                선생님은 학교가 이용가능한 기관으로 등록되어 있어야 가입이
                가능합니다! 학교가 등록되어 있을 경우 아래 버튼을 눌러
                시작해주세요 :)
              </p>
              <form className="!m-[0] w-[653px] absolute right-[-416px] bottom-[-290px] rounded-6xl bg-neutral-colors-color-400 flex flex-col items-start justify-start pt-8 px-7 pb-[31px] box-border gap-[32px] z-[2]">
                <div className="w-[653px] h-[531px] relative rounded-6xl bg-neutral-colors-color-400 hidden max-w-full" />
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px]">
                  <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[186px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                      <b className="relative text-lg leading-[18px] font-bold font-text-single-200-bold text-neutral-colors-headings-black text-left inline-block min-w-[34px] z-[3]">
                        이름
                      </b>
                      <input
                        className="w-full [border:none] [outline:none] bg-grayscale-white self-stretch h-[72px] rounded-31xl flex flex-row items-start justify-start py-[27px] px-[23px] box-border font-text-single-200-bold text-lg text-lightslategray min-w-[172px] z-[3]"

                        placeholder="John Carter"
                        type="text"
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                      <b className="relative text-lg leading-[18px] font-bold font-text-single-200-bold text-neutral-colors-headings-black text-left inline-block min-w-[67px] z-[3]">
                        전화번호
                      </b>
                      <input
                        className="w-full [border:none] [outline:none] bg-grayscale-white self-stretch h-[72px] rounded-31xl flex flex-row items-start justify-start py-[27px] px-[23px] box-border font-text-single-200-bold text-lg text-lightslategray min-w-[172px] z-[3]"

                        placeholder="(123) 456 - 789"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[186px]">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                      <b className="relative text-lg leading-[18px] font-bold font-text-single-200-bold text-neutral-colors-headings-black text-left inline-block min-w-[50px] z-[3]">
                        이메일
                      </b>
                      <div className="self-stretch rounded-31xl bg-grayscale-white flex flex-row items-start justify-start py-[27px] px-6 z-[3]">
                        <div className="h-[72px] w-[286px] relative rounded-31xl bg-grayscale-white hidden" />

                        <div className="h-14 hidden flex-row items-start justify-start">
                          <div className="self-stretch rounded-77xl bg-crimson flex flex-row items-center justify-center py-[18px] px-7 gap-[6px]">
                            <img
                              className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                              alt=""
                              src="/line-roundedsearch2.svg"
                            />
                            <b className="self-stretch relative text-lg leading-[20px] font-onest text-grayscale-white text-center">

                              Default
                            </b>
                            <img
                              className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                              alt=""
                              src="/line-roundedarrow-right2.svg"
                            />
                          </div>
                        </div>
                        <img
                          className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/icon-input-left.svg"
                        />
                        <img
                          className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/icon-input-left.svg"
                        />
                        <div className="relative text-lg leading-[18px] font-text-single-200-bold text-lightslategray text-left whitespace-nowrap z-[1]">
                          example@email.com
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                      <b className="relative text-lg leading-[18px] font-bold font-text-single-200-bold text-neutral-colors-headings-black text-left inline-block min-w-[71px] z-[3]">
                        소속 기관
                      </b>
                      <div className="self-stretch rounded-31xl bg-grayscale-white flex flex-row items-start justify-between py-[27px] pr-[26px] pl-6 gap-[20px] z-[3]">
                        <div className="h-[72px] w-[286px] relative rounded-31xl bg-grayscale-white hidden" />

                        <div className="h-14 hidden flex-row items-start justify-start">
                          <div className="self-stretch rounded-77xl bg-crimson flex flex-row items-center justify-center py-[18px] px-7 gap-[6px]">
                            <img
                              className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
                              alt=""
                              src="/line-roundedsearch2.svg"
                            />
                            <b className="self-stretch relative text-lg leading-[20px] font-onest text-grayscale-white text-center">

                              Default
                            </b>
                            <img
                              className="h-4 w-4 relative overflow-hidden shrink-0 hidden"
                              alt=""
                              src="/line-roundedarrow-right2.svg"
                            />
                          </div>
                        </div>
                        <img
                          className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/icon-input-left.svg"
                        />
                        <img
                          className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/icon-input-left.svg"
                        />
                        <div className="relative text-lg leading-[18px] font-text-single-200-bold text-lightslategray text-left inline-block min-w-[95px] z-[1]">
                          OO초등학교
                        </div>
                        <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                          <img
                            className="w-[18px] h-[9px] relative z-[1]"
                            alt=""
                            src="/group-7167.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <b className="relative text-lg leading-[18px] inline-block font-text-single-200-bold text-neutral-colors-headings-black text-left min-w-[125px] z-[3]">
                    서비스 사용 용도
                  </b>
                  <input
                    className="w-full [border:none] [outline:none] bg-grayscale-white self-stretch h-[72px] rounded-31xl flex flex-row items-start justify-start py-[27px] px-6 box-border font-text-single-200-bold text-lg text-lightslategray min-w-[250px] z-[3]"

                    placeholder="서비스 사용 용도입니다."
                    type="text"
                  />
                </div>
                <button
                  className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-start justify-start max-w-full z-[3]"
                  onClick={onFormBottomClick}
                >
                  <div className="flex-1 rounded-21xl bg-neutral-colors-headings-black flex flex-row items-start justify-center py-6 px-5 box-border gap-[8px] max-w-full">
                    <img
                      className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden min-h-[18px]"
                      alt=""
                      src="/line-roundedsearch3.svg"
                    />
                    <b className="relative text-lg leading-[18px] font-bold font-text-single-200-bold text-grayscale-white text-center inline-block min-w-[58px]">

                      Sign In
                    </b>
                    <img
                      className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden min-h-[18px]"
                      alt=""
                      src="/line-roundedarrow-right3.svg"
                    />
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
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

export default Frame3;
