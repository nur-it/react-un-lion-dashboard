import { useState } from "react";
import info from "../../../assets/icon/information-circle.svg";

const InformationKnowledge = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="pb-5">
      <div className="bg-gray200 mb-8 h-[1px] w-full"></div>
      <div className="space-y-6">
        <div className="grid grid-cols-9 gap-10">
          <div className="col-span-3">
            <div className="relative flex items-center gap-1.5">
              <p className="text-lg font-medium text-secondary_main">Title</p>
              <div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <img src={info} alt="info" className="cursor-pointer" />
                {isHovered && (
                  <div className="absolute bottom-8 left-9 mt-1 flex flex-col items-center">
                    <div className="relative">
                      <div className="info-shadow rounded-md border border-[#E2E4E9] bg-white px-1.5 py-0.5 text-sm text-gray-700">
                        Enter title text to submit
                      </div>
                      <div className="absolute left-3 -mt-1 h-2 w-2 rotate-45 border-b border-r border-[#E2E4E9] bg-white shadow-md"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <input
              type="text"
              placeholder="Enter your text..."
              className="border-gray300 h-[46px] w-full rounded-lg border bg-[#0000000A] px-4 py-2 outline-none placeholder:text-[#00000080]"
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
              className="border-gray300 h-[118px] w-full resize-none rounded-lg border bg-[#0000000A] px-4 py-2 outline-none placeholder:text-[#00000080]"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="bg-gray200 mb-8 mt-7 h-[1px] w-full"></div>
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
              className="border-gray300 h-[46px] w-full rounded-lg border bg-[#0000000A] px-4 py-2 outline-none placeholder:text-[#00000080]"
            />
          </div>
        </div>
        <div className="grid grid-cols-9 gap-10">
          <div className="col-span-3">
            <div className="relative flex items-center gap-1.5">
              <p className="text-lg font-medium text-secondary_main">
                Upload Intial Documents
              </p>
              <img src={info} alt="info" className="cursor-pointer" />
            </div>
          </div>
          <div className="col-span-6"></div>
        </div>
      </div>
    </div>
  );
};

export default InformationKnowledge;
