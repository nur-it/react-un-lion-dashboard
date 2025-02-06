import useKnowledgeBase from "@/hooks/use-knowledge-base";
import { useRef, useState } from "react";
import { FiLoader } from "react-icons/fi";
import addFrame from "../../../assets/icon/added-frame.svg";
import closeLoading from "../../../assets/icon/close-loading.svg";
import cloudIcon from "../../../assets/icon/cloud-icon.svg";
import fileUpload from "../../../assets/icon/file-loading.svg";
import tickMark from "../../../assets/icon/green-tick.svg";
import info from "../../../assets/icon/information-circle.svg";
import trashIcon from "../../../assets/icon/trash.svg";
import Tooltip from "./Tooltip";

const InfoUpdateInitialDocument = ({
  tooltips,
  hoveredTooltip,
  setHoveredTooltip,
}) => {
  const fileInputRef = useRef(null);
  const [files, setFiles] = useState([]);
  const { uploadSourceFile, isLoading, toast } = useKnowledgeBase();

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const newFiles = Array.from(event.target.files);
    const updatedFiles = newFiles.map((file) => ({
      name: file.name,
      size: file.size,
      status: "uploading",
      progress: 0,
    }));

    // Add new files to the existing files array
    setFiles((prevFiles) => [...prevFiles, ...updatedFiles]);

    // Handle the uploading process for multiple files
    const uploadFiles = newFiles.map((file) => {
      return new Promise((resolve, reject) => {
        const interval = setInterval(() => {
          setFiles((prevFiles) =>
            prevFiles.map((f) =>
              f.name === file.name && f.status === "uploading"
                ? { ...f, progress: f.progress + 10 }
                : f,
            ),
          );
        }, 200);

        const uploadFile = async () => {
          try {
            // Upload the file using the custom hook method
            const response = await uploadSourceFile(file);

            // Handle the response if the upload is successful
            if (response) {
              clearInterval(interval);
              setFiles((prevFiles) =>
                prevFiles.map((f) =>
                  f.name === file.name
                    ? { ...f, status: "completed", progress: 100 }
                    : f,
                ),
              );
              resolve(response); // Resolve the promise
            } else {
              throw new Error("Upload failed");
            }
          } catch (error) {
            // Handle errors
            clearInterval(interval);
            setFiles((prevFiles) =>
              prevFiles.map((f) =>
                f.name === file.name
                  ? { ...f, status: "failed", progress: 0 }
                  : f,
              ),
            );
            reject(error); // Reject the promise
          }
        };

        uploadFile();
      });
    });

    // Start uploading all files
    try {
      await Promise.all(uploadFiles); // Upload all files in parallel
      toast.success("All files uploaded successfully!");
    } catch (error) {
      toast.error("Some files failed to upload.");
    }
  };

  const handleRemoveFile = (fileName) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  return (
    <div className="space-y-6">
      <div className="space-y-10 md:grid md:grid-cols-9 md:gap-10 md:space-y-0">
        <div className="md:col-span-3">
          <div className="relative flex items-center gap-1.5">
            <h5 className="text-sm font-medium text-secondary_main dark:text-white sm:text-lg">
              Upload Initial Documents
            </h5>
            <div
              className="relative"
              onMouseEnter={() => setHoveredTooltip("updateDocument")}
              onMouseLeave={() => setHoveredTooltip(null)}
            >
              <img src={info} alt="info" className="cursor-pointer" />
              <Tooltip
                content={tooltips.updateDocument}
                isVisible={hoveredTooltip === "updateDocument"}
              />
            </div>
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

          {files.map((file, index) => (
            <div
              key={index}
              className={`w-full rounded-xl border border-[#D0D5DD] bg-black/[4%] py-4 pl-[14px] pr-4 dark:border-[#FFFFFF1A] dark:bg-[#FFFFFF0A] ${
                file.status === "uploading"
                  ? "border-gray300"
                  : "border-[#D0D5DD]"
              }`}
            >
              <div className="flex justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src={file.status === "uploading" ? fileUpload : addFrame}
                    alt="fileIcon"
                  />
                  <div>
                    <p className="text-sm font-medium text-secondary_main dark:text-white">
                      {file.name}
                    </p>
                    <div className="flex items-center gap-1">
                      <p className="text-xs text-text_secondary dark:text-[#FFFFFFB2]">
                        {Math.round(file.size / 1024)} KB
                      </p>
                      <div className="h-1 w-1 rounded-full bg-[#00000080] dark:bg-[#FFFFFF80]"></div>
                      {file.status === "uploading" ? (
                        <div className="flex items-center gap-1 text-secondary_main dark:text-white">
                          <FiLoader size={16} className="animate-spin" />
                          <p className="text-xs">Uploading...</p>
                        </div>
                      ) : (
                        <div className="flex items-center gap-1">
                          <img src={tickMark} alt="tickMark" />
                          <p className="text-xs text-secondary_main dark:text-white">
                            Completed
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <button
                  className="text-gray600 dark:text-white"
                  onClick={() => handleRemoveFile(file.name)}
                >
                  {file.status === "uploading" ? (
                    <img src={closeLoading} alt="closeLoading" />
                  ) : (
                    <img src={trashIcon} alt="trashIcon" />
                  )}
                </button>
              </div>
              {file.status === "uploading" && (
                <div className="mt-4 h-1.5 w-full rounded-full bg-[#0000001A] dark:bg-[#FFFFFF1A]">
                  <div
                    className="h-full rounded-full bg-[#665CF3] transition-all duration-200"
                    style={{ width: `${file.progress}%` }}
                  ></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoUpdateInitialDocument;
