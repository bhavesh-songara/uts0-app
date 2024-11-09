import { ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AuthService } from "@/services/AuthService";

export const NotAuthenticated = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
      <Card className="w-[350px] shadow-lg transform transition-all hover:scale-105">
        <CardHeader className="text-center space-y-1">
          <CardTitle className="text-2xl font-bold">Access Denied</CardTitle>
          <CardDescription>
            Authentication required to view this page
          </CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center p-6">
          <div className="relative">
            <ShieldAlert className="w-20 h-20 text-yellow-500" />
            <span className="absolute top-0 right-0 h-3 w-3 rounded-full bg-red-500 animate-ping" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <a href={AuthService.LOGIN}>
            <Button className="w-full" variant="default">
              Log In
            </Button>
          </a>{" "}
          <a href={AuthService.LOGIN}>
            <Button className="w-full" variant="outline">
              Sign Up
            </Button>
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};
