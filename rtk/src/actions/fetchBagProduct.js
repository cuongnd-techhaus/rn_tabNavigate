import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchBag = createAsyncThunk('fetchBag', async () => {
  const res = await fetch('https://fakestoreapi.com/products/1');
  const data = await res.json();
  return data;
});
