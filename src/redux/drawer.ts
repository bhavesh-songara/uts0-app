import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IDrawerState {
  drawerStack: Array<{
    drawerType: string;
    drawerProps?: Record<string, any>;
  }>;
}

const initialState: IDrawerState = {
  drawerStack: [],
};

export const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    showDrawer: (
      state,
      action: PayloadAction<{
        drawerType: string;
        drawerProps?: Record<string, any>;
      }>
    ) => {
      const modalExist = state.drawerStack.find(
        (modal) => modal.drawerType === action.payload.drawerType
      );

      if (!modalExist) {
        state.drawerStack.push({
          drawerType: action.payload.drawerType,
          drawerProps: action.payload.drawerProps,
        });
      }
    },
    hideDrawer: (state) => {
      state.drawerStack.pop();
    },
    resetDrawerStack: (state) => {
      state.drawerStack = [];
    },
    removeDrawer: (
      state,
      action: PayloadAction<{
        drawerType: string;
      }>
    ) => {
      state.drawerStack = state.drawerStack.filter(
        (modal) => modal.drawerType !== action.payload.drawerType
      );
    },
  },
});

export const { showDrawer, hideDrawer, resetDrawerStack, removeDrawer } =
  drawerSlice.actions;

const drawerReducer = drawerSlice.reducer;

export default drawerReducer;
