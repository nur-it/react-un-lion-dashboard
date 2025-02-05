import { Button } from "@/components/ui/button";
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
import useKnowledgeBase from "@/hooks/use-knowledge-base.jsx";

const UpdateInitialDocument = () => {
  const fileInputRef = useRef(null);
  const [files, setFiles] = useState([]); // UI state for displaying files
  const [formData, setFormData] = useState(new FormData()); // ✅ Fix: useState for FormData
  const [hoveredTooltip, setHoveredTooltip] = useState(null);
  const { uploadSourceFile } = useKnowledgeBase(); // Extract upload function

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);

    if (selectedFiles.length > 0) {
      const newFiles = selectedFiles.map((file) => ({
        name: file.name,
        size: file.size,
        status: "uploading",
        progress: 0,
        fileObj: file, // Store actual file object
      }));

      // ✅ Update UI state
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);

      // ✅ Correctly update FormData
      setFormData((prevFormData) => {
        const updatedFormData = new FormData();
        for (const [key, value] of prevFormData.entries()) {
          updatedFormData.append(key, value);
        }
        selectedFiles.forEach((file) => updatedFormData.append("files", file));
        console.log("Updated FormData:", updatedFormData.getAll("files")); // ✅ Debugging check
        return updatedFormData;
      });

      // Simulate upload progress
      const interval = setInterval(() => {
        setFiles((prevFiles) =>
          prevFiles.map((f) =>
            f.status === "uploading"
              ? { ...f, progress: Math.min(f.progress + 10, 100) }
              : f
          )
        );
      }, 500);

      setTimeout(() => {
        clearInterval(interval);
        setFiles((prevFiles) =>
          prevFiles.map((f) => ({ ...f, status: "completed", progress: 100 }))
        );
      }, 2000);
    }
  };

  const handleRemoveFile = (fileName) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));

    // ✅ Correctly remove file from FormData
    setFormData((prevFormData) => {
      const updatedFormData = new FormData();
      for (const [key, value] of prevFormData.entries()) {
        if (value.name !== fileName) {
          updatedFormData.append(key, value);
        }
      }
      console.log("Updated FormData after removal:", updatedFormData.getAll("files")); // ✅ Debugging check
      return updatedFormData;
    });
  };

  const handleSubmit = async () => {
    if (!formData.has("files")) {
      alert("No files selected for upload.");
      return;
    }

    try {
      await uploadSourceFile(formData.getAll("files"));
      alert("Files uploaded successfully!");
      setFiles([]);
      setFormData(new FormData()); // ✅ Reset FormData after successful upload
    } catch (error) {
      console.error("File upload failed", error);
      alert("Error uploading files. Please try again.");
    }
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
                content="Upload Initial Document"
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
              multiple
            />
          </div>

          {files.map((file, index) => (
            <div key={index} className="w-full rounded-xl border border-[#D0D5DD] bg-black/[4%] py-4 pl-[14px] pr-4 dark:border-[#FFFFFF1A] dark:bg-[#FFFFFF0A]">
              <div className="flex justify-between gap-3">
                <div className="flex items-center gap-3">
                  <img src={file.status === "uploading" ? fileUpload : addFrame} alt="fileIcon" />
                  <div>
                    <p className="text-sm font-medium text-secondary_main dark:text-white">{file.name}</p>
                    <p className="text-xs text-text_secondary dark:text-[#FFFFFFB2]">
                      {Math.round(file.size / 1024)} KB
                    </p>
                  </div>
                </div>
                <button className="text-gray600 dark:text-white" onClick={() => handleRemoveFile(file.name)}>
                  <img src={trashIcon} alt="trashIcon" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-end">
        <Button className="w-full md:max-w-[97px]" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default UpdateInitialDocument;
