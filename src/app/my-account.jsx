import ProfileLists from "@/components/screen/Accounts/profile-lists";
import PageHeading from "@/components/shared/PageHeading";
import { profiles } from "@/data/profiles.data";

const MyAccountPage = () => {
  return (
    <>
      <PageHeading page_name="My Accounts" />
      <ProfileLists profiles={profiles} />
    </>
  );
};

export default MyAccountPage;
