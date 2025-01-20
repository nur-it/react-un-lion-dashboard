import { useState } from "react";
import { LuChevronDown, LuChevronRight } from "react-icons/lu";

const ToggleTab = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="tab-shadow w-full rounded-2xl border border-gray200 bg-white px-4 dark:border-[#FFFFFF33] dark:bg-[#FFFFFF0A] sm:px-6">
      <div
        className="flex cursor-pointer items-center justify-between py-5 gap-4"
        onClick={toggleContent}
      >
        <h4 className="text-base font-medium text-secondary_main dark:text-white sm:text-2xl sm:font-bold">
          {title}
        </h4>
        {isOpen ? <LuChevronDown size={24} className="dark:text-[#E4E7EC]" /> : <LuChevronRight size={24} className="dark:text-[#E4E7EC]" />}
      </div>
      {/* Content */}
      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen ? "max-h-[150vh]" : "max-h-0"
        }`}
      >
        <div>{content}</div>
      </div>
    </div>
  );
};

export default ToggleTab;
