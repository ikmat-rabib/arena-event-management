import Marque from "../../Components/Marque/Marque";
import Banner from "../../layout/Banner/Banner";
import Feedback from "../../layout/Feedback/Feedback";
import Services from "../../layout/Services/Services";


const Homepage = () => {
    return (
        <div className=" ">
            
            <Banner></Banner>
            <Services></Services>
            <Feedback></Feedback>
            <Marque></Marque>
        </div>
    );
};

export default Homepage;