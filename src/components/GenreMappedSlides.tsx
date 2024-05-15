import { useSelector } from "react-redux";
import { RootState } from "../redux/store/StoreTypes";
import { SwiperSlide } from "./slider/SwiperStyles";


const GenreMappedSlides = () => {
  const Selector = useSelector(({ genre }: RootState) => genre.genre);

  return (
    <>
      {Selector.map((el) => (
        <SwiperSlide key={el.id} className="swiper-slide"> 
          {el.name}
        </SwiperSlide>
      ))}
    </>
  );
};

export default GenreMappedSlides;
