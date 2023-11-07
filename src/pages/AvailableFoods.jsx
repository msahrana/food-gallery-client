import { useEffect, useState } from "react";
import FeaturedFoodCard from "./Home/FeaturedFoodCard";


const AvailableFoods = () => {

    const [featuredFood, setFeaturedFood] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/food')
        .then(res => res.json())
        .then(data => setFeaturedFood(data))
    },[])

    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-6">Available Foods Here : </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
                {
                    featuredFood.map(featureFood => <FeaturedFoodCard key={featureFood._id} featureFood={featureFood}></FeaturedFoodCard>)
                }
            </div>
        </div>
    );
};

export default AvailableFoods;