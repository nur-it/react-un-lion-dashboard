import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2 bg-dark_bg text-white">
      <h1 className="text-7xl font-bold">404</h1>
      <p className="text-sm text-error">Page Not Found!</p>
      <Button onClick={() => navigate("/")}>
        <ArrowLeftIcon /> Go Home
      </Button>
    </div>
  );
};

export default ErrorPage;
