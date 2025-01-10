import { Outlet } from "react-router";
import Header from "./header";
import Sidebar from "./sidebar";

const RootLayout = () => {
  return (
    <main className="flex h-screen overflow-hidden bg-light_bg dark:bg-dark_bg">
      {/* Sidebar */}
      <aside className="w-62.5 border-r border-white_opacity10 bg-secondary_main px-4 py-6 dark:bg-dark_secondary">
        <Sidebar />
      </aside>

      {/* Main Section */}
      <section className="relative flex flex-1 flex-col">
        {/* Header */}
        <header className="relative z-[999] w-full border-b-[0.5px] border-white_opacity10 bg-background px-6 py-4 shadow-primary dark:bg-white_opacity05">
          <Header />
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 pt-6">
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default RootLayout;
