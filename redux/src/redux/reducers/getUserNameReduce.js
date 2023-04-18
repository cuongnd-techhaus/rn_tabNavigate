const initialState = {
  userName: 'unidentified username',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_NAME':
      return {
        ...state,
        userName: action.payload.userName,
      };

    default:
      return state;
  }
};
