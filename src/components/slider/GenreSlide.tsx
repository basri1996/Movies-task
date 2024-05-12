import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Swiper from "swiper";
import { Button } from "@mui/material";
import { SectionTitle } from "./SliderStyles";
import UseSizeDetector from "../../hooks/UseSizeDetector";
import { fetchAllGenresAsync } from "../../redux/slices/GenreSlice";
export const CarouselWrapper = styled.div``;

const SwiperContainer = styled.div`
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

const SwiperWrapper = styled.div`
  display: flex;
`;

const SwiperSlide = styled.div`
  width: 285px;
  height: 200px;
  background: linear-gradient(to bottom, #2596be, #66b6d2, #92cbdf);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;
const SliderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GenreSlide = () => {
  const dispatch = useDispatch<any>();
  const mainState = useSelector((state: any) => state.genre);
  const genres = mainState.genre;
  const [swiper, setSwiper] = useState<any>(null);
  const { innerWidth } = UseSizeDetector();

  const itemCountInSlider = useCallback(() => {
    console.log(console.log(innerWidth));
    if (innerWidth && innerWidth > 1089) {
      return 5;
    } else if (innerWidth && innerWidth > 768 && innerWidth < 1089) {
      return 4;
    } else if (innerWidth && innerWidth > 500 && innerWidth < 768) {
      return 3;
    } else {
      return 2;
    }
  }, [innerWidth]);

  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
    console.log("Component re-render count genre:", renderCount.current);
  });

  useEffect(() => {
    dispatch(fetchAllGenresAsync());
  }, [dispatch]);
  useEffect(() => {
    if (genres.length > 0) {
      const newSwiper = new Swiper(".swiper", {
        slidesPerView: itemCountInSlider(),
        spaceBetween: 10,
        loop: true,
      });

      setSwiper(newSwiper);

      return () => {
        newSwiper.destroy();
      };
    }
  }, [genres,itemCountInSlider]);

  const handleNextSlide = () => {
    if (swiper) {
      if (swiper.activeIndex === 11) {
        swiper.slideTo(0, 0);
      } else {
        swiper.slideNext();
      }
    }
  };

  const handlePrevSlide = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <SliderWrapper>
        <SectionTitle>Popular Genres</SectionTitle>
      </SliderWrapper>
      <SliderWrapper>
        <Button variant="text" onClick={handlePrevSlide} children={"Prev"} />
        <SwiperContainer className="swiper">
          <SwiperWrapper className="swiper-wrapper">
            {genres.map((genre: any) => (
              <SwiperSlide key={genre.id} className="swiper-slide">
                {genre.name}
              </SwiperSlide>
            ))}
          </SwiperWrapper>
        </SwiperContainer>
        <Button variant="text" onClick={handleNextSlide} children={"Next"} />
      </SliderWrapper>
    </div>
  );
};

export default GenreSlide;
