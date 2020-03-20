import React from 'react';

const Smurf = ({data}) => {
    return (
        <div>
            <h3>name: {data.name}</h3>
            <p>age: {data.age}</p>
            <p>height: {data.height}</p>
        </div>
    )
}

export default Smurf;