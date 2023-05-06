import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {

    const user=useLoaderData();
    console.log(user);
    return (
        <div>
            <h2>this is detail</h2>
        </div>
    );
};

export default Details;