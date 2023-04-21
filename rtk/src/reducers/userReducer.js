import {createReducer} from '@reduxjs/toolkit';
import {loginAction, updateUserAction} from './../actions/userAction';

const initialState = {
  username: 'undefined',
  firstname: 'undefined',
  city: 'no-city',
};

const userReducer = createReducer(initialState, builder => {
  builder.addCase(loginAction, (state, action) => {
    state.username = action.payload;
  });
  builder.addCase(updateUserAction, (state, action) => {
    state.firstname = action.payload.newFirstName;
    state.city = action.payload.newCity;
  });
  builder.addDefaultCase((state, action) => {
    state.username;
  });
});

export default userReducer;
