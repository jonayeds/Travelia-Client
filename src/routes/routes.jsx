import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllSpots from "../pages/AllSpots";
import MyList from "../pages/MyList";
import AddSpot from "../pages/AddSpot";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path: '/Login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element:<Register></Register>
        },
        {
            path: '/allSpots',
            element:<AllSpots></AllSpots>
        },
        {
            path: '/myList',
            element:<MyList></MyList>
        },
        {
            path: '/addSpot',
            element:<AddSpot></AddSpot>
        }
      ]
    },
  ]);
  export default router