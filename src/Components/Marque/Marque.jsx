import Marquee from "react-fast-marquee";

const Marque = () => {
    return (
        <div className="flex py-2 text-xs md:flex bg-white">
            {/* <div className="px-4 py-2 bg-[#ff6663] rounded-lg text-white "></div> */}
            <Marquee pauseOnHover={true} speed={150}>
                <div className="flex gap-[88px]">
                <img className="h-20" src="https://i.ibb.co/qphdkxr/logo1.jpg" alt="" />
                <img className="h-20" src="https://i.ibb.co/5h0x8x4/logo2.jpg" alt="" />
                <img className="h-20"  src="https://i.ibb.co/pLbVnf3/logo3.jpg" alt="" />
                <img className="h-20"  src="https://i.ibb.co/f4KfcNr/logo4.jpg" alt="" />
                <img className="h-20"  src="https://i.ibb.co/f2x5F5V/logo5.jpg" alt="" />
                <img className="h-20"  src="https://i.ibb.co/Y7C9rKn/logo6.jpg" alt="" />
                <img className="h-20"  src="https://i.ibb.co/2vTHMHf/logo7.jpg" alt="" />
                {/* <img className="h-20"  src="https://i.ibb.co/f4KfcNr/logo4.jpg" alt="" /> */}
                </div>
            </Marquee>
        </div>
    );
};

export default Marque;