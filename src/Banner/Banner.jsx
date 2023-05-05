import React from 'react';
import banner from '../assets/benner.jpg';

const Banner = () => {
    return (
        <div>
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

export default Banner;