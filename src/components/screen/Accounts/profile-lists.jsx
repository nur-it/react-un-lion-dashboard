import { Button } from "@/components/ui/button";
import { InfoIcon, WarnRedIcon } from "@/components/ui/svgs";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router";

const ProfileLists = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-4 pt-6">
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-gray200 bg-white px-6 py-5 dark:border-white_opacity10 dark:bg-white/[0.04]">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-white_opacity10">
            <img
              className="h-full w-full rounded-full border object-cover dark:border-white"
              src="/images/avatar.png"
              alt="avatar"
            />
          </div>
          <h3 className="text-lg font-bold text-secondary_main dark:text-white">
            John Doe
          </h3>
        </div>
        {/*  */}
        <div className="flex items-center gap-1 rounded-md bg-error_opacity10 px-3 py-1.5 text-sm font-medium text-error">
          <WarnRedIcon />
          <span>Critical Threats:</span>
          <b>05</b>
        </div>
        {/* threats, review, insights  */}
        <div className="items-center gap-1.5 space-y-1.5 md:flex">
          <div
            title="8 Other Threats"
            className="flex items-center gap-2 rounded-md bg-black/[0.06] px-3 py-1.5 text-sm font-medium text-secondary_main dark:bg-white/[0.06] dark:text-white"
          >
            <span>8 Other Threats</span>
            <InfoIcon className="cursor-pointer text-[#98A2B3]" />
          </div>
          <div
            title="2 Elements to Review"
            className="flex items-center gap-2 rounded-md bg-black/[0.06] px-3 py-1.5 text-sm font-medium text-secondary_main dark:bg-white/[0.06] dark:text-white"
          >
            <span>2 Elements to Review</span>
            <InfoIcon className="cursor-pointer text-[#98A2B3]" />
          </div>{" "}
          <div
            title="3 New Insights"
            className="flex items-center gap-2 rounded-md bg-black/[0.06] px-3 py-1.5 text-sm font-medium text-secondary_main dark:bg-white/[0.06] dark:text-white"
          >
            <span>3 New Insights</span>
            <InfoIcon className="cursor-pointer text-[#98A2B3]" />
          </div>
        </div>
        {/* view profile */}
        <Button onClick={() => navigate("/")} className="w-full md:w-auto">
          <Eye />
          <span>View Profile</span>
        </Button>
      </div>
    </div>
  );
};

export default ProfileLists;
