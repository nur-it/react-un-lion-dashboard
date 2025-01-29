import { Button } from "@/components/ui/button";
import useKnowledgeBase from "@/hooks/use-knowledge-base";
import { useState } from "react";
import info from "../../../assets/icon/information-circle.svg";
import InfoUpdateInitialDocument from "./InfoUpdateInitialDocument";
import Tooltip from "./Tooltip";

const InformationKnowledge = () => {
  const { register, handleSubmit, sourceArticleSubmit, isLoading, errors } =
    useKnowledgeBase();
  const [hoveredTooltip, setHoveredTooltip] = useState(null);

  const tooltips = {
    title: "Enter title text to submit",
    addTextInfo: "Add detailed text information here",
    additionalTitle: "Provide another title if needed",
    updateDocument: "Upload Initial Document",
  };

  return (
    <form onSubmit={handleSubmit(sourceArticleSubmit)} className="pb-4 md:pb-5">
      <div className="mb-8 h-[1px] w-full bg-gray200 dark:bg-[#344054]" />
      <div className="space-y-6">
        <div className="space-y-2 md:grid md:grid-cols-9 md:gap-10 md:space-y-0">
          <div className="md:col-span-3">
            <div className="relative flex items-center gap-1.5">
              <h5 className="text-sm font-medium text-secondary_main dark:text-white sm:text-lg">
                Title
              </h5>
              <div
                className="relative"
                onMouseEnter={() => setHoveredTooltip("title")}
                onMouseLeave={() => setHoveredTooltip(null)}
              >
                <img src={info} alt="info" className="cursor-pointer" />
                <Tooltip
                  content={tooltips.title}
                  isVisible={hoveredTooltip === "title"}
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-6">
            <input
              {...register("title", { required: "Title is required" })}
              type="text"
              placeholder="Enter your text..."
              className="h-[46px] w-full rounded-lg border border-gray300 bg-[#0000000A] px-4 py-2 text-sm outline-none placeholder:text-[#00000080] dark:border-[#FFFFFF1A] dark:bg-[#FFFFFF0A] dark:placeholder:text-[#FFFFFF80] md:text-base"
            />
            {errors.title && (
              <p className="text-sm text-error">{errors.title.message}</p>
            )}
          </div>
        </div>
        <div className="space-y-2 md:grid md:grid-cols-9 md:gap-10 md:space-y-0">
          <div className="md:col-span-3">
            <div className="relative flex items-center gap-1.5">
              <h5 className="text-sm font-medium text-secondary_main dark:text-white sm:text-lg">
                Add Text Information
              </h5>
              <div
                className="relative"
                onMouseEnter={() => setHoveredTooltip("addTextInfo")}
                onMouseLeave={() => setHoveredTooltip(null)}
              >
                <img src={info} alt="info" className="cursor-pointer" />
                <Tooltip
                  content={tooltips.addTextInfo}
                  isVisible={hoveredTooltip === "addTextInfo"}
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-6">
            <textarea
              {...register("text", { required: "Text is required" })}
              placeholder="Enter your text..."
              className="h-[118px] w-full resize-none rounded-lg border border-gray300 bg-[#0000000A] px-4 py-2 text-sm outline-none placeholder:text-[#00000080] dark:border-[#FFFFFF1A] dark:bg-[#FFFFFF0A] dark:placeholder:text-[#FFFFFF80] sm:text-base"
            ></textarea>
            {errors.text && (
              <p className="text-sm text-error">{errors.text.message}</p>
            )}
          </div>
        </div>
      </div>
      <div className="mb-8 mt-7 h-[1px] w-full bg-gray200 dark:bg-[#344054]" />
      <div className="space-y-6">
        <div className="space-y-2 md:grid md:grid-cols-9 md:gap-10 md:space-y-0">
          <div className="md:col-span-3">
            <div className="relative flex items-center gap-1.5">
              <h5 className="text-sm font-medium text-secondary_main dark:text-white sm:text-lg">
                Additional Title
              </h5>
              <div
                className="relative"
                onMouseEnter={() => setHoveredTooltip("additionalTitle")}
                onMouseLeave={() => setHoveredTooltip(null)}
              >
                <img src={info} alt="info" className="cursor-pointer" />
                <Tooltip
                  content={tooltips.additionalTitle}
                  isVisible={hoveredTooltip === "additionalTitle"}
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-6">
            <input
              {...register("additionalTitle")}
              type="text"
              placeholder="Enter your text..."
              className="h-[46px] w-full rounded-lg border border-gray300 bg-[#0000000A] px-4 py-2 text-sm outline-none placeholder:text-[#00000080] dark:border-[#FFFFFF1A] dark:bg-[#FFFFFF0A] dark:placeholder:text-[#FFFFFF80] sm:text-base"
            />
          </div>
        </div>
        <div className="space-y-6">
          <InfoUpdateInitialDocument
            tooltips={tooltips}
            hoveredTooltip={hoveredTooltip}
            setHoveredTooltip={setHoveredTooltip}
          />
          <div className="flex items-center justify-end">
            <Button
              disabled={isLoading}
              type="submit"
              className="w-full md:max-w-[97px]"
            >
              {isLoading ? "Saving..." : "Save"}
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default InformationKnowledge;
