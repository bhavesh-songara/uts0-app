import { ProjectService } from "@/services/ProjectService";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "../use-toast";

export const useProjects = () => {
  const queryClient = useQueryClient();

  const allProjectQuery = useQuery({
    queryKey: [ProjectService.GET_ALL],
    queryFn: () => ProjectService.getAll(),
  });

  const addProjectMutation = useMutation({
    mutationFn: () => ProjectService.add({ name: "Untitled" }),
    onSuccess: () => {
      toast({
        title: "Project added",
        description: "Your project has been added successfully",
      });

      queryClient.invalidateQueries({
        queryKey: [ProjectService.GET_ALL],
      });
    },
    onError: (error) => {
      toast({
        title: "Uh oh! Something went wrong",
        description: error.message || "There was a problem with your request",
      });
    },
  });

  const deleteProjectMutation = useMutation({
    mutationFn: ProjectService.delete,
    onSuccess: () => {
      toast({
        title: "Project deleted",
        description: "Your project has been deleted successfully",
      });

      queryClient.invalidateQueries({
        queryKey: [ProjectService.GET_ALL],
      });
    },
    onError: (error) => {
      toast({
        title: "Uh oh! Something went wrong",
        description: error.message || "There was a problem with your request",
      });
    },
  });

  return {
    allProjectQuery,
    addProjectMutation,
    deleteProjectMutation,
  };
};
