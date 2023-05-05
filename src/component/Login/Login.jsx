import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/Authprovider';

const Login = () => {

    const {signIn}=useContext(AuthContext);

    const handleLoginFormSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        // sign in to user
        signIn(email,password)
        .then(result=>{
            const user =result.user;
            console.log(user);
            form.reset()
        })
        .catch(error=>{
            console.log(error);
        })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLoginFormSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
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
                        <div className="form-control mt-6">
                            <Link to='/register'>Creat  a new  acount ? Please<button className="btn btn-link">Register</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;