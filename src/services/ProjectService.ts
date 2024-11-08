import config from "@/config";
import fetcher from "@/lib/fetcher";

export class ProjectService {
  static BASE = `${config.serviceUrl}/api/project`;
  static ADD = this.BASE;
  static UPDATE = `${this.BASE}/:id`;
  static DELETE = `${this.BASE}/:id`;
  static GET = `${this.BASE}/:id`;
  static GET_ALL = `${this.BASE}/all`;

  static async add(project: { name: string; description?: string }) {
    return await fetcher({
      url: this.ADD,
      method: "POST",
      data: project,
    });
  }

  static async update(
    id: string,
    project: { name: string; description?: string }
  ) {
    return await fetcher({
      url: this.UPDATE.replace(":id", id),
      method: "PUT",
      data: project,
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

  static async getAll() {
    return await fetcher({
      url: this.GET_ALL,
    });
  }
}
