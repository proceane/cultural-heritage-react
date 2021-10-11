import React from 'react';
import { getDetail, setComment, getDetailComment } from "../../actions/data";
import Login from "../../pages/login";
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

class Detail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data : [],
            imageList: [],
            commentList: [],
            lc: props.match.params.lc,
            ct: props.match.params.ct,
            cd: props.match.params.cd,
            email: "",
            comment: "",
        };

        this.getData = this.getData.bind(this);
        this.getCommentData = this.getCommentData.bind(this);
        this.setComment = this.setComment.bind(this);
        this.changeComment = this.changeComment.bind(this);
    }

    componentDidMount() {
        const {params} = this.props.match;
        this.getData(params.lc, params.ct, params.cd);
    }

    getData(lc, ct, cd) {
        getDetail(lc, ct, cd)
        .then((res) => {
            if(res === null) {
                this.setState({data: []});
            } else {
                this.setState({data : res});
                this.setState({imageList: res.image});
            }
        });
    }

    getCommentData(lc, ct, cd) {
        getDetailComment(lc, ct, cd)
        .then((res) => {
            if(res === null) {
                this.setState({commentList: []});
            } else {
                this.setState({commentList : res});
            }
        });
    }

    setComment() {
        setComment(this.state.lc, this.state.ct, this.state.cd, this.state.email, this.state.comment);
    }

    changeComment(event) {
        this.setState({comment : event.target.value})
    }

    render() {
        const data = this.state.data;
        const imageList = this.state.imageList;
        const image = Object.keys(imageList).map((item) => {
            return <div>
                <img src={imageList[item].imageurl} alt={imageList[item].ccimdesc}></img>
            </div>
        });
        
        const comment = this.state.commentList;
        const commentList = Object.keys(comment).map((item) => {
            return <li>
                        <article>
                            <header>
                                <time datetime="2045-04-06T08:15+00:00">{comment[item].date}</time>
                            </header>
                            <div className="comcont">
                                <p>{comment[item].comment}</p>
                            </div>
                        </article>
                    </li>
        });

        const loginState = Login.isAuthenticated(JSON.parse(JSON.stringify(localStorage.getItem("authenticated"))));

        return(
            <div className="wrapper row3">
                <main className="hoc container clear"> 
                    <div className="content three_quarter first"> 
                    <Carousel>
                        {image}
                    </Carousel>
                    <br></br><br></br>
                    <h1>{data.ccmaname} {data.crltsnonm}호 {data.ccbamnm1}</h1>
                    <p>{data.content}</p>
                    
                    <div className="scrollable">
                        <table>
                            <tbody>
                                <tr>
                                    <td>시대</td>
                                    <td>{data.cccename}</td>
                                </tr>
                                {/* <!-- g-b-m-s 순서 --> */}
                                <tr>
                                    <td>분류</td>
                                    <td>{data.gcodename} / {data.bcodename} / {data.mcodename} / {data.scodename}</td>
                                </tr>
                                <tr>
                                    <td>지정(등록일)</td>
                                    <td>{data.ccbaasdt}1962.12.20</td>
                                </tr>
                                <tr>
                                    <td>수량</td>
                                    <td>{data.ccbaquan}</td>
                                </tr>
                                <tr>
                                    <td>위치</td>
                                    <td>{data.ccbalcad}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <div id="like" className="like_button">좋아요 <i className="far fa-heart"></i></div>
                    </div>
                    <br></br><br></br>
                    
                    <div id="comments">
                        <h2>댓글</h2>
                        <form onSubmit={this.setComment}>
                            {/* <!-- 비로그인은 안보임 로그인시 email input에 로그인된 메일 표시 --> */}
                            {loginState && 
                                <div className="one_third first">
                                    <label for="email">email</label>
                                    <input type="email" name="email" id="email" value={this.email} size="22" readonly></input>
                                </div>
                            }
                            {loginState && 
                                <div className="block clear">
                                    <label for="comment">Your Comment</label>
                                    <textarea name="comment" id="comment" cols="25" rows="10" placeholder="" onChange={this.changeComment}></textarea>
                                </div>
                            }
                            {!loginState && 
                                <div className="block clear">
                                    <label for="comment">Your Comment</label>
                                    <textarea name="comment" id="comment" cols="25" rows="10" placeholder="로그인 하셔야 댓글을 남길 수 있습니다." readOnly></textarea>
                                </div>
                            }

                            {/* <!-- 비로그인 버튼 안보임 --> */}
                            {loginState && 
                                <div>
                                    <input type="submit" name="submit" value="Submit Form"></input>
                                    &nbsp;
                                    <input type="reset" name="reset" value="Reset Form"></input>
                                </div>
                            }
                        </form>
                        <ul>
                            {commentList}
                        {/* <li>
                            <article>
                                <header>
                                    <time datetime="2045-04-06T08:15+00:00">2021.07.19 17:40</time>
                                </header>
                                <div className="comcont">
                                    <p>완전 멋있어요!</p>
                                </div>
                            </article>
                        </li>
                        <li>
                            <article>
                                <header>
                                    <time datetime="2045-04-06T08:15+00:00">2021.07.19 17:40</time>
                                </header>
                                <div className="comcont">
                                    <p>완전 멋있어요!</p>
                                </div>
                            </article>
                        </li>
                        <li>
                            <article>
                                <header>
                                    <time datetime="2045-04-06T08:15+00:00">2021.07.19 17:40</time>
                                </header>
                                <div className="comcont">
                                    <p>완전 멋있어요!</p>
                                </div>
                            </article>
                        </li>
                        <li>
                            <article>
                                <header>
                                    <time datetime="2045-04-06T08:15+00:00">2021.07.19 17:40</time>
                                </header>
                                <div className="comcont">
                                    <p>완전 멋있어요!</p>
                                </div>
                            </article>
                        </li>
                        <li>
                            <article>
                                <header>
                                    <time datetime="2045-04-06T08:15+00:00">2021.07.19 17:40</time>
                                </header>
                                <div className="comcont">
                                    <p>완전 멋있어요!</p>
                                </div>
                            </article>
                        </li> */}
                        </ul>
                    </div>
                    <nav className="pagination">
                        <ul>
                        <li><a href="#">&laquo; Previous</a></li>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><strong>&hellip;</strong></li>
                        <li><a href="#">6</a></li>
                        <li className="current"><strong>7</strong></li>
                        <li><a href="#">8</a></li>
                        <li><a href="#">9</a></li>
                        <li><strong>&hellip;</strong></li>
                        <li><a href="#">14</a></li>
                        <li><a href="#">15</a></li>
                        <li><a href="#">Next &raquo;</a></li>
                        </ul>
                    </nav>

                    </div>

                    <div className="sidebar one_quarter"> 
                        <div className="sdb_holder">
                            <article>
                            <h6>다른 문화재</h6>
                            <ul className="nospace group">
                                <li>
                                <figure>
                                    <a className="imgover" href="detail.html"><img className="fix_image_348x100" src="http://www.cha.go.kr/unisearch/images/national_treasure/1611450.jpg" alt=""></img></a>
                                    <figcaption><strong>국보 2호</strong> 서울 원각사지 십층석탑</figcaption>
                                </figure>
                                </li>
                                <li>
                                <figure>
                                    <a className="imgover" href="detail.html"><img className="fix_image_348x100" src="http://www.cha.go.kr/unisearch/images/national_treasure/1611450.jpg" alt=""></img></a>
                                    <figcaption><strong>국보 2호</strong> 서울 원각사지 십층석탑</figcaption>
                                </figure>
                                </li>
                                <li>
                                <figure>
                                    <a className="imgover" href="detail.html"><img className="fix_image_348x100" src="http://www.cha.go.kr/unisearch/images/national_treasure/1611450.jpg" alt=""></img></a>
                                    <figcaption><strong>국보 2호</strong> 서울 원각사지 십층석탑</figcaption>
                                </figure>
                                </li>
                                <li>
                                <figure>
                                    <a className="imgover" href="detail.html"><img className="fix_image_348x100" src="http://www.cha.go.kr/unisearch/images/national_treasure/1611450.jpg" alt=""></img></a>
                                    <figcaption><strong>국보 2호</strong> 서울 원각사지 십층석탑</figcaption>
                                </figure>
                                </li>
                                <li>
                                <figure>
                                    <a className="imgover" href="detail.html"><img className="fix_image_348x100" src="http://www.cha.go.kr/unisearch/images/national_treasure/1611450.jpg" alt=""></img></a>
                                    <figcaption><strong>국보 2호</strong> 서울 원각사지 십층석탑</figcaption>
                                </figure>
                                </li>
                            </ul>
                            </article>
                        </div>
                    </div>
                    <div className="clear"></div>
                </main>
            </div>
        )
    }
}

export default Detail;