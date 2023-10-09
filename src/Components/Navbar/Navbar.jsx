import { Link, NavLink } from "react-router-dom";
import userDefaultPic from '../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const navLinks = <>
        <li className=" "><NavLink className={`hover:bg-red-600`} to='/'>Home</NavLink></li>
        <li className=" "><NavLink  to='/about'>About Us</NavLink></li>
        <li className=" "><NavLink  to='/contact'>Contact</NavLink></li>

    </>

    return (
        <div className="bg-[#1d308d] ">


            <div className="navbar  p-0 max-w-6xl mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn bg-[#1d308d] border-0 text-white hover:text-[#1d308d] lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#1d308d] text-white rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/'><div className="text-white font-extrabold normal-case text-4xl">@RENA</div></Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal  px-1 text-white hover:text-slate-200">
                        {navLinks}
                    </ul>
                </div>

                <div className="navbar-end">
                    {
                        user ?
                            <div className="flex items-center">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={userDefaultPic} />
                                    </div>
                                </label>
                                <button onClick={handleSignOut} className="btn">Sign Out</button>
                            </div>
                            :
                            <div >
                                <Link to='/login'>
                                    <button className="btn text-white bg-indigo-500 hover:bg-indigo-800 border-0 rounded-lg  md:mr-3">Login</button>
                                </Link>
                                
                                <Link to='/register'>
                                    <button className="btn text-white bg-indigo-500 hover:bg-indigo-800 border-0 rounded-lg ">Register</button>
                                </Link>
                            </div>
                    }

                </div>

            </div>
        </div>
    );
};

export default Navbar;