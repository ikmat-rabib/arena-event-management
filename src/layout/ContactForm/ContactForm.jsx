

const ContactForm = () => {
    return (
        <div className="max-w-6xl mx-auto my-20 ">
            <div className="flex rounded-xl glass ">
                <div className="w-1/2  hidden sm:block">
                    <img className="rounded-l-xl w-full h-full object-cover" src="/public/images/contac-form-bg.jpg" alt="" />
                </div>
                <form className="card-body">

                    <div className="form-control">
                        <label className="label">
                            <span className="text-red-50 label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="text-red-50 label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="text-red-50 label-text">Your text here</span>
                        </label>
                        <textarea className="rounded-lg max-h-fit" name="text-area" id="" cols="" rows="6"></textarea>

                    </div>
                        

                    <div className="form-control mt-6">
                        <button className="btn bg-[#aaff03] hover:bg-[#76b300] text-indigo-800 border-0">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;