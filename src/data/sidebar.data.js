import { ContactIcon, SettingIcon, UsersIcon } from "@/components/ui/svgs";
import { BookOpen, LayoutDashboard, StarsIcon } from "lucide-react";

export const menuItems = {
  top_level: [
    { label: "Dashboard", href: "/", icon: LayoutDashboard },
    {
      label: "Knowledge Base",
      href: "/knowledge-base",
      icon: BookOpen,
      notify: 2,
    },
    {
      label: "Ask the Avatar",
      href: "/ask-avatar",
      icon: StarsIcon,
      notify: 4,
    },
  ],
  profile_views: [
    { label: "My Accounts", href: "/my-accounts", icon: UsersIcon, notify: 8 },
    {
      label: "Settings",
      href: "/settings",
      icon: SettingIcon,
    },
  ],
  bottom_level: [
    { label: "Contact Us", href: "/contact-us", icon: ContactIcon },
  ],
};
