import { SaveIcon, TrashIcon } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useMemo } from "react";

import {
  IProperty,
  PROPERTY_TOOLS,
  PropertyToolEnum,
  PropertyTypeEnum,
} from "@/constants/Property";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Textarea } from "../ui/textarea";
import ReactSelect from "react-select";
import { usePropertyMutation } from "@/hooks/property/usePropertyMutation";

export const PropertyDropdown = (props: {
  projectId: string;
  property: IProperty;
  properties: IProperty[];
}) => {
  const { property, properties } = props;

  const { updatePropertyMutation, deletePropertyMutation } =
    usePropertyMutation();

  const form = useFormik({
    initialValues: {
      name: property?.name,
      tool: property?.tool,
      prompt: property?.prompt || "",
      inputPropertyIds: property?.inputPropertyIds || [],
      options: property?.options || [],
    },
    onSubmit: async (values) => {
      await updatePropertyMutation.mutateAsync({
        id: property._id,
        property: {
          name: values.name,
          tool: values.tool,
          prompt: values.prompt,
          inputPropertyIds: values.inputPropertyIds,
          options: values.options,
        },
      });
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Property name is required"),
      tool: Yup.string().required("Tool is required"),
      prompt: Yup.string(),
    }),
    enableReinitialize: true,
  });

  const handleDeleteProperty = async () => {
    await deletePropertyMutation.mutateAsync(property._id);
  };

  const toolOptions = useMemo(() => {
    if (property?.type === PropertyTypeEnum.File) {
      return PROPERTY_TOOLS.filter(
        (tool) => tool.value == PropertyToolEnum.User
      );
    } else {
      return PROPERTY_TOOLS;
    }
  }, [property]);

  const inputProperties = useMemo(() => {
    return properties.filter((prop) => prop._id != property?._id);
  }, [properties]);

  return (
    <DropdownMenu onOpenChange={(open) => !open && form.resetForm()}>
      <DropdownMenuTrigger>
        <div className="w-full">{property?.name}</div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-0">
        <div className="w-[400px]">
          <div className="m-2">
            <Input
              name="name"
              placeholder="Enter property name"
              value={form?.values?.name}
              onChange={form.handleChange}
            />
          </div>

          <Separator className="my-3" />

          <div className="mx-4">
            <div className="flex items-center justify-between">
              <p className="text-sm">Tool</p>
              <Select
                defaultValue={property?.tool}
                name="tool"
                onValueChange={(value) => {
                  form.setFieldValue("tool", value);
                }}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select tool" />
                </SelectTrigger>
                <SelectContent>
                  {toolOptions.map((tool, index) => {
                    return (
                      <SelectItem key={index} value={tool.value}>
                        {tool.label}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2 my-2">
              <div className="flex items-center justify-between">
                <p className="text-sm">Inputs</p>

                <ReactSelect
                  value={inputProperties
                    .filter((prop) =>
                      form.values.inputPropertyIds.includes(prop._id)
                    )
                    .map((prop) => ({
                      label: prop.name,
                      value: prop._id,
                    }))}
                  isMulti
                  name="inputPropertyIds"
                  options={inputProperties.map((prop) => ({
                    label: prop.name,
                    value: prop._id,
                  }))}
                  onChange={(selectedValues) => {
                    form.setFieldValue(
                      "inputPropertyIds",
                      selectedValues
                        ? selectedValues.map((value) => value.value)
                        : []
                    );
                  }}
                  className="w-[200px]"
                />
              </div>

              <Textarea
                name="prompt"
                placeholder="Enter prompt"
                value={form?.values?.prompt}
                onChange={form.handleChange}
              />
            </div>
          </div>

          <div className="m-2 flex items-center justify-end gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDeleteProperty}
              disabled={deletePropertyMutation.isPending}
            >
              <TrashIcon className="mr-2 h-4 w-4" />
              Delete Property
            </Button>
            <Button
              type="submit"
              onClick={() => form.handleSubmit()}
              size={"sm"}
              disabled={updatePropertyMutation.isPending}
            >
              <SaveIcon className="mr-2 h-4 w-4" />
              Save Property
            </Button>
          </div>

          <Separator className="mt-3" />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
