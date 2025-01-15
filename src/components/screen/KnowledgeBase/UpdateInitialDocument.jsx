import { Button } from "@/components/ui/button";
import { useRef } from "react";
import cloudIcon from "../../../assets/icon/cloud-icon.svg";
import info from "../../../assets/icon/information-circle.svg";

const UpdateInitialDocument = () => {
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
      <div className="grid grid-cols-9 gap-10">
        <div className="col-span-3">
          <div className="relative flex items-center gap-1.5">
            <p className="text-lg font-medium text-secondary_main">
              Upload Intial Documents
            </p>
            <img src={info} alt="info" className="cursor-pointer" />
          </div>
        </div>
        <div className="col-span-6">
          <div className="flex h-[88px] w-full items-center justify-between gap-5 rounded-xl border-[1px] border-dashed border-[#CDD0D5] p-6">
            <div className="flex items-center gap-5">
              <img src={cloudIcon} alt="cloudIcon" />
              <div className="space-y-1">
                <p className="text-sm font-medium text-text_main900">
                  Choose a Document or drag & drop it here.
                </p>
                <p className="text-xs text-text_soft400">
                  PDF, .pptx, .doc etc formats, up to 20 MB.
                </p>
              </div>
            </div>
            <button
              onClick={handleButtonClick}
              className="flex h-8 items-center justify-center rounded-lg border border-[#E2E4E9] bg-white px-4 py-1.5 text-sm font-medium text-text_sub500"
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
        <Button>Submit</Button>
      </div>
    </div>
  );
};

export default UpdateInitialDocument;
