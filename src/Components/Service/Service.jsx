import { Link } from "react-router-dom";



const Service = ({ service }) => {

    const { title, image, card_description, price, id } = service

    return (
        <div>
            <div data-aos="fade-up"
                data-aos-duration="3000" className="card glass ">
                <figure className="h-48"><img src={image} alt="" /></figure>
                <div className="card-body ">
                    <h2 className="card-title justify-center">{title}</h2>
                    <p className="pb-4">{card_description}</p>
                    <div className="flex items-center">
                        <p className="text-3xl font-semibold text-start"><small>cost:</small> ${price}</p>
                        <Link to={`/services/${id}`} className="card-actions justify-end">
                            <button className="btn bg-[#aaff03] hover:bg-[#76b300] text-indigo-800 border-0">check it!</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;