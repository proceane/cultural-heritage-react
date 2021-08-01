import React from 'react';
import PropsTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { loginUser } from '../../actions/user'

class Login extends React.Component {
    static propTypes = {
        dispatch: PropsTypes.func.isRequired
    };
    
    static isAuthenticated(token) {
        if(token) return true;
    }

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };

        this.doLogin = this.doLogin.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.signUp = this.signUp.bind(this);

    }

    changeEmail(event) {
        this.setState({email : event.target.value});
    }

    changePassword(event) {
        this.setState({password: event.target.value});
    }

    doLogin(e) {
        e.preventDefault();
        this.props.dispatch(loginUser({email: this.state.email, password: this.state.password}));
    }

    signUp() {
        this.props.history.push("/register");
    }

    render() {
        return(
            <div class="wrapper row3">
                <main class="hoc container clear"> 
                    <div class="content"> 
                        <div>
                            <p>계정이 없다면? <a href="join.html">회원가입</a></p> 
                        </div>
                        <div id="comments"> 
                            <form action="#" method="post">
                                <div class="one_half first">
                                    <label for="email">이메일</label>
                                    <input type="email" name="email" id="email" value="" size="22" required></input>
                                </div>
                                <div class="one_half">
                                    <label for="pw_1">비밀번호</label>
                                    <input type="password" name="pw_1" id="pw_1" value="" size="22" required></input>
                                </div>
                                <div>
                                    <input type="submit" name="submit" value="로그인"></input>
                                    &nbsp;
                                    <input type="reset" name="reset" value="다시 입력"></input>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="clear"></div>
                </main>
            </div>
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