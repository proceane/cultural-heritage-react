import React from 'react';
import PropsTypes from 'prop-types';
import { getList } from "../../actions/data";

class Search extends React.Component {
    static propTypes = {
        dispatch: PropsTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            category: "",
            location: "",
            result: [],
            current_key: "",
        };

        this.active_category = this.active_category.bind(this);
        this.active_location = this.active_location.bind(this);
        this.getList = this.getList.bind(this);
    }

    active_category(category, id) {
        this.setState({category: id});
    }

    active_location(location, id) {
        this.setState({location: id});
    }

    getList() {
        getList(this.state.location, this.state.category, this.state.current_page)
        .then((res) => {
            if(res === null) {
                this.setState({result: []});
            } else {
                this.setState({result: res});
                Object.keys(res).map((key) => {
                    this.setState({current_key: key});
                })
            }
        });
    }

    render() {
        const data = this.state.result;
        const list = Object.keys(data).length > 0 ? 
        Object.keys(data).map((dt) => {
            const detail = "/detail/" + this.state.location + "/" + this.state.category + "/" + dt;
            return <li>
                <article>
                    <header>
                        <figure className="avatar"><img className="search_image" src={data[dt].image[1].imageurl} alt=""></img></figure>
                        <address>
                            <a href={detail}>{data[dt].ccbamnm1}</a>
                        </address>
                        <div>{data[dt].ccmaname} {data[dt].crltsnonm}호</div>
                    </header>
                    <div className="comcont">
                        <p>{data[dt].content}</p>
                    </div>
                </article>
            </li>
        }) : 
        <li>검색결과가 존재하지 않습니다.</li>;

        return(
            <div className="wrapper row3">
                <main className="hoc container clear"> 
                    <div className="content">
                        <div className="group btmspace-50">
                            <div className="one_half first">
                                <h2>분류</h2>
                                <div className="">
                                    <div id="ct_11" className="category search_button" onClick={() => this.active_category('국보', 11)}>국보</div>
                                    <div id="ct_12" className="category search_button" onClick={() => this.active_category('보물', 12)}>보물</div>
                                    <div id="ct_13" className="category search_button" onClick={() => this.active_category('사적', 13)}>사적</div>
                                    <div id="ct_14" className="category search_button" onClick={() => this.active_category('사적 및 명승', 14)}>사적 및 명승</div>
                                    <div id="ct_15" className="category search_button" onClick={() => this.active_category('명승', 15)}>명승</div>
                                    <div id="ct_16" className="category search_button" onClick={() => this.active_category('천연기념물', 16)}>천연기념물</div>
                                    <div id="ct_17" className="category search_button" onClick={() => this.active_category('국가무형문화재', 17)}>국가무형문화재</div>
                                    <div id="ct_18" className="category search_button" onClick={() => this.active_category('국가민속문화재', 18)}>국가민속문화재</div>
                                    <div id="ct_21" className="category search_button" onClick={() => this.active_category('시도유형문화재', 21)}>시도유형문화재</div>
                                    <div id="ct_22" className="category search_button" onClick={() => this.active_category('시도무형문화재', 22)}>시도무형문화재</div>
                                    <div id="ct_23" className="category search_button" onClick={() => this.active_category('시도기념물', 23)}>시도기념물</div>
                                    <div id="ct_24" className="category search_button" onClick={() => this.active_category('시도민속문화재', 24)}>시도민속문화재</div>
                                    <div id="ct_31" className="category search_button" onClick={() => this.active_category('문화재자료', 31)}>문화재자료</div>
                                    <div id="ct_79" className="category search_button" onClick={() => this.active_category('등록문화재', 79)}>등록문화재</div>
                                    <div id="ct_80" className="category search_button" onClick={() => this.active_category('이북 5도 무형문화재', 80)}>이북 5도 무형문화재</div>
                                    <div id="ct_99" className="category search_button" onClick={() => this.active_category('전체', 99)}>전체</div>
                                </div>
                            </div>
                            <div className="one_half">
                                <h2>지역</h2>
                                <div className="">
                                    <div id="lc_11" className="location search_button" onClick={() => this.active_location('서울', 11)}>서울</div>
                                    <div id="lc_21" className="location search_button" onClick={() => this.active_location('부산', 21)}>부산</div>
                                    <div id="lc_22" className="location search_button" onClick={() => this.active_location('대구', 22)}>대구</div>
                                    <div id="lc_23" className="location search_button" onClick={() => this.active_location('인천', 23)}>인천</div>
                                    <div id="lc_24" className="location search_button" onClick={() => this.active_location('광주', 24)}>광주</div>
                                    <div id="lc_25" className="location search_button" onClick={() => this.active_location('대전', 25)}>대전</div>
                                    <div id="lc_26" className="location search_button" onClick={() => this.active_location('울산', 26)}>울산</div>
                                    <div id="lc_45" className="location search_button" onClick={() => this.active_location('세종', 45)}>세종</div>
                                    <div id="lc_31" className="location search_button" onClick={() => this.active_location('경기', 31)}>경기</div>
                                    <div id="lc_32" className="location search_button" onClick={() => this.active_location('강원', 32)}>강원</div>
                                    <div id="lc_33" className="location search_button" onClick={() => this.active_location('충북', 33)}>충북</div>
                                    <div id="lc_34" className="location search_button" onClick={() => this.active_location('충남', 34)}>충남</div>
                                    <div id="lc_35" className="location search_button" onClick={() => this.active_location('전북', 35)}>전북</div>
                                    <div id="lc_36" className="location search_button" onClick={() => this.active_location('전남', 36)}>전남</div>
                                    <div id="lc_37" className="location search_button" onClick={() => this.active_location('경북', 37)}>경북</div>
                                    <div id="lc_38" className="location search_button" onClick={() => this.active_location('경남', 38)}>경남</div>
                                    <div id="lc_50" className="location search_button" onClick={() => this.active_location('제주', 50)}>제주</div>
                                    <div id="lc_zz" className="location search_button" onClick={() => this.active_location('전국', 'zz')}>전국(위치 미상)</div>
                                </div>
                            </div>
                        </div>

                        <button className="search_button" onClick={this.getList}>검색</button>

                        {/* <form method="get" onSubmit={this.getList}>
                            <div className="group btmspace-50">
                                <div className="one_third first">&nbsp;&nbsp;&nbsp;&nbsp;</div>
                                <div className="one_third">
                                    <input type="hidden" id="ct" name="ct" value={this.state.category}></input>
                                    <input type="hidden" id="lc" name="lc" value={this.state.location}></input>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <input type="submit" className="search_button" name="submit" value="검색"></input>
                                </div>
                                <div className="one_third"></div>
                            </div>
                        </form> */}

                        <div id="comments">
                            <ul>
                                {list}
                                {/* <li>
                                    <article>
                                        <header>
                                            <figure className="avatar"><img className="search_image" src="http://www.cha.go.kr/unisearch/images/scenic_site/2020090216453002.jpg" alt=""></img></figure>
                                            <address>
                                            <a href="detail.html">서울 성북동 별서</a>
                                            </address>
                                            <div>명승 118호</div>
                                        </header>
                                        <div className="comcont">
                                            <p>1) 지정가치\n (역사성·학술성) 별서 조성 이전에도 경승지로 널리 이용되었으며, 고종 대의 내관인 황윤명이 조성하여 갑신정변 당시 명성황후가 피난처로 사용된 곳임. 또한 얼마 남지 않은 조선시대 민가정원으로서 보존ㆍ연구의 가치가 있음\n (경관성) 자연 계류와 지형, 암석 등이 잘 어우러져 공간구성 및 경관연출 등의 측면에서 한국전통 정원으로서의 미학이 살아있음\n\n2) 현황\n서울 지역에 드물게 남아있는 조선시대 정원으로서, 전통 정원 요소의 원형이 비교적 잘 남아있고 경관적으로도 보존할 가치가 있는 명승이다.\n\n시냇물을 따라 앞뜰, 안뜰, 바깥뜰로 나눌 수 있는데, 앞뜰에는 두 골짜기에서 흘러내린 물줄기가 하나로 모이는 쌍류동천(雙流洞天)이 있다. 안뜰을 감싸주는 용두가산(龍頭假山)에는 200~300년 되는 엄나무를 비롯하여 느티나무, 소나무, 참나무, 단풍나무, 다래나무, 말채나무 등이 울창한 숲을 이루고 있다. 안뜰의 영벽지(影碧池) 주위에는 인수위소지(引水爲小池), 장외가(檣外家), 청산일조(靑山壹條) 등의 글씨가 바위에 새겨져 있고 바깥뜰의 고엽약수 등과 함께 자연과 인공이 어우러진 경관을 보이고 있다.\n\n별서를 만들기 전부터 오랫동안 경승지로 이용되어왔던 곳이며, 조선 고종 때 내관이자 문인인 황윤명(黃允明, 1844∼1916)이 조성한 별서이다. 육교시사(六橋詩社) 시회(詩會)가 열리기도 했으며, 갑신정변 당시 명성황후의 피난처가 되었고, 의친왕 이강(李堈, 1877~1955)이 별궁으로 사용한 역사적 가치도 있다.</p>
                                        </div>
                                    </article>
                                </li>
                                <li>
                                <article>
                                    <header>
                                        <figure className="avatar"><img className="search_image" src="http://www.cha.go.kr/unisearch/images/scenic_site/2020090216453002.jpg" alt=""></img></figure>
                                        <address>
                                        <a href="detail.html">서울 성북동 별서</a>
                                        </address>
                                        <div>명승 118호</div>
                                    </header>
                                    <div className="comcont">
                                        <p>1) 지정가치\n (역사성·학술성) 별서 조성 이전에도 경승지로 널리 이용되었으며, 고종 대의 내관인 황윤명이 조성하여 갑신정변 당시 명성황후가 피난처로 사용된 곳임. 또한 얼마 남지 않은 조선시대 민가정원으로서 보존ㆍ연구의 가치가 있음\n (경관성) 자연 계류와 지형, 암석 등이 잘 어우러져 공간구성 및 경관연출 등의 측면에서 한국전통 정원으로서의 미학이 살아있음\n\n2) 현황\n서울 지역에 드물게 남아있는 조선시대 정원으로서, 전통 정원 요소의 원형이 비교적 잘 남아있고 경관적으로도 보존할 가치가 있는 명승이다.\n\n시냇물을 따라 앞뜰, 안뜰, 바깥뜰로 나눌 수 있는데, 앞뜰에는 두 골짜기에서 흘러내린 물줄기가 하나로 모이는 쌍류동천(雙流洞天)이 있다. 안뜰을 감싸주는 용두가산(龍頭假山)에는 200~300년 되는 엄나무를 비롯하여 느티나무, 소나무, 참나무, 단풍나무, 다래나무, 말채나무 등이 울창한 숲을 이루고 있다. 안뜰의 영벽지(影碧池) 주위에는 인수위소지(引水爲小池), 장외가(檣外家), 청산일조(靑山壹條) 등의 글씨가 바위에 새겨져 있고 바깥뜰의 고엽약수 등과 함께 자연과 인공이 어우러진 경관을 보이고 있다.\n\n별서를 만들기 전부터 오랫동안 경승지로 이용되어왔던 곳이며, 조선 고종 때 내관이자 문인인 황윤명(黃允明, 1844∼1916)이 조성한 별서이다. 육교시사(六橋詩社) 시회(詩會)가 열리기도 했으며, 갑신정변 당시 명성황후의 피난처가 되었고, 의친왕 이강(李堈, 1877~1955)이 별궁으로 사용한 역사적 가치도 있다.</p>
                                    </div>
                                    </article>
                                </li>
                                <li>
                                <article>
                                    <header>
                                        <figure className="avatar"><img className="search_image" src="http://www.cha.go.kr/unisearch/images/scenic_site/2020090216453002.jpg" alt=""></img></figure>
                                        <address>
                                        <a href="detail.html">서울 성북동 별서</a>
                                        </address>
                                        <div>명승 118호</div>
                                    </header>
                                    <div className="comcont">
                                        <p>1) 지정가치\n (역사성·학술성) 별서 조성 이전에도 경승지로 널리 이용되었으며, 고종 대의 내관인 황윤명이 조성하여 갑신정변 당시 명성황후가 피난처로 사용된 곳임. 또한 얼마 남지 않은 조선시대 민가정원으로서 보존ㆍ연구의 가치가 있음\n (경관성) 자연 계류와 지형, 암석 등이 잘 어우러져 공간구성 및 경관연출 등의 측면에서 한국전통 정원으로서의 미학이 살아있음\n\n2) 현황\n서울 지역에 드물게 남아있는 조선시대 정원으로서, 전통 정원 요소의 원형이 비교적 잘 남아있고 경관적으로도 보존할 가치가 있는 명승이다.\n\n시냇물을 따라 앞뜰, 안뜰, 바깥뜰로 나눌 수 있는데, 앞뜰에는 두 골짜기에서 흘러내린 물줄기가 하나로 모이는 쌍류동천(雙流洞天)이 있다. 안뜰을 감싸주는 용두가산(龍頭假山)에는 200~300년 되는 엄나무를 비롯하여 느티나무, 소나무, 참나무, 단풍나무, 다래나무, 말채나무 등이 울창한 숲을 이루고 있다. 안뜰의 영벽지(影碧池) 주위에는 인수위소지(引水爲小池), 장외가(檣外家), 청산일조(靑山壹條) 등의 글씨가 바위에 새겨져 있고 바깥뜰의 고엽약수 등과 함께 자연과 인공이 어우러진 경관을 보이고 있다.\n\n별서를 만들기 전부터 오랫동안 경승지로 이용되어왔던 곳이며, 조선 고종 때 내관이자 문인인 황윤명(黃允明, 1844∼1916)이 조성한 별서이다. 육교시사(六橋詩社) 시회(詩會)가 열리기도 했으며, 갑신정변 당시 명성황후의 피난처가 되었고, 의친왕 이강(李堈, 1877~1955)이 별궁으로 사용한 역사적 가치도 있다.</p>
                                    </div>
                                    </article>
                                </li>
                                <li>
                                <article>
                                    <header>
                                        <figure className="avatar"><img className="search_image" src="http://www.cha.go.kr/unisearch/images/scenic_site/2020090216453002.jpg" alt=""></img></figure>
                                        <address>
                                        <a href="detail.html">서울 성북동 별서</a>
                                        </address>
                                        <div>명승 118호</div>
                                    </header>
                                    <div className="comcont">
                                        <p>1) 지정가치\n (역사성·학술성) 별서 조성 이전에도 경승지로 널리 이용되었으며, 고종 대의 내관인 황윤명이 조성하여 갑신정변 당시 명성황후가 피난처로 사용된 곳임. 또한 얼마 남지 않은 조선시대 민가정원으로서 보존ㆍ연구의 가치가 있음\n (경관성) 자연 계류와 지형, 암석 등이 잘 어우러져 공간구성 및 경관연출 등의 측면에서 한국전통 정원으로서의 미학이 살아있음\n\n2) 현황\n서울 지역에 드물게 남아있는 조선시대 정원으로서, 전통 정원 요소의 원형이 비교적 잘 남아있고 경관적으로도 보존할 가치가 있는 명승이다.\n\n시냇물을 따라 앞뜰, 안뜰, 바깥뜰로 나눌 수 있는데, 앞뜰에는 두 골짜기에서 흘러내린 물줄기가 하나로 모이는 쌍류동천(雙流洞天)이 있다. 안뜰을 감싸주는 용두가산(龍頭假山)에는 200~300년 되는 엄나무를 비롯하여 느티나무, 소나무, 참나무, 단풍나무, 다래나무, 말채나무 등이 울창한 숲을 이루고 있다. 안뜰의 영벽지(影碧池) 주위에는 인수위소지(引水爲小池), 장외가(檣外家), 청산일조(靑山壹條) 등의 글씨가 바위에 새겨져 있고 바깥뜰의 고엽약수 등과 함께 자연과 인공이 어우러진 경관을 보이고 있다.\n\n별서를 만들기 전부터 오랫동안 경승지로 이용되어왔던 곳이며, 조선 고종 때 내관이자 문인인 황윤명(黃允明, 1844∼1916)이 조성한 별서이다. 육교시사(六橋詩社) 시회(詩會)가 열리기도 했으며, 갑신정변 당시 명성황후의 피난처가 되었고, 의친왕 이강(李堈, 1877~1955)이 별궁으로 사용한 역사적 가치도 있다.</p>
                                    </div>
                                    </article>
                                </li>
                                <li>
                                <article>
                                    <header>
                                        <figure className="avatar"><img className="search_image" src="http://www.cha.go.kr/unisearch/images/scenic_site/2020090216453002.jpg" alt=""></img></figure>
                                        <address>
                                        <a href="detail.html">서울 성북동 별서</a>
                                        </address>
                                        <div>명승 118호</div>
                                    </header>
                                    <div className="comcont">
                                        <p>1) 지정가치\n (역사성·학술성) 별서 조성 이전에도 경승지로 널리 이용되었으며, 고종 대의 내관인 황윤명이 조성하여 갑신정변 당시 명성황후가 피난처로 사용된 곳임. 또한 얼마 남지 않은 조선시대 민가정원으로서 보존ㆍ연구의 가치가 있음\n (경관성) 자연 계류와 지형, 암석 등이 잘 어우러져 공간구성 및 경관연출 등의 측면에서 한국전통 정원으로서의 미학이 살아있음\n\n2) 현황\n서울 지역에 드물게 남아있는 조선시대 정원으로서, 전통 정원 요소의 원형이 비교적 잘 남아있고 경관적으로도 보존할 가치가 있는 명승이다.\n\n시냇물을 따라 앞뜰, 안뜰, 바깥뜰로 나눌 수 있는데, 앞뜰에는 두 골짜기에서 흘러내린 물줄기가 하나로 모이는 쌍류동천(雙流洞天)이 있다. 안뜰을 감싸주는 용두가산(龍頭假山)에는 200~300년 되는 엄나무를 비롯하여 느티나무, 소나무, 참나무, 단풍나무, 다래나무, 말채나무 등이 울창한 숲을 이루고 있다. 안뜰의 영벽지(影碧池) 주위에는 인수위소지(引水爲小池), 장외가(檣外家), 청산일조(靑山壹條) 등의 글씨가 바위에 새겨져 있고 바깥뜰의 고엽약수 등과 함께 자연과 인공이 어우러진 경관을 보이고 있다.\n\n별서를 만들기 전부터 오랫동안 경승지로 이용되어왔던 곳이며, 조선 고종 때 내관이자 문인인 황윤명(黃允明, 1844∼1916)이 조성한 별서이다. 육교시사(六橋詩社) 시회(詩會)가 열리기도 했으며, 갑신정변 당시 명성황후의 피난처가 되었고, 의친왕 이강(李堈, 1877~1955)이 별궁으로 사용한 역사적 가치도 있다.</p>
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
                        <div className="clear"></div>
                    </div>
                </main>
            </div>
        )
    }
}

export default Search;