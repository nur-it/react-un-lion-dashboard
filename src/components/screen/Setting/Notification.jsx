import { Button } from "@/components/ui/button";
import { useState } from "react";

const Notification = () => {
  const options = [
    { id: "Hourly", label: "Hourly" },
    { id: "Daily", label: "Daily" },
    { id: "None", label: "None" },
  ];

  // State to manage selected radio button
  const [selectedOption, setSelectedOption] = useState(options[0].id);

  return (
    <div className="space-y-4 sm:space-y-6 rounded-xl border border-gray300 dark:border-[#344054] p-4 sm:p-6">
      <h5 className="text-lg font-medium text-secondary_main dark:text-white">
        Notification Settings
      </h5>
      <div className="space-y-4 sm:space-y-1">
        <div className="flex items-start flex-col sm:flex-row gap-4 sm:gap-6">
          <p className="text-sm text-text_secondary dark:text-gray300">Email Notification</p>
          <div className="space-y-4">
            {options.map((option) => (
              <label
                key={option.id}
                htmlFor={option.id}
                className="flex items-center gap-2 cursor-pointer"
              >
                <div className="relative h-6 w-6">
                  <input
                    name="notification"
                    type="radio"
                    className="peer h-6 w-6 cursor-pointer appearance-none rounded-full border border-slate-300 transition-all checked:border-[#473BF0] dark:checked:border-[#948DF6]"
                    id={option.id}
                    checked={selectedOption === option.id}
                    onChange={() => setSelectedOption(option.id)}
                  />
                  <span className="absolute inset-0 m-auto h-[14px] w-[14px] transform rounded-full bg-[#473BF0] dark:bg-[#948DF6] opacity-0 transition-opacity duration-200 peer-checked:opacity-100"></span>
                </div>
                <p className="font-medium text-secondary_main dark:text-white">
                  {option.label}
                </p>
              </label>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-end">
          <Button className="w-full sm:w-auto">Save</Button>
        </div>
      </div>
    </div>
  );
};

export default Notification;
