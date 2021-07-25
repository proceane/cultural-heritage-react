import React from 'react';

class Like extends React.Component {
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
                    <h1>좋아요</h1>
                    <div id="gallery">  
                        <ul className="nospace clear">
                            <li className="one_quarter first">
                            <figure>
                                <a href="detail.html">
                                <img src="http://www.cha.go.kr/unisearch/images/scenic_site/1628710.jpg" alt=""></img>
                                </a>
                                <figcaption><strong>명승 17호</strong> 부산 영도 태종대</figcaption>
                            </figure>
                            </li>
                            <li className="one_quarter">
                            <figure>
                                <a href="detail.html">
                                <img src="http://www.cha.go.kr/unisearch/images/scenic_site/1628710.jpg" alt=""></img>
                                </a>
                                <figcaption><strong>명승 17호</strong> 부산 영도 태종대</figcaption>
                            </figure>
                            </li>
                            <li className="one_quarter">
                            <figure>
                                <a href="detail.html">
                                <img src="http://www.cha.go.kr/unisearch/images/scenic_site/1628710.jpg" alt=""></img>
                                </a>
                                <figcaption><strong>명승 17호</strong> 부산 영도 태종대</figcaption>
                            </figure>
                            </li>
                            <li className="one_quarter">
                            <figure>
                                <a href="detail.html">
                                <img src="http://www.cha.go.kr/unisearch/images/scenic_site/1628710.jpg" alt=""></img>
                                </a>
                                <figcaption><strong>명승 17호</strong> 부산 영도 태종대</figcaption>
                            </figure>
                            </li>
                            <li className="one_quarter first">
                            <figure>
                                <a href="detail.html">
                                <img src="http://www.cha.go.kr/unisearch/images/scenic_site/1628710.jpg" alt=""></img>
                                </a>
                                <figcaption><strong>명승 17호</strong> 부산 영도 태종대</figcaption>
                            </figure>
                            </li>
                            <li className="one_quarter">
                            <figure>
                                <a href="detail.html">
                                <img src="http://www.cha.go.kr/unisearch/images/scenic_site/1628710.jpg" alt=""></img>
                                </a>
                                <figcaption><strong>명승 17호</strong> 부산 영도 태종대</figcaption>
                            </figure>
                            </li>
                            <li className="one_quarter">
                            <figure>
                                <a href="detail.html">
                                <img src="http://www.cha.go.kr/unisearch/images/scenic_site/1628710.jpg" alt=""></img>
                                </a>
                                <figcaption><strong>명승 17호</strong> 부산 영도 태종대</figcaption>
                            </figure>
                            </li>
                            <li className="one_quarter">
                            <figure>
                                <a href="detail.html">
                                <img src="http://www.cha.go.kr/unisearch/images/scenic_site/1628710.jpg" alt=""></img>
                                </a>
                                <figcaption><strong>명승 17호</strong> 부산 영도 태종대</figcaption>
                            </figure>
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

export default Like;