import Marquee from "react-fast-marquee";

const Marque = () => {
    return (
        <div className="flex py-2 text-xs md:flex bg-white">
            {/* <div className="px-4 py-2 bg-[#ff6663] rounded-lg text-white "></div> */}
            <Marquee pauseOnHover={true} speed={150}>
                <div className="flex gap-[88px]">
                <img className="h-20" src="/public/images/logo1.jpg" alt="" />
                <img className="h-20" src="/public/images/logo2.jpg" alt="" />
                <img className="h-20"  src="/public/images/logo3.jpg" alt="" />
                <img className="h-20"  src="/public/images/logo4.jpg" alt="" />
                <img className="h-20"  src="/public/images/logo5.jpg" alt="" />
                <img className="h-20"  src="/public/images/logo6.jpg" alt="" />
                <img className="h-20"  src="/public/images/logo7.jpg" alt="" />
                {/* <img className="h-20"  src="/public/images/logo4.jpg" alt="" /> */}
                </div>
            </Marquee>
        </div>
    );
};

export default Marque;