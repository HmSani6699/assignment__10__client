import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/Authprovider';

const Header = () => {

    const { user,logOut } = useContext(AuthContext);


    const signOut = () => {
        logOut()
    }
    
    return (
        <div>
            <div className="navbar bg-base-500 container">
                <div className="navbar-start">
                    <h4 className='text-3xl font-semibold'>Food Recipe</h4>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {user &&
                        <div className="avatar mr-4 hover:${}">
                            <div style={{ width: '45px' }} className=" rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img title={user&&user.displayName} src={user && user.photoURL} />
                            </div>
                        </div>}
                    {user ?
                        <button onClick={signOut} className="btn btn-active btn-primary mr-2">Sign out</button> : <Link to='/login'><button className="btn btn-active btn-primary mr-2">Login</button></Link>
                    }
                    <Link to='/register'><button className="btn btn-active btn-primary">Register</button></Link>
                </div>
            </div>
        </div>

    );
};

export default Header;