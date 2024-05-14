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
  responsive,
} from "./HomeSliderStyles";
import VideoPlayer from "../VideoPlayer";
import { Button } from "@mui/material";
import { StyledLink } from "../slider/SliderStyles";
import SearchComponent from "../ui/SearchComponent";
import { fetchMovieTrailerAsync, fetchTrendyMoviesAsync } from "../../redux/features/trending/TrendingMoviesThunk";
import { contentImageUrl } from "../../redux/constants";
import { RootState } from "../../redux/StoreTypes";

function HomeSlider() {
  const dispatch = useDispatch<any>();
  const {
    movieData,
    filmUrl,
    videoModalOpen,
  } = useSelector(({trendingMovies}:RootState) => trendingMovies);
  const {
    data: Searched,
    inputValue,
    searchedModalOpen,
  } = useSelector((state: RootState) => state.search);
  const { innerWidth } = useSizeDetector();
  const MediaType="movie"

 
  useEffect(() => {
    dispatch(fetchTrendyMoviesAsync());
  }, [dispatch]);

  const handlePlay = async (id: number) => {
    dispatch(fetchMovieTrailerAsync({id,MediaType}));
  };

  const handleModal = () => {
    dispatch(triggerVideoModal());
  };
 
 

  return (
    <>
      {movieData && (
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
            <StyledLink to="/">
            <LogoImg src={logo} alt="logo" />
            </StyledLink>
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
              autoPlay
              autoPlaySpeed={2000}
              customTransition="transform 300ms ease-in-out"
              transitionDuration={300}
              containerClass="carousel-container"
            >
              {movieData &&
                movieData.map((film) => (
                  <div key={film.id}>
                    <ImageFilm
                      src={contentImageUrl(film.backdrop_path)}
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
                      <StyledLink to={`/contentdetail/movie/${film.id}`}>
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
