"use client";

import { AuthService } from "@/services/AuthService";
import { toast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { login, logout } from "@/redux/auth";

export const useAuth = (props?: { initializeAuth?: boolean }) => {
  const { initializeAuth } = props || {};

  const [loading, setLoading] = useState(initializeAuth ? true : false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (initializeAuth) {
      handleInitializeAuth();
    }
  }, [initializeAuth]);

  const handleInitializeAuth = async () => {
    const { data, error } = await AuthService.me();

    if (data) {
      dispatch(login(data));
    }

    setLoading(false);
  };

  const handleLogout = async () => {
    const { data, error } = await AuthService.logout();

    if (error) {
      toast({
        title: `Uh oh! Something went wrong.`,
        description: `There was a problem with your request.`,
      });
    } else {
      toast({
        title: `Logout successful`,
        description: `You have been successfully logged out.`,
      });

      dispatch(logout());
    }
  };

  return { handleLogout, loginUrl: AuthService.LOGIN, loading };
};
