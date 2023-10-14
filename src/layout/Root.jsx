import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Root = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className=" ">
            {/* <div className="bg-indigo-600 -z-20"></div> */}

            {/* <img className="-z-10 absolute w-full h-full object-cover" src="/public/images/homepage-bg.jpg" alt="" /> */}
            {/* <div className="-z-20 absolute inset-0 bg-indigo-700  "></div> */}
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored" />
        </div>
    );
};

export default Root;