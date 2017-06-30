import React from 'react';
import { connect } from 'react-redux';

const renderOrders = orders => Object.keys(orders).map(user => (
  <li>{user}</li>
));

const Order = ({ orders, user }) => (
  <div>
    <h2>Orders</h2>
    <ul>
      {renderOrders(orders)}
    </ul>
  </div>
);

const mapStateToProps = state => ({
  orders: state.orders
});

export default connect(mapStateToProps)(Order);