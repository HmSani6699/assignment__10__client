import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/Authprovider';

const User = ({ currantUser }) => {

    const { user } = useContext(AuthContext)
    
    const {id, name, yearsOfExperience, likes,numberOfRecipes,imageUrl } = currantUser;

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
                        {
                            user?<Link to={`/user/${id}`}><button className="btn btn-primary">Viwe Recipes</button></Link>:<Link to='/login'><button className="btn btn-primary">Viwe Recipes</button></Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;