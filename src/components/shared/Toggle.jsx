import { useState } from "react";

const Toggle = ({ initialActive = false }) => {
  const [isActive, setIsActive] = useState(initialActive);

  const handleToggle = () => {
    setIsActive((prevState) => !prevState);
  };

  return (
    <div
      className={`flex h-[22px] w-[35px] cursor-pointer items-center rounded-full ${
        isActive
          ? "toggle-shadow-active border-t border-[#253EA7] bg-[#375DFB]"
          : "toggle-shadow-normal border-t border-[#CDD0D5] bg-[#E2E4E9]"
      } p-[3px] transition-colors duration-300`}
      onClick={handleToggle}
    >
      {/* main circle */}
      <div
        className={`first-circle-shadow flex h-[14px] w-[14px] items-center justify-center rounded-full border-b border-l border-r border-[#FFFFFF] bg-white transition-transform duration-300 mb-[1px] ${
          isActive ? "translate-x-[12.5px]" : "translate-x-0"
        }`}
      >
        {/* x-small circle */}
        <div
          className={`xs-shadow mt-[1.2px] h-[6px] w-[6px] rounded-full ${
            isActive ? "bg-blue-500" : "bg-gray-400"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Toggle;
