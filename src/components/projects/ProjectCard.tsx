"use client";

import { MoreHorizontal, Trash } from "lucide-react";

import { IProject } from "@/services/ProjectService";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAppDispatch } from "@/redux/hooks";
import { showDialog } from "@/redux/dialog";
import { DialogTypeEnum } from "@/constants/Dialog";
import { useRouter } from "next/navigation";

export const ProjectCard = (props: {
  project: IProject;
  handleDeleteProject: (id: string) => Promise<void>;
  deleteProjectLoading: boolean;
}) => {
  const router = useRouter();

  const { project, handleDeleteProject, deleteProjectLoading } = props;

  const dispatch = useAppDispatch();

  const handleConfirmDelete = () => {
    dispatch(
      showDialog({
        dialogType: DialogTypeEnum.ConfirmAction,
        dialogProps: {
          title: "Delete Project",
          description:
            "Are you sure you want to delete this project? All associated entities and fields will be permanently deleted.",
          confirmText: "Delete",
          onConfirm: () => handleDeleteProject(project._id as string),
          confirmLoading: deleteProjectLoading,
        },
      })
    );
  };

  return (
    <Card>
      <CardHeader
        className="flex flex-row items-center justify-between space-y-0 pb-2 cursor-pointer"
        onClick={() => {
          router.push(`/projects/${project._id}`);
        }}
      >
        <div>
          <CardTitle className="text-sm font-medium">{project.name}</CardTitle>
          {project.description && (
            <CardDescription className="text-xs text-muted-foreground">
              {project.description}
            </CardDescription>
          )}
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={(e) => {
                e.stopPropagation();
                handleConfirmDelete();
              }}
            >
              <Trash className="mr-2 h-4 w-4" />
              <span>Delete</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>{/* Add any additional project details here */}</CardContent>
    </Card>
  );
};
