import Marquee from "react-fast-marquee";

const Marque = () => {
    return (
        <div className="flex">
            <div className="px-4 py-2 bg-green-800 rounded-lg ">Offer</div>
            <Marquee pauseOnHover={true} speed={150}>
                <p className="mr-20">10% offer running till DECEMBER 2nd.... </p>
                <p className="mr-20">Call: 01234-567890</p>
                <p>Email: arcade@arena@mail.com</p>
            </Marquee>
        </div>
    );
};

export default Marque;