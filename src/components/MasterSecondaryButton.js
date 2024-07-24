import PropTypes from "prop-types";

const MasterSecondaryButton = ({ className = "" }) => {
  return (
    <button
      className={`cursor-pointer [border:none] pt-[22.4px] px-9 pb-[22.5px] bg-neutral-colors-headings-black rounded-21xl flex flex-row items-start justify-start gap-[8px] z-[2] ${className}`}
    >
      <img
        className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden min-h-[18px]"
        alt=""
        src="/line-roundedsearch4.svg"
      />
      <b className="w-[137px] relative text-lg leading-[18px] font-bold font-text-single-200-bold text-grayscale-white text-center inline-block">

        학생으로 시작하기
      </b>
      <img
        className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden min-h-[18px]"
        alt=""
        src="/line-roundedarrow-right5.svg"
      />
    </button>
  );
};

MasterSecondaryButton.propTypes = {
  className: PropTypes.string,
};

export default MasterSecondaryButton;
