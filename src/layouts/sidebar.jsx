/* eslint-disable react-hooks/exhaustive-deps */
import ContactModal from "@/components/shared/ContactModal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { profiles } from "@/data/profiles.data";
import { menuItems } from "@/data/sidebar.data";
import { cn } from "@/lib/utils";
import Cookies from "js-cookie";
import { ChevronsUpDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router";
import useAvatarList from "@/hooks/use-avatar-list.jsx";
import { useEffect, useState } from "react";

const Sidebar = ({ closeSidebar }) => {
  const { listAvatars } = useAvatarList();
  const [profiles, setAvatars] = useState([]); // ✅ Define state for avatars

  useEffect(() => {
    const fetchAvatars = async () => {
      const data = await listAvatars(); // ✅ Fetch avatars
      setAvatars(data); // ✅ Update state
    };
    fetchAvatars();
  }, []); // ✅ Run once on mount

  const pathname = useLocation().pathname;
  const navigate = useNavigate();

  // Get the cookie value first
  const selectedProfileCookie = Cookies.get("selectedProfile");
  // Safely parse the cookie or default to null
  const selectedProfile = selectedProfileCookie
    ? JSON.parse(selectedProfileCookie)
    : null;
  //
  // const userProfileCookie = Cookies.get("userProfile");
  // // Safely parse the cookie or default to null
  // const userProfile = userProfileCookie
  //   ? JSON.parse(userProfileCookie)
  //   : null;

  const handleViewProfile = (profile) => {
    if (!profile) {
      console.error("Profile is null or undefined");
      return;
    }

    Cookies.set("selectedProfile", JSON.stringify(profile));
    navigate("/");
  };

  return (
    <div className="flex h-full flex-col justify-between text-white/80">
      {pathname !== "/my-accounts" && (
        <div className="space-y-10">
          <Link
            to="/my-accounts"
            onClick={closeSidebar}
            className="inline-block"
          >
            <img src="/logo.svg" alt="logo" />
          </Link>
          <div className="space-y-2">
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger className="w-full">
                  <button className="mb-2 inline-flex w-full items-center justify-between gap-2 rounded-md border border-white_opacity10 bg-white_opacity05 px-4 py-2.5 text-white transition-all duration-300 ease-in-out">
                    <span className="inline-flex items-center space-x-2 text-sm font-medium">
                      <img
                        src={selectedProfile?.picture_url || "/images/user_profile_pic.jpeg"}
                        className="h-8 w-8 rounded-full"
                        alt="profile"
                      />
                      <span className="line-clamp-1">
                        {selectedProfile.name || "John Doe"}
                      </span>
                    </span>
                    <span>
                      <ChevronsUpDown className="h-5 w-5 text-[#98A2B3]" />
                    </span>
                  </button>
                </DropdownMenuTrigger>

                <DropdownMenuContent className="min-w-[217px] border border-white_opacity10 bg-[#282c3f] shadow-primary">
                  {profiles.map((profile, index) => (
                    <DropdownMenuItem
                      key={index}
                      className={cn(
                        "text-white hover:bg-primary_main",
                        selectedProfile?.id === profile?.id &&
                          "rounded-md border border-white_opacity10 bg-white_opacity05",
                      )}
                      onClick={() => handleViewProfile(profile)}
                    >
                      <span className="inline-flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#171D291A]">
                        <img src={profile?.picture_url} alt={profile?.name} />
                      </span>
                      {profile?.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {menuItems.top_level.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                onClick={closeSidebar}
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
          <Link
            to="/my-accounts"
            onClick={closeSidebar}
            className="inline-block"
          >
            <img src="/logo.svg" alt="logo" />
          </Link>
          <div className="space-y-2">
            {menuItems.profile_views.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                onClick={closeSidebar}
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
          <Dialog key={index}>
            <DialogTrigger
              className={cn(
                "inline-flex w-full items-center gap-2 rounded-md px-4 py-2.5 text-white/80 transition-all duration-300 ease-in-out hover:bg-white_opacity10 hover:text-white",
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
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Contact Us</DialogTitle>
                <DialogDescription>
                  <ContactModal />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
