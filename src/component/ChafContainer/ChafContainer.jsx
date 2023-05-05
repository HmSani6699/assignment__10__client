import React, { useEffect } from 'react';

const ChafContainer = () => {

    useEffect(()=>{
      fetch('http://localhost:5000/user')
      .then(res=>res.json())
      .then(data=>console.log(data))

    },[])
    return (
        <div>
            
        </div>
    );
};

export default ChafContainer;