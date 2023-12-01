import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";



const Register = () => {

    const {createUser, googleLogin} = useContext(AuthContext)

    const handleGoogleLogin = () =>{
        googleLogin()
        .then(result => {
            console.log(result.user)
        })
        .catch(error=> console.error(error))
    }

    const handleRegister = e =>{
        e.preventDefault()
        const form = e.target 
        const name = form.name.value
        const photoURL = form.photoURL.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, photoURL, email, password)

        createUser(email, password)
        .then(result =>{
            console.log(result.user)
            const user = {name, photoURL, email, password}
            fetch('https://food-gallery-server-mu.vercel.app/user', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                      title: "Success!",
                      text: "User Added Successfully",
                      icon: "success",
                      confirmButtonText: "Cool",
                    });
                  }
            })
        })
        .catch(error =>{
            console.error(error)
        })
    }

    return (
        <div className="w-full mx-auto max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form onSubmit={handleRegister} className="space-y-6">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign Up to our platform</h5>
            <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Your Full name" required/>
            </div>
            <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Photo URL</label>
                <input type="text" name="photoURL" id="photo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Photo URL" required/>
            </div>
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
            </div>
            <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
            </div>
            
            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up to your account</button>

            <p className='text-center'>Or, Sign Up with</p>
                    <button onClick={handleGoogleLogin} type='button' className='btn btn-circle mx-auto text-xl text-[#FF3811]'>G</button>
        
            <p className='my-4 text-center'>Already Registered? <Link className='text-blue-700 font-bold' to='/login'>Sign In</Link></p>
            </form>
        </div>
    )
};

export default Register;