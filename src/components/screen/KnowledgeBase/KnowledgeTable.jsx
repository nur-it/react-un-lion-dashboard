import { useState } from "react";
import { LuChevronDown, LuChevronRight } from "react-icons/lu";

const KnowledgeTable = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="border-gray200 tab-shadow w-full rounded-2xl border bg-white px-6">
        <div
          className="flex cursor-pointer items-center justify-between gap-4 py-5"
          onClick={toggleContent}
        >
          <h4 className="text-2xl font-bold text-secondary_main">
            Knowledge Table
          </h4>
          {isOpen ? <LuChevronDown size={24} /> : <LuChevronRight size={24} />}
        </div>
        {/* All content */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen py-5" : "max-h-0"
          }`}
        >
          In writing tips, we talk about text a lot. But I feel like we don’t talk enough about context and subtext in this industry. Both are vital to good storytelling and often misunderstood or even mixed up. So today I wanted to go over and define the differences between context, text, and subtext, and explain how they work.
        </div>
      </div>
    </div>
  );
};

export default KnowledgeTable;
