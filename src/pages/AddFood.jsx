import Swal from 'sweetalert2'

const AddFood = () => {

    const handleAddFood = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const quantity = form.quantity.value
        const donar = form.donar.value
        const status = form.status.value
        const expireDate = form.expireDate.value
        const location = form.location.value
        const notes = form.notes.value
        const foodImage = form.foodImage.value
        const donarImage = form.donarImage.value

        const newFood = {name, quantity, donar, status,expireDate, location, notes, foodImage, donarImage}
        console.log(newFood)

        fetch('http://localhost:5000/food',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFood)
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'New Food Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }


    return (
        <div>
            <h1 className="text-4xl font-bold text-center my-6"> Add a Food : </h1>
            <div>
            <form onSubmit={handleAddFood}>
          <div className="md:flex gap-6 mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Food Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
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
                  type="text"
                  name="quantity"
                  placeholder="Quantity"
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
                  type="text"
                  name="donar"
                  placeholder="Food Donar"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Food Status</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="status"
                  placeholder="Available"
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
                  type="date"
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
                  type="text"
                  name="location"
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
                  type="text"
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
                  type="text"
                  name="foodImage"
                  placeholder="Enter Food Image URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="mb-6">
            <div className="form-control md:w-full">
              <label className="label">
                <span className="label-text">Donar Image</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="donarImage"
                  placeholder="Enter donar Image URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Add a New Food"
            className="btn btn-block bg-[#D2B48C] mb-8"
          />
        </form>
            </div>
        </div>
    );
};

export default AddFood;