// src/components/StoryCards.js
import PropTypes from "prop-types";

const StoryCards = ({ className = "", onStoryCardsContainerClick, fairytaleTitle, fairytaleImageUrl, progress, completed }) => {
  return (
    <div
      className={`shadow-[8px_8px_48px_8px_rgba(0,_0,_0,_0.08)] rounded-3xl bg-mediumpurple overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[15px] relative gap-[109px] cursor-pointer text-left text-lg text-gray-200 font-base-body ${className}`}
      onClick={onStoryCardsContainerClick}
    >
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={fairytaleImageUrl}
      />
      <div className="self-stretch [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.83)_53.5%,_rgba(255,_255,_255,_0))] flex flex-row items-start justify-between pt-0 pb-[52.7px] pr-0 pl-4 gap-[20px] z-[1]">
        <div className="h-[111px] w-[219px] relative [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.83)_53.5%,_rgba(255,_255,_255,_0))] hidden" />
        <div className="flex flex-col items-start justify-start pt-[17px] px-0 pb-0">
          <b className="relative leading-[24px] font-semibold inline-block min-w-[71px] z-[2]">
            {fairytaleTitle}
          </b>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center py-0 pr-4 pl-4 text-sm text-black">
        <div className="shadow-[0px_4px_10px_rgba(0,_0,_0,_0.41)] [backdrop-filter:blur(4px)] rounded-6xl bg-gray-300 flex flex-row items-center justify-center py-1.5 px-[52px] w-full whitespace-nowrap z-[1]">
          <b className="relative text-center font-semibold inline-block min-w-[81px] ">
            {progress === "NOT_STARTED" ? '시작하기' : completed === false ? '이어서 만들기' : '다시 만들기'}
          </b>
        </div>
      </div>
    </div>
  );
};

StoryCards.propTypes = {
  className: PropTypes.string,
  onStoryCardsContainerClick: PropTypes.func,
  fairytaleTitle: PropTypes.string.isRequired,
  fairytaleImageUrl: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
};

export default StoryCards;
