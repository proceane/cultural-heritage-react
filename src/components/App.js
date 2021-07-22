import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom'

import LayoutComponent from '../components/Layout';
import Login from '../pages/login'
import { logoutUser } from '../actions/user';

const PrivateRoute = ({dispatch, component, ...rest}) => {
    if(!Login.isAuthenticated(JSON.parse(localStorage.getItem('authenticated')))) {
        dispatch(logoutUser());
        return (<Redirect to="/login"/>)
    } else {
        return (
            <Route {...rest} render={props => (React.createElement(component, props))}/>
        )
    }
};

class App extends React.PureComponent {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={LayoutComponent}/>
                    <Route path="/search" component={LayoutComponent}/>
                    <Route path="/review" component={LayoutComponent}/>
                    <Route path="/login" component={LayoutComponent}/>
                    <Route path="/register" component={LayoutComponent}/>
                    <PrivateRoute path="/mypage" dispatch={this.props.dispatch} component={LayoutComponent}/>
                    {/* <Route path="/mypage" component={LayoutComponent}/> */}
                </Switch> 
            </BrowserRouter>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps)(App);