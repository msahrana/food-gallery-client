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
import PrivateRoute from './private/PrivateRoute';
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
        loader: ()=>fetch('https://food-gallery-server-mu.vercel.app/food')
      },
      {
        path: '/manageMyFoods',
        element: <PrivateRoute><ManageMyFoods></ManageMyFoods></PrivateRoute>,
        loader: ()=>fetch('https://food-gallery-server-mu.vercel.app/request')
      },
      {
        path: '/myFoodRequest',
        element: <PrivateRoute><MyFoodRequest></MyFoodRequest></PrivateRoute>
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
        element: <PrivateRoute><AddFood></AddFood></PrivateRoute>
      },
      {
        path: '/food/:_id',
        element: <PrivateRoute><FoodDetails></FoodDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://food-gallery-server-mu.vercel.app/food/${params._id}`)
      },
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
