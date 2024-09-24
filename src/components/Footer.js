import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-grayscale-white flex flex-row items-start justify-between py-[66px] pr-[105px] pl-[110px] box-border max-w-full gap-[20px] text-left text-lg text-neutral-colors-headings-black font-text-single-200-bold mq450:pl-[55px] mq450:pr-[52px] mq450:box-border mq800:flex-wrap mq1125:pl-5 mq1125:pr-5 mq1125:box-border ${className}`}

    >
      <div className="h-[162px] w-[1440px] relative bg-grayscale-white hidden max-w-full" />

      <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
        <div className="relative leading-[18px] z-[1]">
          <span>{`Copyright © 2024 `}</span>
          <b>DingDong</b>
        </div>
      </div>
      <div className="w-[434px] relative text-right inline-block max-w-full z-[1]">
        <span className="leading-[18px]">{`All Rights Reserved | `}</span>
        <span className="[text-decoration:underline] leading-[30px]">
          서비스이용약관
        </span>
        <span className="leading-[18px]">{` | `}</span>
        <span className="[text-decoration:underline] leading-[30px]">
          개인정보처리방침
        </span>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
