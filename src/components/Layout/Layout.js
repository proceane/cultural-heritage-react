import React from 'react';
import {Switch, Route, withRouter} from 'react-router';

import Header from '../Header';
import Footer from '../Footer';

import Main from '../../pages/main';
import Search from '../../pages/search';
import Review from '../../pages/review';

import Login from '../../pages/login';
import Register from '../../pages/register';

import UserInfo from '../../pages/mypage/userinfo'
import Comments from '../../pages/mypage/comments'
import Like from '../../pages/mypage/like'

class Layout extends React.Component {
    render() {
        return(
            <div>
                <Header/>
                <Switch>
                    <Route path="/" exact component={Main}/>
                    <Route path="/search" component={Search}/>
                    <Route path="/review" component={Review}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/mypage" exact component={UserInfo}/>
                    <Route path="/mypage/comments" component={Comments}/>
                    <Route path="/mypage/like" component={Like}/>
                </Switch>
                <Footer/>
            </div>
        )
    }
}

export default withRouter(Layout);