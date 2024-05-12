import { Link } from "react-router-dom";
import { ImageFilm, ShopItemName, ShopItemWrapper } from "./SliderStyles";
import styled from "styled-components";
const StyledLink = styled(Link)`
  text-decoration: none;
`;

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
