import PropTypes from "prop-types";

const TestimonialCard = ({
  className = "",
  testimonialTitle,
  testimonialParagraph,
  testimonalName,
  testimonialRole,
}) => {
  return (
    <div
      className={`flex-1 rounded-3xl bg-grayscale-white box-border flex flex-col items-start justify-start py-12 px-[39px] gap-[32px] min-w-[291px] max-w-full text-left text-3xl text-neutral-colors-headings-black font-text-single-200-bold border-[1px] border-solid border-neutral-colors-color-600 mq1125:gap-[16px] mq1125:pt-[31px] mq1125:pb-[31px] mq1125:box-border ${className}`}

    >
      <div className="w-[388px] h-[412px] relative rounded-3xl bg-grayscale-white box-border hidden max-w-full border-[1px] border-solid border-neutral-colors-color-600" />

      <img
        className="w-20 h-20 relative z-[1]"
        loading="lazy"
        alt=""
        src="/image-placeholder.svg"
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
        <b className="self-stretch relative leading-[22px] z-[1] mq1125:text-lg mq1125:leading-[18px]">

          {testimonialTitle}
        </b>
        <p className="m-0 self-stretch relative text-lg leading-[30px] text-neutral-colors-text-gray z-[1]">
          {testimonialParagraph}
        </p>
      </div>
      <div className="flex flex-col items-start justify-start gap-[8px] text-lg">
        <b className="relative leading-[18px] font-bold inline-block min-w-[105px] z-[1]">
          {testimonalName}
        </b>
        <div className="relative leading-[18px] text-lightslategray z-[1]">
          {testimonialRole}
        </div>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  className: PropTypes.string,
  testimonialTitle: PropTypes.string,
  testimonialParagraph: PropTypes.string,
  testimonalName: PropTypes.string,
  testimonialRole: PropTypes.string,
};

export default TestimonialCard;
