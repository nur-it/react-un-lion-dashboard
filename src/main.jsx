import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "./components/theme-provider";
import { SidebarProvider } from "./contexts/sidebar.contexts";
import RouterProvider from "./routes";
import "./styles/global.css";

// Create a client
const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <SidebarProvider>
          <RouterProvider />
          <ToastContainer position="top-center" autoClose={1000} />
        </SidebarProvider>
      </ThemeProvider>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  </StrictMode>,
);
