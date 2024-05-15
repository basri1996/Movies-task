import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const CarouselWrapper = styled.div``;

export const SwiperContainer = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  z-index:0;
  @media (min-width: 640px) {
    width: 596px;
  }
  @media (min-width: 1024px) {
    width: 913px;
  }
  @media (min-width: 1301px) {
    width: 1180px;
  }
`;

export const SwiperWrapper = styled.div`
  display: flex;
`;

export const SwiperSlide = styled.div`
  width: 285px;
  height: 70px;
  background: linear-gradient(to bottom, #2596be, #66b6d2, #92cbdf);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border-radius:50px;
`;
export const SliderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

export const ArrowImg1 = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  @media (min-width: 500px) {
    width: 35px;
    height: 35px;
  }
  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
  @media (min-width: 1054px) {
    width: 50px;
    height: 50px;
  }
`;

export const SwiperWrapperMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SliderCastDiv = styled.div`
  width: 285px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap :5px;
  border: 1px solid rgba(128, 128, 128, 0.5);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color:${props=>props.theme.colors.LightBlue};
`;

export const SlideImage = styled.img`
  border-top-right-radius:10px;
  border-top-left-radius:10px;
  height:80%;
  object-fit:cover;
`;

export const ActorRealName = styled.h1`
  font-size: 14px;
  color:white;
  padding-left:5px;
  font-weight: 700;
`;
export const ActorFilmName = styled.h2`
font-size: 12px;
color:white;
padding-left:5px;
font-weight: 400;
padding-bottom:5px;
`;

export const ArrowImage = styled.img`
width:35px;
height:35px;
margin: 0 10px;
cursor: pointer;
&:hover{
  opacity:0.7
}
`
