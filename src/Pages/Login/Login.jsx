/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";


const Login = () => {

    const { signIn } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()
    console.log('location of login page', location);

    const HandleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password)

        signIn(email, password)
            .then(result => {
                console.log(result.user)

                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="sm:w-auto md:w-2/4 mx-auto text-center text-white glass rounded-xl py-6 my-10">
            <h2 className="text-3xl font-bold">Please Login</h2>
            <form onSubmit={HandleLogin} className="card-body md:w-mx-auto">

                <div className="form-control">
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover text-white font-bold">Forgot password?</a>
                    </label>
                </div>

                <div className="form-control mt-6">
                    <button type="submit" className="btn bg-indigo-800 hover:bg-indigo-600 text-white border-0 ">Login</button>
                </div>
            </form>
            <p className="mb-10">Don't have an account? <Link className="text-green-400 font-bold" to='/register'>Register Here.</Link></p>
        </div>
    );
};

export default Login;