import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Details from '../component/Details/Details';
import { AuthContext } from '../Providers/Authprovider';

const PrivetRoute = () => {

    const [currentUser, setCurrentUser] = useState({})

    const id = useParams();

    const { user, loading } = useContext(AuthContext);


    useEffect(() => {
        fetch(`http://localhost:5000/user/${id.id}`)
            .then(res => res.json())
            .then(data => setCurrentUser(data))
    }, []);

    if (user) {
        return <Details
            key={currentUser.id}
            currentUser={currentUser}
        ></Details>
    }

    if (loading) {
        return <progress className="progress w-56"></progress>
    }

    return <Navigate to="/login" replace={true} />;
};

export default PrivetRoute;