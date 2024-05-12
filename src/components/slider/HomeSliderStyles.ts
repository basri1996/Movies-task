import Carousel from "react-multi-carousel";
import styled from "styled-components";
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
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
  }

  .react-multiple-carousel__arrow--left {
    z-index:0;
    left: 20px;
    @media (min-width: 500px) {
      left: 30px;
    }
    @media (min-width: 768px) {
      left: 40px;
    }
    @media (min-width: 1054px) {
      left: 50px;
    }
  }

  .react-multiple-carousel__arrow--right {
    z-index:0;
    right: 20px;
    @media (min-width: 500px) {
      right: 30px;
    }
    @media (min-width: 768px) {
      right: 40px;
    }
    @media (min-width: 1054px) {
      right: 50px;
    }
  }
`;

export const ImageFilm = styled.img<{ height: string }>`
  width: 100%;
  height: calc(${(props) => props.height} / 2.5);
  @media (min-width: 500px) {
    height: calc(${(props) => props.height} / 2);
  }
  @media (min-width: 768px) {
    height: calc(${(props) => props.height} / 1.5);
  }
  @media (min-width: 1054px) {
    height: ${(props) => props.height};
  }
`;


export const SearchedItemsDivWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
padding: 10px;
background-color: ${(props) => props.theme.colors.LightBlue};
position: absolute;
right: 20px;
top: 60px;
z-index: 999;
@media (min-width: 500px) {
  right: 30px;
}
@media (min-width: 768px) {
  top: 75px;
}
@media (min-width: 768px) {
  right: 40px;
}
@media (min-width: 1054px) {
  right: 50px;
}
`;
export const Title = styled.h1`
font-size: 12px;
width: 50px;
@media (min-width: 768px) {
  width: 100px;
}
`;

export const SearchedImage = styled.img`
width: 70px;
height: 70px;
@media (min-width: 768px) {
  width: 100px;
  height: 100px;
}
`;
export const SearchedItemWrapper = styled.div`
display: flex;
gap: 5px;
`;
export const SearchedInformationWrapper = styled.div`
display: flex;
flex-direction: column;
`;
export const SearchedItemDescription = styled.p`
font-size: 9px;
width: 50px;
height: 50px;
overflow: hidden;
@media (min-width: 768px) {
  width: 70px;
  height: 70px;
}
`;

export const Wrapper = styled.div`
width: 100%;
`;
export const HomeCarouselWrapper = styled.div`
display: flex;
position: relative;
`;
