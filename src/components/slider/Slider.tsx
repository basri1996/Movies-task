import {
  CarouselWrapper,
  SectionTitle,
  ShopItemSectionWrapper,
} from "./SliderStyles";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import Slide from "./Slide";
import { useEffect, useRef } from "react";
import { fetchMostPopularAsync } from "../../redux/slices/MostPopularSlice";
import { useDispatch, useSelector } from "react-redux";

const CustomCarousel = styled(Carousel)`
  .react-multiple-carousel__arrow {
    background-color: ${(props) => props.theme.colors.LightBlue};
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }

  .react-multiple-carousel__arrow--left {
    left: 8px;
  }

  .react-multiple-carousel__arrow--right {
    right: 35px;
    @media (min-width: 640px) {
      right: 33.5px;
    }
    @media (min-width: 1024px) {
      right: 32px;
    }
    @media (min-width: 1301px) {
      right: 20px;
    }
  }
`;

function Slider({ title }: any) {
  const dispatch = useDispatch<any>();
  const { movieData, tvSerialData } = useSelector(
    (state: any) => state.mostPopular
  );
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
    console.log("Component re-render count:", title, renderCount.current);
  });
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
