import { ACTIONS } from './Actions';

const reducers = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case ACTIONS.NOTIFY:
      return {
        ...state,
        notify: payload
      };

    case ACTIONS.ADD_CART:
      return {
        ...state,
        cart: payload
      };

    case ACTIONS.ADD_ORDERS:
      return {
        ...state,
        orders: payload
      };

    default:
      return state;
  }
};

export default reducers;
