import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {

}

function mapStateToProps(state) {
    return {
        init : state.runtime.initialNow,
    }
}

export default connect(mapStateToProps)(Header);