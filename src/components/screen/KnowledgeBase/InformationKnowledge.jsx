import { useState } from "react";
import { LuChevronDown, LuChevronRight } from "react-icons/lu";

const InformationKnowledge = () => {
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
            Add Information to the Knowledge Base
          </h4>
          {isOpen ? <LuChevronDown size={24} /> : <LuChevronRight size={24} />}
        </div>
        {/* All content */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen py-5" : "max-h-0"
          }`}
        >
         Sy ipsum dolor sit amet consectetur adipisicing elit. Quas tenetur,
          culpa quos sequi reiciendis incidunt? Maiores ipsam optio deleniti rem
          eaque minus, labore ducimus soluta, iusto reprehenderit ab iste
          beatae.
        </div>
      </div>
    </div>
  );
};

export default InformationKnowledge;
