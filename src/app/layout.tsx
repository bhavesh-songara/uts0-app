"use client";

import { Provider } from "react-redux";
import { store } from "@/redux/store";

import "./globals.css";

import { Toaster } from "@/components/ui/toaster";
import { useAuth } from "@/components/auth/hooks/useAuth";
import { Skeleton } from "@/components/ui/skeleton";
import { AuthProvider } from "@/components/auth/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <AuthProvider>
              <main>{children}</main>
            </AuthProvider>

            <Toaster />
          </Provider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
