import { useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "../use-toast";
import { PropertyToolEnum, PropertyTypeEnum } from "@/constants/Property";
import { onMutationError } from "@/lib/onMutationError";
import queryFetcher from "@/lib/queryFetcher";
import config from "@/config";
import { PropertyService } from "@/services/PropertyService";

const BASE_URL = `${config.serviceUrl}/api/property`;

export const usePropertyMutation = () => {
  const queryClient = useQueryClient();

  const addPropertyMutation = useMutation({
    mutationFn: (property: { projectId: string; type: PropertyTypeEnum }) =>
      queryFetcher({
        url: BASE_URL,
        method: "POST",
        data: property,
      }),
    onSuccess: () => {
      toast({
        title: "Property added",
        description: "Your property has been added successfully",
      });

      queryClient.invalidateQueries({
        queryKey: [PropertyService.GET_ALL],
      });
    },
    onError: onMutationError,
  });

  const updatePropertyMutation = useMutation({
    mutationFn: ({
      id,
      property,
    }: {
      id: string;
      property: {
        name?: string;
        description?: string;
        inputPropertyIds?: Array<string>;
        prompt?: string;
        tool: PropertyToolEnum;
        options?: Array<string>;
      };
    }) =>
      queryFetcher({
        url: `${BASE_URL}/${id}`,
        method: "PUT",
        data: property,
      }),
    onSuccess: () => {
      toast({
        title: "Property updated",
        description: "Your property has been updated successfully",
      });

      queryClient.invalidateQueries({
        queryKey: [PropertyService.GET_ALL],
      });
    },
    onError: onMutationError,
  });

  const deletePropertyMutation = useMutation({
    mutationFn: (id: string) =>
      queryFetcher({
        url: `${BASE_URL}/${id}`,
        method: "DELETE",
      }),
    onSuccess: () => {
      toast({
        title: "Property deleted",
        description: "Your property has been deleted successfully",
      });

      queryClient.invalidateQueries({
        queryKey: [PropertyService.GET_ALL],
      });
    },
    onError: onMutationError,
  });

  return {
    addPropertyMutation,
    updatePropertyMutation,
    deletePropertyMutation,
  };
};
