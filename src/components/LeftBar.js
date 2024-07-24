import PropTypes from "prop-types";

var title = '운수 좋은 날';
var desc = "1920년대 경성부를 배경으로, 주인공 김 첨지는 아내와 아이와 함께 가난하게 살아가는 인력거꾼이다. 김 첨지의 아내는 병에 걸린 지 한 달이 지났으나, 약을 한 번도 먹어본 적이 없다. 이는 김 첨지가 '병이란 놈에게 약을 주어 보내면 재미를 붙여서 자꾸 온다'는 신조 때문이라고 하지만, 실제로는 약을 살 돈이 없었기 때문이다.\n아내의 병이 악화된 이유는 며칠을 굶은 끝에 김 첨지가 돈을 벌어서 산 조로 밥을 지어 급하게 먹다가 체했기 때문이다. 갑작스럽게 많은 양의 음식을 먹은 아내는 앓아누웠다. 며칠 뒤 비 오는 날, 김 첨지는 병든 아내가 가지 말라고 말렸음에도 불구하고 돈을 벌기 위해 집을 나선다. 그 날 김 첨지는 운 좋게 많은 손님을 태워 2원 90전을 벌게 된다. 이는 1920년대의 가치로 큰돈이었다.\n집에 가까이 갈수록 김 첨지는 알 수 없는 불안감에 휩싸인다. 불길한 예감을 떨치기 위해 친구 치삼이를 만나 술을 마시며 시간을 보내다가, 취중에 '우리 아내가 죽었네', '아내가 죽었는데 내가 술이나 처먹고 있으니 내가 죽일 놈이다'라고 농담을 한다. 김 첨지는 술에 취한 상태에서도 아내가 먹고 싶어했던 설렁탕을 사서 집으로 돌아간다.\n집에 도착한 김 첨지는 집안에서 나는 각종 악취를 맡으며 아내에게 막말을 하고 발길질을 하지만, 아내는 이미 죽어 있었다. 김 첨지는 아내의 시신을 붙들고 \"왜 설렁탕을 사왔는데 먹지를 못하냐\"고 목놓아 울부짖으며 절망한다. 이는 김 첨지가 운이 좋다고 생각했던 날이 사실은 가장 최악의 날이었음을 보여준다. 아내는 자신이 죽을 때가 왔음을 직감하고 남편에게 가지 말라고 했던 것이다.\n등장인물로는 주인공 김 첨지, 병으로 고통받다 죽은 아내, 그리고 김 첨지의 친구인 인력거꾼 치삼이가 있다. 김 첨지는 아내를 사랑하지만 가난과 현실의 고단함 속에서 거칠게 행동하며, 아내의 죽음으로 큰 슬픔과 절망을 겪는다.";

const LeftBar = ({ className = "", finishChat }) => {
  return (
    <div
      className={`w-[279px] rounded-tl-none rounded-tr-11xl rounded-br-11xl rounded-bl-none bg-grayscale-white flex flex-col items-start justify-start pt-[51px] pb-[69px] pr-5 pl-7 box-border gap-[109.1px] z-[1] text-left text-3xl-7 text-mediumslateblue-100 font-ubuntu mq450:gap-[55px] mq450:pt-[21px] mq450:pb-[29px] mq450:box-border mq1125:pt-[33px] mq1125:pb-[45px] mq1125:box-border ${className}`}
    >
      <div className="w-[279px] h-[1024px] relative rounded-tl-none rounded-tr-11xl rounded-br-11xl rounded-bl-none bg-grayscale-white hidden" />
      <div className="flex flex-row items-start justify-start py-0 px-[31px]">
        <div className="flex flex-row items-start justify-start gap-[3.7px]">
          <img
            className="h-[34.9px] w-[22.1px] relative z-[1]"
            loading="lazy"
            alt=""
            src="/group-1.svg"
          />
          <div className="flex flex-col items-start justify-start pt-[5.1px] px-0 pb-0">
            <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[56.9px] z-[1] mq450:text-lg">
              Logo
            </a>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[83.9px] gap-[78px] text-13xl text-black font-base-body mq800:pb-[55px] mq800:box-border">
        <h2 className="m-0 w-[223px] relative text-inherit font-semibold font-inherit flex items-center z-[2] mq450:text-lgi mq800:text-7xl">
          <span className="w-full">
            <p className="m-0">{`${title}`}</p>
            <p className="m-0">다시 만들기</p>
          </span>
        </h2>
        <div className="self-stretch flex flex-col items-start justify-start gap-[13px] text-center text-xl font-pretendard">
          <div className="flex flex-row items-start justify-start py-0 px-2.5">
            <div className="relative font-medium z-[2] mq450:text-base">
              원래 동화 내용 보기
            </div>
          </div>
          <div className="self-stretch h-[250px] relative z-[2] text-left text-sm text-light-secondary font-base-body overflow-y-auto"> {/* overflow-y: auto 추가 */}
            <div className="absolute h-[98%] w-full top-[0%] right-[0%] bottom-[2%] left-[0%] bg-grayscale-white" />
            <div className="absolute top-[14px] left-[16px] leading-[22px] inline-block min-w-[104px] z-[1]">
              {desc}
            </div>
            <div className="absolute h-[2%] w-full top-[98%] right-[0%] bottom-[0%] left-[0%] bg-whitesmoke-300 box-border hidden border-[1px] border-solid border-whitesmoke-300" />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[13px] pl-[5px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[10px]">
          <button className="cursor-pointer py-2.5 px-16 bg-grayscale-white self-stretch rounded-lg flex flex-row items-start justify-start gap-[8px] z-[1] border-[1px] border-solid border-corporate-purple">
            <img
              className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/icon-button.svg"
            />
            <b className="w-[83px] relative text-lg leading-[24px] font-bold font-base-body text-corporate-purple text-center inline-block min-w-[83px]">
              그만할래요
            </b>
            <img
              className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/icon-button.svg"
            />
          </button>
          <button onClick={finishChat} className="cursor-pointer [border:none] py-3 px-[73px] bg-corporate-purple self-stretch rounded-lg flex flex-row items-start justify-start gap-[8px] z-[1]">
            <img
              className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/icon-button1.svg"
            />
            <b className="w-[67px] relative text-lg leading-[24px] font-bold font-base-body text-grayscale-white text-center inline-block min-w-[67px]">
              다했어요
            </b>
            <img
              className="h-[18px] w-[18px] relative overflow-hidden shrink-0 hidden"
              alt=""
              src="/icon-button1.svg"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

LeftBar.propTypes = {
  className: PropTypes.string,
  finishChat: PropTypes.func.isRequired, // finishChat prop의 타입 정의
};

export default LeftBar;
