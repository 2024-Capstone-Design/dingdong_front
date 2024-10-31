// src/components/StoryCards.js
import PropTypes from "prop-types";

const StoryCards = ({ className = "", onStoryCardsContainerClick, studentName }) => {
  return (
    <div
      className={`shadow-[8px_8px_48px_8px_rgba(0,_0,_0,_0.08)] rounded-xl bg-mediumpurple overflow-hidden flex flex-col items-center justify-center px-0 pb-0 cursor-pointer text-lg text-gray-200 font-base-body ${className}`}
      onClick={onStoryCardsContainerClick}
    >
      <div className="w-full h-full [background:linear-gradient(180deg,_#fff,_rgba(255,_255,_255,_0.83)_53.5%,_rgba(255,_255,_255,_0))] pt-4 pb-4 flex items-center justify-center">
        <b className="leading-[24px] font-medium text-center">
          {studentName}
        </b>
      </div>
    </div>
  );
  

};

StoryCards.propTypes = {
  className: PropTypes.string,
  onStoryCardsContainerClick: PropTypes.func,
  studentName: PropTypes.string.isRequired,
};

export default StoryCards;
