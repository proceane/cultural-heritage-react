import React from 'react';

class Like extends React.Component {
    render() {
        return(
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
                    <h1>좋아요</h1>
                    <div id="gallery">  
                        <ul class="nospace clear">
                            <li class="one_quarter first">
                            <figure>
                                <a href="detail.html">
                                <img src="http://www.cha.go.kr/unisearch/images/scenic_site/1628710.jpg" alt=""></img>
                                </a>
                                <figcaption><strong>명승 17호</strong> 부산 영도 태종대</figcaption>
                            </figure>
                            </li>
                            <li class="one_quarter">
                            <figure>
                                <a href="detail.html">
                                <img src="http://www.cha.go.kr/unisearch/images/scenic_site/1628710.jpg" alt=""></img>
                                </a>
                                <figcaption><strong>명승 17호</strong> 부산 영도 태종대</figcaption>
                            </figure>
                            </li>
                            <li class="one_quarter">
                            <figure>
                                <a href="detail.html">
                                <img src="http://www.cha.go.kr/unisearch/images/scenic_site/1628710.jpg" alt=""></img>
                                </a>
                                <figcaption><strong>명승 17호</strong> 부산 영도 태종대</figcaption>
                            </figure>
                            </li>
                            <li class="one_quarter">
                            <figure>
                                <a href="detail.html">
                                <img src="http://www.cha.go.kr/unisearch/images/scenic_site/1628710.jpg" alt=""></img>
                                </a>
                                <figcaption><strong>명승 17호</strong> 부산 영도 태종대</figcaption>
                            </figure>
                            </li>
                            <li class="one_quarter first">
                            <figure>
                                <a href="detail.html">
                                <img src="http://www.cha.go.kr/unisearch/images/scenic_site/1628710.jpg" alt=""></img>
                                </a>
                                <figcaption><strong>명승 17호</strong> 부산 영도 태종대</figcaption>
                            </figure>
                            </li>
                            <li class="one_quarter">
                            <figure>
                                <a href="detail.html">
                                <img src="http://www.cha.go.kr/unisearch/images/scenic_site/1628710.jpg" alt=""></img>
                                </a>
                                <figcaption><strong>명승 17호</strong> 부산 영도 태종대</figcaption>
                            </figure>
                            </li>
                            <li class="one_quarter">
                            <figure>
                                <a href="detail.html">
                                <img src="http://www.cha.go.kr/unisearch/images/scenic_site/1628710.jpg" alt=""></img>
                                </a>
                                <figcaption><strong>명승 17호</strong> 부산 영도 태종대</figcaption>
                            </figure>
                            </li>
                            <li class="one_quarter">
                            <figure>
                                <a href="detail.html">
                                <img src="http://www.cha.go.kr/unisearch/images/scenic_site/1628710.jpg" alt=""></img>
                                </a>
                                <figcaption><strong>명승 17호</strong> 부산 영도 태종대</figcaption>
                            </figure>
                            </li>
                        </ul>
                    </div>
                    <nav class="pagination">
                        <ul>
                        <li><a href="#">&laquo; Previous</a></li>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><strong>&hellip;</strong></li>
                        <li><a href="#">6</a></li>
                        <li class="current"><strong>7</strong></li>
                        <li><a href="#">8</a></li>
                        <li><a href="#">9</a></li>
                        <li><strong>&hellip;</strong></li>
                        <li><a href="#">14</a></li>
                        <li><a href="#">15</a></li>
                        <li><a href="#">Next &raquo;</a></li>
                        </ul>
                    </nav>

                    </div>
                    <div class="clear"></div>
                </main>
            </div>
        )
    }
}

export default Like;