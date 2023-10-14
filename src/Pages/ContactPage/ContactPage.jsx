import ContactForm from "../../layout/ContactForm/ContactForm";


const ContactPage = () => {
    return (
        <div>
            <img className="-z-30 fixed w-full h-full object-cover" src="https://i.ibb.co/HrSRNsb/contact-page-bg.jpg" alt="" />
            <div className="py-32 text-center px-2 ">
                <div className="max-w-6xl mx-auto my-  text-center text-white glass p-5  rounded-xl">
                    <h3 className="text-3xl font-bold mb-3">Get in Touch with Us</h3>
                    <p>Whether you're ready to plan the next epic gaming event or simply have a question about our services, our team is here to assist you. We're passionate about gaming, and we're equally passionate about providing exceptional event management solutions. Feel free to reach out via the form below, drop us an email, or give us a call. We look forward to hearing from you and turning your gaming event ideas into reality. Let's level up your gaming event experience together!</p>
                </div>
                <ContactForm></ContactForm>
            </div>
        </div>
    );
};

export default ContactPage;