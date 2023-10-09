import { Link } from "react-router-dom";



const Service = ({service}) => {

    const {title, image, card_description, id} = service
    
    return (
        <div>
            <div className="card glass ">
                <figure className="h-48"><img src={image} alt="" /></figure>
                <div className="card-body ">
                    <h2 className="card-title justify-center">{title}</h2>
                    <p className="pb-4">{card_description}</p>
                    <Link to={`/services/${id}`} className="card-actions justify-center">
                        <button className="btn bg-indigo-500 hover:bg-indigo-800 text-white border-0">check it!</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;