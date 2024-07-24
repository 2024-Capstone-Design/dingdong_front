import { useMemo } from "react";
import PropTypes from "prop-types";

const GroupComponent = ({
  className = "",
  iconlyLightOutline3User,
  prop,
  propGap,
  propWidth,
  propMinWidth,
  onGroupContainerClick,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const iconlyLightOutline3UserStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const bStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`self-stretch bg-grayscale-white flex flex-row items-start justify-start py-[17px] px-20 gap-[6.4px] cursor-pointer z-[1] text-left text-xl text-gray-100 font-open-sans mq450:pl-5 mq450:pr-5 mq450:box-border ${className}`}

      onClick={onGroupContainerClick}
      style={groupDivStyle}
    >
      <div className="h-[61px] w-[270px] relative bg-grayscale-white hidden" />

      <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
        <img
          className="w-[29.6px] h-[22.8px] relative z-[1]"
          alt=""
          src={iconlyLightOutline3User}
          style={iconlyLightOutline3UserStyle}
        />
      </div>
      <b
        className="relative font-bold inline-block min-w-[61px] z-[1] mq450:text-base"
        style={bStyle}
      >
        {prop}
      </b>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  iconlyLightOutline3User: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propGap: PropTypes.any,
  propWidth: PropTypes.any,
  propMinWidth: PropTypes.any,

  /** Action props */
  onGroupContainerClick: PropTypes.func,
};

export default GroupComponent;
