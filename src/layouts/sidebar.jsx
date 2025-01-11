import { menuItems } from "@/data/sidebar.data";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router";

const Sidebar = () => {
  const pathname = useLocation().pathname;
  return (
    <div className="flex h-full flex-col justify-between text-white/80">
      <div className="space-y-10">
        <div>
          <img src="/logo.svg" alt="logo" />
        </div>
        <div className="space-y-2">
          {menuItems.top_level.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={cn(
                "inline-flex w-full items-center gap-2 rounded-md px-4 py-2.5 text-white/80 transition-all duration-300 ease-in-out hover:bg-white_opacity10 hover:text-white",
                pathname === item.href && "bg-primary_main text-white",
              )}
            >
              <span
                className={cn(
                  "inline-flex h-[28px] w-[28px] items-center justify-center rounded-full bg-white_opacity10",
                  pathname === item.href && "bg-white/[0.16]",
                )}
              >
                {
                  <item.icon
                    className={cn(
                      "h-4 w-4",
                      pathname === item.href && "text-white",
                    )}
                  />
                }
              </span>{" "}
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
      <div>
        {menuItems.bottom_level.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className={cn(
              "inline-flex w-full items-center gap-2 rounded-md px-4 py-2.5 text-white/80 transition-all duration-300 ease-in-out hover:bg-white_opacity10 hover:text-white",
              pathname === item.href && "bg-primary_main text-white",
            )}
          >
            <span
              className={cn(
                "inline-flex h-[28px] w-[28px] items-center justify-center rounded-full bg-white_opacity10",
                pathname === item.href && "bg-white/[0.16]",
              )}
            >
              {
                <item.icon
                  className={cn(
                    "h-4 w-4",
                    pathname === item.href && "text-white",
                  )}
                />
              }
            </span>{" "}
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
