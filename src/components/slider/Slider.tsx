import {
  CarouselWrapper,
  CustomCarousel,
  SectionTitle,
  ShopItemSectionWrapper,
  responsive,
} from "./SliderStyles";
import "react-multi-carousel/lib/styles.css";
import Slide from "./Slide";
import { useEffect } from "react";
import { fetchMostPopularAsync } from "../../redux/features/mostpopular/MostPopularThunk";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store/store";
import { MostPopularType } from "../../redux/features/mostpopular/MostPopularType";

function Slider({ title, data , mediaType}: { title: string; data: MostPopularType[] ;mediaType:string}) {
  const dispatch = useDispatch<AppDispatch>();

  
  useEffect(() => {
    dispatch(fetchMostPopularAsync(mediaType));
  }, [mediaType,dispatch,title]);


  return (
    <ShopItemSectionWrapper>
      <SectionTitle>{title}</SectionTitle>
      <CarouselWrapper>
        <CustomCarousel
          responsive={responsive}
          swipeable={false}
          draggable={true}
          showDots={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="transform 300ms ease-in-out"
          transitionDuration={300}
          containerClass="carousel-container"
          deviceType={"desktop"}
        >
          {data.map((film) => (
            <Slide key={film.id} id={film.id} film={film}  mediaType={mediaType} />
          ))}
        </CustomCarousel>
      </CarouselWrapper>
    </ShopItemSectionWrapper>
  );
}

export default Slider;
