import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-500 container">
                <div className="navbar-start">
                    <h4 className='text-3xl font-semibold'>Food Racipi</h4>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/login'><button className="btn btn-active btn-primary mr-2">Login</button></Link>
                    <Link to='/register'><button className="btn btn-active btn-primary">Register</button></Link>
                </div>
            </div>
        </div>

    );
};

export default Header;