import { createSlice } from "@reduxjs/toolkit";

interface state {
  currencyForHome: any[];
  topCoins: any[];
  topCoinHistory: any[];
}

const initialState: state = {
  currencyForHome: [],
  topCoins: [],
  topCoinHistory: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setCurrencyForHome(state, action) {
      state.currencyForHome = action.payload;
    },
    setTopCoins(state, action) {
      state.topCoins = action.payload;
    },
    setCoinHistory(state, action) {
      state.topCoinHistory = action.payload;
    },
  },
});

export const dataActions = dataSlice.actions;
export default dataSlice;
