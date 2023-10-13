import { useContext, useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer } from "react-toastify";


const Register = () => {

    const { createUser } = useContext(AuthContext)

    const [registerError, setRegisterError] = useState('')
    const [success, setSuccess] = useState('')

   
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email')
        const password = form.get('password')
        console.log(name, email, password, photo);

        if(password.length <6 ){
            setRegisterError('Password must be at least 6 character or longer');
            return;
        }else if(!/[A-Z]/.test(password)){
            setRegisterError('Password must have at least one Uppercase character');
            return
        }else if(!/[#?!@$%^&*-]/.test(password)){
            setRegisterError('Password must have at least 1 special character')
            return;
        }

        setRegisterError('');
        setSuccess('');

        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess('')
                navigate('/')
            })

            .catch(error => {
                console.error(error)
                setRegisterError(error.message);
            })
    }

    return (
        <div>
            <img className="-z-30 fixed w-full h-full object-cover" src="/public/images/login-reg-bg.jpg" alt="" />
            <div className="py-32">
                <div className="sm:w-auto md:w-2/4 mx-auto text-center  glass rounded-xl py-6 my-10">
                    <h2 className="text-3xl text-white font-bold">Please Register</h2>
                    <form onSubmit={handleRegister} className="card-body md:w-mx-auto">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="text-white label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="text-white label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="text-white label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                        </div>

                        {
                            registerError && <p className="bg-white text-2xl py-2 font-medium text-red-600 rounded-lg">{registerError}</p>
                        }
                        {
                            success && <ToastContainer position="top-center"
                            autoClose={4000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="colored"></ToastContainer>
                        }

                        <div className="form-control mt-6">
                            <button  type="submit" className="btn bg-[#aaff03] hover:bg-[#76b300] text-indigo-800 border-0 ">Register</button>
                        </div>
                    </form>
                    <p className="mb-10">Already have an account? <Link className="text-[#aaff03] font-bold" to='/login'>Login Here.</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;