import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
    static isAuthenticated(token) {
        if(token) return true;
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