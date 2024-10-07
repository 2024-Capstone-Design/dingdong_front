import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { api } from "../api/index";
import Modal from "../components/teacherSignupModal";

const TeacherSignup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [organizationId, setOrganizationId] = useState("");
  const [serviceUsage, setServiceUsage] = useState("");
  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^010-\d{4}-\d{4}$/;
    return phoneRegex.test(phoneNumber);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = "이름을 입력해주세요.";
    if (!email) {
      newErrors.email = "이메일을 입력해주세요.";
    } else if (!validateEmail(email)) {
      newErrors.email = "유효한 이메일 주소를 입력해주세요.";
    }
    if (!phoneNumber) {
      newErrors.phoneNumber = "전화번호를 입력해주세요.";
    } else if (!validatePhoneNumber(phoneNumber)) {
      newErrors.phoneNumber = "유효한 전화번호를 입력해주세요. 형식: 010-1234-1234";
    }
    if (!organizationId) newErrors.organizationId = "소속 기관을 선택해주세요.";
    if (!serviceUsage) {
      newErrors.serviceUsage = "서비스 사용 용도를 입력해주세요.";
    } else if (serviceUsage.length < 10) {
      newErrors.serviceUsage = "서비스 사용 용도는 10자 이상 입력해주세요.";
    }
    return newErrors;
  };

  const onLogoContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFormBottomClick = useCallback(async (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const firstErrorKey = Object.keys(newErrors)[0];
      alert(newErrors[firstErrorKey]);
      return;
    }

    const data = {
      name,
      email,
      phoneNumber,
      organizationId: parseInt(organizationId, 10),
      serviceUsage
    };

    try {
      const response = await api.teacherSignup(data);
      if (response.ok) {
        setIsModalOpen(true);
      }
    } catch (error) {
      console.error("회원가입 실패:", error);
      alert("잠시 후 다시 시도해주세요.");
    }
  }, [name, email, phoneNumber, organizationId, serviceUsage, navigate]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate("/");
  };

  // 추출된 색상 코드 사용
  const placeholderColor = "#A0AEC0"; // 예시 색상 코드, 실제 추출된 색상으로 변경 필요

  return (
    <div className="w-full h-screen flex flex-col bg-grayscale-white overflow-hidden">
      <Header onLogoContainerClick={onLogoContainerClick} />
      <main className="self-stretch bg-grayscale-white flex flex-col flex-grow items-start justify-center box-border pt-16 pb-16 gap-[80px] min-w-[720px] max-w-[700px] text-left text-lg text-lightslategray font-text-single-200-bold mq450:gap-[32px] mq450:pl-5 mq450:pr-5 mq450:box-border mq1125:gap-[63px] mq1125:pt-[29px] mq1125:pb-[218px] mq1125:pr-[359px] mq1125:pl-[90px] mq1125:box-border mx-auto">
        <div className="flex flex-col items-start justify-start gap-[8px]">
          <b className="relative tracking-[0.1em] leading-[20px] uppercase font-bold inline-block min-w-[78px] z-[2]">
            SIGN IN
          </b>
          <h1 className="m-0 relative text-25xl leading-[50px] font-bold font-inherit text-neutral-colors-headings-black z-[2] mq450:text-7xl mq450:leading-[30px] mq1125:text-16xl mq1125:leading-[40px]">
            딩동 가입하기
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start max-w-full text-17xl text-grayscale-white md:flex-row">
          <form className="w-full sm:w-[600px] md:w-[700px] lg:w-[800px] rounded-6xl bg-neutral-colors-color-400 flex flex-col items-start justify-start pt-8 px-7 pb-[31px] box-border gap-[32px] z-[2]" onSubmit={onFormBottomClick}>
            <div className="self-stretch flex flex-row items-start justify-start gap-[24px]">
              <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[186px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <b className="relative text-lg leading-[18px] font-bold font-text-single-200-bold text-neutral-colors-headings-black text-left inline-block min-w-[34px] z-[3]">
                    이름
                  </b>
                  <input
                    className={`w-full [border:none] [outline:none] bg-grayscale-white self-stretch h-[72px] rounded-31xl flex flex-row items-start justify-start py-[27px] px-[23px] box-border font-text-single-200-bold text-lg min-w-[172px] z-[3] ${errors.name ? 'border border-red-500' : ''}`}
                    placeholder="이름을 입력해주세요"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <b className="relative text-lg leading-[18px] font-bold font-text-single-200-bold text-neutral-colors-headings-black text-left inline-block min-w-[67px] z-[3]">
                    전화번호
                  </b>
                  <input
                    className={`w-full [border:none] [outline:none] bg-grayscale-white self-stretch h-[72px] rounded-31xl flex flex-row items-start justify-start py-[27px] px-[23px] box-border font-text-single-200-bold text-lg min-w-[172px] z-[3] ${errors.phoneNumber ? 'border border-red-500' : ''}`}
                    placeholder="010-1234-1234"
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[186px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <b className="relative text-lg leading-[18px] font-bold font-text-single-200-bold text-neutral-colors-headings-black text-left inline-block min-w-[50px] z-[3]">
                    이메일
                  </b>
                  <input
                    className={`w-full [border:none] [outline:none] bg-grayscale-white self-stretch h-[72px] rounded-31xl flex flex-row items-start justify-start py-[27px] px-[23px] box-border font-text-single-200-bold text-lg min-w-[172px] z-[3] ${errors.email ? 'border border-red-500' : ''}`}
                    placeholder="example@email.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <b className="relative text-lg leading-[18px] font-bold font-text-single-200-bold text-neutral-colors-headings-black text-left inline-block min-w-[71px] z-[3]">
                    소속 기관
                  </b>
                  <select
                    className={`w-full [border:none] [outline:none] bg-grayscale-white self-stretch h-[72px] rounded-31xl flex flex-row items-start justify-start py-[27px] px-[23px] box-border font-text-single-200-bold text-lg min-w-[172px] z-[3] ${errors.organizationId ? 'border border-red-500' : ''}`}
                    style={{ color: organizationId ? 'black' : placeholderColor }} // Set color based on selection
                    value={organizationId}
                    onChange={(e) => setOrganizationId(e.target.value)}
                  >
                    <option value="" disabled style={{ color: placeholderColor }}>
                      소속 기관을 선택해주세요
                    </option>
                    <option value="1" style={{ color: 'black' }}>OO초등학교</option>
                    <option value="2" style={{ color: 'black' }}>XX중학교</option>
                    <option value="3" style={{ color: 'black' }}>YY고등학교</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
              <b className="relative text-lg leading-[18px] inline-block font-text-single-200-bold text-neutral-colors-headings-black text-left min-w-[125px] z-[3]">
                서비스 사용 용도
              </b>
              <input
                className={`w-full [border:none] [outline:none] bg-grayscale-white self-stretch h-[72px] rounded-31xl flex flex-row items-start justify-start py-[27px] px-6 box-border font-text-single-200-bold text-lg min-w-[250px] z-[3] ${errors.serviceUsage ? 'border border-red-500' : ''}`}
                placeholder="서비스 사용 용도를 입력해주세요"
                type="text"
                value={serviceUsage}
                onChange={(e) => setServiceUsage(e.target.value)}
              />
            </div>
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-start justify-start max-w-full z-[3]"
              type="submit"
            >
              <div className="flex-1 rounded-21xl bg-neutral-colors-headings-black flex flex-row items-start justify-center py-6 px-5 box-border gap-[8px] max-w-full">
                <b className="relative text-lg leading-[18px] font-bold font-text-single-200-bold text-grayscale-white text-center inline-block min-w-[58px]">
                  Sign In
                </b>
              </div>
            </button>
          </form>
        </div>
      </main>
      <Footer />
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default TeacherSignup;
