import "react-multi-carousel/lib/styles.css";
import { useCallback, useEffect, useMemo } from "react";
import {
  fetchMovieTrailerAsync,
  fetchTrendyMoviesAsync,
  triggerVideoModal,
} from "../../redux/slices/TrendingMoviesSlice";
import { useDispatch, useSelector } from "react-redux";
import useSizeDetector from "../../hooks/useSizeDetector";
import logo from "../../../public/assets/images/logo.png";
import playButton from "../../../public/assets/images/play-button.png";
import Modal from "../ui/Modal";
import {
  CustomCarousel,
  HomeCarouselWrapper,
  ImageFilm,
  SearchedImage,
  SearchedInformationWrapper,
  SearchedItemDescription,
  SearchedItemWrapper,
  SearchedItemsDivWrapper,
  Title,
  Wrapper,
  FilmTitle,
  HeaderDiv,
  LogoImg,
  PlayButtonImage,
  TitleDiv,
  TitleWrapper,
} from "./HomeSliderStyles";
import VideoPlayer from "../VideoPlayer";
import { Input } from "@mui/material";
import debounce from "debounce";
import {
  clearSearched,
  fetchSearchedAsync,
  setInputValue,
  triggerSearchedModal,
} from "../../redux/slices/SearchSlice";

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
  const { innerHeight, innerWidth } = useSizeDetector();

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
  const handleModal2 = () => {
    dispatch(triggerSearchedModal());
  };


  const sendRequest = useCallback(
    async (value: string) => {
      if (value !== "") {
        dispatch(fetchSearchedAsync(value));
      } else {
        dispatch(clearSearched());
      }
    },
    [dispatch]
  );

  const debouncedSendRequest = useMemo(() => {
    return debounce(sendRequest, 1000);
  }, [sendRequest]);

  const onChange = (e: any) => {
    const value = e.target.value;
    dispatch(setInputValue(value));
    debouncedSendRequest(value);
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
          {Searched && searchedModalOpen ? (
            <>
              <Modal
                isOpen={searchedModalOpen}
                onClose={handleModal2}
                isCentered={false}
              >
                <h1></h1>
              </Modal>
              <SearchedItemsDivWrapper>
                {Searched.length === 0 && (
                  <Title> cant find any information</Title>
                )}
                {Searched.map((el: any) =>
                  el.backdrop_path && el.original_title ? (
                    <SearchedItemWrapper key={el.id}>
                      <SearchedImage
                        src={`https://image.tmdb.org/t/p/original${el.backdrop_path}`}
                        alt="searchedimg"
                      />
                      <SearchedInformationWrapper>
                        <Title>{el.original_title}</Title>
                        <SearchedItemDescription>
                          {el.overview}
                        </SearchedItemDescription>
                      </SearchedInformationWrapper>
                    </SearchedItemWrapper>
                  ) : null
                )}
              </SearchedItemsDivWrapper>
            </>
          ) : null}
          <HeaderDiv>
            <LogoImg src={logo} alt="logo" />
            <Input
              value={inputValue}
              fullWidth
              autoFocus
              placeholder="Search for movies,tv shows..."
              color="primary"
              disableUnderline={true}
              sx={{
                backgroundColor: "#f5f5f5",
                borderRadius: "8px",
                padding: innerWidth && innerWidth > 768 ? "10px" : "4px",
                width: innerWidth && innerWidth < 768 ? "150px" : "250px",
                fontSize: innerWidth && innerWidth > 768 ? "16px" : "9px",
                "&:hover": {
                  backgroundColor: "#e0e0e0",
                },
              }}
              onChange={onChange}
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
                      height={`${innerHeight}px`}
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
