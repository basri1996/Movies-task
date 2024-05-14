import { Rating } from "@mui/material";
import {
  ImageFilm,
  ShopItemName,
  ShopItemWrapper,
  StyledLink,
} from "./SliderStyles";
import { contentImageUrl } from "../../redux/constants";
import { MostPopularType } from "../../redux/features/mostpopular/MostPopularType";

interface Props {
  film: MostPopularType;
  title: string;
  id: number;
}

function Slide({ film, title, id }: Props) {
  const ratingScore = Math.round(film.vote_average * 10) * 0.05;
  const mediaType = title === "Popular movies" ? "movie" : "tv";
  return (
    <StyledLink to={`/contentdetail/${mediaType}/${id}`}>
      <ShopItemWrapper>
        <ImageFilm src={contentImageUrl(film.poster_path)} alt="poster" />
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
