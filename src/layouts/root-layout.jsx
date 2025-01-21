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
        className={`fixed inset-y-0 left-0 z-50 w-62.5 border-r border-white_opacity05 bg-secondary_main px-4 py-6 transition-transform lg:static lg:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar />
      </aside>

      {/* Main Section */}
      <section className="relative flex flex-1 flex-col">
        {/* Header */}
        <header className="relative z-50 max-h-[72px] w-full border-white_opacity05 bg-light_bg px-6 py-4 dark:bg-dark_bg lg:border-b-[0.5px] lg:bg-background lg:shadow-primary lg:dark:bg-white_opacity05">
          <Header />
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-5 pt-6 sm:px-6">
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default RootLayout;
