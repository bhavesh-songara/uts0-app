import config from "@/config";
import queryFetcher from "@/lib/queryFetcher";
import { IEntity } from "@/constants/Entity";
import { IField } from "@/constants/Field";

interface IEntityWithFields extends IEntity {
  fields: IField[];
}

export class EntityService {
  static BASE = `${config.serviceUrl}/api/entity`;
  static GET = `${this.BASE}/:id`;
  static GET_LIST = `${this.BASE}/project/:projectId`;

  static async get(id: string): Promise<{ entity: IEntity }> {
    return await queryFetcher({
      url: this.GET.replace(":id", id),
    });
  }

  static async getList(
    projectId: string,
    payload: { page: number; size: number }
  ): Promise<{ data: IEntityWithFields[]; totalCount: number }> {
    return await queryFetcher({
      url: this.GET_LIST.replace(":projectId", projectId),
      params: payload,
    });
  }
}
