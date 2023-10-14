import { useLoaderData } from "react-router-dom";
import Service from "../../Components/Service/Service";


const Services = () => {

    const services = useLoaderData();
    console.log(services);

    return (
        <div className="mx-2 overflow-x-hidden">

            <div className="max-w-6xl mx-auto py-16 text-center text-red-50 ">
                <div data-aos='zoom-in-down'
                    data-aos-duration="2500" className="glass  max-w-fit mx-auto p-2 my-6 rounded-lg">
                    <h2 className="text-3xl font-semibold my-2">Our Gaming Event Services</h2>
                    <p className=" text-sm my-2">Enhance gaming events with our expert services for an unforgettable experiences</p>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;