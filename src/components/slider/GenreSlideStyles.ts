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
