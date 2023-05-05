import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/Authprovider';

const Header = () => {

    const { user } = useContext(AuthContext);

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
                {user&&
                    <div className="avatar mr-4">
                    <div style={{width:'45px'}} className=" rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={user&&user.photoURL} />
                    </div>
                </div>}
                    <Link to='/login'><button className="btn btn-active btn-primary mr-2">Login</button></Link>
                    <Link to='/register'><button className="btn btn-active btn-primary">Register</button></Link>
                </div>
            </div>
        </div>

    );
};

export default Header;