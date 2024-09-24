import PropTypes from "prop-types";

const AddCharacter = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-2xl bg-grayscale-white box-border flex flex-row items-start justify-end pt-[63px] px-[9px] pb-[11px] max-w-full z-[2] border-[1px] border-solid border-silver-100 ${className}`}
    >
      <div className="h-[126px] w-[1027px] relative rounded-2xl bg-grayscale-white box-border hidden max-w-full border-[1px] border-solid border-silver-100" />
      <button className="cursor-pointer [border:none] py-3 px-8 bg-lavender rounded-2xl flex flex-row items-start justify-start gap-[8px] z-[3]">
        
        <b className="w-[50px] relative text-lg leading-[24px] font-bold font-base-body text-corporate-purple text-center inline-block min-w-[50px]">
          보내기
        </b>
      </button>
    </div>
  );
};

AddCharacter.propTypes = {
  className: PropTypes.string,
};

export default AddCharacter;
