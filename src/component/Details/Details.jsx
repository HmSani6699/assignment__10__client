import React from 'react';

const Details = ({currentUser}) => {

    const { cookingProcess, name, yearsOfExperience, likes, numberOfRecipes, imageUrl } = currentUser;


    return (
        <div>
            <div className='bg-base-100 shadow-xl border flex w-3/4 mx-auto mt-16 mb-16 rounded-xl gap-4  p-4'>
                <div >
                    <img className='rounded-l-xl h-full' style={{width:'1800px'}} src={imageUrl} alt="Movie" />
                </div>
                <div className='p-4 text-justify'>
                    <h2 className="text-3xl font-bold mb-3">{name}</h2>
                    <h5 className='font-semibold mb-2'>Years of experience : <small>{yearsOfExperience}</small></h5>
                    <h5 className='font-semibold mb-2'>Likes : {likes}</h5>
                    <h5 className='font-semibold mb-2'>Numbers of recipes: {numberOfRecipes}</h5>
                    <h5 className='font-semibold mb-2'>Discription: <small>{cookingProcess}</small></h5>
                </div>
            </div>
        </div>
    );
};

export default Details;