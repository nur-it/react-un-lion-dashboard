import useKnowledgeBase from "@/hooks/use-knowledge-base";
import { useEffect, useState } from "react";

const Toggle = ({ initialActive = false, index }) => {
  const [isActive, setIsActive] = useState(initialActive);
  const { updateToggle } = useKnowledgeBase();

  const handleToggle = () => {
    setIsActive((prevState) => !prevState);
  };

  useEffect(() => {
    if (isActive) {
      updateToggle({ index, toggle: "True" });
    }
  }, [isActive, index]);

  return (
    <div
      className={`flex h-[22px] w-[35px] cursor-pointer items-center rounded-full ${
        isActive
          ? "toggle-shadow-active border-t border-[#253EA7] bg-[#375DFB]"
          : "toggle-shadow-normal border-t border-[#CDD0D5] bg-[#E2E4E9] dark:border-[#E2E4E933] dark:bg-[#E2E4E933]"
      } p-[3px] transition-colors duration-300`}
      onClick={handleToggle}
    >
      {/* main circle */}
      <div
        className={`first-circle-shadow mb-[1px] flex h-[14px] w-[14px] items-center justify-center rounded-full border-b border-l border-r border-[#FFFFFF] bg-white transition-transform duration-300 ${
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
