import {configureStore} from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
import BagReducer from './slices/BagSlice';
import ProductReducer from './slices/ProductSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    bag: BagReducer,
    products: ProductReducer,
  },
});
