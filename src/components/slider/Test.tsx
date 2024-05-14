import { useEffect } from "react";
import styled from "styled-components";
import Swiper from "swiper";

// Import Swiper styles
import "swiper/css";

// Additional Swiper styles if needed
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { contentImageUrl } from "../../redux/constants";
import { useSelector } from "react-redux";

const SliderContainer = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden; 
  position: relative; 
`;

const Slide = styled.img`
  width: 138px;
  height: 175px;
`;

const ScrollbarContainer = styled.div`
  position: absolute; 
  right: 0; 
  top: 0; 
  bottom: 0; 
  width: 10px; 
  overflow-y: auto; 
`;



const SwiperSlider = () => {
    const { credits } = useSelector((state: any) => state.contentdetail);

  console.log("ddd",credits);
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      
      direction: "horizontal",
      loop: true,
      slidesPerView: 10,
      spaceBetween: 10,

      pagination: {
        el: ".swiper-pagination",
      },

      
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

 
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true,
      },
    });
    
    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <SliderContainer className="swiper-container">
      <div className="swiper-wrapper">
        {credits?.map((actor: any) => (
           
          <Slide
            className="swiper-slide"
            src={contentImageUrl(actor.profile_path)}
          />
        ))}
      </div>
    
      <div className="swiper-pagination"></div>

     
      <ScrollbarContainer className="swiper-scrollbar"></ScrollbarContainer>
    </SliderContainer>
  );
};

export default SwiperSlider;

