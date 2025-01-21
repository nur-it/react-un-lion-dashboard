import { useState } from "react";

const CustomCheckbox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <label className="relative flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <div
        className={`w-[20px] h-[20px] border rounded flex items-center justify-center transition-all ${
          checked
            ? "border-[#473BF0] bg-[#473BF0]"
            : "border-[#98A2B3] bg-[#FFFFFF0A]"
        }`}
      >
        {checked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        )}
      </div>
    </label>
  );
};

export default CustomCheckbox;
