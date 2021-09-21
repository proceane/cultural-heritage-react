import React from 'react';

class Main extends React.Component {
    render() {
        return(
            <div>
                <div className="wrapper row3">
                    <main className="hoc container clear"> 
                        <hr className="btmspace-80"></hr>
                        <section className="group">
                            <div className="">
                            <ul className="nospace group inspace-15">
                                <li className="one_third first btmspace-50">
                                <article>
                                    <h6 className="heading">16,000점 이상의 문화재</h6>
                                    <p className="nospace">평소에 알고있던 문화재부터 몰랐던 문화재까지 대한민국 역사의 산물을 어디에서나 자유롭게 볼 수 있습니다.</p>
                                </article>
                                </li>
                                <li className="one_third btmspace-50">
                                <article>
                                    <h6 className="heading">편리한 검색</h6>
                                    <p className="nospace">국보부터 이북5도 무형문화재까지 분류별 검색과 내가 사는 곳의 문화재는 어떤 것이 있는지 알 수 있는 지역별 검색을 지원합니다.</p>
                                </article>
                                </li>
                                <li className="one_third">
                                <article>
                                    <h6 className="heading">상세한 정보</h6>
                                    <p className="nospace">문화재의 분류, 이름 뿐 아니라 박물관에 온 듯한 상세한 설명, 많은 이미지, 문화재가 있는 위치도 알 수 있습니다.</p>
                                </article>
                                </li>
                            </ul>
                            </div>
                        </section>
                        <div className="clear"></div>
                    </main>
                </div>
                <div className="bgded overlay">
                    <figure className="hoc container clear imgroup"> 
                        <figcaption className="sectiontitle">
                            <p className="nospace font-xs"></p>
                            <p className="heading underline font-x2">국보</p>
                        </figcaption>
                        <ul className="nospace group">
                            <li className="one_third">
                                <figure>
                                    <a className="imgover" href="/detail/11/11/00010000"><img className="fix_image_348x261" src="http://www.cha.go.kr/unisearch/images/national_treasure/2685609.jpg" alt="봄 숭례문(2015)"></img></a>
                                    <figcaption><strong>국보 1호</strong> 서울 숭례문</figcaption>
                                </figure>
                            </li>
                            <li className="one_third">
                                <figure>
                                    <a className="imgover" href="/detail/11/11/00020000"><img className="fix_image_348x261" src="http://www.cha.go.kr/unisearch/images/national_treasure/1611450.jpg" alt="서울 원각사지 십층석탑 전경"></img></a>
                                    <figcaption><strong>국보 2호</strong> 서울 원각사지 십층석탑</figcaption>
                                </figure>
                                </li>
                            <li className="one_third">
                                <figure>
                                    <a className="imgover" href="/detail/11/11/00030000"><img className="fix_image_348x261" src="http://www.cha.go.kr/unisearch/images/national_treasure/1611462.jpg" alt="서울 북한산 신라 진흥왕 순수비"></img></a>
                                    <figcaption><strong>국보 3호</strong> 서울 북한산 신라 진흥왕 순수비</figcaption>
                                </figure>
                            </li>
                        </ul>
                    </figure>
                </div>
                <div className="wrapper row2">
                    <div className="hoc container clear"> 
                        <div className="sectiontitle">
                            <p className="heading underline font-x2">보물</p>
                        </div>
                        <ul className="nospace group team">
                            <li className="one_quarter first">
                            <figure><a className="imgover" href="/detail/11/12/00010000"><img className="fix_image_249x249" src="http://www.cha.go.kr/unisearch/images/treasure/1613143.jpg" alt="서울 흥인지문 정면"></img></a>
                                <figcaption><strong>보물 1호</strong> <em>서울 흥인지문</em></figcaption>
                            </figure>
                            </li>
                            <li className="one_quarter">
                            <figure><a className="imgover" href="/detail/11/12/00020000"><img className="fix_image_249x249" src="http://www.cha.go.kr/unisearch/images/treasure/1613150.jpg" alt="옛 보신각 동종"></img></a>
                                <figcaption><strong>보물 2호</strong> <em>옛 보신각 동종</em></figcaption>
                            </figure>
                            </li>
                            <li className="one_quarter">
                            <figure><a className="imgover" href="/detail/11/12/00030000"><img className="fix_image_249x249" src="http://www.cha.go.kr/unisearch/images/treasure/1613155.jpg" alt="서울 원각사지 대원각사비"></img></a>
                                <figcaption><strong>보물 3호</strong> <em>서울 원각사지 대원각사비</em></figcaption>
                            </figure>
                            </li>
                            <li className="one_quarter">
                            <figure><a className="imgover" href="/detail/31/12/00040000"><img className="fix_image_249x249" src="http://www.cha.go.kr/unisearch/images/treasure/1615580.jpg" alt="안양 중초사지 당간지주"></img></a>
                                <figcaption><strong>보물 4호</strong> <em>안양 중초사지 당간지주</em></figcaption>
                            </figure>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;