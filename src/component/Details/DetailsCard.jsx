import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DetailsCard = ({ currentUser }) => {

    const { ingredients, cookingProcess } = currentUser;

    const handleRavorite = (event) => {
        
        toast.success('Favorite successfull!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        event.target.disabled=true;
    }

    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4  w-5/6 mx-auto mb-20'>
            <div className="card card-compact w-full bg-base-100 shadow-xl border">
                <div className="card-body">
                    <h2 className="card-title">Beef Wellington</h2>
                    <p className='font-semibold'>Ingredients</p>
                    {
                        ingredients && ingredients.map(item => <li>{item}</li>)
                    }
                    <p className='font-semibold'>CookingProcess : <small>{cookingProcess}</small></p>
                    <div className="card-actions justify-center">
                        <button onClick={handleRavorite} className="btn btn-primary">favorite</button>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-full bg-base-100 shadow-xl border">
                <div className="card-body">
                    <h2 className="card-title">Beef Wellington</h2>
                    <p className='font-semibold'>Ingredients</p>
                    {
                        ingredients && ingredients.map(item => <li>{item}</li>)
                    }
                    <p className='font-semibold'>CookingProcess : <small>{cookingProcess}</small></p>
                    <div className="card-actions justify-center">
                        <button onClick={handleRavorite} className="btn btn-primary">favorite</button>
                    </div>
                </div>
            </div><div className="card card-compact w-full bg-base-100 shadow-xl border">
                <div className="card-body">
                    <h2 className="card-title">Beef Wellington</h2>
                    <p className='font-semibold'>Ingredients</p>
                    {
                        ingredients && ingredients.map(item => <li>{item}</li>)
                    }
                    <p className='font-semibold'>CookingProcess : <small>{cookingProcess}</small></p>
                    <div className="card-actions justify-center">
                        <button onClick={handleRavorite} className="btn btn-primary">favorite</button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default DetailsCard;