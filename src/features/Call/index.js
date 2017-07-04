import React from "react";
import { connect } from "react-redux";

const groupOrdersByChicken = orders => {
  const groupedOrders = {};

  Object.keys(orders).forEach(uid => {
    const order = orders[uid];

    if (groupedOrders[order.chicken]) {
      groupedOrders[order.chicken]++;
    } else {
      groupedOrders[order.chicken] = 1;
    }
  });

  return groupedOrders;
};

const renderOrders = orders => {
  const groupedOrders = groupOrdersByChicken(orders);

  return Object.keys(groupedOrders).map(chicken =>
    <li key={chicken}>
      {chicken} {groupedOrders[chicken]}
    </li>
  );
};

const Call = ({ orders }) =>
  <ul>
    {renderOrders(orders)}
  </ul>;

const mapStateToProps = state => ({
  orders: state.orders
});

export default connect(mapStateToProps)(Call);
