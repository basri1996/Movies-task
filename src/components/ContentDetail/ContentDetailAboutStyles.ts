import styled from "styled-components";

export const BackgroundContainer = styled.img`
  position: absolute;
  width: 100%;
  z-index: 0;
  filter: brightness(0.2);
  height: 300px;
  max-height: 700px;
  @media (min-width: 500px) {
    height: 350px;
  }
  @media (min-width: 768px) {
    height: 600px;
  }
  @media (min-width: 1054px) {
    height: 100vh;
  }
`;
export const Logo = styled.img`
  width: 100px;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 1000;
  object-fit: cover;
  @media (min-width: 500px) {
    width: 120px;
    left: 30px;
  }
  @media (min-width: 768px) {
    width: 150px;
    left: 50px;
  }
  @media (min-width: 1054px) {
    width: 160px;
    left: 50px;
  }
`;

export const PosterImage = styled.img`
  width: 130px;
  height: 195px;
  border-radius: 10px;
  @media (min-width: 768px) {
    width: 300px;
    height: 450px;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  position: absolute;
  z-index: 0;
  gap: 40px;
  padding: 0 20px;
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

export const RelativeDiv = styled.div`
  position: relative;
  height: 300px;
  max-height: 700px;
  @media (min-width: 500px) {
    height: 400px;
  }
  @media (min-width: 768px) {
    height: 600px;
  }
  @media (min-width: 1054px) {
    height: 100vh;
  }
`;

export const DetailsDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentTitle = styled.h1`
  font-weight: 900;
  font-size: 10px;
  color: white;
  @media (min-width: 500px) {
    font-size: 16px;
  }
  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

export const GenreWrapper = styled.div`
  display: flex;
  gap: 3px;
  margin-bottom: 10px;
  margin-top: 3px;
  @media (min-width: 768px) {
     margin-bottom: 25px;
     gap: 10px;
  }
`;
export const LiTag = styled.li`
  color: white;
  display: flex;
`;
export const GenreItem = styled.h2`
  font-size: 6px;
  color: white;
  white-space: nowrap;
  @media (min-width: 768px) {
    font-size: 12px;
  }
  @media (min-width: 1054px) {
    font-size: 14px;
  }
`;
export const GenreItemWrapper = styled.div`
  display: flex;
`;
export const ButtonWrapper = styled.div`
  font-size: 14px;
  color: white;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
  @media (min-width: 768px) {
    font-size: 20px;
    margin: 25px 0;
  }
`;
export const TagLine = styled(GenreItem)`
  opacity: 0.7;
`;

export const OverView = styled.h1`
  font-size: 12px;
  color: white;
  margin: 10px 0 0;
  @media (min-width: 768px) {
    margin: 25px 0 10px;
     font-size: 22px;
  }
`;

export const Description = styled.div`
  font-size: 6px;
  color: white;
  max-width: 600px;
  max-height:79px;
  overflow:hidden;
  @media (min-width: 768px) {
    font-size: 11px;
    max-height:initial;
  }
  @media (min-width: 1054px) {
    font-size: 14px;
  }
`;

export const PlayerButton =styled.img`
width: 20px;
  height: 20px;
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
  }`


export const SliderWrapper = styled.div`
padding:20px;
@media (min-width: 500px) {
  padding: 30px;
  }
  @media (min-width: 768px) {
    padding: 40px;
  }
  @media (min-width: 1054px) {
    padding: 50px;
  }
  
  
`;