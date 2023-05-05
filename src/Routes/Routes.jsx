import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../component/Home/Home';
import Blog from '../component/Blog/Blog';
import Login from '../component/Login/Login';
import Register from '../component/Register/Register';

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
        }
      ]
    },
  ]);

  export default router;