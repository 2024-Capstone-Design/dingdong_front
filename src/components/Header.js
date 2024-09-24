import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

const Header = ({
    className = "",
  }) => {
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

    const onLoginBtnClick = useCallback(() => {
      navigate("/login");
    }, [navigate]);

    const onStartBtnClick = useCallback(() => {
      navigate("/signup");
    }, [navigate]);
    return (
      <div
        className={`self-stretch bg-grayscale-white flex flex-row items-end justify-between pt-[32.1px] pb-[31.9px] pr-[110px] pl-20 box-border top-[0] z-[99] sticky max-w-full gap-[20px] text-left text-3xl-7 text-mediumslateblue-100 font-ubuntu mq450:pl-10 mq450:pr-[55px] mq450:box-border mq1125:pr-5 mq1125:box-border ${className}`}

      >
        <header className="h-[117.9px] w-[1440px] relative bg-grayscale-white hidden max-w-full" />

        <div className="w-28 flex flex-col items-start justify-end pt-0 px-0 pb-[9.2px] box-border">
          <div
            className="self-stretch flex flex-row items-start justify-start gap-[5px] cursor-pointer z-[1]"
            onClick={onLogoContainerClick}
          >
            <img
              className="h-[34.9px] w-[29.9px] relative"
              loading="lazy"
              alt=""
              src="/group-11.svg"

            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[5.1px] px-0 pb-0">
              <a className="[text-decoration:none] self-stretch relative font-bold text-[inherit] whitespace-nowrap mq1125:text-lg">

                Logo
              </a>
            </div>
          </div>
        </div>
        <div className="w-[480px] flex flex-row items-start justify-start gap-[24px] max-w-full text-center text-lg text-neutral-colors-headings-black font-text-single-200-bold mq450:w-[162px]">
          <div className="flex-1 flex flex-row items-start justify-between gap-[20px] mq450:hidden">
            <div className="flex flex-col items-start justify-start pt-[18px] pb-0 pr-[9px] pl-0">
              <a
                className="[text-decoration:none] relative leading-[18px] text-[inherit] inline-block min-w-[52px] cursor-pointer z-[1]"
                onClick={onAboutTextClick}
              >
                About
              </a>
            </div>
            <div className="flex flex-col items-start justify-start pt-[18px] pb-0 pr-[9px] pl-0">
              <a
                className="[text-decoration:none] relative leading-[18px] text-[inherit] inline-block min-w-[55px] cursor-pointer z-[1]"
                onClick={onNoticeTextClick}
              >
                Notice
              </a>
            </div>
            <div className="flex flex-col items-start justify-start pt-[18px] px-0 pb-0">
              <a
                className="[text-decoration:none] relative leading-[18px] text-[inherit] inline-block min-w-[34px] cursor-pointer z-[1]"
                onClick={onFAQTextClick}
              >
                FAQ
              </a>
            </div>
            <button
              className="cursor-pointer py-4 pr-[22px] pl-[23px] bg-grayscale-white w-[87px] rounded-11xl box-border flex flex-row items-start justify-start gap-[8px] z-[1] border-[1px] border-solid border-neutral-colors-color-600"

              onClick={onLoginBtnClick}
            >
              <img
                className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden min-h-[18px]"
                alt=""
                src="/line-roundedsearch.svg"
              />
              <a className="[text-decoration:none] relative text-base leading-[18px] font-text-single-200-bold text-neutral-colors-headings-black text-center inline-block min-w-[40px]">
                Login
              </a>
              <img
                className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden min-h-[18px]"
                alt=""
                src="/line-roundedarrow-right.svg"
              />
            </button>
          </div>
          <button
            className="cursor-pointer [border:none] py-[18px] px-[23px] bg-neutral-colors-headings-black rounded-11xl flex flex-row items-start justify-start gap-[8px] z-[1]"
            onClick={onStartBtnClick}
          >
            <img
              className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden min-h-[18px]"
              alt=""
              src="/line-roundedsearch1.svg"
            />
            <a className="[text-decoration:none] relative text-base leading-[18px] font-bold font-text-single-200-bold text-grayscale-white text-center inline-block min-w-[91px] whitespace-nowrap">

              Get started
            </a>
            <img
              className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden min-h-[18px]"
              alt=""
              src="/line-roundedarrow-right1.svg"
            />
          </button>
        </div>
      </div>
    );
};

Header.propTypes = {
  className: PropTypes.string,

  /** Action props */
  onLogoContainerClick: PropTypes.func,
  onAboutTextClick: PropTypes.func,
  onNoticeTextClick: PropTypes.func,
  onFAQTextClick: PropTypes.func,
  onLoginBtnClick: PropTypes.func,
  onStartBtnClick: PropTypes.func,
};

export default Header;
