import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom'

import LayoutComponent from '../components/Layout';

class App extends React.PureComponent {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={LayoutComponent}/>
                    <Route path="/search" component={LayoutComponent}/>
                    <Route path="/review" component={LayoutComponent}/>
                </Switch> 
            </BrowserRouter>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps)(App);