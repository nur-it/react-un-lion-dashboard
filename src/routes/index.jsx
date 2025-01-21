import AskAvatarPage from "@/app/ask-avatar";
import HomePage from "@/app/home";
import KnowledgeBasePage from "@/app/knowledge-base";
import SettingPage from "@/app/setting";
import SignInPage from "@/app/sign-in";
import RootLayout from "@/layouts/root-layout";
import { BrowserRouter, Route, Routes } from "react-router";

const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* root layout */}
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="knowledge-base" element={<KnowledgeBasePage />} />
          <Route path="ask-avatar" element={<AskAvatarPage />} />
          <Route path="settings" element={<SettingPage />} />
        </Route>
        <Route path="sign-in" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterProvider;
