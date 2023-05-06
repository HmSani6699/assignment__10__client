import React, { useEffect, useState } from 'react';
import User from '../User/User';
import { Link } from 'react-router-dom';

const ChafContainer = () => {

    const [loadUser, setUser] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUser(data))
    }, []);

    return (
        <div className='container grid lg:grid-cols-3 md:grid-cols-3 p-10 mt-20 gap-8 mb-20 '>
            {
                loadUser && loadUser.map(user => <User
                    key={user.id}
                    currantUser={user}
                ></User>)
            }
        </div>
    );
};

export default ChafContainer;