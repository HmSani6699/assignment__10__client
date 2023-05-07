import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../component/Home/Home';
import Blog from '../component/Blog/Blog';
import Login from '../component/Login/Login';
import Register from '../component/Register/Register';
import PrivetRoute from './PrivetRoute';
import Error from '../ErrorPage/Error';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/user/:id',
          element:<PrivetRoute ></PrivetRoute>
        }
      ]
    },
    {
      path:'*',
      element:<Error></Error>
    }

  ]);

  export default router;