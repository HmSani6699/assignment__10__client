import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/Authprovider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {

    const navigate=useNavigate();

    const location=useLocation();
    const from =location.state?.from?.pathname || '/'

    const [error,setError] =useState('')

    const { signIn, googleLogin, githubLogin } = useContext(AuthContext);

    const handleLoginFormSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // sign in to user
        signIn(email, password)
            .then(result => {
                // const user = result.user;
                form.reset();
                navigate(from, { replace: true });
                toast.success('Register successfull!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
            .catch(error => {
                setError(error.message)
                toast.error(`${error.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
    }


    const handleGoogleLogin = () => {
        googleLogin()
    }

    const handleGitHubLogin = () => {
        githubLogin()
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">
                <div className="card flex-shrink-0 w-full mt-3 mb-10 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLoginFormSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                        <p className='text-red-600'>{error}</p>
                        <div className="form-control mt-6">
                            <Link to='/register'>Creat  a new  acount ? Please<button className="btn btn-link">Register</button></Link>
                        </div>


                    </form>
                    <button onClick={handleGoogleLogin} className="">
                        <div className='flex items-center justify-center border-2 gap-2 p-2 rounded-md  mr-4 ml-4 mb-2'>
                            <FaGoogle></FaGoogle> Google Login

                        </div>
                    </button>

                    <button onClick={handleGitHubLogin} className="">
                        <div className='flex items-center justify-center border-2 gap-2 p-2 rounded-md mr-4 ml-4 mb-4'>
                            <FaGithub></FaGithub> Github Login

                        </div>
                    </button>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;