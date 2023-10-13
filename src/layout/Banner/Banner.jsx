/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";


const Banner = () => {
    return (

        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/Qdp0WJW/homepage-bg1.jpg)' }}>
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center ">
                <div className="max-w-lg">
                    <h1 className="mb-5 text-5xl font-bold text-neutral-50">Level Up Your <span className="text-[#aaff03]">Gaming Event</span> with Us!</h1>
                    <p className="mb-5 text-white">Comprehensive Gaming Event Services: From venue selection to live streaming, we ensure your gaming events are unforgettable. Let's elevate your gaming experience!</p>
                    <Link to='/contact'>
                        <button  className="btn bg-[#aaff03] hover:bg-[#76b300] text-indigo-800 border-0">Get Started</button>
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Banner;