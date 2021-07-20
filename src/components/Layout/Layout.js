import React from 'react';
import {Switch, Route, withRouter} from 'react-router';

import Header from '../Header';
import Footer from '../Footer';

import Main from '../../pages/main';
import Search from '../../pages/search';
import Review from '../../pages/review';

class Layout extends React.Component {
    render() {
        return(
            <div>
                <Header/>
                <Switch>
                    <Route path="/" component={Main}/>
                    <Route path="/search" component={Search}/>
                    <Route path="/review" component={Review}/>
                </Switch>
                <Footer/>
            </div>
        )
    }
}

export default withRouter(Layout);