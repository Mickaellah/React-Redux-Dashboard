// const redux = require('redux');
import React from 'react';
import {connect} from 'react-redux';
import TopNav from '../components/TopNav';
import {UpdateMessages} from '../reducers/messages';

export function Messages({messages}) {
    return <TopNav messages={messages} />
}

function mapStateToProps(state) {
    return {
        messages: state.messages
    }
}

const mapDispatchToProps = {
    UpdateMessages,
}

export default connect(mapStateToProps, {mapDispatchToProps}) (Messages);