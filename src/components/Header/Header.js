import React from 'react';
import '../../assets/css/layout.css';
import mainImage from '../../assets/images/main.jpg';
import Login from "../../pages/login";
import { logoutUser } from '../../actions/user';
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class Header extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
    };

    constructor(props) {
        super(props);
        this.doLogout = this.doLogout.bind(this);
    }
    
    doLogout() {
        this.props.dispatch(logoutUser());
        this.props.history.push("/");
    }

    render() {
        const loginState = Login.isAuthenticated(JSON.parse(localStorage.getItem("authenticated")));
        return(
            <div className={"bgded"} style={{backgroundImage:"url(" + mainImage + ")"}}> 
                <div className={"wrapper row1"}>
                    <header id="header" className={"hoc clear"}>
                        <div id="logo" className={"fl_left"}> 
                        <h1><a href="/">아름누리</a></h1>
                        </div>
                        
                        <Navbar id="mainav" className="fl_right">
                            <Nav className={"clear"}>
                                <NavItem className={"active"}>
                                    <NavLink href="/">홈</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/search">검색</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/review">리뷰</NavLink>
                                </NavItem>
                                {loginState && 
                                    <NavItem>
                                        <NavLink href="/mypage">마이페이지</NavLink>
                                    </NavItem>
                                }
                                <NavItem>
                                    {!loginState && <NavLink href="/login">로그인</NavLink>}
                                    {loginState && <NavLink href="#" onClick={this.doLogout}>로그아웃</NavLink>}
                                </NavItem>
                            </Nav>
                        </Navbar>
                        {/* 메뉴에 따라 active */}
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

function mapStateToProps(store) {
    return {

    }
}

export default withRouter(connect(mapStateToProps)(Header));