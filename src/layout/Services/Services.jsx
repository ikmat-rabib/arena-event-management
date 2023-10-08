import Service from "../../Components/Service/Service";


const Services = () => {
    return (
        <div className="max-w-6xl mx-auto py-16 text-center">
            <h2 className="text-3xl font-semibold my-2">Our Gaming Event Services</h2>
            <p className="mb-8 text-sm">Enhance gaming events with our expert services for an unforgettable experiences</p>
            <div className="grid grid-cols-3 gap-4">
                <Service></Service>
            </div>
        </div>
    );
};

export default Services;