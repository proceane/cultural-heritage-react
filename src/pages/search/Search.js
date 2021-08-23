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
            category_active: "",
            location_active: "",
        };

        this.active_category = this.active_category.bind(this);
        this.active_location = this.active_location.bind(this);
        this.getList = this.getList.bind(this);
    }

    active_category(id) {
        this.setState({category: id});
        this.setState({active_category: id});
    }

    active_location(id) {
        this.setState({location: id});
        this.setState({active_location: id});
    }

    getList() {
        getList(this.state.location, this.state.category)
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
                                    <div id="ct_11" className={this.state.active_category !== 11 ? 'category search_button' : 'category search_button btn_active'} onClick={() => this.active_category(11)}>국보</div>
                                    <div id="ct_12" className={this.state.active_category !== 12 ? 'category search_button' : 'category search_button btn_active'} onClick={() => this.active_category(12)}>보물</div>
                                    <div id="ct_13" className={this.state.active_category !== 13 ? 'category search_button' : 'category search_button btn_active'} onClick={() => this.active_category(13)}>사적</div>
                                    <div id="ct_14" className={this.state.active_category !== 14 ? 'category search_button' : 'category search_button btn_active'} onClick={() => this.active_category(14)}>사적 및 명승</div>
                                    <div id="ct_15" className={this.state.active_category !== 15 ? 'category search_button' : 'category search_button btn_active'} onClick={() => this.active_category(15)}>명승</div>
                                    <div id="ct_16" className={this.state.active_category !== 16 ? 'category search_button' : 'category search_button btn_active'} onClick={() => this.active_category(16)}>천연기념물</div>
                                    <div id="ct_17" className={this.state.active_category !== 17 ? 'category search_button' : 'category search_button btn_active'} onClick={() => this.active_category(17)}>국가무형문화재</div>
                                    <div id="ct_18" className={this.state.active_category !== 18 ? 'category search_button' : 'category search_button btn_active'} onClick={() => this.active_category(18)}>국가민속문화재</div>
                                    <div id="ct_21" className={this.state.active_category !== 21 ? 'category search_button' : 'category search_button btn_active'} onClick={() => this.active_category(21)}>시도유형문화재</div>
                                    <div id="ct_22" className={this.state.active_category !== 22 ? 'category search_button' : 'category search_button btn_active'} onClick={() => this.active_category(22)}>시도무형문화재</div>
                                    <div id="ct_23" className={this.state.active_category !== 23 ? 'category search_button' : 'category search_button btn_active'} onClick={() => this.active_category(23)}>시도기념물</div>
                                    <div id="ct_24" className={this.state.active_category !== 24 ? 'category search_button' : 'category search_button btn_active'} onClick={() => this.active_category(24)}>시도민속문화재</div>
                                    <div id="ct_31" className={this.state.active_category !== 31 ? 'category search_button' : 'category search_button btn_active'} onClick={() => this.active_category(31)}>문화재자료</div>
                                    <div id="ct_79" className={this.state.active_category !== 79 ? 'category search_button' : 'category search_button btn_active'} onClick={() => this.active_category(79)}>등록문화재</div>
                                    <div id="ct_80" className={this.state.active_category !== 80 ? 'category search_button' : 'category search_button btn_active'} onClick={() => this.active_category(80)}>이북 5도 무형문화재</div>
                                    <div id="ct_99" className={this.state.active_category !== 99 ? 'category search_button' : 'category search_button btn_active'} onClick={() => this.active_category(99)}>전체</div>
                                </div>
                            </div>
                            <div className="one_half">
                                <h2>지역</h2>
                                <div className="">
                                    <div id="lc_11" className={this.state.active_location !== 11 ? 'location search_button' : 'location search_button btn_active'} onClick={() => this.active_location(11)}>서울</div>
                                    <div id="lc_21" className={this.state.active_location !== 21 ? 'location search_button' : 'location search_button btn_active'} onClick={() => this.active_location(21)}>부산</div>
                                    <div id="lc_22" className={this.state.active_location !== 22 ? 'location search_button' : 'location search_button btn_active'} onClick={() => this.active_location(22)}>대구</div>
                                    <div id="lc_23" className={this.state.active_location !== 23 ? 'location search_button' : 'location search_button btn_active'} onClick={() => this.active_location(23)}>인천</div>
                                    <div id="lc_24" className={this.state.active_location !== 24 ? 'location search_button' : 'location search_button btn_active'} onClick={() => this.active_location(24)}>광주</div>
                                    <div id="lc_25" className={this.state.active_location !== 25 ? 'location search_button' : 'location search_button btn_active'} onClick={() => this.active_location(25)}>대전</div>
                                    <div id="lc_26" className={this.state.active_location !== 26 ? 'location search_button' : 'location search_button btn_active'} onClick={() => this.active_location(26)}>울산</div>
                                    <div id="lc_45" className={this.state.active_location !== 45 ? 'location search_button' : 'location search_button btn_active'} onClick={() => this.active_location(45)}>세종</div>
                                    <div id="lc_31" className={this.state.active_location !== 31 ? 'location search_button' : 'location search_button btn_active'} onClick={() => this.active_location(31)}>경기</div>
                                    <div id="lc_32" className={this.state.active_location !== 32 ? 'location search_button' : 'location search_button btn_active'} onClick={() => this.active_location(32)}>강원</div>
                                    <div id="lc_33" className={this.state.active_location !== 33 ? 'location search_button' : 'location search_button btn_active'} onClick={() => this.active_location(33)}>충북</div>
                                    <div id="lc_34" className={this.state.active_location !== 34 ? 'location search_button' : 'location search_button btn_active'} onClick={() => this.active_location(34)}>충남</div>
                                    <div id="lc_35" className={this.state.active_location !== 35 ? 'location search_button' : 'location search_button btn_active'} onClick={() => this.active_location(35)}>전북</div>
                                    <div id="lc_36" className={this.state.active_location !== 36 ? 'location search_button' : 'location search_button btn_active'} onClick={() => this.active_location(36)}>전남</div>
                                    <div id="lc_37" className={this.state.active_location !== 37 ? 'location search_button' : 'location search_button btn_active'} onClick={() => this.active_location(37)}>경북</div>
                                    <div id="lc_38" className={this.state.active_location !== 38 ? 'location search_button' : 'location search_button btn_active'} onClick={() => this.active_location(38)}>경남</div>
                                    <div id="lc_50" className={this.state.active_location !== 50 ? 'location search_button' : 'location search_button btn_active'} onClick={() => this.active_location(50)}>제주</div>
                                    <div id="lc_zz" className={this.state.active_location !== 'zz'? 'location search_button' : 'location search_button btn_active'} onClick={() => this.active_location('zz')}>전국(위치 미상)</div>
                                </div>
                            </div>
                        </div>

                        <button className="search_button" onClick={this.getList}>검색</button>

                        <div id="comments">
                            <ul>
                                {list}
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