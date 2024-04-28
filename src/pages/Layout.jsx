import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";


const Layout = () => {
    return (
        <div>
            <div className="backdrop-blur-2xl bg-black bg-opacity-15 fixed z-50 w-full">  
            <Nav></Nav>
            </div>
            <div className="min-h-screen">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;