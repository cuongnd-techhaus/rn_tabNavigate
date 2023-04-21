import {createSlice} from '@reduxjs/toolkit';
import {fetchProducts} from './../actions/fetchProducts';

const ProductSlice = createSlice({
  name: 'Fetch Product',
  initialState: {
    data: null,
    isLoader: false,
    isError: false,
  },

  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.isLoader = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.data = action.payload;
      isLoader = false;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.isError = true;
    });
  },
});

export default ProductSlice.reducer;
