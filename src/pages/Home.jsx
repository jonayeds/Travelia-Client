import Countries from "../components/Countries";
import Slider from "../components/Slider";
import TouristSpotsSection from "../components/TouristSpotsSection";

const Home = () => {
    return (
        <div className="">
            <Slider></Slider>
            <TouristSpotsSection></TouristSpotsSection>
            <Countries></Countries>
        </div>
    );
};

export default Home;