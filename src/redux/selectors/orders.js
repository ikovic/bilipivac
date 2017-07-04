import { createSelector } from "reselect";

const getOrders = state => state.orders;

export const getOrdersGroupedByChicken = createSelector(getOrders, orders => {
  const groupedOrders = {};

  Object.keys(orders).forEach(uid => {
    const order = orders[uid];

    if (!groupedOrders[order.chicken]) {
      groupedOrders[order.chicken] = [];
    }

    groupedOrders[order.chicken].push(order);
  });

  return groupedOrders;
});
