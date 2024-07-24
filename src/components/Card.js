import PropTypes from "prop-types";

const Card = ({ className = "", cardHeading }) => {
  return (
    <div
      className={`flex-1 rounded-3xl bg-grayscale-white box-border flex flex-col items-end justify-start pt-[70px] px-[31px] pb-[79px] gap-[53px] min-w-[291px] max-w-full text-center text-9xl text-neutral-colors-headings-black font-text-single-200-bold border-[1px] border-solid border-neutral-colors-color-600 mq450:pt-[45px] mq450:pb-[51px] mq450:box-border mq1125:gap-[26px] ${className}`}

    >
      <div className="w-[388px] h-[503px] relative rounded-3xl bg-grayscale-white box-border hidden max-w-full border-[1px] border-solid border-neutral-colors-color-600" />

      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-0 pl-px">
        <div className="rounded-xl bg-ghostwhite-100 flex flex-row items-start justify-start pt-[49px] px-11 pb-[48.9px] z-[1]">
          <div className="h-[161px] w-[161px] relative rounded-xl bg-ghostwhite-100 hidden" />
          <img
            className="h-[63.1px] w-[71.6px] relative z-[1]"
            loading="lazy"
            alt=""
            src="/image-icon.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
        <h3 className="m-0 self-stretch relative text-inherit leading-[38px] font-bold font-inherit z-[1] mq1125:text-3xl mq1125:leading-[30px]">

          {cardHeading}
        </h3>
        <p className="m-0 self-stretch relative text-lg leading-[30px] text-neutral-colors-text-gray z-[1]">
          Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar
          cons elementum tempus hac.
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  cardHeading: PropTypes.string,
};

export default Card;
