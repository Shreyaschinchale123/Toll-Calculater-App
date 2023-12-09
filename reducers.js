// src/redux/reducers.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  route: [], // Store the route coordinates
  tollResult: null, // Store toll calculation result
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setRoute: (state, action) => {
      state.route = action.payload;
    },
    setTollResult: (state, action) => {
      state.tollResult = action.payload;
    },
  },
});

export const { setRoute, setTollResult } = appSlice.actions;
export default appSlice.reducer;
