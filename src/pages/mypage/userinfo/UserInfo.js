import React from 'react';
import { auth } from '../../../firebase';

class UserInfo extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            confirmPassword: "",
            error: null
        };

        this.doChangePassword = this.doChangePassword.bind(this);
        this.checkPassword = this.checkPassword.bind(this);
        this.isPasswordValid = this.isPasswordValid.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changeConfirmPassword = this.changeConfirmPassword.bind(this);
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

    doChangePassword(e) {
        e.preventDefault();
        auth.currentUser.updatePassword(this.state.password).then(() => {
            this.props.history.push("/login");
        }).catch((error) => {
            this.setState({error: "비밀번호 변경중 오류가 발생하였습니다. 다시 시도해주세요 : " + error.message});
        });
    }

    render() {
        const userEmail = () => {
            auth.onAuthStateChanged((user) => {
                return user.email;
            });
        };
        return (
            <div className="wrapper row3">
                <main className="hoc container clear"> 
                    <div className="sidebar one_quarter first"> 
                        <h6>메뉴</h6>
                        <nav className="sdb_holder">
                            <ul>
                                <li><a href="/mypage">회원 정보</a></li>
                                <li><a href="/mypage/comments">댓글</a></li>
                                <li><a href="/mypage/like">좋아요</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div className="content three_quarter"> 
                        <h1>회원정보</h1>
                        <div id="comments"> 
                            <form action="#" method="post" onSubmit={this.doChangePassword}>
                                <div className="one_third first">
                                    <label for="email">이메일</label>
                                    <input type="email" name="email" id="email" size="22" readonly value={userEmail} onChange={this.changeEmail}></input>
                                </div>
                                <div className="one_third">
                                    <label for="pw_1">비밀번호(숫자, 영문 포함 8 ~ 16자) <span>*</span></label>
                                    <input type="password" name="pw_1" id="pw_1" size="22" required value={this.state.password} onChange={this.changePassword}></input>
                                </div>
                                <div className="one_third">
                                    <label for="pw_2">비밀번호 한 번 더 <span>*</span></label>
                                    <input type="password" name="pw_2" id="pw_2" size="22" required value={this.state.confirmPassword} onChange={this.changeConfirmPassword}></input>
                                </div>
                                <div>
                                    <input type="submit" name="submit" value="수정하기"></input>
                                    &nbsp;
                                    <input type="reset" name="reset" value="다시 입력"></input>
                                </div>
                            </form>
                            <p>{this.state.error}</p>
                        </div>
                    </div>
                    <div className="clear"></div>
                </main>
            </div>
        )
    }
}

export default UserInfo;