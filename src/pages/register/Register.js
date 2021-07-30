import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { registerUser } from '../../actions/register'

class Register extends React.Component {
    doRegister(e) {
        e.preventDefault();
        if(!this.isPasswordValid()){
            this.checkPassword();
        } else {
            this.props.dispatch(registerUser({
                creds: {
                    email: this.state.email,
                    password: this.state.password
                },
                history: this.props.history
            }))
        }
    }

    render() {
        return(
            <div class="wrapper row3">
                <main class="hoc container clear"> 
                    <div class="content"> 
                        <div id="comments"> 
                            <form action="#" method="post" onsubmit="return validation()">
                                <div class="one_third first">
                                    <label for="email">이메일 <span>*</span></label>
                                    <input type="email" name="email" id="email" value="" size="22" required></input>
                                </div>
                                <div class="one_third">
                                    <label for="pw_1">비밀번호(숫자, 영문 포함 8 ~ 16자) <span>*</span></label>
                                    <input type="password" name="pw_1" id="pw_1" value="" size="22" required></input>
                                </div>
                                <div class="one_third">
                                    <label for="pw_2">비밀번호 한 번 더 <span>*</span></label>
                                    <input type="password" name="pw_2" id="pw_2" value="" size="22" required></input>
                                </div>
                                <div>
                                    <input type="submit" name="submit" value="회원가입"></input>
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

function mapStateToProps(state) {
    return {
        isFetching: state.register.isFetching,
        errorMessage: state.register.errorMessage
    }
}

export default withRouter(connect(mapStateToProps)(Register));