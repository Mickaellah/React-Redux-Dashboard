// const redux = require('redux');
import React from 'react';
import {connect} from 'react-redux';
import Tickets from '../components/Tickets';
import {AddTickets} from '../reducers/tickets';

export function AddTicket(props) {
    return <Tickets tickets={props.tickets} />
}

function mapStateToProps(state) {
    return {
        tickets: state.tickets
    }
}

const mapDispacthToProps = {
    AddTickets,
}

export default connect(mapStateToProps, {mapDispacthToProps}) (AddTicket);