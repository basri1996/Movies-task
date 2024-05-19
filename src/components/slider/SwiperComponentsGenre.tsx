import { useEffect } from 'react';
import { Navigation } from 'swiper/modules';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/StoreTypes';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store/store';
import { fetchAllGenresAsync } from '../../redux/features/genre/GenreThunk';
import { StyledSlides, StyledSwiper, SwiperWrapperMain } from './SwiperStyles';
import { SectionTitle } from './SliderStyles';
import { useMediaQuery, useTheme } from '@mui/material';

export default function SwiperComponentsGenre() {
  const Genres = useSelector(({ genre}: RootState) => genre.genre);
  const dispatch = useDispatch<AppDispatch>();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  let slidesPerView = 5; 

  if (isSmallScreen) {
    slidesPerView = 2
  } else if (isMediumScreen) {
    slidesPerView = 3
  } else if (isLargeScreen) {
    slidesPerView = 6;
  }

  useEffect(() => {
    dispatch(fetchAllGenresAsync());
  }, [dispatch]);

  return (
    <SwiperWrapperMain>
      <SectionTitle>Genres</SectionTitle>
      <StyledSwiper
        slidesPerView={slidesPerView}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {Genres.map(el => (
          <StyledSlides key={el.id} className="swiper-slide">
            {el.name}
          </StyledSlides>
        ))}
      </StyledSwiper>
    </SwiperWrapperMain>
  );
}
