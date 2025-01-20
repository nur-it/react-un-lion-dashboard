import { Button } from "@/components/ui/button";
import { useRef } from "react";
import cloudIcon from "../../../assets/icon/cloud-icon.svg";
import info from "../../../assets/icon/information-circle.svg";

const InfoUpdateInitialDocument = () => {
  const fileInputRef = useRef(null);
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file);
    }
  };
  return (
    <div className="space-y-6">
      <div className="space-y-2 md:grid md:grid-cols-9 md:gap-10 md:space-y-0">
        <div className="md:col-span-3">
          <div className="relative flex items-center gap-1.5">
            <p className="text-sm font-medium text-secondary_main dark:text-white sm:text-lg">
              Upload Intial Documents
            </p>
            <img src={info} alt="info" className="cursor-pointer" />
          </div>
        </div>
        <div className="space-y-3 md:col-span-6">
          <div className="flex w-full flex-col items-center justify-between gap-5 rounded-xl border-[1px] border-dashed border-[#CDD0D5] p-4 dark:border-[#475467] dark:bg-[#FFFFFF14] sm:p-6 md:flex-row">
            <div className="flex items-center gap-5">
              <img src={cloudIcon} alt="cloudIcon" />
              <div className="space-y-1">
                <p className="text-sm font-medium text-text_main900 dark:text-white">
                  Choose a Document or drag & drop it here.
                </p>
                <p className="text-xs text-text_soft400 dark:text-gray300">
                  PDF, .pptx, .doc etc formats, up to 20 MB.
                </p>
              </div>
            </div>
            <button
              onClick={handleButtonClick}
              className="flex h-8 w-full items-center justify-center rounded-lg border border-[#E2E4E9] bg-white px-4 py-1.5 text-sm font-medium text-text_sub500 dark:border-[#475467] dark:bg-[#FFFFFF1A] dark:text-white sm:max-w-[117px]"
            >
              Browse File
            </button>
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <Button className="w-full md:max-w-[97px]">Submit</Button>
      </div>
    </div>
  );
};

export default InfoUpdateInitialDocument;
