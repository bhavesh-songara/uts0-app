import { FileText } from "lucide-react";
import Link from "next/link";

export const AppLogo = () => {
  return (
    <Link className="flex items-center" href="#">
      <FileText className="h-6 w-6" />
      <span className="ml-2 text-2xl font-bold">uts0</span>
    </Link>
  );
};
