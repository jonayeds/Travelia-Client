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
import PrivateRoute from "../PrivateRoutes/PrivateRoute";

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
            element:<PrivateRoute>
              <AllSpots></AllSpots>
            </PrivateRoute>,
            loader: ()=> fetch('http://localhost:5000/spots')
        },
        {
            path: '/myList',
            element:<PrivateRoute>
              <MyList></MyList>
            </PrivateRoute>,
            
        },
        {
            path: '/addSpot',
            element:<PrivateRoute>
              <AddSpot></AddSpot>
            </PrivateRoute>
        }
      ]
    },
  ]);
  export default router