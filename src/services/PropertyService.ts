import config from "@/config";
import { IProperty } from "@/constants/Property";
import queryFetcher from "@/lib/queryFetcher";

export class PropertyService {
  static BASE = `${config.serviceUrl}/api/property`;
  static GET = `${this.BASE}/:id`;
  static GET_ALL = `${this.BASE}/all/:projectId`;

  static async get(id: string): Promise<{ property: IProperty }> {
    return await queryFetcher({
      url: this.GET.replace(":id", id),
    });
  }

  static async getAll(projectId: string): Promise<{ properties: IProperty[] }> {
    return await queryFetcher({
      url: this.GET_ALL.replace(":projectId", projectId),
    });
  }
}
