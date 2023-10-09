/* eslint-disable react/no-unescaped-entities */


const Banner = () => {
    return (

        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/zPdQZDF/vecteezy-city-life-in-beijing-crowded-streets-illuminated-24929971-926.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center ">
                <div className="max-w-lg">
                    <h1 className="mb-5 text-5xl font-bold text-neutral-50">Level Up Your <span className="text-indigo-400">Gaming Event</span> with Us!</h1>
                    <p className="mb-5 text-white">Comprehensive Gaming Event Services: From venue selection to live streaming, we ensure your gaming events are unforgettable. Let's elevate your gaming experience!</p>
                    <button className="btn bg-indigo-500 hover:bg-indigo-800 text-white border-0">Get Started</button>
                </div>
            </div>
        </div>

    );
};

export default Banner;