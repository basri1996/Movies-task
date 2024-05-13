
import { ImageFilm, ShopItemName, ShopItemWrapper, StyledLink } from "./SliderStyles";


function Slide({ film ,title,id }:any) {
  return (
    <StyledLink to={`/contentdetail/${id}`}>
    <ShopItemWrapper>
      <ImageFilm
        img={
          `https://image.tmdb.org/t/p/original${film?.backdrop_path}`
        }
      />
      <ShopItemName>{ title === "Popular movies" ?film.original_title : film.original_name
}</ShopItemName>
    </ShopItemWrapper>
    </StyledLink>
  );
}

export default Slide;
