import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

const logo = [
  "/src/assets/workwith1.png",
  "/src/assets/workwith2.png",
  "/src/assets/workwith3.png",
  "/src/assets/workwith4.png",
  "/src/assets/workwith5.png",
  "/src/assets/workwith6.png",
  "/src/assets/workwith1.png",
  "/src/assets/workwith2.png",
  "/src/assets/workwith3.png",
  "/src/assets/workwith4.png",
  "/src/assets/workwith5.png",
  "/src/assets/workwith6.png",
  "/src/assets/workwith1.png",
  "/src/assets/workwith2.png",
  "/src/assets/workwith3.png",
  "/src/assets/workwith4.png",
  "/src/assets/workwith5.png",
  "/src/assets/workwith6.png",
  "/src/assets/workwith1.png",
  "/src/assets/workwith2.png",
  "/src/assets/workwith3.png",
  "/src/assets/workwith4.png",
  "/src/assets/workwith5.png",
  "/src/assets/workwith6.png",
];
// Import Swiper styles

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const WorkingWith = () => {
  const [slidesPerView, setSlidesPerView] = useState(calculateSlidesPerView());
  const swiperRef = useRef(null);
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  function calculateSlidesPerView() {
    return window.innerWidth >= 768 ? 6 : 3; // Adjust the breakpoint and slides per view accordingly
  }

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(calculateSlidesPerView());
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-100% h-auto bg-[#F7F7FA]">
      <div className="md:flex ">
        <div className="text-sm sm:text-lg py-10  md:text-2xl px-10 md:w-1/2 ">
          <h2>
            Meet the People build there career with AI; Artifical Intelligence
          </h2>
          <h1 className="font-bold">Who are Working With</h1>
        </div>
        <div className="flex items-center justify-center md:items-end md:justify-end w-full  md:w-1/2 px-2  md:px-6">
          {" "}
          <div className="">
            <button className="px-2 md:px-4 rounded-full " onClick={handlePrev}>
              <img className="w-8 md:w-auto rounded-full hover:bg-[#def3f3]" src="/src/assets/left-arrow-.png" alt="Prev" />
            </button>
            <button className="   " onClick={handleNext}>
            <img className="w-8 bg-[#237E7E] hover:bg-[#a4dfdf] md:w-auto rounded-full" src="/src/assets/right-arrow-6421.png" alt="Next" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={slidesPerView}
          autoplay={{ delay: 300 }}
          ref={swiperRef}
          // navigation
          className="w-100% p-4"
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}>
          {logo.map((img, i) => {
            return (
              <SwiperSlide key={i} className="w-25% md:w-100%">
                <img className="" src={img} alt="Logo" />{" "}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default WorkingWith;
