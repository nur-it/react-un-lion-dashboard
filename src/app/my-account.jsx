import ProfileLists from "@/components/screen/Accounts/profile-lists";
import { profiles } from "@/data/profiles.data";

const MyAccountPage = () => {
  return (
    <>
      <h2 className="text-[24px] font-bold text-secondary_main dark:text-white sm:text-2xl">
        My Accounts
      </h2>
      <ProfileLists profiles={profiles} />
    </>
  );
};

export default MyAccountPage;
