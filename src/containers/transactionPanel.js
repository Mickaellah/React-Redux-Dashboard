// const redux = require('redux');
import React from 'react';
import {connect} from 'react-redux';
import TransactionsPanel from '../components/TransactionsPanel';
import {EditOrders} from '../reducers/orders';

export function TransactionPanel(props) {
    return <TransactionsPanel orders={props.orders} />
} 

function mapStateToProps(state) {
    return {
        orders: state.orders
    }
}

const mapDispatchToProps = {
    EditOrders,
}

export default connect(mapStateToProps, {mapDispatchToProps}) (TransactionPanel);