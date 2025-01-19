import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { FiLoader } from "react-icons/fi";
import { RiCloseLine } from "react-icons/ri";
import addFrame from "../../../assets/icon/added-frame.svg";
import cloudIcon from "../../../assets/icon/cloud-icon.svg";
import fileUpload from "../../../assets/icon/file-loading.svg";
import tickMark from "../../../assets/icon/green-tick.svg";
import info from "../../../assets/icon/information-circle.svg";
import trashIcon from "../../../assets/icon/trash.svg";

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
        <div className="col-span-6 space-y-3">
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
          <div className="w-full rounded-xl border border-gray300 bg-black/[4%] py-4 pl-[14px] pr-4">
            <div className="flex justify-between gap-3">
              <div className="flex items-center gap-3">
                <img src={fileUpload} alt="fileUpload" />
                <div>
                  <p className="text-sm font-medium text-secondary_main">
                    new-video.mp4
                  </p>
                  <div className="flex items-center gap-1">
                    <p className="text-xs text-text_secondary">
                      60 KB of 6.5 MB
                    </p>
                    <div className="h-1 w-1 rounded-full bg-[#00000080]"></div>
                    <div className="flex items-center gap-1">
                      <FiLoader size={15} />
                      <p className="text-xs text-secondary_main">
                        Uploading...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <button className="text-gray600">
                <RiCloseLine />
              </button>
            </div>
            <div className="mt-4 h-1.5 w-full rounded-full bg-[#0000001A]">
              <div
                className="h-full rounded-full bg-[#665CF3] transition-all duration-300"
                style={{ width: `${65}%` }}
              ></div>
            </div>
          </div>
          <div className="flex w-full items-center justify-between gap-3 rounded-xl border border-gray300 bg-black/[4%] py-4 pl-[14px] pr-4">
            <div className="flex items-center gap-3">
              <img src={addFrame} alt="addFrame" />
              <div>
                <p className="text-sm font-medium text-secondary_main">
                  my-photo.jpg
                </p>
                <div className="flex items-center gap-1">
                  <p className="text-xs text-text_secondary">94 KB of 94 KB</p>
                  <div className="h-1 w-1 rounded-full bg-[#00000080]"></div>
                  <div className="flex items-center gap-1">
                    <img src={tickMark} alt="tickMark" />
                    <p className="text-xs text-secondary_main">Completed</p>
                  </div>
                </div>
              </div>
            </div>
            <button>
              <img src={trashIcon} alt="trashIcon" />
            </button>
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
