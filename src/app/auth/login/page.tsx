import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AuthService } from "@/services/AuthService";
import { FileText } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left side - Visual */}
      <div className="hidden lg:flex w-1/2 bg-gray-900 justify-center items-center">
        <div className="max-w-md text-white">
          <FileText className="h-12 w-12 mb-4" />
          <h1 className="text-4xl font-bold mb-6">Welcome to uts0</h1>
          <p className="text-xl">
            Transform your unstructured data into structured.
          </p>
        </div>
      </div>

      {/* Right side - Login UI */}
      <div className="w-full lg:w-1/2 flex justify-center items-center p-8">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">
              Sign in to uts0
            </CardTitle>
            <CardDescription className="text-center">
              Use your Google account to access uts0
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Link href={AuthService.GOOGLE_LOGIN}>
              <Button
                className="w-full bg-white text-gray-900 hover:bg-gray-100 border border-gray-300"
                variant="outline"
              >
                <svg
                  className="mr-2 h-4 w-4"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="google"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                >
                  <path
                    fill="currentColor"
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  ></path>
                </svg>
                Sign in with Google
              </Button>
            </Link>
            <div className="text-center text-sm text-gray-500">
              By signing in, you agree to our{" "}
              <Link href="#" className="underline hover:text-blue-600">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="underline hover:text-blue-600">
                Privacy Policy
              </Link>
              .
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
