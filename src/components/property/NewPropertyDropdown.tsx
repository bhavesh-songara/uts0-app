import { Plus } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PROPERTY_TYPES, PropertyTypeEnum } from "@/constants/Property";
import { usePropertyMutation } from "@/hooks/property/usePropertyMutation";

const NewPropertyDropdown = (props: { projectId: string }) => {
  const { projectId } = props;

  const { addPropertyMutation } = usePropertyMutation();

  const handleAddProperty = (type: PropertyTypeEnum) => {
    addPropertyMutation.mutate({
      projectId,
      type,
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Plus size={16} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {PROPERTY_TYPES.map((propertyType, index) => {
          const Icon = propertyType.icon;

          return (
            <DropdownMenuItem
              key={index}
              onClick={() => {
                handleAddProperty(propertyType.value);
              }}
              disabled={addPropertyMutation.isPending}
            >
              <Icon size={16} className="mr-2" />
              {propertyType.label}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NewPropertyDropdown;
