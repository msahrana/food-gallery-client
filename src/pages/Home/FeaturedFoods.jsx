import { useEffect, useState } from "react";
import FeaturedFoodCard from "./FeaturedFoodCard";
import { Link } from "react-router-dom";



const FeaturedFoods = () => {

    const [featuredFood, setFeaturedFood] = useState([])

    useEffect(()=>{
        fetch('https://food-gallery-server-mu.vercel.app/food')
        .then(res => res.json())
        .then(data => setFeaturedFood(data))
    },[])

    return (
        <div>
            <h1 className="text-5xl font-bold text-center my-6">Featured Foods : {}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
                {
                    featuredFood.slice(0, 6).map(featureFood => <FeaturedFoodCard key={featureFood._id} featureFood={featureFood}></FeaturedFoodCard>)
                }
            </div>
            <div className="card-actions justify-center">
                <Link to='/availableFoods'>
                    <button className="btn btn-outline btn-secondary my-12">Show All</button>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedFoods;