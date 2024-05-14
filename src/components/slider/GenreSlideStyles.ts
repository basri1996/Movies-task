import styled from "styled-components";

export const CarouselWrapper = styled.div``;

export const SwiperContainer = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 337px;
  margin-left: 10px;
  @media (min-width: 640px) {
    width: 647px;
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
  height: 200px;
  background: linear-gradient(to bottom, #2596be, #66b6d2, #92cbdf);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;
export const SliderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom:50px;
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