import Loading from "@/components/shared/Loading";
import RootLayout from "@/layouts/root-layout";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import ProtectedRoute from "./auth-protected-route";

// Lazy load pages
const AskAvatarPage = lazy(() => import("@/app/ask-avatar"));
const ForgetPasswordPage = lazy(() => import("@/app/forget-password"));
const ForgetPasswordMessagePage = lazy(
  () => import("@/app/forget-password-message"),
);
const HomePage = lazy(() => import("@/app/home"));
const KnowledgeBasePage = lazy(() => import("@/app/knowledge-base"));
const MyAccountPage = lazy(() => import("@/app/my-account"));
const ErrorPage = lazy(() => import("@/app/not-found"));
const ResetPasswordPage = lazy(() => import("@/app/reset-password"));
const SettingPage = lazy(() => import("@/app/setting"));
const SignInPage = lazy(() => import("@/app/sign-in"));
const SignUpPage = lazy(() => import("@/app/sign-up"));

const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* Root layout */}
          <Route
            element={
              <ProtectedRoute>
                <RootLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<HomePage />} />
            <Route path="/knowledge-base" element={<KnowledgeBasePage />} />
            <Route path="/ask-avatar" element={<AskAvatarPage />} />
            <Route path="/my-accounts" element={<MyAccountPage />} />
            <Route path="/settings" element={<SettingPage />} />
          </Route>
          {/* Authentication routes */}
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/forget-password" element={<ForgetPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route
            path="/forget-password-message"
            element={<ForgetPasswordMessagePage />}
          />
          {/* Catch-all for 404 */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default RouterProvider;
