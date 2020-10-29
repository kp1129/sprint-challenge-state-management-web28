import React, {useEffect} from 'react';
import Smurf from './Smurf';
import axios from 'axios';
import {connect} from 'react-redux';
import { updateData } from '../actions/smurfsActions';

const SmurfsContainer = props => {

    useEffect(()=>{
        axios.get("http://localhost:3333/smurfs")
        .then(res => {
            props.updateData(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="smurfs">
            {props.smurfs.map(smurf => <Smurf data={smurf}/>)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        message: state.message
    }
}

export default connect(mapStateToProps, {updateData})(SmurfsContainer);