import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Swiper from "swiper";
import { Button } from "@mui/material";
import { SectionTitle } from "./SliderStyles";
import useSizeDetector from "../../hooks/useSizeDetector"
import { fetchAllGenresAsync } from "../../redux/slices/GenreSlice";
import {
  SliderWrapper,
  SwiperContainer,
  SwiperSlide,
  SwiperWrapper,
} from "./GenreSlideStyles";

const GenreSlide = () => {
  const dispatch = useDispatch<any>();
  const { genre } = useSelector((state: any) => state.genre);
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
    <div style={{ marginTop: "50px" }}>
      <SliderWrapper>
        <SectionTitle>Popular Genres</SectionTitle>
      </SliderWrapper>
      <SliderWrapper>
        <Button variant="text" onClick={handlePrevSlide} children={"Prev"} />
        <SwiperContainer className="swiper">
          <SwiperWrapper className="swiper-wrapper">
            {genre.map((genre: any) => (
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
