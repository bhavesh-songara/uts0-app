import {
  ConfirmActionDialog,
  IConfirmActionDialogProps,
} from "@/components/dialog/ConfirmActionDialog";

export enum DialogTypeEnum {
  ConfirmAction = "ConfirmAction",
}

export type IDialogProps = IConfirmActionDialogProps;

export const DIALOG_COMPONENT_MAP = {
  [DialogTypeEnum.ConfirmAction]: ConfirmActionDialog,
};
