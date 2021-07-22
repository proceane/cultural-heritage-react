import React from 'react';
import '../../assets/css/layout.css';

class Footer extends React.Component {
    render() {
        return(
            <div className={"wrapper row5"}>
                <div id="copyright" className={"hoc clear"}> 
                    <p className={"fl_left"}>Copyright &copy; 2021 - All Rights Reserved - <a href="/">아름누리</a></p>
                    <p className={"fl_right"}>Template by <a target="_blank" rel="noreferrer" href="https://www.os-templates.com/" title="Free Website Templates">OS Templates</a></p>
                </div>
            </div>  
        )
    }
}

export default Footer;