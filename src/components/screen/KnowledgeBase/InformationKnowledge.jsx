import { useState } from "react";
import info from "../../../assets/icon/information-circle.svg";
import InfoUpdateInitialDocument from "./InfoUpdateInitialDocument";
import Tooltip from "./Tooltip";

const InformationKnowledge = () => {
  const [hoveredTooltip, setHoveredTooltip] = useState(null);

  const tooltips = {
    title: "Enter title text to submit",
  };
  return (
    <form className="pb-4 md:pb-5">
      <div className="mb-8 h-[1px] w-full bg-gray200"></div>
      <div className="space-y-6">
        <div className="md:grid md:grid-cols-9 md:gap-10 space-y-2 md:space-y-0">
          <div className="md:col-span-3">
            <div className="relative flex items-center gap-1.5">
              <p className="text-sm sm:text-lg font-medium text-secondary_main">Title</p>
              <div
                onMouseEnter={() => setHoveredTooltip("title")}
                onMouseLeave={() => setHoveredTooltip(null)}
              >
                <img src={info} alt="info" className="cursor-pointer" />
                <Tooltip
                  content={tooltips.title}
                  isVisible={hoveredTooltip === "title"}
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-6">
            <input
              type="text"
              placeholder="Enter your text..."
              className="h-[46px] w-full rounded-lg border border-gray300 bg-[#0000000A] px-4 py-2 outline-none placeholder:text-[#00000080] text-sm md:text-base"
            />
          </div>
        </div>
        <div className="md:grid md:grid-cols-9 md:gap-10 space-y-2 md:space-y-0">
          <div className="md:col-span-3">
            <div className="relative flex items-center gap-1.5">
              <p className="text-sm sm:text-lg font-medium text-secondary_main">
                Add Text Information
              </p>
              <img src={info} alt="info" className="cursor-pointer" />
            </div>
          </div>
          <div className="md:col-span-6">
            <textarea
              placeholder="Enter your text..."
              className="h-[118px] w-full resize-none rounded-lg border border-gray300 bg-[#0000000A] px-4 py-2 outline-none placeholder:text-[#00000080]"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="mb-8 mt-7 h-[1px] w-full bg-gray200"></div>
      <div className="space-y-6">
        <div className="md:grid md:grid-cols-9 md:gap-10 space-y-2 md:space-y-0">
          <div className="md:col-span-3">
            <div className="relative flex items-center gap-1.5">
              <p className="text-sm sm:text-lg font-medium text-secondary_main">Title</p>
              <img src={info} alt="info" className="cursor-pointer" />
            </div>
          </div>
          <div className="md:col-span-6">
            <input
              type="text"
              placeholder="Enter your text..."
              className="h-[46px] w-full rounded-lg border border-gray300 bg-[#0000000A] px-4 py-2 outline-none placeholder:text-[#00000080]"
            />
          </div>
        </div>
        <div>
          <InfoUpdateInitialDocument />
        </div>
      </div>
    </form>
  );
};

export default InformationKnowledge;
