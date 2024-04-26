import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";


const Layout = () => {
    return (
        <div>
            <div className="backdrop-blur-2xl bg-black bg-opacity-5 fixed z-10 w-full">  
            <Nav></Nav>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;