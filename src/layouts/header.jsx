import { useTheme } from "@/components/theme-provider";
import {
  DownArrow,
  MoonIcon,
  NotificationIcon,
  SunIcon,
} from "@/components/ui/svgs";
import { cn } from "@/lib/utils";

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
        <div className="bg-transparent px-2 py-1">
          <button className="relative text-[#0A0D14] dark:text-text_disable">
            <NotificationIcon />
            <div className="absolute right-0 top-0 rounded-full bg-white p-0.5">
              <div className="h-1.5 w-1.5 rounded-full bg-error" />
            </div>
          </button>
        </div>
        <div className="dark:bg-dark_header inline-flex h-10 cursor-pointer items-center gap-3 dark:rounded-lg dark:px-3 dark:py-1.5">
          <img
            className="rounded dark:w-7"
            src="/images/user.png"
            alt="user-icon"
          />
          <span className="text-xs font-semibold leading-[130%] tracking-[-0.126px] text-[#111723] dark:text-white">
            John Doe
          </span>
          <span className="text-[#898D97]">
            <DownArrow />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header;
