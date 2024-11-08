import config from "@/config";
import { PropertyToolEnum, PropertyTypeEnum } from "@/constants/Property";
import fetcher from "@/lib/fetcher";

export class PropertyService {
  static BASE = `${config.serviceUrl}/api/property`;
  static ADD = this.BASE;
  static UPDATE = `${this.BASE}/:id`;
  static DELETE = `${this.BASE}/:id`;
  static GET = `${this.BASE}/:id`;
  static GET_ALL = `${this.BASE}/all/:projectId`;

  static async add(property: {
    projectId: string;
    name: string;
    description?: string;
    type: PropertyTypeEnum;
    prompt?: string;
    tool: PropertyToolEnum;
    options?: string[];
  }) {
    return await fetcher({
      url: this.ADD,
      method: "POST",
      data: property,
    });
  }

  static async update(
    id: string,
    property: {
      name: string;
      description?: string;
      prompt?: string;
      tool: PropertyToolEnum;
      options?: string[];
    }
  ) {
    return await fetcher({
      url: this.UPDATE.replace(":id", id),
      method: "PUT",
      data: property,
    });
  }

  static async delete(id: string) {
    return await fetcher({
      url: this.DELETE.replace(":id", id),
      method: "DELETE",
    });
  }

  static async get(id: string) {
    return await fetcher({
      url: this.GET.replace(":id", id),
    });
  }

  static async getAll(projectId: string) {
    return await fetcher({
      url: this.GET_ALL.replace(":projectId", projectId),
    });
  }
}
