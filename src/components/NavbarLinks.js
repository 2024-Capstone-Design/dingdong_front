import { useCallback } from "react";
import GroupComponent from "./GroupComponent";
import PropTypes from "prop-types";

const NavbarLinks = ({ className = "" }) => {
  const onGroupContainerClick = useCallback(() => {
    // Please sync "내 교실 리스트" to the project
  }, []);

  const onGroupContainer3Click = useCallback(() => {
    // Please sync "Settings" to the project
  }, []);

  const onGroupContainer1Click = useCallback(() => {
    // Please sync "저장한 이야기" to the project
  }, []);

  const onGroupContainer2Click = useCallback(() => {
    // Please sync "내 알림" to the project
  }, []);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[16.3px] text-left text-xl text-gray-100 font-open-sans ${className}`}
    >
      <GroupComponent
        iconlyLightOutline3User="/iconlylight-outline3-user.svg"
        prop="내 교실"
        onGroupContainerClick={onGroupContainerClick}
      />
      <div
        className="self-stretch bg-grayscale-white flex flex-row items-start justify-start pt-4 pb-[17.6px] pr-10 pl-20 gap-[11.3px] whitespace-nowrap cursor-pointer z-[1] mq450:pl-5 mq450:box-border"

        onClick={onGroupContainer1Click}
      >
        <div className="h-[61px] w-[270px] relative bg-grayscale-white hidden" />

        <img
          className="h-[27.4px] w-[22.4px] relative min-h-[27px] z-[1]"
          loading="lazy"
          alt=""
          src="/iconlylight-outlinebookmark.svg"
        />
        <b className="relative font-bold inline-block min-w-[116px] z-[1]">
          저장된 이야기
        </b>
      </div>
      <div
        className="self-stretch bg-grayscale-white flex flex-row items-start justify-start pt-[15.4px] pb-[18.6px] pr-[19px] pl-20 gap-[10px] cursor-pointer z-[1] mq450:pl-5 mq450:box-border"

        onClick={onGroupContainer2Click}
      >
        <div className="h-[61px] w-[270px] relative bg-grayscale-white hidden" />

        <img
          className="h-[27px] w-[27px] relative min-h-[27px] z-[1]"
          loading="lazy"
          alt=""
          src="/iconlylight-outlinechat.svg"
        />
        <div className="flex-1 flex flex-col items-start justify-start py-0 pr-5 pl-0">
          <b className="relative font-bold inline-block min-w-[61px] z-[1] mq450:text-base">
            내 알림
          </b>
        </div>
        <div className="w-[22px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border text-base-6 text-grayscale-white">

          <div className="self-stretch h-[22px] relative">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-mediumslateblue-100 w-full h-full z-[2]" />
            <b className="absolute top-[0px] left-[6px] font-bold inline-block w-[9.3px] h-[21px] min-w-[9.3px] z-[3]">
              2
            </b>
          </div>
        </div>
      </div>
      <GroupComponent
        iconlyLightOutline3User="/iconlylight-outlinesetting.svg"
        prop="설정"
        propGap="10px"
        propWidth="24px"
        propMinWidth="37px"
        onGroupContainerClick={onGroupContainer3Click}
      />
    </div>
  );
};

NavbarLinks.propTypes = {
  className: PropTypes.string,
};

export default NavbarLinks;
