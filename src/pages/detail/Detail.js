import React from 'react';
import data from "../../actions/data";

class Detail extends React.Component {
    render() {
        return(
            <div className="wrapper row3">
                <main className="hoc container clear"> 
                    <div className="content three_quarter first"> 
                    <div className="image_slider">
                        <div><img src="http://www.cha.go.kr/unisearch/images/national_treasure/2685609.jpg" title="봄 숭례문(2015)"></img></div>
                        <div><img src="http://www.cha.go.kr/unisearch/images/national_treasure/2685619.jpg" title="숭례문(1882)"></img></div>
                    </div>
                    <br></br><br></br>
                    <h1>국보 1호 서울 숭례문</h1>
                    <p>조선시대 한양도성의 정문으로 남쪽에 있다고 해서 남대문이라고도 불렀다. 현재 서울에 남아 있는 목조 건물 중 가장 오래된 것으로 태조 5년(1396)에 짓기 시작하여 태조 7년(1398)에 완성하였다. 이 건물은 세종 30년(1448)에 고쳐 지은 것인데 1961∼1963년 해체·수리 때 성종 10년(1479)에도 큰 공사가 있었다는 사실이 밝혀졌다. 이후, 2008년 2월 10일 숭례문 방화 화재로 누각 2층 지붕이 붕괴되고 1층 지붕도 일부 소실되는 등 큰 피해를 입었으며, 5년 2개월에 걸친 복원공사 끝에 2013년 5월 4일 준공되어 일반에 공개되고 있다.\n 이 문은 돌을 높이 쌓아 만든 석축 가운데에 무지개 모양의 홍예문을 두고, 그 위에 앞면 5칸·옆면 2칸 크기로 지은 누각형 2층 건물이다. 지붕은 앞면에서 볼 때 사다리꼴 형태를 하고 있는데, 이러한 지붕을 우진각지붕이라 한다. 지붕 처마를 받치기 위해 기둥 위부분에 장식하여 짠 구조가 기둥 위뿐만 아니라 기둥 사이에도 있는 다포 양식으로, 그 형태가 곡이 심하지 않고 짜임도 건실해 조선 전기의 특징을 잘 보여주고 있다.\n 『지봉유설』의 기록에는 ‘숭례문’이라고 쓴 현판을 양녕대군이 썼다고 한다. 지어진 연대를 정확히 알 수 있는 서울 성곽 중에서 제일 오래된 목조 건축물이다.\nㅇ 숭례문 방화 화재(2008.2.10)\n - 2008년 숭례문 방화 사건(崇禮門放火事件)은 2008년 2월 10일 ~ 2월 11일 숭례문 건물이 방화로 타 무너진 사건이다. 화재는 2008년 2월 10일 오후 8시 40분 전후에 발생하여 다음날인 2008년 2월 11일 오전 0시 40분경 숭례문의 누각 2층 지붕이 붕괴하였고 이어 1층에도 불이 붙어 화재 5시간 만인 오전 1시 55분쯤 석축을 제외한 건물이 훼손되었다.</p>
                    
                    <div className="scrollable">
                        <table>
                        <tbody>
                            <tr>
                            <td>시대</td>
                            <td>조선 태조 7년(1398)</td>
                            </tr>
                            {/* <!-- g-b-m-s 순서 --> */}
                            <tr>
                            <td>분류</td>
                            <td>유적건조물 / 정치국방 / 성 / 성곽시설</td>
                            </tr>
                            <tr>
                            <td>지정(등록일)</td>
                            <td>1962.12.20</td>
                            </tr>
                            <tr>
                            <td>수량</td>
                            <td>1동</td>
                            </tr>
                            <tr>
                            <td>위치</td>
                            <td>서울 중구 세종대로 40 (남대문로4가)</td>
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
                        <form action="#" method="post">
                            {/* <!-- 비로그인은 안보임 로그인시 email input에 로그인된 메일 표시 --> */}
                            <div className="one_third first">
                                <label for="email">email</label>
                                <input type="email" name="email" id="email" value="" size="22" readonly></input>
                            </div>
                            <div className="block clear">
                                <label for="comment">Your Comment</label>
                                <textarea name="comment" id="comment" cols="25" rows="10" placeholder="로그인 하셔야 댓글을 남길 수 있습니다."></textarea>
                            </div>
                            {/* <!-- 비로그인 버튼 안보임 --> */}
                            <div>
                                <input type="submit" name="submit" value="Submit Form"></input>
                                &nbsp;
                                <input type="reset" name="reset" value="Reset Form"></input>
                            </div>
                        </form>
                        <ul>
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