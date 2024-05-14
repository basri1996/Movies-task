import styled from "styled-components";

export const BackgroundContainer = styled.img`
  position: absolute;
  width: 100%;
  z-index: 0;
  filter: brightness(0.2);
  height: 300px;
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

export const Logo = styled.img`
  width: 100px;
  position: absolute;
  top: 40px;
  left: 20px;
  z-index: 1000;
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
  width: 300px;
  height: 450px;
  border-radius: 10px;
`;

export const MainContainer = styled.div`
  display: flex;
  position: absolute;
  z-index: 0;
  top: 90px;
  left: 50px;
  gap: 40px;
`;

export const RelativeDiv = styled.div`
margin-top:0;
  position: relative;
  height: 300px;
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
  font-size: 32px;
  color: white;
`;

export const GenreWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 25px;
`;
export const LiTag = styled.li`
  color: white;
  display: flex;
`;
export const GenreItem = styled.h2`
  font-size: 16px;
  color: white;
`;
export const ButtonWrapper = styled.div`
  margin: 25px 0;
  font-size: 20px;
  color: white;
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const TagLine = styled(GenreItem)`
  opacity: 0.7;
`;

export const OverView = styled.h1`
  font-size: 22px;
  color: white;
  margin: 25px 0 10px;
`;

export const Description = styled.div`
  font-size: 14px;
  color: white;
  padding-right:50px;
`;
