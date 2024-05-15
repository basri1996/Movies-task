import SwiperComponents from "../components/slider/SwiperComponents";
import HomeSlider from "../components/slider/HomeSlider";
import Slider from "../components/slider/Slider";
import GenreMappedSlides from "../components/GenreMappedSlides";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/StoreTypes";
function Home() {
  const {
    tv: { tvSerialData },
    movie: { movieData },
  } = useSelector((state: RootState) => state.mostPopular);
  return (
    <div>
      <HomeSlider />
      <SwiperComponents title={"Popular Genres"}>
        <GenreMappedSlides />
      </SwiperComponents>
      <Slider title={"Popular movies"} data={movieData} mediaType={"movie"} />
      <Slider title={"Popular tv shows"} data={tvSerialData} mediaType={"tv"} />
    </div>
  );
}

export default Home;
