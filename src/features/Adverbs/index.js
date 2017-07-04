import React from "react";
import { connect } from "react-redux";
import { getOrdersGroupedByChicken } from "../../redux/selectors/orders";

const ShowAdverbsButton = ({orders, chicken, finishOrder}) =>
  <span>
    {chicken}
  </span>;

const renderButtons = orders =>
  Object.keys(orders).map(chicken =>
    <ShowAdverbsButton
      key={chicken}
      orders={orders[chicken]}
      chicken={chicken}
    />
  );

const Adverbs = ({ orders }) =>
  <div>
    {renderButtons(orders)}
  </div>;

const mapStateToProps = state => ({
  orders: getOrdersGroupedByChicken(state)
});

export default connect(mapStateToProps)(Adverbs);
