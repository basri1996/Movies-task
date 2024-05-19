import 'react-multi-carousel/lib/styles.css';
import { useEffect } from 'react';
import { triggerVideoModal } from '../../redux/features/trending/TrendingMoviesSlice';
import { useDispatch, useSelector } from 'react-redux';
import playButton from '../../assets/images/play-button.png';
import Modal from '../ui/Modal';
import {
  CustomCarousel,
  HomeCarouselWrapper,
  ImageFilm,
  Wrapper,
  FilmTitle,
  PlayButtonImage,
  TitleDiv,
  TitleWrapper,
  StyledButton,
  responsive,
  sxButton,
} from './HomeSliderStyles';
import VideoPlayer from '../VideoPlayer';
import { Button, useMediaQuery, useTheme } from '@mui/material';
import { StyledLink } from '../slider/SliderStyles';
import {
  fetchMovieTrailerAsync,
  fetchTrendyMoviesAsync,
} from '../../redux/features/trending/TrendingMoviesThunk';
import { contentImageUrl } from '../../redux/constants';
import { RootState } from '../../redux/store/StoreTypes';
import { AppDispatch } from '../../redux/store/store';
import Loader from '../ui/Loader';

function HomeSlider() {
  const dispatch = useDispatch<AppDispatch>();
  const { movieData, filmUrl, videoModalOpen ,status} = useSelector(
    ({ trendingMovies }: RootState) => trendingMovies
  );
  const MediaType = 'movie';
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('sm'));


  useEffect(() => {
    dispatch(fetchTrendyMoviesAsync());
  }, [dispatch]);

  const handlePlay = async (id: number) => {
    dispatch(fetchMovieTrailerAsync({ id, MediaType }));
  };

  const handleModal = () => {
    dispatch(triggerVideoModal());
  };

  if(status === "loading")return <Loader/>

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
              {movieData.map(film => (
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
                        size={isLargeScreen ? 'large' : 'small'}
                        style={StyledButton}
                        sx={sxButton}
                        variant="contained"
                        children={'See more'}
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



