import { useEffect, useState } from "react";
import ManageMyFoodsCard from "./ManageMyFoodsCard";


const ManageMyFoods = () => {

    const [featuredFood, setFeaturedFood] = useState([])
    const [reface, setReface] = useState(true)

    useEffect(()=>{
        fetch('https://food-gallery-server-mu.vercel.app/request')
        .then(res => res.json())
        .then(data => setFeaturedFood(data))
    },[])

    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-6">Manage My Foods : </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
                {
                    featuredFood.map(featureFood => <ManageMyFoodsCard key={featureFood._id} featureFood={featureFood} reface={reface} setReface={setReface}></ManageMyFoodsCard>)
                }
            </div>
        </div>
    );
};

export default ManageMyFoods;