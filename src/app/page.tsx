"use client";

import Link from "next/link";

import { ThemeButton } from "@/components/common/ThemeButton";
import { AppLogo } from "@/components/common/AppLogo";
import { useAuth } from "@/components/auth/hooks/useAuth";
import { useAppSelector } from "@/redux/hooks";
import { Button } from "@/components/ui/button";
import { AuthService } from "@/services/AuthService";

export default function Component() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <AppLogo />
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <ThemeButton />
          {isAuthenticated ? (
            <Button>
              <Link href={`/dashboard`}>Go to Dashboard</Link>
            </Button>
          ) : (
            <a href={AuthService.LOGIN}>
              <Button>Login</Button>
            </a>
          )}
        </nav>
      </header>
      <main className="flex-1 flex items-center justify-center">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none mb-6">
            Transforming Data Seamlessly
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-300 md:text-xl mb-8">
            uts0 helps you turn unstructured data into structured data. Powerful
            and easy to use.
          </p>
        </div>
      </main>
      <footer className="py-6 w-full text-center border-t border-gray-200 dark:border-gray-800">
        <p className="text-xs text-gray-600 dark:text-gray-400">
          © 2024 uts0. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
