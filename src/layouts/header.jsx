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
  MoonIcon,
  NotificationIcon,
  SettingIcon,
  SunIcon,
  UsersIcon,
} from "@/components/ui/svgs";
import { cn } from "@/lib/utils";
import { Link } from "react-router";

const dropdownMenuItems = [
  {
    label: "My Accounts",
    href: "/profile",
    icon: UsersIcon,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: SettingIcon,
  },
  {
    label: "Log Out",
    href: "/logout",
    icon: LogoutIcon,
  },
];

const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <nav className="flex items-center justify-between gap-4">
      <div>
        <h5 className="inline-flex items-center gap-1 text-secondary_main dark:text-white">
          <span className="text-base leading-[0.2px]">Good Morning -</span>
          <span className="text-xl font-bold leading-[130%]">John Doe</span>
        </h5>
      </div>
      <div className="flex items-center gap-6">
        <div className="inline-flex items-center rounded border-[0.5px] border-[#D0D5DD] p-1 dark:border-[#282C3F]">
          <button
            onClick={() => setTheme("light")}
            className={cn(
              "rounded border-[0.5px] border-white_opacity05 bg-transparent px-2 py-1 text-[#667085] dark:text-[#D0D5DD]",
              theme === "light" &&
                "shadow-secondary bg-primary_main text-white",
            )}
          >
            <SunIcon />
          </button>{" "}
          <button
            onClick={() => setTheme("dark")}
            className={cn(
              "rounded border-[0.5px] border-white_opacity05 bg-transparent px-2 py-1 text-[#667085] dark:text-[#D0D5DD]",
              theme === "dark" && "shadow-secondary bg-primary_main text-white",
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
          <DropdownMenuTrigger className="!h-10 min-w-[173px]">
            <div className="inline-flex w-full cursor-pointer items-center justify-between gap-3 dark:rounded-lg dark:bg-[#282c3f] dark:px-3 dark:py-1.5">
              <span className="inline-flex items-center gap-3">
                <img
                  className="rounded dark:w-7"
                  src="/images/user.png"
                  alt="user-icon"
                />
                <span className="text-xs font-semibold leading-[130%] tracking-[-0.126px] text-[#111723] dark:text-white">
                  John Doe
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
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
};

export default Header;
