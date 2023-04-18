export const UPDATE_EMAIL = 'UPDATE_EMAIL';

const initialState = {
  email: '',
  score: 0,
  address: '',
  id: '',
};

export default function infoReducer (state = initialState, action) {
  switch (action.type) {
    case UPDATE_EMAIL:
      return {
        ...state,
        email: action.payload.email,
      };

    default:
      return state;
  }
};
