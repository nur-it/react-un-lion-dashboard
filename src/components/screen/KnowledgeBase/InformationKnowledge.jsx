import { useState } from "react";
import info from "../../../assets/icon/information-circle.svg";
import Tooltip from "./Tooltip";
import UpdateInitialDocument from "./UpdateInitialDocument";

const InformationKnowledge = () => {
  const [hoveredTooltip, setHoveredTooltip] = useState(null);

  const tooltips = {
    title: "Enter title text to submit",
  };
  return (
    <form className="pb-5">
      <div className="mb-8 h-[1px] w-full bg-gray200"></div>
      <div className="space-y-6">
        <div className="grid grid-cols-9 gap-10">
          <div className="col-span-3">
            <div className="relative flex items-center gap-1.5">
              <p className="text-lg font-medium text-secondary_main">Title</p>
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
          <div className="col-span-6">
            <input
              type="text"
              placeholder="Enter your text..."
              className="h-[46px] w-full rounded-lg border border-gray300 bg-[#0000000A] px-4 py-2 outline-none placeholder:text-[#00000080]"
            />
          </div>
        </div>
        <div className="grid grid-cols-9 gap-10">
          <div className="col-span-3">
            <div className="relative flex items-center gap-1.5">
              <p className="text-lg font-medium text-secondary_main">
                Add Text Information
              </p>
              <img src={info} alt="info" className="cursor-pointer" />
            </div>
          </div>
          <div className="col-span-6">
            <textarea
              placeholder="Enter your text..."
              className="h-[118px] w-full resize-none rounded-lg border border-gray300 bg-[#0000000A] px-4 py-2 outline-none placeholder:text-[#00000080]"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="mb-8 mt-7 h-[1px] w-full bg-gray200"></div>
      <div className="space-y-6">
        <div className="grid grid-cols-9 gap-10">
          <div className="col-span-3">
            <div className="relative flex items-center gap-1.5">
              <p className="text-lg font-medium text-secondary_main">Title</p>
              <img src={info} alt="info" className="cursor-pointer" />
            </div>
          </div>
          <div className="col-span-6">
            <input
              type="text"
              placeholder="Enter your text..."
              className="h-[46px] w-full rounded-lg border border-gray300 bg-[#0000000A] px-4 py-2 outline-none placeholder:text-[#00000080]"
            />
          </div>
        </div>
        <div>
          <UpdateInitialDocument />
        </div>
      </div>
    </form>
  );
};

export default InformationKnowledge;
