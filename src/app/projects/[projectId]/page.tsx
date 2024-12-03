"use client";

import { AppSidebar } from "@/components/app-sidebar";
import { Empty } from "@/components/common/Empty";
import { PageSkelton } from "@/components/common/PageSkelton";
import withAuth from "@/components/hoc/withAuth";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { useProject } from "@/hooks/projects/useProject";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import NewPropertyDropdown from "@/components/property/NewPropertyDropdown";
import { PropertyDropdown } from "@/components/property/PropertyDropdown";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

function Page() {
  const {
    projectId,
    projectQuery,
    allPropertyQuery,
    entityListQuery,
    handleAddProperty,
    addPropertyMutation,
    handleAddEntity,
    handleDeleteEntity,
  } = useProject();

  const loading = projectQuery?.isLoading || entityListQuery?.isLoading;

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                  <BreadcrumbItem>
                    {projectQuery?.isLoading ? (
                      <BreadcrumbPage>Fetching Project</BreadcrumbPage>
                    ) : (
                      <BreadcrumbPage>
                        {projectQuery?.data?.project?.name}
                      </BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>

          <PageSkelton visible={loading} />

          <Empty
            title="Project not found"
            description="The project you are looking for does not exist or has been deleted."
            visible={!loading && !projectQuery?.data?.project}
          />

          {Boolean(projectQuery?.data?.project) && (
            <div className="px-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    {allPropertyQuery?.data?.properties?.map((property) => {
                      return (
                        <TableHead key={property?._id}>
                          <PropertyDropdown
                            projectId={projectId}
                            property={property}
                            properties={allPropertyQuery?.data?.properties}
                          />
                        </TableHead>
                      );
                    })}

                    <TableHead>
                      <NewPropertyDropdown projectId={projectId} />
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {entityListQuery?.data?.data?.map((entity) => {
                    return (
                      <TableRow key={entity?._id} className="h-12">
                        {allPropertyQuery?.data?.properties?.map((property) => {
                          return (
                            <TableCell key={property?._id}>
                              {
                                entity?.fields?.find(
                                  (field) => field?.propertyId === property?._id
                                )?.manualValue
                              }
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
              <div>
                <Button
                  variant={"ghost"}
                  className="mt-2"
                  onClick={() => handleAddEntity()}
                >
                  <Plus />
                </Button>
              </div>
            </div>
          )}
        </SidebarInset>
      </SidebarInset>
    </SidebarProvider>
  );
}

export default withAuth(Page);
