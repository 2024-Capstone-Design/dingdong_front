import TestimonialCard from "./TestimonialCard";
import PropTypes from "prop-types";

const ServiceReview = ({ className = "" }) => {
  return (
    <section
      className={`mr-[-1px] self-stretch bg-grayscale-white flex flex-col items-center justify-start pt-[150.7px] px-5 pb-[150.3px] box-border gap-[50px] max-w-full text-center text-17xl text-neutral-colors-headings-black font-text-single-200-bold mq450:gap-[25px] mq800:pt-[98px] mq800:pb-[98px] mq800:box-border mq1125:pt-16 mq1125:pb-16 mq1125:box-border ${className}`}

    >
      <div className="w-[1440px] h-[885px] relative bg-grayscale-white hidden max-w-full" />

      <div className="w-[1220px] flex flex-row items-start justify-center max-w-full">
        <div className="w-[613.7px] flex flex-col items-end justify-start gap-[16px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[23px]">
            <h1 className="m-0 relative text-inherit leading-[46px] font-bold font-inherit z-[1] mq800:text-10xl mq800:leading-[37px] mq1125:text-3xl mq1125:leading-[28px]">

              What our users say
            </h1>
          </div>
          <p className="m-0 self-stretch relative text-lg leading-[30px] text-neutral-colors-text-gray z-[1]">{`Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar elementum tempus hac tellus libero accumsan. `}</p>
        </div>
      </div>
      <div className="w-[1220px] flex flex-row flex-wrap items-start justify-center gap-[28px] max-w-full z-[1] text-left text-3xl">
        <TestimonialCard
          testimonialTitle="“An amazing service”"
          testimonialParagraph="Lorem ipsum dolor sit ametolil col consectetur adipiscing lectus a nunc mauris scelerisque sed egestas."
          testimonalName="John Carter"
          testimonialRole="Designer at BRIX Templates"
        />
        <div className="flex-1 rounded-3xl bg-grayscale-white box-border flex flex-col items-start justify-start py-12 px-[39px] gap-[32px] min-w-[291px] max-w-full border-[1px] border-solid border-neutral-colors-color-600 mq1125:gap-[16px] mq1125:pt-[31px] mq1125:pb-[31px] mq1125:box-border">
          <div className="w-[388px] h-[412px] relative rounded-3xl bg-grayscale-white box-border hidden max-w-full border-[1px] border-solid border-neutral-colors-color-600" />

          <img
            className="w-20 h-20 relative z-[1]"
            loading="lazy"
            alt=""
            src="/image-placeholder.svg"
          />
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <blockquote className="m-0 self-stretch relative leading-[22px] font-bold z-[1] mq1125:text-lg mq1125:leading-[18px]">

              “One of a kind service”
            </blockquote>
            <p className="m-0 self-stretch relative text-lg leading-[30px] text-neutral-colors-text-gray z-[1]">
              Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra
              diam sit amet nisl suscipit adipis.
            </p>
          </div>
          <div className="flex flex-col items-start justify-start gap-[8px] text-lg">
            <b className="relative leading-[18px] font-bold inline-block min-w-[121px] z-[1]">
              Sophie Moore
            </b>
            <div className="relative leading-[18px] text-lightslategray z-[1]">
              Head of Design at BRIX Templates
            </div>
          </div>
        </div>
        <TestimonialCard
          testimonialTitle="“The best service”"
          testimonialParagraph="Convallis posuere morbi leo urna molestie at elementum eu facilisis sapien pellentesque habitant."
          testimonalName="Andy Smith"
          testimonialRole="Developer at BRIX Templates"
        />
      </div>
    </section>
  );
};

ServiceReview.propTypes = {
  className: PropTypes.string,
};

export default ServiceReview;
