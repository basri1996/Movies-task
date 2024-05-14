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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/StoreTypes";

function Slider({ title }: { title: string }) {
  const dispatch = useDispatch<any>();
  const {
    tv: { tvSerialData },
    movie: { movieData },
  } = useSelector((state: RootState) => state.mostPopular);
  const MediaType = title === "Popular movies" ? "movie" : "tv";

  useEffect(() => {
    dispatch(fetchMostPopularAsync(MediaType));
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
                (film) => (
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
