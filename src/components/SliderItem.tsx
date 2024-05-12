import UseHeightDetector from "../hooks/UseSizeDetector";
import {
  ArrowDiv,
  ArrowImg1,
  ArrowImg2,
  FilmTitle,
  HeaderDiv,
  LogoImg,
  PlayButtonImage,
  RelativeDiv,
  SliderImage,
  TitleDiv,
  TitleWrapper,
} from "./SliderItemStyles";
import arrow1 from "../../public/assets/images/arrow.png";
import arrow2 from "../../public/assets/images/arrow2.png";
import logo from "../../public/assets/images/logo.png";
import playButton from "../../public/assets/images/play-button.png";

import { useEffect, useState } from "react";
import { getMovieTrailer } from "../api/api";
import AbsoluteVideo from "./VideoPlayer";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrendyMoviesAsync } from "../redux/slices/TrendingMoviesSlice";


const SliderItem = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<any>(0);
  const [filmUrl, setFilmUrl] = useState<any>();
  const MoviesState = useSelector((state: any) => state.main);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    dispatch(fetchTrendyMoviesAsync());
  }, [dispatch]);

  const changeSlide = (direction: any) => {
    if (direction === "next") {
      setCurrentSlideIndex((prevSlide: any) =>
        prevSlide === MoviesState?.trendingMovies.data?.length - 1
          ? 0
          : prevSlide + 1
      );
    } else if (direction === "prev") {
      setCurrentSlideIndex((prevSlide: any) =>
        prevSlide === 0
          ? MoviesState?.trendingMovies.data?.length - 1
          : prevSlide - 1
      );
    }
    setFilmUrl("");
  };

  const handlePlay = async () => {
    const FilmTrailer = await getMovieTrailer(
      MoviesState?.trendingMovies?.data[currentSlideIndex]?.id
    );
    const Url = `https://www.youtube.com/embed/${
      FilmTrailer && FilmTrailer.data.results[1]?.key
    }`;
    setFilmUrl(Url);
  };

  return (
    <RelativeDiv>
      <SliderImage
        onClick={() => setFilmUrl("")}
        src={`https://image.tmdb.org/t/p/original${
          MoviesState?.trendingMovies.data &&
          MoviesState?.trendingMovies.data[currentSlideIndex]?.backdrop_path
        }`}
        height={`${UseHeightDetector()}px`}
      />
      <HeaderDiv>
        <LogoImg src={logo} alt="logo" />
      </HeaderDiv>
      <ArrowDiv>
        <ArrowImg1
          src={arrow1}
          alt="arr1"
          onClick={() => changeSlide("prev")}
        />
        <ArrowImg2
          src={arrow2}
          alt="arr2"
          onClick={() => changeSlide("next")}
        />
      </ArrowDiv>
      <TitleDiv>
        <TitleWrapper>
          <FilmTitle>
            {MoviesState?.trendingMovies.data &&
              MoviesState?.trendingMovies.data[currentSlideIndex]
                ?.original_title}
          </FilmTitle>
          <PlayButtonImage onClick={handlePlay} src={playButton} alt="play" />
        </TitleWrapper>
        {/* <CenterDiv>
          <StyledButton>See More</StyledButton>
        </CenterDiv> */}
      </TitleDiv>
      {filmUrl && <AbsoluteVideo url={filmUrl} />}
    </RelativeDiv>
  );
};

export default SliderItem;
