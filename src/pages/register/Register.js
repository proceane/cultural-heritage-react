import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { auth } from "../../firebase";

class Register extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            confirmPassword: "",
            error: null
        };

        this.doRegister = this.doRegister.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changeConfirmPassword = this.changeConfirmPassword.bind(this);
        this.checkPassword = this.checkPassword.bind(this);
        this.isPasswordValid = this.isPasswordValid.bind(this);
        this.reset = this.reset.bind(this);

    }

    changeEmail(event) {
        this.setState({email: event.target.value});
    }

    changePassword(event) {
        this.setState({password: event.target.value});
    }

    changeConfirmPassword(event) {
        this.setState({confirmPassword: event.target.value});
    }

    checkPassword() {
        if(!this.isPasswordValid()) {
            this.setState({error: "입력한 비밀번호와 확인용 비밀번호가 다릅니다."});
        }
    }

    isPasswordValid() {
        return this.state.password && this.state.password == this.state.confirmPassword;
    }

    doRegister(e) {
        e.preventDefault();
        if(!this.isPasswordValid()){
            this.checkPassword();
        } else {
            auth.createUserWithEmailAndPassword(this.state.email, this.state.password).then(() => {
                this.props.history.push("/login");
            }).catch((error) => {
                if(error.code === "auth/email-already-in-use") {
                    this.setState({error: "이미 등록된 이메일입니다."});
                }
            });
        }
    }

    reset() {
        this.setState({email: ""});
        this.setState({password: ""});
        this.setState({confirmPassword: ""});
    }
 
    render() {
        return(
            <div class="wrapper row3">
                <main class="hoc container clear"> 
                    <div class="content"> 
                        <div id="comments"> 
                            <form action="#" method="post" onSubmit={this.doRegister}>
                                <div class="one_third first">
                                    <label htmlFor="email">이메일 <span>*</span></label>
                                    <input type="email" name="email" id="email" value={this.state.email} onChange={this.changeEmail} size="22" required></input>
                                </div>
                                <div class="one_third">
                                    <label htmlFor="pw_1">비밀번호(숫자, 영문 포함 8 ~ 16자) <span>*</span></label>
                                    <input type="password" name="pw_1" id="pw_1" value={this.state.password} onChange={this.changePassword} size="22" required></input>
                                </div>
                                <div class="one_third">
                                    <label htmlFor="pw_2">비밀번호 한 번 더 <span>*</span></label>
                                    <input type="password" name="pw_2" id="pw_2" value={this.state.confirmPassword} onChange={this.changeConfirmPassword} onBlur={this.checkPassword} size="22" required></input>
                                </div>
                                <div>
                                    <input type="submit" name="submit" value="회원가입"></input>
                                    &nbsp;
                                    <input type="reset" name="reset" value="다시 입력" onClick={this.reset}></input>
                                </div>
                            </form>
                            <p>{this.state.error}</p>
                        </div>
                    </div>
                    <div class="clear"></div>
                </main>
            </div>
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