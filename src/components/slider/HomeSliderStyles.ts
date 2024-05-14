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

export const ImageFilm = styled.img`
  width: 100%;
  height:300px;
  @media (min-width: 500px) {
    height:400px
  }
  @media (min-width: 768px) {
    height: 600px
  }
  @media (min-width: 1054px) {
    height: 100vh
  }
`;

export const Title = styled.h1`
font-size: 12px;
width: 50px;
@media (min-width: 768px) {
  width: 100px;
}
`;
export const Wrapper = styled.div`
width: 100%;
`;
export const HomeCarouselWrapper = styled.div`
display: flex;
position: relative;
`;


const center = () => `
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const CenterDiv = styled.div`
 ${center()};`


export const ArrowDiv = styled.div`
  width: 100%;
  padding: 0 20px;
  ${center()};
  justify-content: space-between;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  @media (min-width: 500px) {
    padding: 0 30px;
  }
  @media (min-width: 768px) {
    padding: 0 40px;
  }
  @media (min-width: 1054px) {
    padding: 0 50px;
  }
`;

export const ArrowImg1 = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  @media (min-width: 500px) {
    width: 35px;
    height: 35px;
  }
  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
  @media (min-width: 1054px) {
    width: 50px;
    height: 50px;
  }
`;
export const ArrowImg2 = styled(ArrowImg1)``;
export const HeaderDiv = styled.div`
 z-index:1000;
  position: absolute;
  padding:0 20px;
  top: 20px;
  ${center};
  justify-content:space-between;
  width:100%;
  @media (min-width: 500px) {
    padding:0 30px;
  }
  @media (min-width: 768px) {
    padding:0 40px;
  }
  @media (min-width: 1054px) {
    padding:0 50px;
  }
`;
export const LogoImg = styled.img`
  width: 100px;
 

  @media (min-width: 500px) {
    width: 120px;
  }
  @media (min-width: 768px) {
    width: 150px;
  }
  @media (min-width: 1054px) {
    width: 160px;
  }
`;

export const RelativeDiv = styled.div`
  position: relative;
`;

export const TitleDiv = styled.div`
width:100%;
  position: absolute;
  ${center()};
  padding:0 20px;
  justify-content:space-between;
  bottom: 20px;
  ;

  @media (min-width: 500px) {
    padding:0 30px;
    bottom: 30px;
  }
  @media (min-width: 768px) {
    padding:0 40px;
    bottom: 40px;
  }
  @media (min-width: 1054px) {
    padding:0 50px;
    bottom: 50px;
  }
`;

export const TitleWrapper = styled.div`
  ${center()};
  gap:10px;
`;

export const FilmTitle = styled.h1`
  font-size: 12px;
  
  color: ${(props) => props.theme.colors.LightBlue};
  @media (min-width: 500px) {
    font-size: 18px;
  }
  @media (min-width: 768px) {
    font-size: 30px;
  }
  @media (min-width: 1054px) {
    font-size: 40px;
  }
`;
export const PlayButtonImage = styled(ArrowImg1)``;

export const ButtonDiv=styled.div`
display:flex;
justify-content:center;
align-items:center;
height:36px;`


export const StyledButton = {
  fontFamily: "Red Rose",
  background: "#66b6d2",
  maxHeight: "36px",
  fontSize: "10px",
};

export const responsive = {
  mobile: {
    breakpoint: { max: 5000, min: 0 },
    items: 1,
  },
};
