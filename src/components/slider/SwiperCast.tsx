import { Navigation } from 'swiper/modules';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/StoreTypes';
import { useMediaQuery, useTheme } from '@mui/material';

import {
  ActorFilmName,
  ActorRealName,
  SlideImage,
  SliderCastDiv,
  StyledSwiper,
  SwiperWrapperMain,
} from './SwiperStyles';
import { SectionTitle } from './SliderStyles';
import { contentImageUrl } from '../../redux/constants';
import NoPhoto from '../../assets/images/noPhoto.jpg';

type MapTypes = {
  id: string;
  profile_path: string;
  original_name: string;
  character: string;
};

export default function SwiperCast() {
  const Selector = useSelector(
    (state: RootState) => state.contentdetail.credits
  );
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  let slidesPerView = 4;

  if (isSmallScreen) {
    slidesPerView = 1;
  } else if (isMediumScreen) {
    slidesPerView = 3;
  } else if (isLargeScreen) {
    slidesPerView = 5;
  }

  return (
    <SwiperWrapperMain>
      <SectionTitle>Cast</SectionTitle>
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
        {Selector.map((el: MapTypes) => (
          <SliderCastDiv className="swiper-slide" key={el.id}>
            <SlideImage
              src={el.profile_path ? contentImageUrl(el.profile_path) : NoPhoto}
            />
            <ActorRealName>{el.original_name || 'Unknown'}</ActorRealName>
            <ActorFilmName>{el.character || 'Unknown'}</ActorFilmName>
          </SliderCastDiv>
        ))}
      </StyledSwiper>
    </SwiperWrapperMain>
  );
}
