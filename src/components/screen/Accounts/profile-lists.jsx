import { Button } from "@/components/ui/button";
import { InfoIcon, WarnRedIcon } from "@/components/ui/svgs";
import { Eye } from "lucide-react";
import { useNavigate } from "react-router";

const ProfileLists = ({ profiles }) => {
  const navigate = useNavigate();

  return (
    <div className="space-y-4 py-6">
      {profiles.map((profile) => (
        <div
          key={profile.id}
          className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-gray200 bg-white px-6 py-5 dark:border-white_opacity10 dark:bg-white/[0.04]"
        >
          <div className="flex items-center gap-3 md:min-w-[220px]">
            <div className="h-10 w-10 rounded-full bg-white_opacity10">
              <img
                className="h-full w-full rounded-full border object-cover dark:border-white"
                src={profile.picture_url}
                alt="avatar"
              />
            </div>
            <h3 className="text-lg font-bold text-secondary_main dark:text-white">
              {profile.name}
            </h3>
          </div>
          {/*  */}
          <div className="flex items-center gap-1 rounded-md bg-error_opacity10 px-3 py-1.5 text-sm font-medium text-error">
            <WarnRedIcon />
            <span>Critical Threats:</span>
            <b>{profile.threat}</b>
          </div>
          {/* threats, review, insights  */}
          <div className="items-center gap-1.5 space-y-1.5 md:flex md:space-y-0">
            <div
              title={`${profile.other_threat} Other Threats`}
              className="flex items-center gap-2 rounded-md bg-black/[0.06] px-3 py-1.5 text-sm font-medium text-secondary_main dark:bg-white/[0.06] dark:text-white"
            >
              <span>{profile.other_threat} Other Threats</span>
              <InfoIcon className="cursor-pointer text-[#98A2B3]" />
            </div>
            <div
              title={`${profile.to_review} Elements to Review`}
              className="flex items-center gap-2 rounded-md bg-black/[0.06] px-3 py-1.5 text-sm font-medium text-secondary_main dark:bg-white/[0.06] dark:text-white"
            >
              <span>{profile.to_review} Elements to Review</span>
              <InfoIcon className="cursor-pointer text-[#98A2B3]" />
            </div>{" "}
            <div
              title={`${profile.new_insights} New Insights`}
              className="flex items-center gap-2 rounded-md bg-black/[0.06] px-3 py-1.5 text-sm font-medium text-secondary_main dark:bg-white/[0.06] dark:text-white"
            >
              <span>{profile.new_insights} New Insights</span>
              <InfoIcon className="cursor-pointer text-[#98A2B3]" />
            </div>
          </div>
          {/* view profile */}
          <Button onClick={() => navigate(`/`)} className="w-full md:w-auto">
            <Eye />
            <span>View Profile</span>
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ProfileLists;
