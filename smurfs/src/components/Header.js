import React from 'react';
import {connect} from 'react-redux';

const Header = props => {
    return (
        <div>
            <h1>Welcome to Smurfs Village!</h1>
    <h2>{props.message}</h2>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        message: state.message
    }
}

export default connect(mapStateToProps,{})(Header);