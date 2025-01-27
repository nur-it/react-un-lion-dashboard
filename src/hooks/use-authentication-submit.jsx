import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authService } from "./authService";

const useAuthentication = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitLogin = async (data) => {
    setIsLoading(true);
    try {
      const response = await authService.login(data);
      toast.success("Login successful!");
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
      navigate("/login");
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
      const response = await authService.forgotPassword(data);
      toast.success(
        "If an account with this email exists, a password reset link has been sent. Please check your inbox.",
      );
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
      const response = await authService.resetPassword(data);
      toast.success("Password reset successful! You can now log in.");
      navigate("/login");
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
      await authService.logout();
      toast.success("Logged out successfully.");
      navigate("/login");
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
    onSubmitLogin,
    onSubmitRegister,
    onSubmitForgotPassword,
    onSubmitResetPassword,
    onSubmitUpdateEmail,
    logout,
  };
};

export default useAuthentication;
