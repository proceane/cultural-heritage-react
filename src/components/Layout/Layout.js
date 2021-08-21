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

import Detail from '../../pages/detail'

import { getDetailName } from '../../actions/data';

class Layout extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            headerName: "",
        };

        this.setHeaderName = this.setHeaderName.bind(this);
    }

    componentDidMount() {
        this.setHeaderName();
    }

    setHeaderName() {
        if(this.props.name == null) {
            getDetailName(this.props.match.params.lc, this.props.match.params.ct, this.props.match.params.cd).then((res) => {
                this.setState({headerName: res});
            });
        } else {
            this.setState({headerName: this.props.name});
        }
    }

    render() {
        return(
            <div>
                <Header pageName={this.state.headerName}/>
                <Switch>
                    <Route path="/" exact component={Main}/>
                    <Route path="/search" component={Search}/>
                    <Route path="/review" component={Review}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                    <Route path="/mypage" exact component={UserInfo}/>
                    <Route path="/mypage/comments" component={Comments}/>
                    <Route path="/mypage/like" component={Like}/>
                    <Route path="/detail/:ct/:lc/:cd" component={Detail}/>
                </Switch>
                <Footer/>
            </div>
        )
    }
}

export default withRouter(Layout);