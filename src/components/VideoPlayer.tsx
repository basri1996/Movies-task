import styled from "styled-components";

const VideoContainer = styled.div`
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
    height: 360px;
    /* top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); */
  }
`;

const Video = styled.iframe`
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

interface Props {
  url: string;
}

function AbsoluteVideo({ url }: Props) {
  return (
    <VideoContainer>
      <Video src={url} allowFullScreen></Video>
    </VideoContainer>
  );
}

export default AbsoluteVideo;
