import Marquee from "react-fast-marquee";

const Marque = () => {
    return (
        <div className="flex py-2 text-xs md:flex bg-indigo-300">
            {/* <div className="px-4 py-2 bg-[#ff6663] rounded-lg text-white "></div> */}
            <Marquee pauseOnHover={true} speed={150}>
                <p className="mr-52  font-normal ">Winter Offer coming soon.... </p>
                <p className="mr-52  font-normal ">Call: 01234-567890</p>
                <p className="mr-52  font-normal ">Email: arcade@arena@mail.com</p>
            </Marquee>
        </div>
    );
};

export default Marque;