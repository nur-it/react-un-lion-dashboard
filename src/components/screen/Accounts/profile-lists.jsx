import { WarnRedIcon } from "@/components/ui/svgs";

const ProfileLists = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 rounded-lg border border-gray200 bg-white px-6 py-5">
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
        <div className="flex items-center gap-1 text-sm font-medium text-error">
          <WarnRedIcon />
          <span>Critical Threats:</span>
          <b>05</b>
        </div>
      </div>
    </div>
  );
};

export default ProfileLists;
