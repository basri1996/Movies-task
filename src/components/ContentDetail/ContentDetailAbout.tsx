import { contentImageUrl } from "../../redux/constants";
import {
  BackgroundContainer,
  ButtonWrapper,
  ContentTitle,
  Description,
  DetailsDiv,
  GenreItem,
  GenreItemWrapper,
  GenreWrapper,
  Logo,
  MainContainer,
  OverView,
  PlayerButton,
  PosterImage,
  RelativeDiv,
  SliderWrapper,
  TagLine,
} from "./ContentDetailAboutStyles";
import logo from "../../../public/assets/images/logo.png";
import { StyledLink } from "../slider/SliderStyles";
import { Rating } from "@mui/material";
import { PlayButtonImage } from "../slider/HomeSliderStyles";
import playButton from "../../../public/assets/images/play-button.png";
import { fetchMovieTrailerAsync } from "../../redux/features/trending/TrendingMoviesThunk";
import { useDispatch } from "react-redux";
import Modal from "../ui/Modal";
import VideoPlayer from "../../components/VideoPlayer";
import { useSelector } from "react-redux";
import { triggerVideoModal } from "../../redux/features/trending/TrendingMoviesSlice";
import styled from "styled-components";
import { ContentDetailObjectTypes } from "../../redux/features/contentdetail/ContentDetailTypes";
import { RootState } from "../../redux/store/StoreTypes";
import { AppDispatch } from "../../redux/store/store";
import SwiperComponents from "../slider/SwiperComponents";
import { useEffect } from "react";
import CastMappedSlides from "../CastMappedSlides";
import Slider from "../slider/Slider";


interface Props {
  data: ContentDetailObjectTypes | null;
}

const ContentDetailAbout =  ({ data }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { filmUrl, videoModalOpen } = useSelector(
    (state: RootState) => state.trendingMovies
  );
  const similarMoviesData = useSelector(
    (state: RootState) => state.contentdetail.similarMovies
  );
  const releaseDate = (data?.release_date || data?.first_air_date)
    ?.split("-")[0]
    ?.toString();
    
  function MinToHour(x: number) {
    const hrs = Math.floor(x / 60);
    const min = x % 60;
    return `${hrs > 1 ? `${hrs} hr` : ""} ${min} min`;
  }
  const ratingScore = Math.round( data ? data?.vote_average * 10 : 0) * 0.05;
  const MediaType = data?.original_name ? "tv" : "movie";

  const handlePlay = async (id: number) => {
    dispatch(fetchMovieTrailerAsync({ id, MediaType }));
  };
  const handleModal = () => {
    dispatch(triggerVideoModal());
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  if(!data) return null

  return (
    <div>
      <RelativeDiv>
        <BackgroundContainer
          src={contentImageUrl(data.backdrop_path)}
          alt="backdrop"
        ></BackgroundContainer>
        ;
        <StyledLink to="/">
          <Logo src={logo} alt="logo" />
        </StyledLink>
        <MainContainer>
          <PosterImage src={contentImageUrl(data.poster_path)} alt="logo" />
          <DetailsDiv>
            <ContentTitle>
              {data.original_title || data.original_name} {`(${releaseDate})`}
            </ContentTitle>
            <GenreWrapper>
              <GenreItem>
                {data?.release_date}
                {` (${data?.origin_country && data?.origin_country[0]})`}
              </GenreItem>
              <GenreItemWrapper>
              {data?.genres?.map((genre) => (
                <GenreItem key={genre.id}>{genre.name},</GenreItem>
              ))}
              </GenreItemWrapper>
              <GenreItem>
                {MinToHour(Number(data?.runtime || data?.episode_run_time))}
              </GenreItem>
            </GenreWrapper>
            <Rating readOnly value={ratingScore} size="small" />
            <ButtonWrapper>
              <PlayerButton
                onClick={() => handlePlay(data.id)}
                src={playButton}
                alt="play"
              />
              Play Trailer
            </ButtonWrapper>
            <TagLine>{data?.tagline}</TagLine>
            <OverView>Overview</OverView>
            <Description>{data?.overview}</Description>
          </DetailsDiv>
        </MainContainer>
        {filmUrl && (
          <Modal
            isOpen={videoModalOpen}
            onClose={handleModal}
            isCentered={true}
          >
            <VideoPlayer url={filmUrl} />
          </Modal>
        )}
      </RelativeDiv>
      <SliderWrapper>
       <SwiperComponents title={"Cast"}>
        <CastMappedSlides/>
       </SwiperComponents>
      </SliderWrapper>
      <Slider title={"Recommendations"} data={similarMoviesData} mediaType={MediaType}/>
    </div>
  );
};

export default ContentDetailAbout;

