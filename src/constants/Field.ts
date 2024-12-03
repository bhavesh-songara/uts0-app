export enum FieldStatusEnum {
  Pending = "pending",
  Processing = "processing",
  Completed = "completed",
}

export interface IField {
  _id: string;
  entityId: string;
  propertyId: string;
  manualValue?: any;
  toolValue?: any;
  status: FieldStatusEnum;
  isDeleted?: boolean;
  userId: string;
}
