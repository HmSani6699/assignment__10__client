import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../assets/benner.jpg';

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
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Going Beyond Guacamole: Exploring the Many Delicious Avocado Dishes in india Cuisine</h1>
                        <p className="mb-5">India cuisine is famous for its bold and vibrant flavors, as well as its use of fresh ingredients, spices, and herbs. From spicy chiles and tangy lime juice to fragrant cilantro and rich avocado, india dishes are known for their delicious complexity.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Header;