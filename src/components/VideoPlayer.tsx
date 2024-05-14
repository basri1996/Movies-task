import { Video, VideoContainer } from "./VideoPlayerStyles";

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
