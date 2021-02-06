// const redux = require('redux');
import React from 'react';
import {connect} from 'react-redux';
import {UpdateTasks} from '../reducers/tasks';
import TasksPanel from '../components/TasksPanel';

export function TaskPanel(props) {
    return <TasksPanel tasks={props.tasks} />
}

function mapStateToProps(state) {
    return {
        tasks: state.tasks
    }
}

const mapDispatchToProps = {
    UpdateTasks,
}

export default connect(mapStateToProps, {mapDispatchToProps}) (TaskPanel);