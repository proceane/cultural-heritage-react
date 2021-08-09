import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom'

import LayoutComponent from '../components/Layout';

import ErrorPage from '../pages/error/ErrorPage';

import { auth } from "../firebase";

const PrivateRoute = ({dispatch, component, ...rest}) => {
    const sessionKey = "firebase:authUser:AIzaSyBSBdvvzT0xLv4OrXuxcBYGnC7aL0xev3Q:[DEFAULT]";
    var uid = "";
    auth.onAuthStateChanged((user) => {
        uid = user.uid
    });

    if(JSON.parse(sessionStorage.getItem(sessionKey)) !== null){
        if(JSON.parse(sessionStorage.getItem(sessionKey))["uid"] === uid) {
            return (<Redirect to="/login"/>)
        } else {
            return (
                <Route {...rest} render={props => (React.createElement(component, props))}/>
            )
        }
    } else {
        return (
            <Route {...rest} render={props => (React.createElement(component, props))}/>
        )
    }
    // if(JSON.parse(sessionStorage.getItem(sessionKey))["uid"] === uid) {
    //     return (<Redirect to="/login"/>)
    // } else {
    //     return (
    //         <Route {...rest} render={props => (React.createElement(component, props))}/>
    //     )
    // }
};

class App extends React.PureComponent {
    render() {
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={LayoutComponent}/>
                    <Route path="/search"><LayoutComponent name="검색"/></Route>
                    <Route path="/review" ><LayoutComponent name="리뷰"/></Route>
                    <Route path="/login" ><LayoutComponent name="로그인"/></Route>
                    <Route path="/register" ><LayoutComponent name="회원가입"/></Route>
                    <Route path="/detail/:ct/:lc/:cd"><LayoutComponent name="문화재명이 들어갑니다."/></Route>
                    <PrivateRoute path="/mypage" dispatch={this.props.dispatch}><LayoutComponent name="마이페이지"/></PrivateRoute>
                    {/* <Route path="/mypage" component={LayoutComponent}/> */}
                    <Route component={ErrorPage}/>
                </Switch> 
            </BrowserRouter>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps)(App);