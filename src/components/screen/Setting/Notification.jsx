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
    <div className="space-y-4 sm:space-y-6 rounded-xl border border-gray300 p-6">
      <h5 className="text-lg font-medium text-secondary_main">
        Notification Settings
      </h5>
      <div className="space-y-4 sm:space-y-1">
        <div className="flex items-start flex-col sm:flex-row gap-4 sm:gap-6">
          <p className="text-sm text-text_secondary">Email Notification</p>
          <div className="space-y-4">
            {options.map((option) => (
              <div key={option.id} className="flex items-center gap-2">
                <div className="h-6 w-6">
                  <div className="inline-flex h-6 w-6 items-center">
                    <label
                      className="relative flex cursor-pointer items-center"
                      htmlFor={option.id}
                    >
                      <input
                        name="color"
                        type="radio"
                        className="peer h-6 w-6 cursor-pointer appearance-none rounded-full border border-slate-300 transition-all checked:border-[#473BF0]"
                        id={option.id}
                        checked={selectedOption === option.id}
                        onChange={() => setSelectedOption(option.id)}
                      />
                      <span className="absolute left-1/2 top-1/2 h-[14px] w-[14px] -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-[#473BF0] opacity-0 transition-opacity duration-200 peer-checked:opacity-100"></span>
                    </label>
                  </div>
                </div>
                <p className="font-medium text-secondary_main">
                  {option.label}
                </p>
              </div>
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
