import { useLoaderData, useParams } from "react-router-dom";



const ServiceDetail = () => {

    const services = useLoaderData()
    const { id } = useParams()
    const service = services.find(service => service.id == id)
    // console.log(id, services, id);

    return (

        <div className="max-w-6xl mx-auto py-16 text-center">
            <div className="flex ">
                <div className="md:w-1/2 "><img className="rounded-lg" src={service.image} alt="" /></div>
                <div className="mx-auto md:w-1/2 my-auto p-6">
                    <h2 className="text-3xl font-bold my-4">{service.title}</h2>
                    <p>{service.card_description}</p>
                    <p className="my-5  text-4xl font-extrabold text-purple-700">Cost: ${service.price}</p>
                </div>
            </div>

            <div className="my-6 ">
                <p>{service.description}</p>
                <div className="card-actions justify-center my-4">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;