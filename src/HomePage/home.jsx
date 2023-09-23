import HeroSection from "/src/components/HeroSection";
import AddressBar from "/src/components/addressBar";
import NavBar from "/src/components/navBar";
import Footer from "/src/components/footer";
import Youtube from "/src/components/youtube";
import Contactus from "/src/components/contactus";
import WorkingWith from "/src/components/workingWith";
import Whatyouwillget from "/src/components/whatyouwillget"

import AboutUs from "/src/components/aboutUs";
import SlideSelection from "/src/components/SlideSelection";

import Counts from "/src/components/counts";
import Testimonals from "/src/components/testimonals";

const Home = () => {
  return (
    <div className="">
      <AddressBar />
      <NavBar />
      <HeroSection />
      <AboutUs />
      <SlideSelection />
      <Whatyouwillget/>
      <WorkingWith />
      <Youtube/>
      <Counts />
      <Testimonals/>
      <Contactus />
      <Footer />
    </div>
  );
};

export default Home;
