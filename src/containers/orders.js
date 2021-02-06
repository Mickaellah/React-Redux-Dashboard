// const redux = require('redux');
import React from 'react';
import {connect} from 'react-redux';
import Orders from '../components/Orders';
import {AddNewOrders} from '../reducers/orders';

export function Order(props) {
    return <Orders orders={props.newOrders}/>
}

function mapStateToProps(state) {
    return {
        newOrders: state.newOrders
    }
}

const mapDispatchToProps = {
    AddNewOrders,
}

export default connect(mapStateToProps, {mapDispatchToProps}) (Order);