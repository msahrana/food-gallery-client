import Banner from "./Banner";
import ExtraPartOne from "./ExtraPartOne";
import ExtraPartTwo from "./ExtraPartTwo";
import FeaturedFoods from "./FeaturedFoods";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedFoods></FeaturedFoods>
            <ExtraPartOne></ExtraPartOne>
            <ExtraPartTwo></ExtraPartTwo>
        </div>
    );
};

export default Home;