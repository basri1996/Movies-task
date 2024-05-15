import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Swiper from "swiper";
import { SectionTitle } from "./SliderStyles";
import useSizeDetector from "../../hooks/useSizeDetector";
import { fetchAllGenresAsync } from "../../redux/features/genre/GenreThunk";
import {
  SliderWrapper,
  SwiperContainer,
  SwiperWrapperMain,
  SwiperWrapper,
  ArrowImage,
} from "./SwiperStyles";
import { AppDispatch } from "../../redux/store/store";
import Arrow2 from "../../../public/assets/images/arrow.png";
import Arrow1 from "../../../public/assets/images/arrow1.png";

const SwiperComponents = ({
  title,
  children,
}: {
  title: string;
  children: any;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [swiper, setSwiper] = useState<any>(null);
  const { innerWidth } = useSizeDetector();

  const itemCountInSlider = useCallback(() => {
    if (innerWidth && innerWidth > 1089) {
      return 5;
    } else if (innerWidth && innerWidth > 768 && innerWidth < 1089) {
      return 4;
    } else if (innerWidth && innerWidth > 640 && innerWidth < 768) {
      return 3;
    } else {
      return 2;
    }
  }, [innerWidth]);

  useEffect(() => {
    dispatch(fetchAllGenresAsync());
  }, [dispatch]);

  useEffect(() => {
    const newSwiper = new Swiper(".swiper", {
      slidesPerView: itemCountInSlider(),
      spaceBetween: 10,
      loop: true,
    });
    setSwiper(newSwiper);
    return () => {
      newSwiper.destroy();
    };
  }, [itemCountInSlider]);

  const handleNextSlide = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const handlePrevSlide = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  return (
    <SwiperWrapperMain>
      <SectionTitle>{title}</SectionTitle>
      <SliderWrapper>
        <ArrowImage onClick={handlePrevSlide} src={Arrow1} alt="arr1" />
        <SwiperContainer className="swiper">
          <SwiperWrapper className="swiper-wrapper">{children}</SwiperWrapper>
        </SwiperContainer>
        <ArrowImage onClick={handleNextSlide} src={Arrow2} alt="arr2" />
      </SliderWrapper>
    </SwiperWrapperMain>
  );
};

export default SwiperComponents;
