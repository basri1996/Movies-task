import GenreSlide from "../components/slider/GenreSlide";
import HomeSlider from "../components/slider/HomeSlider";
import Slider from "../components/slider/Slider";

function Home() {

  
  return (
    <div>
      <HomeSlider />
      <Slider title={"Popular movies"} />
      <Slider title={"Popular tv shows"} />
      <GenreSlide />
    </div>
  );
}

export default Home;
