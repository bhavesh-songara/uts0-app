import { DialogTypeEnum, IDialogProps } from "@/constants/Dialog";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IDialogState {
  dialogStack: Array<{
    dialogType: DialogTypeEnum;
    dialogProps?: IDialogProps;
  }>;
}

const initialState: IDialogState = {
  dialogStack: [],
};

export const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    showDialog: (
      state,
      action: PayloadAction<{
        dialogType: DialogTypeEnum;
        dialogProps?: IDialogProps;
      }>
    ) => {
      const dialogExist = state.dialogStack.find(
        (dialog) => dialog.dialogType === action.payload.dialogType
      );

      if (!dialogExist) {
        state.dialogStack.push({
          dialogType: action.payload.dialogType,
          dialogProps: action.payload.dialogProps,
        });
      }
    },
    hideDialog: (state) => {
      state.dialogStack.pop();
    },
    resetdialogStack: (state) => {
      state.dialogStack = [];
    },
    removeDialog: (
      state,
      action: PayloadAction<{
        dialogType: DialogTypeEnum;
      }>
    ) => {
      state.dialogStack = state.dialogStack.filter(
        (dialog) => dialog.dialogType !== action.payload.dialogType
      );
    },
  },
});

export const { showDialog, hideDialog, resetdialogStack, removeDialog } =
  dialogSlice.actions;

const dialogReducer = dialogSlice.reducer;

export default dialogReducer;
