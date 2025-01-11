import { Home } from "lucide-react";

export const menuItems = {
  top_level: [
    { label: "Dashboard", href: "/dashboard", icon: Home, notify: 2 },
    {
      label: "Knowledge Base",
      href: "/knowledge-base",
      icon: Home,
      notify: 2,
    },
    { label: "Ask the Avatar", href: "/ask-avatar", icon: Home },
  ],
  bottom_level: [{ label: "Contact Us", href: "/contact-us", icon: Home }],
};