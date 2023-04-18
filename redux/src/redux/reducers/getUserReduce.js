const initialState = {
  userName: 'unidentified username',
  password: 'unidentified password',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        userName: action.payload.userName,
        password: action.payload.password,
      };

    default:
      return state;
  }
};
