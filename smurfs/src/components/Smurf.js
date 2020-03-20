import React from 'react';

const Smurf = ({data}) => {
    return (
        <div className="smurf">
            <h3>{data.name}</h3>
            <p>age: {data.age}</p>
            <p>height: {data.height}</p>
        </div>
    )
}

export default Smurf;