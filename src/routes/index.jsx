import AskAvatarPage from "@/app/ask-avatar";
import ForgetPasswordPage from "@/app/forget-password";
import ForgetPasswordMessagePage from "@/app/forget-password-message";
import HomePage from "@/app/home";
import KnowledgeBasePage from "@/app/knowledge-base";
import ErrorPage from "@/app/not-found";
import SettingPage from "@/app/setting";
import SignInPage from "@/app/sign-in";
import SignUpPage from "@/app/sign-up";
import RootLayout from "@/layouts/root-layout";
import { BrowserRouter, Route, Routes } from "react-router";
// import ProtectedRoute from "./auth-protected-route";

const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* root layout */}
        <Route
          element={
            // <ProtectedRoute>
            <RootLayout />
            // </ProtectedRoute>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="knowledge-base" element={<KnowledgeBasePage />} />
          <Route path="ask-avatar" element={<AskAvatarPage />} />
          <Route path="settings" element={<SettingPage />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="forget-password" element={<ForgetPasswordPage />} />
        <Route path="forget-password-message" element={<ForgetPasswordMessagePage />} />
          <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterProvider;
