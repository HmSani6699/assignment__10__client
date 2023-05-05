import React from 'react';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body">
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
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div className="form-control mt-6">
                                <Link to='/login'>Already hauv an acount ? Please <button className="btn btn-link">Login</button></Link>
                            </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Login;