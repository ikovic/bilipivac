const initialState = {};

export const LOAD_ORDERS = 'LOAD_ORDERS';

export default (state = initialState, action) => {
  switch (action.type) {

    case LOAD_ORDERS:
      return {
        ...state,
        ...action.orders
      };

    default:
      return state;
  }
};

export const load = orders => ({
  type: LOAD_ORDERS,
  orders
});
