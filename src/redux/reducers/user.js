/* eslint-disable semi */
const initialState = {
  data: [],
  isLoading: false,
  isError: false
};

const getUserReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'GET_DETAIL_USER_PENDING':
      return { ...state, isLoading: true };
    case 'GET_DETAIL_USER_FULFILLED':
      return { ...state, isLoading: false, data: action.payload.data.data };
    case 'GET_DETAIL_USER_REJECTED':
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default getUserReducer;
