import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./components/theme-provider";
import { SidebarProvider } from "./contexts/sidebar.contexts";
import RouterProvider from "./routes";
import "./styles/global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <SidebarProvider>
        <RouterProvider />
      </SidebarProvider>
    </ThemeProvider>
  </StrictMode>,
);
