import styled from "styled-components";

export const VideoContainer = styled.div`
  position: absolute;
  @media (min-width: 500px) {
    width: 300px;
    height: 170px;
  }

  @media (min-width: 768px) {
    width: 450px;
    height: 300px;
  }

  @media (min-width: 1054px) {
    width: 640px;
    height: 360px
  }
`;

export const Video = styled.iframe`
  width: 300px;
  height: 200px;
  border: none;

  @media (min-width: 500px) {
    width: 400px;
    height: 250px;
  }

  @media (min-width: 768px) {
    width: 450px;
    height: 300px;
  }

  @media (min-width: 1054px) {
    width: 640px;
    height: 360px;
  }
`;