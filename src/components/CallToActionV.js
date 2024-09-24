import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MasterPrimaryButton from "./MasterPrimaryButton";
import PropTypes from "prop-types";

const CallToActionV = ({ className = "" }) => {
  const navigate = useNavigate();

  const onStartBtnClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  const onLoginBtnClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <section
      className={`mr-[-1px] self-stretch bg-neutral-colors-color-400 overflow-hidden flex flex-row items-start justify-start max-w-full text-left text-17xl text-neutral-colors-headings-black font-text-single-200-bold ${className}`}
    >
      <div className="flex-1 bg-neutral-colors-color-400 flex flex-row items-start justify-start py-[85px] pr-[150px] pl-[110px] box-border gap-[149.4px] max-w-full lg:flex-wrap lg:gap-[75px] lg:pl-[55px] lg:pr-[75px] lg:box-border mq450:gap-[37px] mq450:py-[55px] mq450:pr-[37px] mq450:pl-[27px] mq450:box-border mq1125:gap-[19px]">
        <div className="h-[620px] w-[1440px] relative bg-neutral-colors-color-400 hidden max-w-full" />
        <div className="flex-1 rounded-xl bg-grayscale-white flex flex-row items-start justify-center py-[171px] px-5 box-border min-w-[361px] max-w-full z-[1] mq450:min-w-full mq1125:pt-[111px] mq1125:pb-[111px] mq1125:box-border">
          <div className="h-[450px] w-[555px] relative rounded-xl bg-grayscale-white hidden max-w-full" />
          <img
            className="h-[108px] w-[123px] relative z-[1]"
            loading="lazy"
            alt=""
            src="/image-icon-3.svg"
          />
        </div>
        <div className="w-[475.6px] flex flex-col items-start justify-start pt-[43.6px] px-0 pb-0 box-border min-w-[475.59999999999854px] max-w-full lg:flex-1 mq800:min-w-full mq1125:pt-7 mq1125:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[60px] max-w-full mq450:gap-[30px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[36px] max-w-full mq450:gap-[18px]">
              <h1 className="m-0 self-stretch relative text-inherit leading-[46px] font-bold font-inherit z-[1] mq800:text-10xl mq800:leading-[37px] mq1125:text-3xl mq1125:leading-[28px]">
                Create your account today and get started for free!
              </h1>
              <div className="w-[440.3px] flex flex-row items-start justify-start gap-[27.8px] max-w-full text-base mq1125:flex-wrap">
                <div className="flex-1 flex flex-row items-start justify-start gap-[15px] min-w-[140px]">
                  <div className="flex flex-col items-start justify-start gap-[24px]">
                    <img
                      className="w-[20.3px] h-[20.3px] relative overflow-hidden shrink-0 z-[1]"
                      loading="lazy"
                      alt=""
                      src="/filled-iconscheck-circle-1.svg"
                    />
                    <img
                      className="w-[20.3px] h-[20.3px] relative overflow-hidden shrink-0 z-[1]"
                      loading="lazy"
                      alt=""
                      src="/filled-iconscheck-circle-1.svg"
                    />
                    <img
                      className="w-[20.3px] h-[20.3px] relative overflow-hidden shrink-0 z-[1]"
                      loading="lazy"
                      alt=""
                      src="/filled-iconscheck-circle-1.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-[1.1px] px-0 pb-0">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[26.3px]">
                      <div className="relative leading-[18px] z-[1]">
                        Interaction design
                      </div>
                      <div className="relative leading-[18px] z-[1]">
                        Finding and managing
                      </div>
                      <div className="relative leading-[18px] z-[1]">
                        Information architecture
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[14.9px]">
                  <div className="flex flex-col items-start justify-start gap-[24px]">
                    <img
                      className="w-[20.3px] h-[20.3px] relative overflow-hidden shrink-0 z-[1]"
                      loading="lazy"
                      alt=""
                      src="/filled-iconscheck-circle-1.svg"
                    />
                    <img
                      className="w-[20.3px] h-[20.3px] relative overflow-hidden shrink-0 z-[1]"
                      loading="lazy"
                      alt=""
                      src="/filled-iconscheck-circle-1.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[1.1px] px-0 pb-0">
                    <div className="flex flex-col items-start justify-start gap-[26.3px]">
                      <div className="relative leading-[18px] z-[1]">
                        Finding and managing
                      </div>
                      <div className="relative leading-[18px] inline-block min-w-[119px] z-[1]">
                        Usability testing
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[24px] mq1125:flex-wrap">
              <MasterPrimaryButton
                showLineRoundedArrowRight={false}
                propFlex="unset"
                propMinWidth="unset"
                onStartBtnClick={onStartBtnClick}
              />
              <button
                className="cursor-pointer py-[22px] pr-[33px] pl-[35px] bg-[transparent] w-[116px] [filter:drop-shadow(0px_4px_10px_rgba(20,_20,_43,_0.04))] rounded-[36.55px] box-border flex flex-row items-start justify-start gap-[8px] z-[1] border-[1.5px] border-solid border-neutral-colors-headings-black"
                onClick={onLoginBtnClick}
              >
                <img
                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden min-h-[18px]"
                  alt=""
                  src="/line-roundedsearch1.svg"
                />
                <div className="relative text-lg leading-[18px] font-text-single-200-bold text-neutral-colors-headings-black text-center inline-block min-w-[45px]">
                  Login
                </div>
                <img
                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden min-h-[18px]"
                  alt=""
                  src="/line-roundedarrow-right1.svg"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CallToActionV.propTypes = {
  className: PropTypes.string,
};

export default CallToActionV;
