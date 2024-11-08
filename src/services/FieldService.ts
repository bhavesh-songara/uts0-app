import config from "@/config";
import fetcher from "@/lib/fetcher";

export class FieldService {
  static BASE = `${config.serviceUrl}/api/field`;
  static UPDATE = `${this.BASE}`;

  static async update(field: {
    entityId: string;
    propertyId: string;
    value?: any;
    file?: File;
  }) {
    const formData = new FormData();
    formData.append("entityId", field.entityId);
    formData.append("propertyId", field.propertyId);
    if (field.value) {
      formData.append("value", field.value);
    }
    if (field.file) {
      formData.append("file", field.file);
    }
    return await fetcher({
      url: this.UPDATE,
      method: "PUT",
      data: formData,
    });
  }
}
