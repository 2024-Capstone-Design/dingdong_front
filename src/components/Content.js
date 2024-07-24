import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MasterPrimaryButton from "./MasterPrimaryButton";
import PropTypes from "prop-types";

const Content = ({ className = "" }) => {
  const navigate = useNavigate();

  const onMasterPrimaryButtonClick = useCallback(() => {
    navigate("/teacher-signup");
  }, [navigate]);

  const onMasterSecondaryButtonClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <section
      className={`flex flex-row items-start justify-start pt-0 pb-[84px] pr-0 pl-0.5 box-border max-w-full text-left text-25xl text-neutral-colors-headings-black font-text-single-200-bold mq450:pb-9 mq450:box-border mq800:pb-[55px] mq800:box-border ${className}`}

    >
      <div className="w-[1438px] bg-grayscale-white overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-full">
        <div className="ml-[-1px] w-[1707px] flex flex-row items-start justify-start py-[114px] pr-0 pl-[125px] box-border gap-[57.1px] shrink-0 [debug_commit:bf4bc93] max-w-[119%] lg:flex-wrap lg:pl-[62px] lg:box-border mq450:gap-[29px] mq450:pl-[31px] mq450:box-border mq800:pt-[74px] mq800:pb-[74px] mq800:box-border mq1125:pt-12 mq1125:pb-12 mq1125:box-border">
          <div className="h-[848px] w-[1440px] relative bg-grayscale-white hidden max-w-full" />

          <div className="w-[455.1px] flex flex-col items-start justify-start pt-[82px] px-0 pb-0 box-border min-w-[455.09999999999854px] max-w-full lg:flex-1 mq450:pt-[53px] mq450:box-border mq450:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[50px] max-w-full mq1125:gap-[25px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[32px] mq1125:gap-[16px]">
                <h1 className="m-0 self-stretch relative text-inherit leading-[50px] font-bold font-inherit z-[1] mq800:text-16xl mq800:leading-[40px] mq1125:text-7xl mq1125:leading-[30px]">

                  <p className="m-0">{`Boost your `}</p>
                  <p className="m-0">Creativity with our Service</p>
                </h1>
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-lg text-neutral-colors-text-gray">
                  <p className="m-0 self-stretch relative leading-[30px] z-[1]">
                    By creating a visual guide along the way, the designer or
                    developer can get input from the other people involved in
                    the website such as the customer, their manager, and other
                    members of the team.
                  </p>
                  <p className="m-0 self-stretch relative leading-[30px] z-[1]">{`The visual guide will provide a view to the customer of what their website or project will end up looking like. `}</p>
                </div>
              </div>
              <div className="w-[359px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border max-w-full z-[1]">
                <div className="flex-1 flex flex-row items-center justify-start gap-[6px] max-w-full">
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/line-roundedpassword.svg"
                  />
                  <div className="flex-1 flex flex-row items-center justify-start gap-[24px] max-w-full mq1125:flex-wrap">

                    <MasterPrimaryButton
                      showLineRoundedArrowRight
                      onMasterPrimaryButtonClick={onMasterPrimaryButtonClick}
                    />
                    <button
                      className="cursor-pointer py-[22px] pr-[34px] pl-[35px] bg-grayscale-white rounded-[36.55px] flex flex-row items-center justify-start gap-[8px] border-[1px] border-solid border-neutral-colors-color-600"

                      onClick={onMasterSecondaryButtonClick}
                    >
                      <img
                        className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden min-h-[18px]"
                        alt=""
                        src="/line-roundedsearch.svg"
                      />
                      <div className="relative text-lg leading-[18px] font-text-single-200-bold text-neutral-colors-headings-black text-center inline-block min-w-[45px]">
                        Login
                      </div>
                      <img
                        className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden min-h-[18px]"
                        alt=""
                        src="/line-roundedarrow-right.svg"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="h-[620px] flex-1 relative max-w-full overflow-hidden min-w-[695px] z-[1] mq800:min-w-full"

            loading="lazy"
            alt=""
            src="/imagedevicemacbook.svg"
          />
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
