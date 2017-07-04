import React from "react";
import { connect } from "react-redux";
import { getOrdersGroupedByChicken } from "../../redux/selectors/orders";

const renderOrders = orders =>
  Object.keys(orders).map(chicken =>
    <li key={chicken}>
      {chicken} {orders[chicken].length}
    </li>
  );

const Call = ({ orders }) =>
  <ul>
    {renderOrders(orders)}
  </ul>;

const mapStateToProps = state => ({
  orders: getOrdersGroupedByChicken(state)
});

export default connect(mapStateToProps)(Call);
