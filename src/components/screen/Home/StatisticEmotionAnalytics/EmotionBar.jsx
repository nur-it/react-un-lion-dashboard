import { useState } from "react";

const EmotionBar = ({ label, value, maxValue, color }) => {
  const [isHovered, setIsHovered] = useState(false);
  const percentage = (value / maxValue) * 100;

  return (
    <div className="space-y-[2px]">
      <p className="text-sm text-text_secondary dark:text-[#FFFFFFCC]">
        {label}
      </p>
      <div className="relative flex items-center whitespace-nowrap">
        <div
          className="flex h-2.5 w-full overflow-hidden rounded-full bg-[#0000000D] dark:bg-white/[10%]"
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`flex h-full cursor-pointer rounded-full text-center text-xs text-white transition duration-500 dark:bg-opacity-80`}
            style={{ width: `${percentage}%`, backgroundColor: color }}
          ></div>
        </div>
        <span className="ml-2 w-9 text-right text-sm font-bold text-secondary_main dark:text-white">
          {maxValue}
        </span>

        {/* Tooltip with Arrow */}
        {isHovered && (
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 transform rounded-lg bg-black px-2 py-1 text-xs text-white">
            {value}K
            <div className="absolute bottom-[-5px] left-1/2 h-0 w-0 -translate-x-1/2 transform border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-black" />
          </div>
        )}
      </div>
    </div>
  );
};

export default EmotionBar;
