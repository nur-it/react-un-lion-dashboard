import { Outlet } from "react-router";
import Header from "./header";
import Sidebar from "./sidebar";

const RootLayout = () => {
  return (
    <main className="flex h-screen flex-col">
      <header>
        <Header />
      </header>

      <section className="relative flex">
        {/* Sidebar */}
        <aside>
          <Sidebar />
        </aside>

        {/* Content */}
        <div className={`flex-1 transition-all duration-500 ease-in-out`}>
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default RootLayout;
