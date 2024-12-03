import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "../use-toast";
import queryFetcher from "@/lib/queryFetcher";
import config from "@/config";
import { onMutationError } from "@/lib/onMutationError";

const BASE_URL = `${config.serviceUrl}/api/field`;

export const useFieldMutation = () => {
  const queryClient = useQueryClient();

  const updateFieldMutation = useMutation({
    mutationFn: (field: {
      entityId: string;
      propertyId: string;
      value?: any;
      file?: File;
    }) => {
      const formData = new FormData();
      formData.append("entityId", field.entityId);
      formData.append("propertyId", field.propertyId);
      if (field.value) {
        formData.append("value", field.value);
      }
      if (field.file) {
        formData.append("file", field.file);
      }
      return queryFetcher({
        url: BASE_URL,
        method: "PUT",
        data: formData,
      });
    },
    onSuccess: () => {
      toast({
        title: "Field updated",
        description: "Your field has been updated successfully",
      });

      queryClient.invalidateQueries({
        queryKey: [BASE_URL],
      });
    },
    onError: onMutationError,
  });

  return {
    updateFieldMutation,
  };
};
