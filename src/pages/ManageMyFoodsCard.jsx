import Swal from "sweetalert2";


const ManageMyFoodsCard = ({ featureFood, reface, setReface}) => {

  const {_id, FoodImage, FoodName, DonorName, DonorImage, PickupLocation,ExpiredDate, FoodQuantity,AdditionalNotes} = featureFood || {}

    const handleUpdate = _id =>{
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, confirm it!'
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`https://food-gallery-server-mu.vercel.app/request/${_id}`,{
          method: 'PATCH',
          headers: {
            'content-type':'application/json'
          },
          body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if (data.modifiedCount > 0){
            Swal.fire('Updated!','Your booking has been updated.','success')
            setReface(!reface)
          }
        })  
          }
        })
      }

    const handleDelete = _id => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
    
            fetch(`https://food-gallery-server-mu.vercel.app/request/${_id}`,{
                method: 'DELETE'
            })
            .then(res=> res.json())
            .then(data=>{
                console.log(data)
                if (data.deletedCount>0) {
                    Swal.fire("Deleted!", "Your Food Item deleted successfully.", "success");
                    setReface(!reface)
                }
            })
          }
        });
      };


    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#"><img className="rounded-t-lg h-60 w-full" src={FoodImage} alt=""/></a>
          <div className="p-5">
            <a href="#"><h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {FoodName}</h5></a>
            <div className="flex justify-between mx-auto">
              <p className="mb-3 text-2xl font-semibold text-gray-700 dark:text-gray-400">Donar : {DonorName}</p>
              <img className="rounded-full w-12 h-12" src={DonorImage} alt="" />
            </div>
            <div className="flex">
              <h1 className="font-semibold mr-4">Food Quantity : {FoodQuantity}</h1>
              <p className="font-semibold">Expired Date : {ExpiredDate}</p>
            </div>
              <h2 className="font-semibold my-5">Pickup Location : {PickupLocation}</h2>
              <p className="mb-4">Additional Notes : {AdditionalNotes}</p>
            <div className="flex">
              <button onClick={()=> handleUpdate(_id)} className="btn btn-secondary mr-44">Update</button>
              <button onClick={() => handleDelete(_id)} className="btn btn-secondary">Delete</button>
            </div>
          </div>
        </div>

        
  );
};

export default ManageMyFoodsCard;