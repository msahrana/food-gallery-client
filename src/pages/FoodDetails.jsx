import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const FoodDetails = () => {

  const foodDetails = useLoaderData()
  console.log(foodDetails)

  const {_id} = useParams()
  console.log(_id)

  const handleRequest = e =>{
    e.preventDefault();
    const name = e.target.name.value
    const quantity = e.target.quantity?.value
    const donar = e.target.donar.value
    const donarEmail = e.target.donarEmail.value
    const expireDate = e.target.expireDate.value
    const requestDate = e.target.requestDate.value
    const location = e.target.location.value
    const notes = e.target.notes.value
    const foodImage = e.target.foodImage.value
    const donation = e.target.donation.value

    const requestFood = {name, quantity, donation, donar, requestDate, donarEmail, expireDate, location, notes, foodImage}
    console.log(requestFood)

    fetch('http://localhost:5000/request',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(requestFood)
    })
    .then(res=>res.json())
    .then(data =>{
        console.log(data)
        if (data.insertedId) {
            Swal.fire({
                title: 'Success!',
                text: 'Food Request Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    })
}

  const {FoodImage, FoodName, DonorName, DonorImage, PickupLocation,ExpiredDate, FoodQuantity,AdditionalNotes} = foodDetails || {}


  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-6">Single Food details : </h1>
      <div className="mx-auto">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src={FoodImage}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {FoodName}
              </h5>
            </a>
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
            
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn btn-secondary" onClick={()=>document.getElementById('my_modal_1').showModal()}>Request</button>
            <dialog id="my_modal_1" className="modal">
              <form onSubmit={handleRequest} className="modal-box">
                <h3 className="font-bold text-2xl text-center">Request Food Item : </h3> 
                <div className="md:flex gap-6 mb-6">
                  <div className="form-control md:w-1/2">
                    <label className="label">
                      <span className="label-text">Food Name</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text" defaultValue={FoodName}
                        name="name"
                        placeholder="Enter Food name"
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>
                  <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text">Food Quantity</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text" defaultValue={FoodQuantity}
                        name="quantity"
                        placeholder="Quantity"
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>
                  <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text">Donation Money</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="number"
                        name="donation"
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>
                </div>
                <div className="md:flex gap-6 mb-6">
                  <div className="form-control md:w-1/2">
                    <label className="label">
                      <span className="label-text">Donar Name</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text" defaultValue={DonorName}
                        name="donar"
                        placeholder="Food Donar"
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>
                  <div className="form-control md:w-1/2">
                    <label className="label">
                      <span className="label-text">Donar Email</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="email" required
                        name="donarEmail"
                        placeholder="Donar Email"
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>
                </div>
                <div className="md:flex gap-6 mb-6">
                  <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text">Request Date</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="date"
                        name="requestDate"
                        placeholder="Request Date"
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>
                  <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text">Expired Date</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="date" defaultValue={ExpiredDate}
                        name="expireDate"
                        placeholder="Expired Date"
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>
                </div>
                <div className="md:flex gap-6 mb-6">
                  <div className="form-control md:w-1/2">
                    <label className="label">
                      <span className="label-text">Pickup Location</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text" defaultValue={PickupLocation}
                        name="location" required
                        placeholder="Pickup Location"
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>
                  <div className="form-control w-1/2">
                    <label className="label">
                      <span className="label-text">Additional Notes</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text" required
                        name="notes"
                        placeholder="Additional Notes"
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="form-control md:w-full">
                    <label className="label">
                      <span className="label-text">Food Image</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text" defaultValue={FoodImage}
                        name="foodImage"
                        placeholder="Enter Food Image URL"
                        className="input input-bordered w-full"
                      />
                    </label>
                  </div>
                </div>
                <div className="modal-action">
                <button type="submit" className="btn btn-secondary mr-60" >Request</button>
                  <form method="dialog">
                    <button className="btn btn-secondary">Close</button>
                  </form>
              </div>
              </form>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
