import { useSelector } from "react-redux";
import { RootState } from "../redux/store/StoreTypes";
import { contentImageUrl } from "../redux/constants";
import NoPhoto from "../../public/assets/images/noPhoto.jpg";
import { ActorFilmName, ActorRealName, SlideImage, SliderCastDiv } from "./slider/SwiperStyles";

const CastMappedSlides = () => {
  const Selector = useSelector((state: RootState) => state.contentdetail.credits); 

  return (
    <>
      {Selector.map((el: any) => (
        <SliderCastDiv className="swiper-slide" key={el.id}> 
          <SlideImage
            src={el.profile_path ? contentImageUrl(el.profile_path) : NoPhoto}
          />
          <ActorRealName>{el.original_name || "Unknown"}</ActorRealName>
          <ActorFilmName>{el.character || "Unknown"}</ActorFilmName>
        </SliderCastDiv>
      ))}
    </>
  );
};

export default CastMappedSlides;
