import { Rating } from '@mui/material';
import {
  ImageFilm,
  ShopItemName,
  ShopItemWrapper,
  StyledLink,
} from './SliderStyles';
import { contentImageUrl } from '../../redux/constants';
import { MostPopularType } from '../../redux/features/mostpopular/MostPopularType';
import noImage from '../../assets/images/noPhoto.jpg';

interface Props {
  film: MostPopularType;
  id: number;
  mediaType: string;
}

function Slide({ film, id, mediaType }: Props) {
  const ratingScore = Math.round(film.vote_average * 10) * 0.05;
  let contentTitle = film.original_title;
  let poster = film.poster_path;

  if (mediaType === 'tv') {
    contentTitle = film.original_name;
  } else if (mediaType === 'person') {
    contentTitle = film.original_name;
    poster = film.profile_path;
  }

  return (
    <StyledLink to={`/contentdetail/${mediaType}/${id}`}>
      <ShopItemWrapper>
        <ImageFilm
          src={poster ? contentImageUrl(poster) : noImage}
          alt="poster"
        />
        <ShopItemName>{contentTitle}</ShopItemName>
        {mediaType !== 'person' && (
          <Rating readOnly value={ratingScore} size="small" />
        )}
      </ShopItemWrapper>
    </StyledLink>
  );
}

export default Slide;
