"use client";

import { useAppSelector } from "@/redux/hooks";
import { NotAuthenticated } from "../auth/NotAuthenticated";

const withAuth = (Component: React.FunctionComponent) => {
  const ComponentWithAuth = (props: any) => {
    const { isAuthenticated } = useAppSelector((state) => state.auth);

    console.log({ isAuthenticated });

    if (!isAuthenticated) {
      return <NotAuthenticated />;
    }

    return <Component {...props} />;
  };

  return ComponentWithAuth;
};

export default withAuth;