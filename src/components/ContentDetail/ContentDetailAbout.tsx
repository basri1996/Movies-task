import { contentImageUrl } from "../../redux/constants";
import {
  BackgroundContainer,
  ButtonWrapper,
  ContentTitle,
  Description,
  DetailsDiv,
  GenreItem,
  GenreWrapper,
  Logo,
  MainContainer,
  OverView,
  PosterImage,
  RelativeDiv,
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
import SwiperSlider from "../slider/Test";
import styled from "styled-components";
import { ContentDetailObjectTypes } from "../../redux/features/contentdetail/ContentDetailTypes";
import { RootState } from "../../redux/store/StoreTypes";
import { AppDispatch } from "../../redux/store/store";


interface Props {
  data: ContentDetailObjectTypes | null;
}

const ContentDetailAbout =  ({ data }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { filmUrl, videoModalOpen } = useSelector(
    (state: RootState) => state.trendingMovies
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

  if(!data) return null

  return (
    <>
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

              {data?.genres?.map((genre) => (
                <GenreItem key={genre.id}>{genre.name},</GenreItem>
              ))}
              <GenreItem>
                {MinToHour(Number(data?.runtime || data?.episode_run_time))}
              </GenreItem>
            </GenreWrapper>
            <Rating readOnly value={ratingScore} size="small" />
            <ButtonWrapper>
              <PlayButtonImage
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
        <SwiperSlider />
      </SliderWrapper>
    </>
  );
};

export default ContentDetailAbout;

const SliderWrapper = styled.div`
  padding: 50px 50px;
`;
