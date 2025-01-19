import { ContactIcon } from "@/components/ui/svgs";
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
      href: "/setting",
      icon: StarsIcon,
      notify: 4,
    },
  ],
  bottom_level: [
    { label: "Contact Us", href: "/contact-us", icon: ContactIcon },
  ],
};
