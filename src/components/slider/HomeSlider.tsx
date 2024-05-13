import "react-multi-carousel/lib/styles.css";
import { useEffect} from "react";
import {
  triggerVideoModal,
} from "../../redux/features/trending/TrendingMoviesSlice";
import { useDispatch, useSelector } from "react-redux";
import useSizeDetector from "../../hooks/useSizeDetector";
import logo from "../../../public/assets/images/logo.png";
import playButton from "../../../public/assets/images/play-button.png";
import Modal from "../ui/Modal";
import {
  CustomCarousel,
  HomeCarouselWrapper,
  ImageFilm,
  Wrapper,
  FilmTitle,
  HeaderDiv,
  LogoImg,
  PlayButtonImage,
  TitleDiv,
  TitleWrapper,
  StyledButton,
} from "./HomeSliderStyles";
import VideoPlayer from "../VideoPlayer";
import { Button } from "@mui/material";
import { StyledLink } from "../slider/SliderStyles";
import SearchComponent from "../ui/SearchComponent";
import { fetchMovieTrailerAsync, fetchTrendyMoviesAsync } from "../../redux/features/trending/TrendingMoviesThunk";

function HomeSlider() {
  const dispatch = useDispatch<any>();
  const {
    data: TrendingMovies,
    filmUrl,
    videoModalOpen,
  } = useSelector((state: any) => state.trendingMovies);
  const {
    data: Searched,
    inputValue,
    searchedModalOpen,
  } = useSelector((state: any) => state.search);
  const { innerWidth } = useSizeDetector();

  const responsive = {
    mobile: {
      breakpoint: { max: 5000, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    dispatch(fetchTrendyMoviesAsync());
  }, [dispatch]);

  const handlePlay = async (id: any) => {
    dispatch(fetchMovieTrailerAsync(id));
  };

  const handleModal = () => {
    dispatch(triggerVideoModal());
  };
 
 

  return (
    <>
      {TrendingMovies && (
        <HomeCarouselWrapper>
          {filmUrl && (
            <Modal
              isOpen={videoModalOpen}
              onClose={handleModal}
              isCentered={true}
            >
              <VideoPlayer url={filmUrl} />
            </Modal>
          )}

          <HeaderDiv>
            <LogoImg src={logo} alt="logo" />
            <SearchComponent
              inputValue={inputValue}
              Searched={Searched}
              searchedModalOpen={searchedModalOpen}
            />
          </HeaderDiv>
          <Wrapper>
            <CustomCarousel
              responsive={responsive}
              infinite={true}
              autoPlaySpeed={3000}
              customTransition="transform 300ms ease-in-out"
              transitionDuration={300}
              containerClass="carousel-container"
            >
              {TrendingMovies &&
                TrendingMovies.map((film: any) => (
                  <div key={film.id}>
                    <ImageFilm
                      src={`https://image.tmdb.org/t/p/original${film.backdrop_path}`}
                      alt="cover"
                    />
                    <TitleDiv>
                      <TitleWrapper>
                        <FilmTitle>{film?.original_title}</FilmTitle>
                        <PlayButtonImage
                          onClick={() => handlePlay(film.id)}
                          src={playButton}
                          alt="play"
                        />
                      </TitleWrapper>
                      <StyledLink to={`/contentdetail/${film.id}`}>
                        <Button
                          size={
                            innerWidth && innerWidth > 500 ? "large" : "small"
                          }
                          style={StyledButton}
                          sx={{ "&:hover": { opacity: "0.7" } }}
                          variant="contained"
                          children={"See more"}
                        />
                      </StyledLink>
                    </TitleDiv>
                  </div>
                ))}
            </CustomCarousel>
          </Wrapper>
        </HomeCarouselWrapper>
      )}
    </>
  );
}

export default HomeSlider;
