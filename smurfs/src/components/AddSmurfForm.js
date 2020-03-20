import React, {useState} from 'react';
import {connect} from 'react-redux';
import {postData} from '../actions/smurfsActions';

const AddSmurfForm = props => {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleAgeChange = (e) => {
        setAge(e.target.value);
    }

    const handleHeightChange = (e) => {
        setHeight(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // build new smurf object
        let newSmurf = {
            name,
            age,
            height
        }
        // use action-creator to send data to server
        props.postData(newSmurf); 
        // clear form fields
        setName("");
        setAge("");
        setHeight("");
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input onChange={handleNameChange} value={name} id="name" name="name" type="text"></input>

                <label htmlFor="age">Age:</label>
                <input onChange={handleAgeChange} value={age} id="age" name="age" type="text"></input>

                <label htmlFor="height">Height:</label>
                <input onChange={handleHeightChange} value={height} id="height" name="height" type="text"></input>

                <button type="submit">add smurf</button>
            </form>
        </div>
    )
}



export default connect(null, {postData})(AddSmurfForm);