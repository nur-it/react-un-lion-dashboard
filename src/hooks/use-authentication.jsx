import { authService } from "@/services/auth-service";
import Cookies from "js-cookie";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const useAuthentication = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitLogin = async (data) => {
    setIsLoading(true);
    try {
      Cookies.set("accessToken", "fake-access-token", { expires: 7 });
      // const response = await authService.login(data);
      toast.success("Login successful!");
      // console.log("Login response:", response);
      console.log(data);
      navigate("/my-accounts");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "The username or password you entered is incorrect. Please try again or reset your password.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmitRegister = async (data) => {
    setIsLoading(true);
    try {
      const response = await authService.register(data);
      toast.success("Registration successful! You can now log in.");
      console.log("Register response:", response);
      navigate("/sign-in");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "An error occurred during registration.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmitForgotPassword = async (data) => {
    setIsLoading(true);
    try {
      // const response = await authService.forgotPassword(data);
      console.log(data);
      navigate("/forget-password-message");
      // console.log("Forgot Password response:", response);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "An error occurred while requesting a password reset.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmitResetPassword = async (data) => {
    setIsLoading(true);
    try {
      console.log(data);
      // const response = await authService.resetPassword(data);
      toast.success("Password reset successful!");
      // console.log("Reset Password response:", response);
      navigate("/sign-in");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "An error occurred while resetting the password.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmitUpdateEmail = async (data) => {
    setIsLoading(true);
    try {
      const response = await authService.updateEmail(data);
      toast.success("Email updated successfully!");
      console.log("Update Email response:", response);
      navigate("/my-accounts");
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "An error occurred while updating the email.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      Cookies.remove("accessToken");
      // const response = await authService.logout();
      toast.success("Logged out successfully.");
      // console.log("Logout response:", response);
      navigate("/sign-in");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "An error occurred during logout.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    register,
    handleSubmit,
    errors,
    setValue,
    watch,
    onSubmitLogin,
    onSubmitRegister,
    onSubmitForgotPassword,
    onSubmitResetPassword,
    onSubmitUpdateEmail,
    logout,
  };
};

export default useAuthentication;
