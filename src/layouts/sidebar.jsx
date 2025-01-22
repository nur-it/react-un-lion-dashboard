import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogoutIcon } from "@/components/ui/svgs";
import { dropdownMenuItems, menuItems } from "@/data/sidebar.data";
import { cn } from "@/lib/utils";
import { ChevronsUpDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";

const Sidebar = () => {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("accessToken");
    navigate("/sign-in");
  };
  return (
    <div className="flex h-full flex-col justify-between text-white/80">
      {pathname !== "/my-accounts" && (
        <div className="space-y-10">
          <Link to="/" className="inline-block">
            <img src="/logo.svg" alt="logo" />
          </Link>
          <div className="space-y-2">
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger className="w-full">
                  <button className="mb-2 inline-flex w-full items-center justify-between gap-2 rounded-md border border-white_opacity10 bg-white_opacity05 px-4 py-2.5 text-white transition-all duration-300 ease-in-out">
                    <span className="inline-flex items-center space-x-2 text-sm font-medium">
                      <img
                        src="/images/user.png"
                        className="h-8 w-8 rounded-full"
                        alt="user"
                      />
                      <span>John Doe</span>
                    </span>
                    <span>
                      <ChevronsUpDown className="h-5 w-5 text-[#98A2B3]" />
                    </span>
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="min-w-[217px] border border-white_opacity10 bg-[#282c3f] shadow-primary">
                  {dropdownMenuItems.map((item, index) => (
                    <DropdownMenuItem
                      key={index}
                      className="text-white hover:bg-primary_main"
                    >
                      <Link
                        to={item.href}
                        className="inline-flex items-center justify-center gap-2.5"
                      >
                        <span className="inline-flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#171D291A]">
                          {<item.icon />}
                        </span>
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuItem className="text-[#4A5773] dark:text-white">
                    <button
                      onClick={handleLogout}
                      className="inline-flex items-center justify-center gap-2.5"
                    >
                      <span className="inline-flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#F2F4F7] dark:bg-[#171D291A]">
                        <LogoutIcon />
                      </span>
                      Logout
                    </button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

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
                    "relative inline-flex h-[28px] w-[28px] items-center justify-center rounded-full bg-white_opacity10",
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
                  {item.notify && (
                    <span className="absolute -right-1 -top-1.5 inline-flex h-[14px] w-[14px] items-center justify-center rounded-full bg-error text-[10px] text-white">
                      {item.notify}
                    </span>
                  )}
                </span>{" "}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
      {pathname === "/my-accounts" && (
        <div className="space-y-10">
          <Link to="/" className="inline-block">
            <img src="/logo.svg" alt="logo" />
          </Link>
          <div className="space-y-2">
            {menuItems.profile_views.map((item, index) => (
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
                    "relative inline-flex h-[28px] w-[28px] items-center justify-center rounded-full bg-white_opacity10",
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
                  {item.notify && (
                    <span className="absolute -right-1 -top-1.5 inline-flex h-[14px] w-[14px] items-center justify-center rounded-full bg-error text-[10px] text-white">
                      {item.notify}
                    </span>
                  )}
                </span>{" "}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
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
                "relative inline-flex h-[28px] w-[28px] items-center justify-center rounded-full bg-white_opacity10",
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
              {item.notify && (
                <span className="absolute -right-1 -top-1.5 inline-flex h-[14px] w-[14px] items-center justify-center rounded-full bg-error text-[10px] text-white">
                  {item.notify}
                </span>
              )}
            </span>{" "}
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
