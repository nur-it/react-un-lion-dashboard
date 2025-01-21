import { authService } from "@/services/auth-service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export const useAuthService = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // Login Hook
  const useLogin = useMutation(authService.login, {
    onSuccess: (data) => {
      // Save tokens in cookies
      Cookies.set("accessToken", data.accessToken, { expires: 7 });
      Cookies.set("refreshToken", data.refreshToken, { expires: 7 });

      // Optionally refresh user data
      queryClient.invalidateQueries(["currentUser"]);

      toast.success("Login successful!");
      navigate("/my-accounts");
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Login failed!");
      console.error("Login failed:", error.message);
    },
  });

  // Registration Hook
  const useRegister = useMutation(authService.register, {
    onSuccess: (data) => {
      // Save tokens in cookies
      Cookies.set("accessToken", data.accessToken, { expires: 7 });
      Cookies.set("refreshToken", data.refreshToken, { expires: 7 });

      // Optionally refresh user data
      queryClient.invalidateQueries(["currentUser"]);

      toast.success("Registration successful!");
      navigate("/");
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Registration failed!");
      console.error("Registration failed:", error.message);
    },
  });

  // Password Reset Hook
  const useResetPassword = useMutation(authService.resetPassword, {
    onSuccess: () => {
      toast.success("Password reset successful!");
      navigate("/sign-in");
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Password reset failed!");
      console.error("Password reset failed:", error.message);
    },
  });

  // Update Email Hook
  const useUpdateEmail = useMutation(authService.updateEmail, {
    onSuccess: () => {
      queryClient.invalidateQueries(["currentUser"]); // Optionally refresh user email data
      toast.success("Email update successful!");
      navigate("/sign-in");
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Email update failed!");
      console.error("Email update failed:", error.message);
    },
  });

  // Update Password Hook
  const useUpdatePassword = useMutation(authService.updatePassword, {
    onSuccess: () => {
      toast.success("Password update successful!");
      navigate("/sign-in");
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Password update failed!");
      console.error("Password update failed:", error.message);
    },
  });

  // Logout Hook
  const useLogout = useMutation(authService.logout, {
    onSuccess: () => {
      // Remove tokens from cookies
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");

      // Clear cached data
      queryClient.clear(); // Clear all cached queries

      toast.success("Logout successful!");
      navigate("/sign-in");
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Logout failed!");
      console.error("Logout failed:", error.message);
    },
  });

  return {
    useLogin,
    useRegister,
    useResetPassword,
    useUpdateEmail,
    useUpdatePassword,
    useLogout,
  };
};
