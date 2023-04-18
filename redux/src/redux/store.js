import {createStore, combineReducers, applyMiddleware} from 'redux';
import GetUserNameReducer from './reducers/getUserNameReduce.js';
import GetUserReduce from './reducers/getUserReduce.js';
import InfoReduce from './reducers/infoReduce.js';
import thunk from 'redux-thunk';

const middleware = [thunk];

const rootReducer = combineReducers({
  userName: GetUserNameReducer,
  user: GetUserReduce,
  personalInfo: InfoReduce,
});

export const store = createStore(rootReducer, applyMiddleware(...middleware));
