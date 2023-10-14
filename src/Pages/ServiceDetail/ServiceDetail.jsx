import { Link, useLoaderData, useParams } from "react-router-dom";



const ServiceDetail = () => {

    const services = useLoaderData()
    const { id } = useParams()
    const service = services.find(service => service.id == id)
    // console.log(id, services, id);

    return (

        <div >
            <img className="-z-30 fixed w-full h-full object-cover" src="/public/images/service-detail-bg.jpg" alt="" />
            <div className="max-w-6xl mx-auto py-16  text-center text-white">
                <div className=" md:flex mt-10 ">
                    <div className="mx-auto md:w-1/3 my-auto p-6 glass rounded-xl">
                        <h2 className="text-3xl font-bold my-4">{service.title}</h2>
                        <p>{service.card_description}</p>
                        <p className="my-5  text-4xl font-extrabold text-[#aaff03]">Cost: ${service.price}</p>
                    </div>
                    <div className="md:w-1/2 "><img className="rounded-xl" src={service.image} alt="" /></div>
                </div>

                <div className="my-6 ">
                    <p className="p-4 glass rounded-xl">{service.description}</p>
                    <Link to="/premium" >
                        <button  className="btn mt-4 bg-[#aaff03] hover:bg-[#76b300] text-indigo-800 border-0">Premium Deals</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;