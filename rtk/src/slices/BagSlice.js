import {fetchBag} from './../actions/fetchBagProduct';
import {createSlice} from '@reduxjs/toolkit';

const BagSlice = createSlice({
  name: 'Fetch Bag',
  initialState: {
    data: null,
    isLoader: false,
    isError: false,
  },

  extraReducers: builder => {
    builder.addCase(fetchBag.pending, (state, action) => {
      state.isLoader = true;
    });
    builder.addCase(fetchBag.fulfilled, (state, action) => {
      state.isLoader = false;
      state.data = action.payload;
    });
    builder.addCase(fetchBag.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default BagSlice.reducer;
