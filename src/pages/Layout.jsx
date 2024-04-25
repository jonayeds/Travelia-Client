import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";


const Layout = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">  
            <Nav></Nav>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;