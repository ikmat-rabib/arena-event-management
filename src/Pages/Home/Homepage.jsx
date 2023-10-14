import Marque from "../../Components/Marque/Marque";
import Banner from "../../layout/Banner/Banner";
import ContactForm from "../../layout/ContactForm/ContactForm";
import Feedback from "../../layout/Feedback/Feedback";
import Services from "../../layout/Services/Services";



const Homepage = () => {
    return (
        <div className=" overflow-x-hidden">
            {/* <video className="-z-10 fixed w-full h-auto object-cover hidden sm:block md:block"  autoPlay loop src="/src/assets/pexels_videos_2759477 (720p).mp4"></video> */}
            <img className="-z-30 fixed w-full h-full object-cover" src="https://i.ibb.co/vjXTsK0/homepage-bg.jpg" alt="" />
            <Banner></Banner>
            <Services></Services>
            <Feedback></Feedback>
            <ContactForm></ContactForm>
            <Marque></Marque>
        </div>
    );
};

export default Homepage;