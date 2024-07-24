import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MasterSecondaryButton from "./MasterSecondaryButton";
import PropTypes from "prop-types";

const ContentElements = ({ className = "" }) => {
  const navigate = useNavigate();

  const onContainerClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start pt-[110.3px] pb-[108.6px] pr-5 pl-[68px] box-border relative gap-[22px] min-w-[383px] max-w-full text-left text-17xl text-neutral-colors-headings-black font-text-single-200-bold mq450:pl-[34px] mq450:box-border mq450:min-w-full mq800:pt-[72px] mq800:pb-[71px] mq800:box-border ${className}`}

    >
      <div
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl bg-grayscale-white box-border cursor-pointer z-[1] border-[1px] border-solid border-neutral-colors-color-800"

        onClick={onContainerClick}
      />
      <h1 className="m-0 w-[447px] relative text-inherit leading-[48px] font-bold font-inherit inline-block max-w-full z-[2] mq800:text-3xl mq800:leading-[28px] mq1125:text-10xl mq1125:leading-[37px]">

        학생이신가요?
      </h1>
      <p className="m-0 w-[451px] relative text-lg leading-[30px] text-neutral-colors-text-gray inline-block max-w-full z-[2]">
        학생은 선생님이 아이디와 비밀번호를 만들어 주는 경우에만 사용
        가능합니다! 아이디와 비밀번호가 있는 경우 아래 버튼을 눌러 시작해주세요
        :)
      </p>
      <MasterSecondaryButton />
    </div>
  );
};

ContentElements.propTypes = {
  className: PropTypes.string,
};

export default ContentElements;
