import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import type { RootState } from "../store";
import { clothes } from "../../types/types";

interface Outfit {
  clothesData: clothes[];
  load: boolean;
}

const initialState: Outfit = {
  clothesData: [],
  load: false,
};

export const getClothes = createAsyncThunk(
  "getShopItems",
  async function (_param, { rejectWithValue }) {
    try {
      const response = await axios.get("http://localhost:3000/clothes");
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

const allOutfitSlice = createSlice({
  name: "allOutfitSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getClothes.pending, (state) => {
        state.load = true;
      })
      .addCase(getClothes.fulfilled, (state, action) => {
        state.clothesData = action.payload;
        state.load = false;
      })
      .addCase(getClothes.rejected, (state, action) => {
        alert("Something went wrong: " + action.error.message);
        state.load = false;
      });
  },
});

export const selectClothesData = (state: RootState) => state.allOutfitSlice.clothesData;
export default allOutfitSlice.reducer;
