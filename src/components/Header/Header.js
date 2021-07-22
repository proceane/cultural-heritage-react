import React from 'react';
import '../../assets/css/layout.css';
import mainImage from '../../assets/images/main.jpg';

class Header extends React.Component {
    render() {
        return(
            <div className={"bgded"} style={{backgroundImage:"url(" + mainImage + ")"}}> 
                <div className={"wrapper row1"}>
                    <header id="header" className={"hoc clear"}>
                        <div id="logo" className={"fl_left"}> 
                        <h1><a href="/">아름누리</a></h1>
                        </div>
                        <nav id="mainav" className={"fl_right"}> 
                        {/* 메뉴에 따라 active */}
                        <ul className={"clear"}>
                            <li className={"active"}><a href="/">홈</a></li>
                            <li><a href="/search">검색</a></li>
                            <li><a href="/review">리뷰</a></li>
                            <li><a href="/mypage">마이페이지</a></li>
                            <li><a href="/login">로그인</a></li>
                        </ul>
                        </nav>
                    </header>
                </div>
                {/* 메뉴에 따라 동적 변경 */}
                <div className={"overlay"}>
                    <div id="pageintro" className={"hoc clear"}> 
                        <article>
                            <h3 className={"heading"}>내 손 안의 박물관, 아름누리</h3>
                        </article>
                    </div>
                </div>
            </div>
        )
    }
}


export default Header;