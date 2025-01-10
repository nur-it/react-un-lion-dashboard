import { menuItems } from "@/data/sidebar.data";
import { Link } from "react-router";

const Sidebar = () => {
  return (
    <div className="flex h-full flex-col justify-between text-white/80">
      <div className="space-y-10">
        <div>
          <img src="/logo.svg" alt="logo" />
        </div>
        <div>
          {menuItems.top_level.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="inline-flex items-center gap-2 text-white/80 hover:text-white"
            >
              <span>{<item.icon />}</span> <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
      <div>
        {menuItems.bottom_level.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white"
          >
            {<item.icon />} {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
