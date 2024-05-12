import "react-multi-carousel/lib/styles.css";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  fetchTrendyMoviesAsync,
  setFilmUrl,
} from "../../redux/slices/TrendingMoviesSlice";
import { useDispatch, useSelector } from "react-redux";
import UseSizeDetector from "../../hooks/UseSizeDetector";
import {
  FilmTitle,
  HeaderDiv,
  LogoImg,
  PlayButtonImage,
  TitleDiv,
  TitleWrapper,
} from "../SliderItemStyles";
import logo from "../../../public/assets/images/logo.png";
import playButton from "../../../public/assets/images/play-button.png";
import Modal from "../ui/Modal";
import { getMovieTrailer } from "../../api/api";
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
} from "./HomeSliderStyles";
// import InputComponents from "../InputComponent";
import VideoPlayer from "../VideoPlayer";
import { Input } from "@mui/material";
import debounce from "debounce";
import { clearSearched, fetchSearchedAsync, setInputValue } from "../../redux/slices/SearchSlice";

function HomeSlider() {
  const dispatch = useDispatch<any>();
  const { data : TrendingMovies,filmUrl} = useSelector((state: any) => state.trendingMovies
  );
  const { data : Searched,inputValue} = useSelector((state: any) => state.search
  );
  const { innerHeight, innerWidth } = UseSizeDetector();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalOpen2, setModalOpen2] = useState<boolean>(false);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
    console.log("Component re-render count:", renderCount.current);
  });
  useEffect(() => {
    console.log("Parent mounted");
  }, []);

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
    const FilmTrailer = await getMovieTrailer(id);
    const Url = `https://www.youtube.com/embed/${
      FilmTrailer && FilmTrailer.data.results[1]?.key
    }`;
    dispatch(setFilmUrl(Url));
    setModalOpen(true);
  };

  const handleModal = () => {
    setModalOpen(false);
  };
  const handleModal2 = () => {
    setModalOpen2(false);
  };

  // place where i make request

  const sendRequest = useCallback(
    async (value: string) => {
      if (value !== "") {
        dispatch(fetchSearchedAsync(value));
        Searched && setModalOpen2(true);
      }else{
        dispatch(clearSearched())
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
            <Modal isOpen={modalOpen} onClose={handleModal} isCentered={true}>
              <VideoPlayer url={filmUrl} />
            </Modal>
          )}
          {Searched && modalOpen2 ? (
            <>
              <Modal
                isOpen={modalOpen2}
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
            {/* <InputComponents
             
            /> */}
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
