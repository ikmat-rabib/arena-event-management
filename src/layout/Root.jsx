import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";


const Root = () => {
    return (
        <div className=" ">
            <video className="-z-10 fixed min-h-full min-w-full" autoPlay loop src="/src/assets/pexels_videos_2759477 (720p).mp4"></video>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;