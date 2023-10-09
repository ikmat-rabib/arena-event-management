import { Link } from "react-router-dom";
import Footer from "../../layout/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";


const ErrorPage = () => {
    return (
        <div className=" ">
            <Navbar></Navbar>
            <div className="w-2/5 mx-auto">
                <img src="/public/7887403_3796506.jpg" alt="" />
                <Link to='/'><p className="text-center py-4 px-10 text-4xl font-bold text-blue-600 underline"> Back to Home </p></Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;