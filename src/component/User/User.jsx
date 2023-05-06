import React from 'react';

const User = ({ user }) => {

    const { name, yearsOfExperience, likes,numberOfRecipes,imageUrl } = user;

    console.log(user.name)
    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img style={{height:'270px'}} className='w-full' src={imageUrl} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Chef Name:{name}</h2>
                    <p>Years of experience{yearsOfExperience}</p>
                    <p>Likes{likes}</p>
                    <p>Numbers of recipes: {numberOfRecipes}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Viwe Recipes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;