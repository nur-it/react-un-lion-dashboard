import HomePage from "@/app/home";
import RootLayout from "@/layouts/root-layout";
import { BrowserRouter, Route, Routes } from "react-router";

const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* root layout */}
        <Route element={<RootLayout />}>
          <Route
            index
            element={<HomePage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterProvider;
