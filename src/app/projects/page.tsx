"use client";

import { AppSidebar } from "@/components/app-sidebar";
import withAuth from "@/components/hoc/withAuth";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/button";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useProjects } from "@/hooks/projects/useProjects";
import { Plus } from "lucide-react";
import { Empty } from "@/components/common/Empty";
import { Separator } from "@/components/ui/separator";
import { PageSkelton } from "@/components/common/PageSkelton";

function Page() {
  const { allProjectQuery, addProjectMutation, deleteProjectMutation } =
    useProjects();

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center justify-between w-full gap-2 px-4">
            <section className="flex gap-2 items-center">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <h1 className="text-lg font-semibold">Projects</h1>
            </section>
            <Button
              onClick={() => {
                addProjectMutation.mutate();
              }}
              disabled={addProjectMutation.isPending}
            >
              <Plus size={24} /> Add Project
            </Button>
          </div>
        </header>

        <PageSkelton visible={allProjectQuery?.isLoading} />

        <Empty
          title="Welcome to Your Creative Space!"
          description="It looks a bit empty here. Kickstart your journey by clicking 'Add Project' and bring your ideas to life!"
          visible={
            !allProjectQuery?.isLoading &&
            !allProjectQuery?.data?.projects?.length
          }
        />

        {Boolean(allProjectQuery?.data?.projects?.length) && (
          <div className="grid grid-cols-3 gap-4 px-4">
            {allProjectQuery?.data?.projects?.map((project) => {
              return (
                <ProjectCard
                  key={project?._id}
                  project={project}
                  handleDeleteProject={deleteProjectMutation.mutateAsync}
                  deleteProjectLoading={deleteProjectMutation.isPending}
                />
              );
            })}
          </div>
        )}
      </SidebarInset>
    </SidebarProvider>
  );
}

export default withAuth(Page);
