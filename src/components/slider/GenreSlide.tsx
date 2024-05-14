import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Swiper from "swiper";
import { Button } from "@mui/material";
import { SectionTitle } from "./SliderStyles";
import useSizeDetector from "../../hooks/useSizeDetector"
import { fetchAllGenresAsync } from "../../redux/features/genre/GenreThunk"
import {
  ArrowImg1,
  SliderWrapper,
  SwiperContainer,
  SwiperSlide,
  SwiperWrapper,
} from "./GenreSlideStyles";
import arrow from "../../../public/assets/images/arrow.png"
import arrow1 from "../../../public/assets/images/arrow1.png"
import styled from "styled-components";
import { RootState } from "../../redux/store/StoreTypes";
import { AppDispatch } from "../../redux/store/store";


const GenreSlide = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { genre} = useSelector(({genre}:RootState) => genre);
  const [swiper, setSwiper] = useState<any>(null);
  const { innerWidth } = useSizeDetector();

  const itemCountInSlider = useCallback(() => {
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


  useEffect(() => {
    dispatch(fetchAllGenresAsync());
  }, [dispatch]);

  useEffect(() => {
    if (genre.length > 0) {
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
  }, [genre, itemCountInSlider]);

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
    <GenreSliderWrapper>
      <SliderWrapper>
        <SectionTitle>Popular Genres</SectionTitle>
      </SliderWrapper>
      <SliderWrapper>
        <Button variant="text" onClick={handlePrevSlide} startIcon={<ArrowImg1 src={arrow1} alt="arrow"/>} />
        <SwiperContainer className="swiper">
          <SwiperWrapper className="swiper-wrapper">
            {genre.map((genre) => (
              <SwiperSlide key={genre.id} className="swiper-slide">
                {genre.name}
              </SwiperSlide>
            ))}
          </SwiperWrapper>
        </SwiperContainer>
        <Button variant="text" onClick={handleNextSlide} startIcon={<ArrowImg1 src={arrow} alt="arrow1"/>} />
      </SliderWrapper>
    </GenreSliderWrapper>
  );
};

export default GenreSlide;

export const GenreSliderWrapper = styled.div`
  display:flex;
  justify-content:center;
  align-items:"center";
  flex-direction:column;
  margin-top:50px
`
