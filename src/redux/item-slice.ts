import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemState } from "./item-state";
import { Item } from "../model/item";

const initialState: ItemState = {
  items: [],
};

export const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    setItems(state: ItemState, action: PayloadAction<Item[]>) {
      state.items = action.payload;
    },
  },
});

export const { setItems } = itemSlice.actions;
