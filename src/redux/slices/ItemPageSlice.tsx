import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { RootState } from "../store";
import { clothes } from "../../types/types";

interface Item {
    itemData: clothes[];
    load: boolean;
}

const initialState: Item = {
  itemData: [],
  load: false,
};

export const getItem = createAsyncThunk(
  "getShopItem",
  async function (id: number, { rejectWithValue }) {
    try {
      const response = await axios.get(`http://localhost:3000/clothes/${id}`);
      const data = response.data;
      console.log('data', data)
      return data;
    } catch (error) {
      console.error(error);
      alert("Произошла ошибка: " + (error as Error).message);
      return rejectWithValue((error as Error).message);
    }
  }
);

const itemSlice = createSlice({
  name: "itemSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getItem.pending, (state) => {
        state.load = true;
      })
      .addCase(getItem.fulfilled, (state, action) => {
        state.itemData = action.payload;
        state.load = false;
      })
      .addCase(getItem.rejected, (state, action) => {
        alert("Something went wrong: " + action.error.message);
        state.load = false;
      });
  },
});

export const selectItemData = (state: RootState) => state.itemSlice.itemData;
export default itemSlice.reducer;
