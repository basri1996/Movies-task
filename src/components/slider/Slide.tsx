import { Rating } from "@mui/material";
import {
  ImageFilm,
  ShopItemName,
  ShopItemWrapper,
  StyledLink,
} from "./SliderStyles";
import { contentImageUrl } from "../../redux/constants";
import { MostPopularType } from "../../redux/features/mostpopular/MostPopularType";
import noImage from "../../../public/assets/images/noPhoto.jpg"

interface Props {
  film: MostPopularType;
  title: string;
  id: number;
  mediaType:string
}

function Slide({ film, title, id ,mediaType}: Props) {
  const ratingScore = Math.round(film.vote_average * 10) * 0.05;
  return (
    <StyledLink to={`/contentdetail/${mediaType}/${id}`}>
      <ShopItemWrapper>
        <ImageFilm src={film.poster_path ? contentImageUrl(film.poster_path) : noImage } alt="poster" />
        <ShopItemName>
          {title === "Popular movies"
            ? film.original_title
            : film.original_name}
        </ShopItemName>
        <Rating readOnly value={ratingScore} size="small" />
      </ShopItemWrapper>
    </StyledLink>
  );
}

export default Slide;
