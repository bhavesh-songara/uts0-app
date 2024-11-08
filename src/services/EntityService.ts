import config from "@/config";
import fetcher from "@/lib/fetcher";

export class EntityService {
  static BASE = `${config.serviceUrl}/api/entity`;
  static ADD = this.BASE;
  static DELETE = `${this.BASE}/:id`;
  static GET = `${this.BASE}/:id`;
  static GET_LIST = `${this.BASE}/project/:projectId`;

  static async add(entity: { projectId: string }) {
    return await fetcher({
      url: this.ADD,
      method: "POST",
      data: entity,
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

  static async getList(
    projectId: string,
    payload: { page: number; limit: number }
  ) {
    return await fetcher({
      url: this.GET_LIST.replace(":projectId", projectId),
      params: payload,
    });
  }
}
