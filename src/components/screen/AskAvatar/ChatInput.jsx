import { Button } from "@/components/ui/button";
import { AskAiIcon } from "@/components/ui/svgs";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineFilePdf } from "react-icons/ai";
import { CiCirclePlus } from "react-icons/ci";

export function ChatInput({ handleSend, topic }) {
  const [attachments, setAttachments] = useState([]);
  const { register, handleSubmit, watch, reset, setValue } = useForm({
    defaultValues: { message: "" },
  });

  const message = watch("message");

  // Pre-fill the textarea with the topic
  useEffect(() => {
    if (topic) {
      setValue("message", topic); // Set topic as initial value
    }
  }, [topic, setValue]);

  const onSubmit = (data) => {
    handleSend(data.message, attachments); // Pass to parent
    reset({ message: "" });
    setAttachments([]);
  };

  const handleAttachmentChange = (e) => {
    const files = Array.from(e.target.files).map((file) => {
      const isImage = file.type.startsWith("image/");
      return {
        file,
        preview: isImage ? URL.createObjectURL(file) : null,
      };
    });
    setAttachments((prev) => [...prev, ...files]);
  };

  const removeAttachment = (index) => {
    setAttachments((prev) => {
      const updated = [...prev];
      if (updated[index].preview) {
        URL.revokeObjectURL(updated[index].preview);
      }
      updated.splice(index, 1);
      return updated;
    });
  };

  return (
    <div className="relative rounded-xl border border-[#E4E7EC] bg-black/[0.05] px-4 py-3 shadow-primary dark:border-[#344054] dark:bg-white_opacity05">
      {/* Attachment Display */}
      <div className="flex flex-wrap gap-2">
        {attachments.map((attachment, index) => (
          <div
            key={index}
            className="relative flex items-center gap-2 rounded border-gray-300 bg-white p-1 shadow-sm dark:border-[#344054] dark:bg-secondary_main dark:text-white"
          >
            {attachment.preview ? (
              <div className="max-h-[65px] max-w-[65px]">
                <img
                  src={attachment.preview}
                  alt="attachment preview"
                  className="rounded object-cover"
                />
              </div>
            ) : (
              <div className="flex max-h-[65px] max-w-[100px] items-center">
                <div className="w-6">
                  <AiOutlineFilePdf className="h-4 w-6" />
                </div>
                <span className="truncate text-sm">{attachment.file.name}</span>
              </div>
            )}
            <button
              type="button"
              onClick={() => removeAttachment(index)}
              className="absolute -right-1 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-white text-xs text-red-500 hover:underline dark:bg-secondary_main"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-2.5">
          <div className="relative">
            <Textarea
              {...register("message", {
                maxLength: 1000,
                required: { value: true, message: "Message is required" },
              })}
              placeholder="Ask whatever you want..."
              className="min-h-[62px] resize-none border-none bg-transparent pl-7 pr-12 focus-visible:ring-0"
            />
            <div className="absolute left-2 top-2.5">
              <AskAiIcon />
            </div>
          </div>
          <div className="flex items-center justify-between gap-1">
            <div className="flex items-center gap-2">
              <label
                htmlFor="attachment"
                className="flex cursor-pointer items-center gap-1 text-sm text-[#4a5773] dark:text-[#98A2B3]"
              >
                <CiCirclePlus className="h-4 w-4" />
                <p>Add Attachment</p>
              </label>
              <input
                id="attachment"
                type="file"
                multiple
                className="hidden"
                onChange={handleAttachmentChange}
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="text-sm text-[#4a5773] dark:text-[#98A2B3]">
                {message.length}/1000
              </div>
              <Button type="submit" size="icon" className="rounded-md">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
