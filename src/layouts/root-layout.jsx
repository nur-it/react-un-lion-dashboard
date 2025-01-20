import { useSidebar } from "@/contexts/sidebar.contexts";
import { Outlet } from "react-router";
import Header from "./header";
import Sidebar from "./sidebar";

const RootLayout = () => {
  const { isSidebarOpen, closeSidebar } = useSidebar();
  return (
    <main className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-62.5 bg-secondary_main px-4 py-6 transition-transform lg:static lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar />
      </aside>

      {/* Main Section */}
      <section className="relative flex flex-1 flex-col">
        {/* Header */}
        <header className="relative z-50 max-h-[72px] w-full border-b-[0.5px] border-white_opacity10 bg-background px-6 py-4 shadow-primary dark:bg-white_opacity05">
          <Header />
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-5 sm:px-6 pt-6">
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default RootLayout;
