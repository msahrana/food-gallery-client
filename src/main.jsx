import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layout/MainLayout';
import AvailableFoods from './pages/AvailableFoods';
import ManageMyFoods from './pages/ManageMyFoods';
import MyFoodRequest from './pages/MyFoodRequest';
import Login from './pages/Login';
import Register from './pages/Register';
import ErrorPage from './error/ErrorPage';
import Home from './pages/Home/Home';
import AddFood from './pages/AddFood';
import FoodDetails from './pages/FoodDetails';
import AuthProvider from './provider/AuthProvider';
// import CheckOut from './pages/CheckOut';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/availableFoods',
        element: <AvailableFoods></AvailableFoods>,
        loader: ()=>fetch('http://localhost:5000/food')
      },
      {
        path: '/manageMyFoods',
        element: <ManageMyFoods></ManageMyFoods>,
        loader: ()=>fetch('http://localhost:5000/food')
      },
      {
        path: '/myFoodRequest',
        element: <MyFoodRequest></MyFoodRequest>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/addFood',
        element: <AddFood></AddFood>
      },
      {
        path: '/food/:_id',
        element: <FoodDetails></FoodDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/food/${params._id}`)
      },
      // {
      //   path: '/checkout/:_id',
      //   element: <CheckOut></CheckOut>,
      //   loader: ({params}) => fetch(`http://localhost:5000/food/${params._id}`)
      // }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
