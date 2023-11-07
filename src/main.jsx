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
        element: <AvailableFoods></AvailableFoods>
      },
      {
        path: '/manageMyFoods',
        element: <ManageMyFoods></ManageMyFoods>
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
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
