import Countries from "../components/Countries";
import MapSection from "../components/MapSection";
import Slider from "../components/Slider";
import Sponsors from "../components/Sponsors";
import TouristSpotsSection from "../components/TouristSpotsSection";

const Home = () => {
    return (
        <div className="">
            <Slider></Slider>
            <TouristSpotsSection></TouristSpotsSection>
            <Countries></Countries>
            <div>
                <h1 className="text-center heading text-6xl mt-32">Find Your Destinations</h1>
            </div>
            <MapSection></MapSection>
            <Sponsors></Sponsors>
        </div>
    );
};

export default Home;