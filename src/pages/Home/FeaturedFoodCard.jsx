/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const FeaturedFoodCard = ({ featureFood }) => {
  const { _id, FoodImage, FoodName, DonorName, DonorImage, PickupLocation,ExpiredDate, FoodQuantity,AdditionalNotes } = featureFood;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg h-60 w-full" src={FoodImage} alt="" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {FoodName}
          </h5>
        </a>
        <div className="flex justify-between mx-auto">
          <p className="mb-3 text-2xl font-semibold text-gray-700 dark:text-gray-400">Donar : {DonorName}</p>
          <img className="rounded-full w-12 h-12 " src={DonorImage} alt="" />
        </div>
        <div className="flex">
          <h1 className="font-semibold mr-4">Food Quantity : {FoodQuantity}</h1>
          <p className="font-semibold">Expired Date : {ExpiredDate}</p>
        </div>
        <h2 className="font-semibold my-5">Pickup Location : {PickupLocation}</h2>
        <p className="mb-4">Additional Notes : {AdditionalNotes}</p>
        <Link to={`/food/${_id}`}>
          <button className="btn btn-secondary">View Detail</button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedFoodCard;
