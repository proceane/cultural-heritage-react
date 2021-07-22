import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
    static isAuthenticated(token) {
        if(token) return true;
    }

    render() {
        return(
            <div>Login</div>
        )
    }
}

function mapStateToProps(state){
    return {
        isFetching: state.auth.isFetching,
        isAuthenticated: state.auth.isAuthenticated,
        errorMessage: state.auth.errorMessage,
    }
}

export default withRouter(connect(mapStateToProps)(Login));