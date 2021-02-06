// const redux = require('redux');
import React from 'react';
import {connect} from 'react-redux';
import Tasks from '../components/Tasks';
import {AddNewTasks} from '../reducers/newTasks';

export function NewTasks(props) {
    return <Tasks newTasks={props.newTasks} />
}

function mapStateToProps(state) {
    return {
        newTasks: state.newTasks
    }
}

const mapDispatchToProps = {
    AddNewTasks,
}

export default connect(mapStateToProps, {mapDispatchToProps}) (NewTasks);