import PropTypes from "prop-types";

const NavbarBottomContainer = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[61px] bg-ghostwhite-200 flex flex-row items-start justify-start gap-[74px] z-[1] text-left text-xl text-mediumslateblue-100 font-open-sans ${className}`}
    >
      <div className="self-stretch w-[270px] relative bg-ghostwhite-200 hidden" />
      <div className="self-stretch w-1.5 relative bg-mediumslateblue-100 z-[2]" />
      <div className="flex flex-col items-start justify-start pt-[17px] px-0 pb-0">
        <div className="flex flex-row items-start justify-start gap-[10px]">
          <img
            className="h-[26.3px] w-[25px] relative z-[2]"
            alt=""
            src="/iconlyboldhome.svg"
          />
          <b className="relative font-bold inline-block min-w-[19px] z-[2] mq450:text-base">
            홈
          </b>
        </div>
      </div>
    </div>
  );
};

NavbarBottomContainer.propTypes = {
  className: PropTypes.string,
};

export default NavbarBottomContainer;
