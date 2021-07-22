import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Register extends React.Component {
    render() {
        return(
            <div>Register</div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isFetching: state.register.isFetching,
        errorMessage: state.register.errorMessage
    }
}

export default withRouter(connect(mapStateToProps)(Register));