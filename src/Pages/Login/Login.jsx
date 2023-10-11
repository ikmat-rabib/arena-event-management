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
        <div>
            <img className="-z-30 fixed w-full h-full object-cover" src="/public/images/login-reg-bg.jpg" alt="" />
            <div className="py-32">
                <div className="sm:w-auto md:w-2/4 mx-auto  text-center text-white glass rounded-xl py-5 ">
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
                            <button type="submit" className="btn bg-[#aaff03] hover:bg-[#76b300] text-indigo-800 border-0 ">Login</button>
                        </div>
                    </form>
                    <p className="mb-6">Don't have an account? <Link className="text-[#aaff03] font-bold" to='/register'>Register Here.</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;