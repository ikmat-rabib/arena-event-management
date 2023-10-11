import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";


const Root = () => {
    return (
        <div className=" ">
            {/* <div className="bg-indigo-600 -z-20"></div> */}
           
            {/* <img className="-z-10 absolute w-full h-full object-cover" src="/public/images/homepage-bg.jpg" alt="" /> */}
            {/* <div className="-z-20 absolute inset-0 bg-indigo-700  "></div> */}
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;