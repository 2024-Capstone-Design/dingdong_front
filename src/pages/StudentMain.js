import { useCallback } from "react";
import NavbarBottomContainer from "../components/NavbarBottomContainer";
import NavbarLinks from "../components/NavbarLinks";
import { useNavigate } from "react-router-dom";
import StoryCards from "../components/StoryCards";

const Frame4 = () => {
  const navigate = useNavigate();

  const onStoryCardsContainerClick = useCallback(() => {
    // Please sync "블록코딩 페이지" to the project
  }, []);

  const onSignOutContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/chat-room");
  }, [navigate]);

  const onGroupContainer1Click = useCallback(() => {
    // Please sync "메인페이지 학생용" to the project
  }, []);

  return (
    <div className="w-full relative bg-ghostwhite-200 overflow-hidden flex flex-row flex-wrap items-start justify-start gap-[22px] leading-[normal] tracking-[normal] text-center text-base-5 text-light-secondary1 font-inter">

      <div className="w-[8.3px] relative font-medium hidden items-center justify-center h-5 shrink-0">
        1
      </div>
      <div className="w-[10.3px] relative font-medium hidden items-center justify-center h-5 shrink-0">
        2
      </div>
      <div className="w-[11px] relative font-medium hidden items-center justify-center h-5 shrink-0">
        3
      </div>
      <div className="w-[270px] rounded-tl-none rounded-tr-11xl rounded-br-11xl rounded-bl-none bg-grayscale-white flex flex-col items-end justify-start pt-[51px] px-0 pb-[55px] box-border gap-[114.1px] text-left text-3xl-7 text-mediumslateblue-100 font-ubuntu mq450:gap-[57px] mq450:pt-[21px] mq450:pb-[23px] mq450:box-border mq1125:pt-[33px] mq1125:pb-9 mq1125:box-border">
        <div className="self-stretch h-[1024px] relative rounded-tl-none rounded-tr-11xl rounded-br-11xl rounded-bl-none bg-grayscale-white hidden" />

        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[78px] pl-20 mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="flex-1 flex flex-row items-start justify-start gap-[5px]">
            <img
              className="h-[34.9px] w-[29.9px] relative z-[1]"
              loading="lazy"
              alt=""
              src="/group-11.svg"

            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[5.1px] px-0 pb-0">
              <a className="[text-decoration:none] self-stretch relative font-bold text-[inherit] z-[1] mq450:text-lg">
                Logo
              </a>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[252.9px] gap-[21px] mq800:pb-[164px] mq800:box-border">

          <NavbarBottomContainer />
          <NavbarLinks />
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-[71px] text-xl text-indianred font-open-sans mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div
            className="flex flex-row items-start justify-start gap-[10px] cursor-pointer z-[1]"
            onClick={onSignOutContainerClick}
          >
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <img
                className="w-6 h-[23.4px] relative object-cover"
                loading="lazy"
                alt=""
                src="/iconlylight-outlinelogout@2x.png"
              />
            </div>
            <b className="relative font-bold inline-block min-w-[85px] mq450:text-base">
              Sign Out
            </b>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start justify-start pt-[43px] pb-0 pr-[5px] pl-0 box-border min-w-[482px] max-w-full text-xl text-black font-base-body mq450:pt-5 mq450:box-border mq800:min-w-full mq1125:pt-7 mq1125:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-[48px] max-w-full mq1125:gap-[24px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full text-left text-13xl text-grayscale-white font-open-sans">
            <div className="self-stretch rounded-31xl bg-grayscale-white flex flex-row items-start justify-start pt-[13px] px-[37px] pb-[12.5px] box-border gap-[10px] max-w-full">
              <div className="h-[50px] w-[736px] relative rounded-31xl bg-grayscale-white hidden max-w-full" />

              <img
                className="h-[24.5px] w-6 relative min-h-[25px] z-[1]"
                alt=""
                src="/iconlylight-outlinesearch.svg"
              />
              <input
                className="w-72 [border:none] [outline:none] bg-[transparent] h-[22px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border font-open-sans font-semibold text-mini text-gray-100"
                placeholder="Search Courses, Documents, Activities... "
                type="text"
              />
            </div>
            <div className="self-stretch rounded-xl [background:linear-gradient(90deg,_#ab72ff,_#7048a9)] flex flex-row items-start justify-between pt-[39px] pb-1 pr-[17px] pl-10 box-border relative max-w-full gap-[20px] mq800:flex-wrap">

              <div className="h-[175px] w-[736px] relative rounded-xl [background:linear-gradient(90deg,_#ab72ff,_#7048a9)] hidden max-w-full z-[0]" />
              <img
                className="h-[212px] w-[291px] relative object-cover hidden z-[1]"
                alt=""
                src="/cool-kids-avatar@2x.png"
              />
              <div className="w-[362px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border min-w-[362px] max-w-full mq450:min-w-full mq800:flex-1">

                <div className="self-stretch flex flex-col items-start justify-start gap-[1px] max-w-full">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[2px] max-w-full mq450:flex-wrap">
                    <h1 className="m-0 h-[53px] flex-1 relative text-inherit tracking-[-0.03em] font-bold font-inherit inline-block min-w-[209px] max-w-full z-[1] mq450:text-lgi mq1125:text-7xl">

                      반가워요! OOO 친구
                    </h1>
                    <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                      <img
                        className="w-[38px] h-[38px] relative object-cover z-[1]"
                        loading="lazy"
                        alt=""
                        src="/image-296@2x.png"
                      />
                    </div>
                  </div>
                  <h3 className="m-0 relative text-mini tracking-[0.02em] leading-[175.68%] font-normal font-inherit inline-block max-w-full z-[1]">
                    <p className="m-0">
                      이번주에 해야하는 동화만들기가 거의 다 끝났어요!
                    </p>
                    <p className="m-0">아래에서 계속 진행해보아요 :)</p>
                  </h3>
                </div>
              </div>
              <img
                className="h-[132px] w-[131px] relative object-contain z-[2] mq800:flex-1"

                loading="lazy"
                alt=""
                src="/backpack@2x.png"
              />
              <img
                className="h-[224.8px] w-[224.8px] absolute !m-[0] top-[-29px] right-[89.2px] object-contain z-[3]"
                alt=""
                src="/scholarcap-scroll@2x.png"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-6 box-border gap-[12px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-1.5 pl-[3px] box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
                <h1 className="m-0 relative text-inherit font-semibold font-inherit inline-block min-w-[120px] mq450:text-base">
                  진행 중인 동화
                </h1>
                <b className="w-14 relative font-semibold text-mediumslateblue-200 flex items-center justify-center min-w-[56px] mq450:text-base">
                  더보기
                </b>
              </div>
            </div>
            <div className="self-stretch grid flex-row items-start justify-start py-0 pr-[31px] pl-0 gap-[24px] grid-cols-[repeat(3,_minmax(164px,_1fr))] mq450:grid-cols-[minmax(164px,_1fr)] mq800:justify-center mq800:grid-cols-[repeat(2,_minmax(164px,_285px))]">

              <StoryCards
                onStoryCardsContainerClick={onStoryCardsContainerClick}
              />
              <StoryCards />
              <StoryCards />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-2.5 pl-0.5 box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full">
              <div className="flex flex-row items-start justify-start py-0 px-px">
                <b className="w-[97px] relative font-semibold inline-block min-w-[97px] mq450:text-base">
                  새로 만들기
                </b>
              </div>
              <div className="self-stretch flex flex-row items-start justify-center gap-[12px] max-w-full text-left text-3xs text-grayscale-white mq800:flex-wrap">

                <div
                  className="flex-1 rounded-3xs [background:linear-gradient(180deg,_#6363af,_#35346e)] flex flex-row items-start justify-start pt-[19px] pb-0.5 pr-3.5 pl-[21px] box-border gap-[14px] min-w-[231px] max-w-full cursor-pointer"
                  onClick={onGroupContainerClick}
                >
                  <div className="h-[124px] w-[356px] relative rounded-3xs [background:linear-gradient(180deg,_#6363af,_#35346e)] hidden max-w-full" />
                  <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                    <div className="w-[132px] relative text-lightsteelblue inline-block z-[1]">
                      Interactive Storytelling
                    </div>
                    <h3 className="m-0 w-[190px] relative text-mini font-semibold font-inherit inline-block z-[1]">
                      새로운 나만의 동화 만들기
                    </h3>
                    <div className="relative font-pretendard z-[1]">
                      내가 알던 동화의 내용을 내가 원하는대로 바꿀 수 있어요!
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                    <div className="flex flex-col items-end justify-start gap-[13.2px]">
                      <div className="flex flex-row items-start justify-end py-0 px-1.5">
                        <img
                          className="h-[8.8px] w-[16.6px] relative object-contain z-[1]"
                          loading="lazy"
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                      <img
                        className="w-[76px] h-[76px] relative object-cover z-[2]"
                        loading="lazy"
                        alt=""
                        src="/3dicons@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="flex-1 rounded-3xs [background:linear-gradient(180deg,_#7b9bf7,_#3457c7)] flex flex-row items-start justify-start pt-[19px] pb-0.5 pr-3.5 pl-[19px] box-border gap-[3px] min-w-[231px] max-w-full cursor-pointer text-lightsteelblue"
                  onClick={onGroupContainer1Click}
                >
                  <div className="h-[124px] w-[356px] relative rounded-3xs [background:linear-gradient(180deg,_#7b9bf7,_#3457c7)] hidden max-w-full" />
                  <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="w-[106.2px] relative inline-block z-[1]">
                        Block Coding
                      </div>
                      <h3 className="m-0 self-stretch relative text-mini font-semibold font-inherit text-grayscale-white z-[1] mt-[-0.6px]">

                        내가 만든 동화 애니메이션으로 만들기
                      </h3>
                    </div>
                    <div className="w-[231px] relative font-pretendard text-grayscale-white inline-block z-[1]">

                      내가 만든 나만의 동화를 애니메이션으로 만들 수 있어요!
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                    <div className="flex flex-col items-end justify-start gap-[13.2px]">
                      <div className="flex flex-row items-start justify-end py-0 px-2">
                        <img
                          className="h-[8.8px] w-[16.6px] relative object-contain z-[1]"
                          loading="lazy"
                          alt=""
                          src="/vector.svg"
                        />
                      </div>
                      <img
                        className="w-[76px] h-[76px] relative object-cover z-[1]"
                        loading="lazy"
                        alt=""
                        src="/3dicons-1@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[385px] rounded-tl-11xl rounded-tr-none rounded-br-none rounded-bl-11xl bg-grayscale-white flex flex-col items-start justify-start pt-[43px] pb-[22px] pr-[22px] pl-8 box-border gap-[61.1px] max-w-full text-left text-mini text-light-primary font-open-sans mq450:gap-[31px] mq450:pt-5 mq450:box-border mq1125:pt-7 mq1125:pb-5 mq1125:box-border">
        <div className="w-[385px] h-[1024px] relative rounded-tl-11xl rounded-tr-none rounded-br-none rounded-bl-11xl bg-grayscale-white hidden max-w-full" />

        <div className="w-[304px] flex flex-col items-end justify-start gap-[43px] mq450:gap-[21px]">
          <div className="w-[182px] rounded-3xs bg-ghostwhite-200 flex flex-row items-end justify-between pt-[4.9px] pb-[4.8px] pr-3 pl-[13px] box-border gap-[20px] z-[1]">
            <div className="h-[50px] w-[182px] relative rounded-3xs bg-ghostwhite-200 hidden" />
            <div className="flex flex-row items-start justify-start gap-[10px]">
              <div className="h-[40.3px] w-[47px] relative">
                <div className="absolute top-[0px] left-[2.9px] rounded-[9.59px] bg-mediumslateblue-100 w-[42.2px] h-[40.3px] z-[1]" />
                <img
                  className="absolute top-[0px] left-[0px] rounded-[9.59px] w-full h-full object-cover z-[2]"
                  alt=""
                  src="/allura-avatar@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-[12.1px] px-0 pb-0">
                <a className="[text-decoration:none] relative tracking-[-0.03em] font-semibold text-[inherit] inline-block min-w-[55px] z-[1]">
                  Student
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[12.2px]">
              <img
                className="w-3 h-3 relative object-contain z-[1]"
                alt=""
                src="/icon--chevron-left@2x.png"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start gap-[28px] text-xl">
            <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[5px] pl-0">
              <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                <b className="h-5 w-[122px] relative font-bold flex items-center shrink-0 z-[1] mq450:text-base">
                  나의 일정
                </b>
                <div className="w-[122px] flex flex-row items-end justify-start text-center text-base-5 text-gray-100">
                  <b className="flex-1 relative font-bold z-[1]">2024년 8월</b>
                  <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[3.5px] ml-[-12px]">
                    <img
                      className="w-[10.8px] h-[6.5px] relative z-[1]"
                      alt=""
                      src="/vector-2-stroke.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[293.6px] flex flex-row items-start justify-start gap-[13.5px] text-center text-base-5 font-inter">
              <div className="w-[25.5px] flex flex-col items-start justify-start gap-[63.9px]">
                <div className="self-stretch relative font-medium inline-block min-w-[25.5px] z-[1]">
                  Mo
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-0.5 text-light-secondary1">

                  <div className="flex-1 flex flex-col items-end justify-start gap-[22px]">
                    <div className="self-stretch flex flex-row items-start justify-end py-0 pr-1 pl-[5px]">
                      <div className="relative font-medium inline-block min-w-[11px] z-[1]">
                        5
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-end py-0 px-px">
                      <div className="flex-1 relative font-medium inline-block min-w-[18.6px] z-[1]">
                        12
                      </div>
                    </div>
                    <div className="relative font-medium inline-block min-w-[19px] z-[1]">
                      19
                    </div>
                    <div className="relative font-medium inline-block min-w-[21px] z-[1]">
                      26
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[38.5px] flex flex-col items-start justify-start gap-[63.9px]">
                <div className="flex flex-row items-start justify-start py-0 pr-2.5 pl-2">
                  <div className="relative font-medium inline-block min-w-[20px] z-[1]">
                    Tu
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[22px] text-light-secondary1">

                  <div className="self-stretch flex flex-col items-start justify-start gap-[12.8px]">
                    <div className="flex flex-row items-start justify-start py-0 pr-3.5 pl-[13px]">
                      <div className="relative font-medium inline-block min-w-[11px] z-[1]">
                        6
                      </div>
                    </div>
                    <div className="self-stretch h-[38.5px] relative text-grayscale-white">

                      <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-deeppink w-full h-full z-[1]" />
                      <div className="absolute top-[8.9px] left-[9.6px] font-medium flex items-center justify-center w-[19px] h-5 min-w-[19px] z-[2]">
                        13
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[9px] pl-2">
                      <div className="flex-1 relative font-medium inline-block min-w-[21.3px] z-[1]">
                        20
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 pr-2.5 pl-2">
                    <div className="relative font-medium inline-block min-w-[20px] z-[1]">
                      27
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[25.5px] flex flex-col items-start justify-start gap-[63.9px]">
                <div className="self-stretch relative font-medium inline-block min-w-[25.5px] z-[1]">
                  We
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 px-0.5 text-light-secondary1">

                  <div className="flex-1 flex flex-col items-end justify-start gap-[22px]">
                    <div className="self-stretch flex flex-row items-start justify-end py-0 px-[5px]">
                      <div className="relative font-medium inline-block min-w-[10px] z-[1]">
                        7
                      </div>
                    </div>
                    <div className="w-[19.3px] relative font-medium flex items-center justify-center min-w-[19.3px] z-[1]">
                      14
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-end py-0 px-px">
                      <div className="flex-1 relative font-medium inline-block min-w-[18.6px] z-[1]">
                        21
                      </div>
                    </div>
                    <div className="relative font-medium inline-block min-w-[21px] z-[1]">
                      28
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-row items-start justify-start gap-[3.1px]">
                <div className="flex-1 flex flex-col items-end justify-start gap-[22px]">
                  <div className="self-stretch flex flex-row items-start justify-end py-0 pr-2 pl-[9px]">
                    <div className="flex-1 relative font-medium inline-block min-w-[21.3px] z-[1]">
                      Th
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-end justify-start gap-[12.3px] text-light-secondary1">

                    <div className="self-stretch flex flex-row items-start justify-end py-0 pr-3.5 pl-[15px]">
                      <div className="w-[8.3px] relative font-medium flex items-center justify-center shrink-0 min-w-[8.3px] z-[1]">
                        1
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[9.7px] gap-[13.1px] text-grayscale-white">

                      <div className="self-stretch h-[38.5px] relative">
                        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-mediumslateblue-100 w-full h-full z-[1]" />
                        <div className="absolute top-[9.6px] left-[13.8px] font-medium flex items-center justify-center w-[11px] h-5 min-w-[11px] z-[2]">
                          8
                        </div>
                      </div>
                      <div className="flex flex-row items-start justify-end py-0 pr-[9px] pl-2.5 text-light-secondary1">

                        <div className="relative font-medium inline-block min-w-[19px] z-[1]">
                          15
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-end py-0 pr-2 pl-[9px]">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[22px]">
                        <div className="relative font-medium inline-block min-w-[21px] z-[1]">
                          22
                        </div>
                        <div className="relative font-medium inline-block min-w-[21px] z-[1]">
                          29
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[22px]">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[11px] pl-2.5">
                    <div className="w-[16.5px] relative font-medium flex items-center justify-center shrink-0 min-w-[16.5px] z-[1]">
                      Fr
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-end justify-start gap-[12.7px] text-light-secondary1">

                    <div className="flex flex-row items-start justify-end py-0 pr-[13px] pl-3.5">
                      <div className="relative font-medium inline-block min-w-[11px] z-[1]">
                        2
                      </div>
                    </div>
                    <div className="self-stretch h-[38.5px] relative">
                      <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-ghostwhite-200 w-full h-full z-[1]" />
                      <div className="absolute top-[9.6px] left-[13.3px] font-medium flex items-center justify-center w-[11px] h-5 min-w-[11px] z-[2]">
                        9
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-end py-0 pr-[9px] pl-2.5">
                      <div className="relative font-medium inline-block min-w-[19px] z-[1]">
                        16
                      </div>
                    </div>
                    <div className="self-stretch h-[38.5px] relative text-grayscale-white">

                      <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-coral w-full h-full z-[1]" />
                      <div className="absolute top-[8.9px] left-[8.7px] font-medium flex items-center justify-center w-[21.3px] h-5 min-w-[21.3px] z-[2]">
                        23
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-end py-0 pr-2 pl-[9px]">
                      <div className="relative font-medium inline-block min-w-[22px] z-[1]">
                        30
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[22px] text-light-secondary1">

                  <div className="flex flex-row items-start justify-start py-0 pr-[9px] pl-2 text-light-primary">
                    <div className="relative font-medium inline-block min-w-[21px] z-[1]">
                      Sa
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[12.7px]">
                    <div className="flex flex-row items-start justify-start py-0 pr-[15px] pl-3">
                      <div className="relative font-medium inline-block min-w-[11px] z-[1]">
                        3
                      </div>
                    </div>
                    <div className="self-stretch h-[38.5px] relative">
                      <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-ghostwhite-200 w-full h-full z-[1]" />
                      <div className="absolute top-[9.6px] left-[9.5px] font-medium flex items-center justify-center w-[19px] h-5 min-w-[19px] z-[2]">
                        10
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 pr-[11px] pl-[9px]">
                      <div className="relative font-medium inline-block min-w-[18px] z-[1]">
                        17
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[9px] pl-2">
                    <div className="flex-1 relative font-medium inline-block min-w-[21.3px] z-[1]">
                      24
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 pr-[9px] pl-2.5">
                    <div className="relative font-medium inline-block min-w-[19px] z-[1]">
                      31
                    </div>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[21.9px] text-light-secondary1">

                  <div className="flex flex-row items-start justify-start py-0 pr-[9px] pl-2 text-light-primary">
                    <div className="relative font-medium inline-block min-w-[21px] z-[1]">
                      Su
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 pr-3.5 pl-[13px]">
                    <div className="relative font-medium inline-block min-w-[11px] z-[1]">
                      4
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[12.8px]">
                    <div className="flex flex-row items-start justify-start py-0 px-[11px]">
                      <div className="relative font-medium inline-block min-w-[16px] z-[1]">
                        11
                      </div>
                    </div>
                    <div className="self-stretch h-[38.5px] relative text-grayscale-white">

                      <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-limegreen w-full h-full z-[1]" />
                      <div className="absolute top-[9.9px] left-[9.8px] font-medium flex items-center justify-center w-[19px] h-5 min-w-[19px] z-[2]">
                        18
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 pr-[9px] pl-2">
                      <div className="relative font-medium inline-block min-w-[21px] z-[1]">
                        25
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[25px] text-center text-xl">
          <div className="w-[310px] flex flex-row items-start justify-start py-0 px-3 box-border">
            <div className="flex-1 flex flex-row items-end justify-between gap-[20px]">
              <b className="relative font-bold inline-block min-w-[98px] z-[1] mq450:text-base">
                해야할 숙제
              </b>
              <div className="w-9 flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border text-[13px] text-mediumslateblue-100">
                <b className="self-stretch relative font-bold inline-block min-w-[36px] z-[1]">
                  더보기
                </b>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-end justify-start gap-[13px] text-6xl text-grayscale-white">

            <div className="flex-1 flex flex-col items-start justify-start gap-[25px]">
              <div className="self-stretch rounded-xl bg-ghostwhite-200 flex flex-row items-start justify-start py-[21px] pr-3.5 pl-4 gap-[7px] z-[1]">
                <div className="h-[100px] w-[313px] relative rounded-xl bg-ghostwhite-200 hidden" />
                <div className="w-[50px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                  <div className="self-stretch h-[50px] relative">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-mediumslateblue-100 w-full h-full z-[1]" />
                    <b className="absolute top-[8px] left-[18px] font-bold inline-block min-w-[15px] z-[2] mq450:text-xl">
                      8
                    </b>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[4px] text-left text-3xs text-gray-100">
                  <b className="relative text-mini font-bold text-light-primary inline-block min-w-[56px] z-[1]">
                    콩쥐팥쥐
                  </b>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[14px]">
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <b className="relative inline-block min-w-[86px] z-[1]">{`8th - 10th August `}</b>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-0.5 pb-0 pr-[25px] pl-0">
                      <div className="flex flex-row items-start justify-start gap-[5px]">
                        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                          <div className="w-1.5 h-1.5 relative rounded-[50%] bg-mediumslateblue-100 z-[1]" />
                        </div>
                        <b className="relative inline-block min-w-[64px] z-[1]">{`8 A.M - 9 A.M `}</b>
                      </div>
                    </div>
                    <img
                      className="h-3 w-3 relative object-contain z-[1]"
                      loading="lazy"
                      alt=""
                      src="/icon--chevron-left-1@2x.png"
                    />
                  </div>
                  <b className="relative z-[1]">
                    Lorem ipsum dolor sit amet consectetur.
                  </b>
                </div>
              </div>
              <div className="self-stretch rounded-xl bg-lavenderblush flex flex-row items-end justify-start pt-[21px] pb-[23px] pr-3.5 pl-5 gap-[7px] z-[1]">
                <div className="h-[100px] w-[313px] relative rounded-xl bg-lavenderblush hidden" />
                <div className="w-[50px] flex flex-col items-start justify-end pt-0 px-0 pb-0.5 box-border">
                  <div className="self-stretch h-[50px] relative">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-deeppink w-full h-full z-[1]" />
                    <b className="absolute top-[8px] left-[11px] font-bold inline-block min-w-[29px] z-[2] mq450:text-xl">
                      13
                    </b>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[3px] text-left text-3xs text-gray-100">
                  <b className="relative text-mini font-bold text-light-primary inline-block min-w-[56px] z-[1]">
                    백설공주
                  </b>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[15px]">
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <b className="relative font-bold inline-block min-w-[60px] z-[1]">
                        13th August
                      </b>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <div className="flex flex-row items-start justify-start gap-[5px]">
                        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                          <div className="w-1.5 h-1.5 relative rounded-[50%] bg-mediumslateblue-100 z-[1]" />
                        </div>
                        <b className="relative inline-block min-w-[64px] z-[1]">{`8 A.M - 9 A.M `}</b>
                      </div>
                    </div>
                    <img
                      className="h-3 w-3 relative object-contain z-[1]"
                      loading="lazy"
                      alt=""
                      src="/icon--chevron-left-1@2x.png"
                    />
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 px-[3px]">
                    <b className="relative z-[1]">
                      Lorem ipsum dolor sit amet consectetur.
                    </b>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-xl bg-honeydew flex flex-row items-start justify-start py-[21px] pr-3.5 pl-[23px] gap-[7px] z-[1]">
                <div className="h-[100px] w-[313px] relative rounded-xl bg-honeydew hidden" />
                <div className="w-[50px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                  <div className="self-stretch h-[50px] relative">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-limegreen w-full h-full z-[1]" />
                    <b className="absolute top-[8px] left-[11px] font-bold inline-block min-w-[29px] z-[2] mq450:text-xl">
                      18
                    </b>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[4px] text-left text-3xs text-gray-100">
                  <b className="relative text-mini font-bold text-light-primary inline-block min-w-[73px] z-[1]">
                    흥부와 놀부
                  </b>
                  <div className="self-stretch flex flex-row items-start justify-start gap-[15px]">
                    <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <b className="relative font-bold inline-block min-w-[60px] z-[1]">
                        18th August
                      </b>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                      <div className="flex flex-row items-start justify-start gap-[5px]">
                        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                          <div className="w-1.5 h-1.5 relative rounded-[50%] bg-mediumslateblue-100 z-[1]" />
                        </div>
                        <b className="relative inline-block min-w-[64px] z-[1]">{`8 A.M - 9 A.M `}</b>
                      </div>
                    </div>
                    <img
                      className="h-3 w-3 relative object-contain z-[1]"
                      loading="lazy"
                      alt=""
                      src="/icon--chevron-left-1@2x.png"
                    />
                  </div>
                  <b className="relative z-[1]">
                    Lorem ipsum dolor sit amet consectetur.
                  </b>
                </div>
              </div>
              <div className="self-stretch rounded-xl bg-seashell flex flex-row items-start justify-start py-[21px] pr-3.5 pl-5 gap-[7px] z-[1]">
                <div className="h-[100px] w-[313px] relative rounded-xl bg-seashell hidden" />
                <div className="w-[50px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                  <div className="self-stretch h-[50px] relative">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-coral w-full h-full z-[1]" />
                    <b className="absolute top-[8px] left-[11px] font-bold inline-block min-w-[29px] z-[2] mq450:text-xl">
                      23
                    </b>
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start gap-[4px] text-left text-3xs text-gray-100">
                  <b className="relative text-mini font-bold text-light-primary inline-block min-w-[73px] z-[1]">
                    햇님과 달님
                  </b>
                  <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                    <div className="w-[155px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                      <div className="self-stretch flex flex-row items-start justify-start gap-[5.5px]">
                        <b className="flex-1 relative inline-block min-w-[69px] z-[1]">
                          23rd July 2021
                        </b>
                        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                          <div className="w-1.5 h-1.5 relative rounded-[50%] bg-mediumslateblue-100 z-[1]" />
                        </div>
                        <b className="flex-1 relative inline-block min-w-[69px] z-[1]">{`10 A.M - 1 P.M `}</b>
                      </div>
                    </div>
                    <img
                      className="h-3 w-3 relative object-contain z-[1]"
                      loading="lazy"
                      alt=""
                      src="/icon--chevron-left-1@2x.png"
                    />
                  </div>
                  <b className="relative z-[1]">
                    Lorem ipsum dolor sit amet consectetur.
                  </b>
                </div>
              </div>
            </div>
            <div className="h-[474px] w-[5px] relative rounded-31xl bg-whitesmoke-200 z-[1]">
              <div className="absolute top-[0px] left-[0px] rounded-31xl bg-whitesmoke-200 w-full h-full hidden" />

              <div className="absolute top-[0px] left-[0px] rounded-31xl bg-mediumslateblue-100 w-[5px] h-[158.6px] z-[1]" />
            </div>
          </div>
        </div>
      </div>
      <b className="w-[22.7px] relative hidden items-center justify-center h-5 shrink-0 z-[4]">
        30
      </b>
    </div>
  );
};

export default Frame4;
