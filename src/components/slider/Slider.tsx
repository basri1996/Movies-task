import {
  CarouselWrapper,
  CustomCarousel,
  SectionTitle,
  ShopItemSectionWrapper,
} from "./SliderStyles";
import "react-multi-carousel/lib/styles.css";
import Slide from "./Slide";
import { useEffect } from "react";
import { fetchMostPopularAsync } from "../../redux/features/mostpopular/MostPopularThunk";
import { useDispatch, useSelector } from "react-redux";

function Slider({ title }: any) {
  const dispatch = useDispatch<any>();
  const { movieData, tvSerialData } = useSelector(
    (state: any) => state.mostPopular
  );
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1301 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1300, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1023, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 639, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    dispatch(
      fetchMostPopularAsync(title === "Popular movies" ? "movie" : "tv")
    );
  }, [title]);

  return (
    <>
      {(title === "Popular movies" && movieData) ||
      (title === "Popular tv shows" && tvSerialData) ? (
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
              {(title === "Popular movies" ? movieData : tvSerialData).map(
                (film: any) => (
                  <Slide key={film.id} id={film.id} film={film} title={title} />
                )
              )}
            </CustomCarousel>
          </CarouselWrapper>
        </ShopItemSectionWrapper>
      ) : null}
    </>
  );
}

export default Slider;
