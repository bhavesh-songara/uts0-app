import { Skeleton } from "../ui/skeleton";
import { useAuth } from "./hooks/useAuth";

export const AuthProvider = (props: React.PropsWithChildren) => {
  const { children } = props;

  const { loading } = useAuth({ initializeAuth: true });

  if (loading) {
    return <></>;
  }

  return <>{children}</>;
};
