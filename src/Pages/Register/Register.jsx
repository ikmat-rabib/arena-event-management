import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Register = () => {

    const { createUser } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, email, password, photo);

        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="sm:w-auto md:w-2/4 mx-auto text-center text-white glass rounded-xl py-6 my-10">
            <h2 className="text-3xl font-bold">Please Register</h2>
            <form onSubmit={handleRegister} className="card-body md:w-mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    
                </div>

                <div className="form-control mt-6">
                <button type="submit" className="btn bg-indigo-800 hover:bg-indigo-600 text-white border-0 ">Login</button>
                </div>
            </form>
            <p className="mb-10">Already have an account? <Link className="text-green-400 font-bold" to='/login'>Login Here.</Link></p>
        </div>
    );
};

export default Register;