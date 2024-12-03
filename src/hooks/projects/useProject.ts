import { EntityService } from "@/services/EntityService";
import { ProjectService } from "@/services/ProjectService";
import { PropertyService } from "@/services/PropertyService";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { usePropertyMutation } from "../property/usePropertyMutation";
import { PropertyTypeEnum } from "@/constants/Property";
import { useEntityMutation } from "../entity/useEntityMutation";

export const useProject = () => {
  const params = useParams();

  const projectId = params.projectId as string;

  const { addPropertyMutation } = usePropertyMutation();
  const { addEntityMutation, deleteEntityMutation } = useEntityMutation();

  const projectQuery = useQuery({
    queryKey: [ProjectService.GET],
    queryFn: () => ProjectService.get(projectId),
  });

  const allPropertyQuery = useQuery({
    queryKey: [PropertyService.GET_ALL],
    queryFn: () => PropertyService.getAll(projectId),
  });

  const entityListQuery = useQuery({
    queryKey: [EntityService.GET_LIST],
    queryFn: () =>
      EntityService.getList(projectId, {
        page: 1,
        size: 20,
      }),
  });

  const handleAddProperty = async (type: PropertyTypeEnum) => {
    addPropertyMutation.mutate({
      projectId,
      type,
    });
  };

  const handleAddEntity = async () => {
    addEntityMutation.mutate({
      projectId,
    });
  };

  const handleDeleteEntity = async (id: string) => {
    deleteEntityMutation.mutate(id);
  };

  return {
    projectQuery,
    allPropertyQuery,
    entityListQuery,
    addPropertyMutation,
    handleAddProperty,
    projectId,
    handleAddEntity,
    handleDeleteEntity,
  };
};
