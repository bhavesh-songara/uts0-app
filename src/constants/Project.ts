export interface IProject {
  _id: string;
  name: string;
  description?: string;
  userId: string;
  isDeleted?: boolean;
}
