import React, { useContext, useEffect, useState } from 'react';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import Details from '../component/Details/Details';
import { AuthContext } from '../Providers/Authprovider';

const PrivetRoute = () => {

    const [currentUser, setCurrentUser] = useState({})

    const id = useParams();

    const location=useLocation();
    console.log(location);

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

    return <Navigate state={{ from: location }} to="/login" replace={true} />;
};

export default PrivetRoute;