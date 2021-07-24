import React from 'react';

class Comments extends React.Component {
    render() {
        return(
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
                        <h1>댓글</h1>
                        <div id="comments">
                            <ul>
                                <li>
                                    <article>
                                    <header>
                                        <figure className="avatar"><img className="comment_image" src="http://www.cha.go.kr/unisearch/images/scenic_site/1628744.jpg" alt=""></img></figure>
                                        <address>
                                        <a href="detail.html">광주 환벽당 일원</a>
                                        </address>
                                        <time dateTime="2045-04-06T08:15+00:00">2021.07.19 17:07</time>
                                    </header>
                                    <div className="comcont">
                                        <p>경치가 정말 좋습니다.</p>
                                    </div>
                                    </article>
                                </li>
                                <li>
                                    <article>
                                    <header>
                                        <figure className="avatar"><img className="comment_image" src="http://www.cha.go.kr/unisearch/images/scenic_site/1628744.jpg" alt=""></img></figure>
                                        <address>
                                        <a href="detail.html">광주 환벽당 일원</a>
                                        </address>
                                        <time dateTime="2045-04-06T08:15+00:00">2021.07.19 17:07</time>
                                    </header>
                                    <div className="comcont">
                                        <p>경치가 정말 좋습니다.</p>
                                    </div>
                                    </article>
                                </li>
                                <li>
                                    <article>
                                    <header>
                                        <figure className="avatar"><img className="comment_image" src="http://www.cha.go.kr/unisearch/images/scenic_site/1628744.jpg" alt=""></img></figure>
                                        <address>
                                        <a href="detail.html">광주 환벽당 일원</a>
                                        </address>
                                        <time dateTime="2045-04-06T08:15+00:00">2021.07.19 17:07</time>
                                    </header>
                                    <div className="comcont">
                                        <p>경치가 정말 좋습니다.</p>
                                    </div>
                                    </article>
                                </li>
                                <li>
                                    <article>
                                    <header>
                                        <figure className="avatar"><img className="comment_image" src="http://www.cha.go.kr/unisearch/images/scenic_site/1628744.jpg" alt=""></img></figure>
                                        <address>
                                        <a href="detail.html">광주 환벽당 일원</a>
                                        </address>
                                        <time dateTime="2045-04-06T08:15+00:00">2021.07.19 17:07</time>
                                    </header>
                                    <div className="comcont">
                                        <p>경치가 정말 좋습니다.</p>
                                    </div>
                                    </article>
                                </li>
                                <li>
                                    <article>
                                    <header>
                                        <figure className="avatar"><img className="comment_image" src="http://www.cha.go.kr/unisearch/images/scenic_site/1628744.jpg" alt=""></img></figure>
                                        <address>
                                        <a href="detail.html">광주 환벽당 일원</a>
                                        </address>
                                        <time dateTime="2045-04-06T08:15+00:00">2021.07.19 17:07</time>
                                    </header>
                                    <div className="comcont">
                                        <p>경치가 정말 좋습니다.</p>
                                    </div>
                                    </article>
                                </li>
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
                    <div className="clear"></div>
                </main>
            </div>
        )
    }
}

export default Comments;