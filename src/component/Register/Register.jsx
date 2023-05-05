import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/Authprovider';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Register = () => {

    const { createUser,updateProfileUser } = useContext(AuthContext);

    const handleRegisterFormSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl =form.photo.value;
        console.log(name, email, password,photoUrl);

        //creat a new user
        createUser(email, password)
        .then(result=>{
            const user =result.user;
            console.log(user);
            form.reset()
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
        .catch(error=>{
            console.log(error);
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

        //user update
        updateProfileUser(name,photoUrl)
        .then(result=>{})
        .catch(error=>{
            console.log(error);
        })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">
                    <div className="card  mt-6 mb-16 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegisterFormSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name ='name' placeholder="name" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoUrl</span>
                                </label>
                                <input type="text" name ='photo' placeholder="photo url" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                            <div className="form-control mt-6">
                                <Link to='/login'>Already hauv an acount ? Please <button className="btn btn-link">Login</button></Link>
                            </div>
                        </form>
                    </div>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
    );
};

export default Register;