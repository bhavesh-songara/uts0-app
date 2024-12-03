import config from "@/config";
import { FieldStatusEnum } from "@/constants/Field";
import queryFetcher from "@/lib/queryFetcher";

export class FieldService {
  static BASE = `${config.serviceUrl}/api/field`;
}
