/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";


const Login = () => {

    const HandleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        console.log(form.get('email'));
    }

    return (
        <div className="max-w-6xl mx-auto text-center my-10">
            <h2 className="text-3xl font-bold">Please Login</h2>
            <form onSubmit={HandleLogin} className="card-body md:w-2/3 mx-auto">

                <div className="form-control">
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <p className="mb-10">Don't have an account? <Link className="text-green-400 font-bold" to='/register'>Register Here.</Link></p>
        </div>
    );
};

export default Login;