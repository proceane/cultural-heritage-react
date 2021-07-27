import React from 'react';

class ErrorPage extends React.Component {
    render() {
        return(
            <div class="bgded overlay">
                <figure class="hoc container clear imgroup"> 
                    <figcaption class="sectiontitle">
                        <p class="nospace font-xs"></p>
                        <p class="heading underline font-x2">에러</p>
                    </figcaption>
                    <h3 class="sectiontitle">해당 페이지가 존재하지 않습니다.</h3>
                </figure>
            </div>
        )
    }
}

export default ErrorPage;