import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "../use-toast";
import queryFetcher from "@/lib/queryFetcher";
import config from "@/config";
import { onMutationError } from "@/lib/onMutationError";

const BASE_URL = `${config.serviceUrl}/api/entity`;

export const useEntityMutation = () => {
  const queryClient = useQueryClient();

  const addEntityMutation = useMutation({
    mutationFn: (entity: { projectId: string }) =>
      queryFetcher({
        url: BASE_URL,
        method: "POST",
        data: entity,
      }),
    onSuccess: () => {
      toast({
        title: "Entity added",
        description: "Your entity has been added successfully",
      });

      queryClient.invalidateQueries({
        queryKey: [`${BASE_URL}/project/:projectId`],
      });
    },
    onError: onMutationError,
  });

  const deleteEntityMutation = useMutation({
    mutationFn: (id: string) =>
      queryFetcher({
        url: `${BASE_URL}/${id}`,
        method: "DELETE",
      }),
    onSuccess: () => {
      toast({
        title: "Entity deleted",
        description: "Your entity has been deleted successfully",
      });

      queryClient.invalidateQueries({
        queryKey: [`${BASE_URL}/project/:projectId`],
      });
    },
    onError: onMutationError,
  });

  return {
    addEntityMutation,
    deleteEntityMutation,
  };
};
