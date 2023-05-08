import React, { useEffect, useState } from 'react';
import User from '../User/User';

const ChafContainer = () => {

    const [loadUser, setUser] = useState([])

    useEffect(() => {
        fetch('https://assignment-10-sever-site-hmsani6699.vercel.app/user')
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