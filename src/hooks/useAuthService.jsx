import { authService } from "@/services/auth-service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";

// Hook for login
export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation(authService.login, {
    onSuccess: (data) => {
      // Save tokens in cookies
      Cookies.set("accessToken", data.accessToken, { expires: 7 });
      Cookies.set("refreshToken", data.refreshToken, { expires: 7 });

      // Optionally refresh user data
      queryClient.invalidateQueries(["currentUser"]);
    },
    onError: (error) => {
      console.error("Login failed:", error.message);
    },
  });
};

// Hook for registration
export const useRegister = () => {
  const queryClient = useQueryClient();

  return useMutation(authService.register, {
    onSuccess: (data) => {
      // Save tokens in cookies
      Cookies.set("accessToken", data.accessToken, { expires: 7 });
      Cookies.set("refreshToken", data.refreshToken, { expires: 7 });

      // Optionally refresh user data
      queryClient.invalidateQueries(["currentUser"]);
    },
    onError: (error) => {
      console.error("Registration failed:", error.message);
    },
  });
};

// Hook for password reset
export const useResetPassword = () => {
  return useMutation(authService.resetPassword, {
    onSuccess: () => {
      console.log("Password reset successful");
    },
    onError: (error) => {
      console.error("Password reset failed:", error.message);
    },
  });
};

// Hook for updating email
export const useUpdateEmail = () => {
  const queryClient = useQueryClient();

  return useMutation(authService.updateEmail, {
    onSuccess: () => {
      queryClient.invalidateQueries(["currentUser"]); // Optionally refresh user email data
    },
    onError: (error) => {
      console.error("Email update failed:", error.message);
    },
  });
};

// Hook for logout
export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation(authService.logout, {
    onSuccess: () => {
      // Remove tokens from cookies
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");

      // Clear cached data
      queryClient.clear(); // Clear all cached queries
    },
    onError: (error) => {
      console.error("Logout failed:", error.message);
    },
  });
};
