import React from 'react';

class UserInfo extends React.Component {
    render() {
        return (
            <div class="wrapper row3">
                <main class="hoc container clear"> 
                    <div class="sidebar one_quarter first"> 
                        <h6>메뉴</h6>
                        <nav class="sdb_holder">
                            <ul>
                                <li><a href="/mypage">회원 정보</a></li>
                                <li><a href="/mypage/comments">댓글</a></li>
                                <li><a href="/mypage/like">좋아요</a></li>
                            </ul>
                        </nav>
                    </div>

                    <div class="content three_quarter"> 
                        <h1>회원정보</h1>
                        <div id="comments"> 
                            <form action="#" method="post" onsubmit="return validation()">
                                <div class="one_third first">
                                    <label for="email">이메일</label>
                                    <input type="email" name="email" id="email" size="22" readonly value="aaa@mail.com"></input>
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
                                    <input type="submit" name="submit" value="수정하기"></input>
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

export default UserInfo;