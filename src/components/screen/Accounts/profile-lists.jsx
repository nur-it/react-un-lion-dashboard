import { Button } from "@/components/ui/button";
import { InfoIcon, WarnRedIcon } from "@/components/ui/svgs";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router";

const ProfileLists = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-4 pt-6">
      <div className="flex items-center justify-between gap-2 rounded-lg border border-gray200 bg-white px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-white_opacity10">
            <img
              className="h-full w-full rounded-full object-cover"
              src="/images/avatar.png"
              alt="avatar"
            />
          </div>
          <h3 className="text-lg font-bold text-secondary_main">John Doe</h3>
        </div>
        {/*  */}
        <div className="bg flex items-center gap-1 rounded-md bg-error_opacity10 px-3 py-1.5 text-sm font-medium text-error">
          <WarnRedIcon />
          <span>Critical Threats:</span>
          <b>05</b>
        </div>
        {/* threats, review, insights  */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-2 rounded-md bg-black/[0.06] px-3 py-1.5 text-sm font-medium text-secondary_main">
            <span>8 Other Threats</span>
            <InfoIcon className="text-[#98A2B3]" />
          </div>
          <div className="flex items-center gap-2 rounded-md bg-black/[0.06] px-3 py-1.5 text-sm font-medium text-secondary_main">
            <span>2 Elements to Review</span>
            <InfoIcon className="text-[#98A2B3]" />
          </div>{" "}
          <div className="flex items-center gap-2 rounded-md bg-black/[0.06] px-3 py-1.5 text-sm font-medium text-secondary_main">
            <span>3 New Insights</span>
            <InfoIcon className="text-[#98A2B3]" />
          </div>
        </div>
        {/* view profile */}
        <Button onClick={() => navigate("/")}>
          <Eye />
          <span>View Profile</span>
        </Button>
      </div>
    </div>
  );
};

export default ProfileLists;
