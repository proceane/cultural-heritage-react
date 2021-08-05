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
            <div className={"bgded"} style={{backgroundImage: window.location.pathname === "/" ? "url(" + mainImage + ")" : ""}}> 
                <div className={"wrapper row1"}>
                    <header id="header" className={"hoc clear"}>
                        <div id="logo" className={"fl_left"}> 
                            <h1><NavLink href="/">아름누리</NavLink></h1>
                        </div>
                        
                        <Navbar id="mainav" className="fl_right">
                            <Nav className={"clear"}>
                                <NavItem active={window.location.pathname === "/"}>
                                    <NavLink href="/">홈</NavLink>
                                </NavItem>
                                <NavItem active={window.location.pathname === "/search"}>
                                    <NavLink href="/search">검색</NavLink>
                                </NavItem>
                                <NavItem active={window.location.pathname === "/review"}>
                                    <NavLink href="/review">리뷰</NavLink>
                                </NavItem>
                                {loginState && 
                                    <NavItem active={window.location.pathname === "/mypage"}>
                                        <NavLink href="/mypage">마이페이지</NavLink>
                                    </NavItem>
                                }
                                <NavItem active={window.location.pathname === "/login"}>
                                    {!loginState && <NavLink href="/login">로그인</NavLink>}
                                    {loginState && <NavLink href="#" onClick={this.doLogout}>로그아웃</NavLink>}
                                </NavItem>
                            </Nav>
                        </Navbar>
                    </header>
                </div>
                {/* 메뉴에 따라 동적 변경 */}
                {window.location.pathname === "/" && 
                    <div className={"overlay"}>
                        <div id="pageintro" className={"hoc clear"}> 
                            <article>
                                <h3 className={"heading"}>내 손 안의 박물관, 아름누리</h3>
                            </article>
                        </div>
                    </div>
                }
                {window.location.pathname !== "/" && 
                    <div className={"overlay"}>
                        <div id="breadcrumb" className={"hoc clear"}> 
                        <h6 className="heading">{this.props.pageName}</h6>
                        </div>
                    </div>
                }
                
            </div>
        )
    }
}

function mapStateToProps(store) {
    return {

    }
}

export default withRouter(connect(mapStateToProps)(Header));