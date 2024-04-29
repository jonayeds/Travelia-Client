import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";


const Layout = () => {
    return (
        <div>
           <div className="h-[68px] lg:h-0">
           <div className="backdrop-blur-2xl bg-black lg:bg-opacity-15 bg-opacity-50 fixed  h-[68px]   z-50 w-full">  
            <Nav></Nav>
            </div>
           </div>
            <div className="min-h-screen">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Layout;