import { useMemo } from "react";
import PropTypes from "prop-types";

const MasterPrimaryButton = ({
  className = "",
  showLineRoundedArrowRight,
  propFlex,
  propMinWidth,
  onStartBtnClick,
}) => {
  const masterPrimaryButtonStyle = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propFlex, propMinWidth]);

  return (
    <button
      className={`cursor-pointer [border:none] py-6 px-9 bg-neutral-colors-headings-black flex-1 rounded-21xl flex flex-row items-center justify-start box-border gap-[7px] min-w-[120px] ${className}`}
      onClick={onStartBtnClick}
      style={masterPrimaryButtonStyle}
    >
      <img
        className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden min-h-[18px]"
        alt=""
        src="/line-roundedsearch1.svg"
      />
      <b className="relative text-lg leading-[18px] font-bold font-text-single-200-bold text-grayscale-white text-center inline-block min-w-[102px] whitespace-nowrap">

        Get started
      </b>
      {showLineRoundedArrowRight && (
        <img
          className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px]"
          alt=""
          src="/line-roundedarrow-right1.svg"
        />
      )}
    </button>
  );
};

MasterPrimaryButton.propTypes = {
  className: PropTypes.string,
  showLineRoundedArrowRight: PropTypes.bool,

  /** Style props */
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,

  /** Action props */
  onStartBtnClick: PropTypes.func,
};

export default MasterPrimaryButton;
