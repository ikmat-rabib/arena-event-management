/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { FaGoogle } from 'react-icons/fa';
import { toast } from "react-toastify";


const Login = () => {



    const { signIn, handleGoogleSignIn } = useContext(AuthContext);

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
                toast.success('Login Successful', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    })
                navigate(location?.state ? location.state : '/')
            })
            .catch(() => {
                toast.error("User Email/Password doesn't match", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            })
    }

    return (
        <div>
            <img className="-z-30 fixed w-full h-full object-cover" src="https://i.ibb.co/kGFZ7Lm/login-reg-bg.jpg" alt="" />
            <div className="py-32">
                <div className="sm:w-auto md:w-2/4 mx-auto  text-center text-white glass rounded-xl py-5 ">
                    <h2 className="text-3xl font-bold">Please Login</h2>
                    <form onSubmit={HandleLogin} className="card-body md:w-mx-auto">

                        <div className="form-control">
                            <input type="email" name="email" placeholder="Email" className="input input-bordered text-black" required />
                        </div>

                        <div className="form-control">
                            <input type="password" name="password" placeholder="Password" className="input input-bordered text-black" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-white font-bold">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control">
                            <button type="submit" className="btn bg-[#aaff03] hover:bg-[#76b300] text-indigo-800 border-0 ">Login</button>
                        </div>
                    </form>

                    <div>
                        <p>or,</p>
                        <h3 className="text-2xl font-semibold">Sign in with</h3>
                        <button onClick={handleGoogleSignIn} className="p-3 my-3 text-3xl border rounded-lg bg-[#aaff03] hover:bg-[#76b300] text-indigo-800"> <FaGoogle></FaGoogle> </button>
                    </div>

                    <p className="mb-6">Don't have an account? <Link className="text-[#aaff03] font-bold" to='/register'>Register Here.</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;