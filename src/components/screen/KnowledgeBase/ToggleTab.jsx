import { useState } from "react";
import { LuChevronDown, LuChevronRight } from "react-icons/lu";

const ToggleTab = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-gray200 tab-shadow w-full rounded-2xl border bg-white px-6">
      <div
        className="flex cursor-pointer items-center justify-between gap-4 py-5"
        onClick={toggleContent}
      >
        <h4 className="text-2xl font-bold text-secondary_main">{title}</h4>
        {isOpen ? <LuChevronDown size={24} /> : <LuChevronRight size={24} />}
      </div>
      {/* Content */}
      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div>{content}</div>
      </div>
    </div>
  );
};

export default ToggleTab;
