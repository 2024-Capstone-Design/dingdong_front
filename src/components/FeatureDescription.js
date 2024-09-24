import Card from "./Card";
import PropTypes from "prop-types";

const FeatureDescription = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[85px] box-border max-w-full text-center text-17xl text-neutral-colors-headings-black font-text-single-200-bold mq450:pb-[55px] mq450:box-border mq1125:pb-9 mq1125:box-border ${className}`}

    >
      <div className="w-[1220px] flex flex-col items-end justify-start gap-[54px] max-w-full mq450:gap-[27px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[613.7px] flex flex-col items-end justify-start gap-[16px] max-w-full">
            <div className="flex flex-row items-start justify-end py-0 pr-[72px] pl-[79px] mq450:pl-[39px] mq450:pr-9 mq450:box-border">
              <h1 className="m-0 relative text-inherit leading-[46px] font-bold font-inherit mq800:text-10xl mq800:leading-[37px] mq1125:text-3xl mq1125:leading-[28px]">

                Browse our set of features
              </h1>
            </div>
            <p className="m-0 self-stretch relative text-lg leading-[30px] text-neutral-colors-text-gray">{`Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan. `}</p>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[28px] max-w-full text-9xl">
          <Card cardHeading="나만의 동화 만들기" />
          <Card cardHeading="동화 장면 그리기" />
          <Card cardHeading="블록코딩 애니메이션" />
        </div>
      </div>
    </section>
  );
};

FeatureDescription.propTypes = {
  className: PropTypes.string,
};

export default FeatureDescription;
