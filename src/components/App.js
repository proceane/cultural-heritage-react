import React from 'react';
import { connect } from 'react-redux';

class App extends React.PureComponent {

}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps)(App);