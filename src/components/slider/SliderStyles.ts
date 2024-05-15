import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
const moveTopAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const ShopItemSectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  flex-direction: column;
  margin-top: 20px;
  @media (min-width: 500px) {
    margin-top: 20px;
  }
  @media (min-width: 1024px) {
    margin-top: 30px;
  }
  
`;

export const CarouselWrapper = styled.div`
  width: 337px;
  padding-left: 26px;
  @media (min-width: 640px) {
    width: 647px;
  }
  @media (min-width: 1024px) {
    width: 957px;
  }
  @media (min-width: 1301px) {
    padding-left: 13px;
    width: 1200px;
  }
`;

// export const ShopItemSectionProducts = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: 50px;
// `;

export const ShopItemSectionButton = styled.div`
  margin-top: 10px;
  margin-bottom: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 600px) {
    margin-top: 50px;
  }
`;

export const ShopItemSectionText = styled.p`
  color: black;
  font-size: 48px;
  line-height: 1.3em;
  font-weight: 700;
`;

export const ShopItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  position: relative;

  &:hover {
    animation: ${moveTopAnimation} 1s ease infinite;
  }
`;

export const ShopItemName = styled.p`
  font-size: 16px;
  width:280px;
  color: black;
  font-weight: 700;
  line-height: 1.3em;
  margin-top: 10px;
`;

export const ShopItemPrice = styled.p`
  font-size: 14px;
  line-height: 1.3em;

  color: black;
  margin-top: 4px;
  font-weight: 700;
`;

export const ShopItemSectionContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const CartCircle = styled.div`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: white;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 10px;
  left: 245px;
`;

export const TriangleContainer = styled.div`
  position: absolute;
  width: 80px;
  height: 30px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-weight: 500;
  left: 155px;
  top: 10px;
`;

export const Triangle = styled.div`
  position: absolute;
  top: 10;
  right: -7px;
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  border-left: 7px solid black;
`;

export const ImageFilm = styled.img`
  width: 285px;
  height: 382px;
`;

export const SectionTitle = styled.h1`
  font-size: 30px;
  color: ${(props) => props.theme.colors.Blue};
  /* padding :25px; */
  padding: 25px 0;
`;


export const CustomCarousel = styled(Carousel)`
  .react-multiple-carousel__arrow {
    background-color: ${(props) => props.theme.colors.LightBlue};
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    transform: translateY(-50%);
    z-index: 1;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }

  .react-multiple-carousel__arrow--left {
    left: 8px;
  }

  .react-multiple-carousel__arrow--right {
    right: 35px;
    @media (min-width: 640px) {
      right: 33.5px;
    }
    @media (min-width: 1024px) {
      right: 32px;
    }
    @media (min-width: 1301px) {
      right: 20px;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;


export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1301 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1300, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1023, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 639, min: 0 },
    items: 1,
  },
};

