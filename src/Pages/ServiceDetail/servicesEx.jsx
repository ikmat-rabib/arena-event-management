// import { useParams } from "react-router-dom";

// import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";


// const ServiceDetail = () => {

//     const [card, setCard] = useState({})
//     const {image, price, title} = card || {};
//     console.log(card);

//     const {id} = useParams()
//     const intId = parseInt(id)
//     console.log(intId);

//     const cards = useLoaderData()
//     console.log(cards);

//     useEffect(() => {
//         const findCard = cards?.find(card => card.id == intId)
//         setCard(findCard)
//     } ,[intId, cards])

//     return (

//         <div className="max-w-6xl mx-auto py-16 text-center">
//             <div className="card lg:card-side bg-base-100 shadow-xl">
//                 <figure><img src="" alt="fgh" /></figure>
//                 <div className="card-body">
//                     <h2 className="card-title">{id.title}</h2>
//                     <p>{price}</p>
//                     <div className="card-actions justify-end">
//                         <button className="btn btn-primary">Listen</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ServiceDetail;