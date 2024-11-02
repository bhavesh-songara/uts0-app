import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IModalState {
  modalStack: Array<{
    modalType: string;
    modalProps?: Record<string, any>;
  }>;
}

const initialState: IModalState = {
  modalStack: [],
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showModal: (
      state,
      action: PayloadAction<{
        modalType: string;
        modalProps?: Record<string, any>;
      }>
    ) => {
      const modalExist = state.modalStack.find(
        (modal) => modal.modalType === action.payload.modalType
      );

      if (!modalExist) {
        state.modalStack.push({
          modalType: action.payload.modalType,
          modalProps: action.payload.modalProps,
        });
      }
    },
    hideModal: (state) => {
      state.modalStack.pop();
    },
    resetModalStack: (state) => {
      state.modalStack = [];
    },
    removeModal: (
      state,
      action: PayloadAction<{
        modalType: string;
      }>
    ) => {
      state.modalStack = state.modalStack.filter(
        (modal) => modal.modalType !== action.payload.modalType
      );
    },
  },
});

export const { showModal, hideModal, resetModalStack, removeModal } =
  modalSlice.actions;

const modalReducer = modalSlice.reducer;

export default modalReducer;
