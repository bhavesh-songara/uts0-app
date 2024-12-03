import {
  Type,
  Hash,
  Calendar,
  ToggleLeft,
  List,
  CheckSquare,
  FileText,
} from "lucide-react";

export enum PropertyTypeEnum {
  Text = "text",
  Number = "number",
  Date = "date",
  Boolean = "boolean",
  SingleSelect = "single_select",
  MultiSelect = "multi_select",
  File = "file",
}

export interface IProperty {
  _id: string;
  projectId: string;
  name: string;
  description?: string;
  type: PropertyTypeEnum;
  prompt?: string;
  inputPropertyIds?: Array<string>;
  tool: PropertyToolEnum;
  options?: Array<string>;
  userId: string;
  isDeleted?: boolean;
}

export const PROPERTY_TYPES = [
  {
    label: "Text",
    value: PropertyTypeEnum.Text,
    icon: Type,
  },
  {
    label: "Number",
    value: PropertyTypeEnum.Number,
    icon: Hash,
  },
  {
    label: "Date",
    value: PropertyTypeEnum.Date,
    icon: Calendar,
  },
  {
    label: "Boolean",
    value: PropertyTypeEnum.Boolean,
    icon: ToggleLeft,
  },
  {
    label: "Single Select",
    value: PropertyTypeEnum.SingleSelect,
    icon: List,
  },
  {
    label: "Multi Select",
    value: PropertyTypeEnum.MultiSelect,
    icon: CheckSquare,
  },
  {
    label: "File",
    value: PropertyTypeEnum.File,
    icon: FileText,
  },
];

export enum PropertyToolEnum {
  User = "user",
  Gemini15Pro = "gemini_1.5_pro",
  Gemini15Flash = "gemini_1.5_flash",
  Gpt4Omni = "gpt_4_omni",
  Gpt4OmniMini = "gpt_4_omni_mini",
  Gpt4Turbo = "gpt_4_turbo",
  Gpt35Turbo = "gpt_3.5_turbo",
  Claude35Sonnet = "claude_3.5_sonnet",
  Claude3Opus = "claude_3_opus",
  Claude3Haiku = "claude_3_haiku",
  Claude3Sonnet = "claude_3_sonnet",
}

export const PROPERTY_TOOLS = [
  {
    label: "User",
    value: PropertyToolEnum.User,
  },
  {
    label: "Gemini 1.5 Pro",
    value: PropertyToolEnum.Gemini15Pro,
  },
  {
    label: "Gemini 1.5 Flash",
    value: PropertyToolEnum.Gemini15Flash,
  },
  {
    label: "GPT-4 Omni",
    value: PropertyToolEnum.Gpt4Omni,
  },
  {
    label: "GPT-4 Omni Mini",
    value: PropertyToolEnum.Gpt4OmniMini,
  },
  {
    label: "GPT-4 Turbo",
    value: PropertyToolEnum.Gpt4Turbo,
  },
  {
    label: "GPT-3.5 Turbo",
    value: PropertyToolEnum.Gpt35Turbo,
  },
  {
    label: "Claude 3.5 Sonnet",
    value: PropertyToolEnum.Claude35Sonnet,
  },
  {
    label: "Claude 3 Opus",
    value: PropertyToolEnum.Claude3Opus,
  },
  {
    label: "Claude 3 Haiku",
    value: PropertyToolEnum.Claude3Haiku,
  },
  {
    label: "Claude 3 Sonnet",
    value: PropertyToolEnum.Claude3Sonnet,
  },
];
