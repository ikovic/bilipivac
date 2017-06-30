const initialState = {
  user: null
};

export const LOG_IN = 'LOG_IN';

export default (state = initialState, action) => {
  switch (action.type) {

    case LOG_IN:
      return {
        ...state,
        user: action.user
      };

    default:
      return state;
  }
};

export const logIn = user => ({
  type: LOG_IN,
  user
});
