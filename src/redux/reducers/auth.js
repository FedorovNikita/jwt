const initialState = {
  isAuth: false,
  isLoading: false,
};

const constants = {
  CHANGE_IS_AUTH: "CHANGE_IS_AUTH",
  CHANGE_IS_LOADING: "CHANGE_IS_LOADING",
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case constants.CHANGE_IS_AUTH:
      return {...state, isAuth: action.payload}
    case constants.CHANGE_IS_LOADING:
      return {...state, isLoading: action.payload}
    default:
      return state;
  }
};

export const changeAuthAction = (payload) => ({
  type: constants.CHANGE_IS_AUTH,
  payload,
});

export const changeLoadingAction = (payload) => ({
  type: constants.CHANGE_IS_LOADING,
  payload,
});

export default auth;
