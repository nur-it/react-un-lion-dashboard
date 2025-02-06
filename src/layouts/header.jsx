import { useTheme } from "@/components/theme-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  DownArrow,
  LogoutIcon,
  MenuIcon,
  MoonIcon,
  NotificationIcon,
  SunIcon,
} from "@/components/ui/svgs";
import { useSidebar } from "@/contexts/sidebar.contexts";
import { dropdownMenuItems } from "@/data/sidebar.data";
import useAuthentication from "@/hooks/use-authentication";
import { cn } from "@/lib/utils";
import Cookies from "js-cookie";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

const Header = () => {
  const { logout } = useAuthentication();
  const { theme, setTheme } = useTheme();
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const [greeting, setGreeting] = useState("Good Morning");
  const navigate = useNavigate();

  // Get the cookie value first
  const userProfileCookie = Cookies.get("userProfile");
  const SelectedProfileCookie = Cookies.get("selectedProfile");
  // Safely parse the cookie or default to null
  const profile = userProfileCookie ? JSON.parse(userProfileCookie) : null;

  const selectedProfile = SelectedProfileCookie
    ? JSON.parse(SelectedProfileCookie)
    : null;

  // Determine greeting based on the current hour
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Good Morning");
    } else if (hour < 18) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="flex items-center justify-between gap-4">
      <div>
        <Link
          to="/my-accounts"
          className="hidden dark:inline-block lg:dark:hidden"
        >
          <img src="/logo.svg" className="max-w-20" alt="logo" />
        </Link>
        <Link to="/" className="inline-block dark:hidden lg:hidden">
          <img src="/sm-wh-logo.svg" alt="logo" />
        </Link>

        <h5 className="hidden items-center gap-1 text-secondary_main dark:text-white lg:inline-flex">
          <span className="text-base leading-[0.2px]">{greeting} -</span>
          <span className="text-xl font-bold leading-[130%]">
            {selectedProfile
              ? selectedProfile.name
              : profile.username
                ? profile.username
                : "Welcome!"}
          </span>
        </h5>
      </div>
      <div className="flex items-center gap-3 lg:hidden">
        <div className="inline-flex items-center rounded border-[0.5px] border-[#D0D5DD] p-0.5 dark:border-[#282C3F]">
          <button
            onClick={() => setTheme("light")}
            className={cn(
              "rounded border-[0.5px] border-white_opacity05 bg-transparent px-1.5 py-0.5 text-[#667085] dark:text-[#D0D5DD]",
              theme === "light" &&
                "bg-primary_main text-white shadow-secondary",
            )}
          >
            <SunIcon className="h-4 w-4" />
          </button>{" "}
          <button
            onClick={() => setTheme("dark")}
            className={cn(
              "rounded border-[0.5px] border-white_opacity05 bg-transparent px-1.5 py-0.5 text-[#667085] dark:text-[#D0D5DD]",
              theme === "dark" && "bg-primary_main text-white shadow-secondary",
            )}
          >
            <MoonIcon className="h-4 w-4" />
          </button>
        </div>
        <div className="bg-transparent">
          <button className="relative inline-flex h-8 w-8 items-center justify-center text-[#0A0D14] dark:text-text_disable">
            <NotificationIcon />
            <div className="absolute right-1 top-1 rounded-full bg-white p-0.5">
              <div className="h-1.5 w-1.5 rounded-full bg-error" />
            </div>
          </button>
        </div>
        <button
          onClick={toggleSidebar}
          className={cn(
            "inline-flex h-6 w-6 items-center justify-center rounded lg:hidden",
          )}
        >
          {!isSidebarOpen ? (
            <MenuIcon className="text-secondary_main dark:text-white" />
          ) : (
            <X />
          )}
        </button>
      </div>
      <div className="hidden items-center gap-6 lg:flex">
        <div className="inline-flex items-center rounded border-[0.5px] border-[#D0D5DD] p-1 dark:border-[#282C3F]">
          <button
            onClick={() => setTheme("light")}
            className={cn(
              "rounded border-[0.5px] border-white_opacity05 bg-transparent px-2 py-1 text-[#667085] dark:text-[#D0D5DD]",
              theme === "light" &&
                "bg-primary_main text-white shadow-secondary",
            )}
          >
            <SunIcon />
          </button>{" "}
          <button
            onClick={() => setTheme("dark")}
            className={cn(
              "rounded border-[0.5px] border-white_opacity05 bg-transparent px-2 py-1 text-[#667085] dark:text-[#D0D5DD]",
              theme === "dark" && "bg-primary_main text-white shadow-secondary",
            )}
          >
            <MoonIcon />
          </button>
        </div>
        <div className="bg-transparent">
          <button className="relative inline-flex h-8 w-8 items-center justify-center text-[#0A0D14] dark:text-text_disable">
            <NotificationIcon />
            <div className="absolute right-1 top-1 rounded-full bg-white p-0.5">
              <div className="h-1.5 w-1.5 rounded-full bg-error" />
            </div>
          </button>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger className="!h-10 md:min-w-[173px]">
            <div className="inline-flex w-full cursor-pointer items-center justify-between gap-0.5 dark:rounded-lg dark:bg-[#282c3f] dark:px-3 dark:py-1.5 md:gap-3">
              <span className="inline-flex items-center gap-2 md:gap-3">
                <img
                  className="w-9 rounded dark:w-7"
                  src={
                    selectedProfile
                      ? selectedProfile.picture_url
                      : "/images/avatar.svg"
                  }
                  alt={`${selectedProfile ? selectedProfile.name : profile}`}
                />
                <span className="text-xs font-semibold leading-[130%] tracking-[-0.126px] text-[#111723] dark:text-white">
                  {selectedProfile
                    ? selectedProfile.name
                    : profile.username
                      ? profile.username
                      : "User"}
                </span>
              </span>
              <span className="text-[#898D97]">
                <DownArrow />
              </span>
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="border shadow-primary dark:bg-[#282c3f]">
            {dropdownMenuItems.map((item, index) => (
              <DropdownMenuItem
                key={index}
                className="text-[#4A5773] dark:text-white"
              >
                <Link
                  to={item.href}
                  className="inline-flex items-center justify-center gap-2.5"
                >
                  <span className="inline-flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#F2F4F7] dark:bg-[#171D291A]">
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
    </nav>
  );
};

export default Header;
