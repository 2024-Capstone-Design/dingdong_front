
import Header from "../components/Header";
import Content from "../components/Content";
import FeatureDescription from "../components/FeatureDescription";
import ServiceReview from "../components/ServiceReview";
import CallToActionV from "../components/CallToActionV";
import Footer from "../components/Footer";


const Frame = () => {
  return (
    <div className="w-full relative bg-grayscale-white overflow-hidden flex flex-col items-end justify-start leading-[normal] tracking-[normal]">
      <Header/>
      <Content />
      <FeatureDescription />
      <ServiceReview />
      <CallToActionV />
      <Footer />
    </div>
  );
};

export default Frame;
