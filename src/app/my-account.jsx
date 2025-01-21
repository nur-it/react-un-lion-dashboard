import ProfileLists from "@/components/screen/Accounts/profile-lists";
import PageHeading from "@/components/shared/PageHeading";

const MyAccountPage = () => {
  return (
    <>
      <PageHeading page_name="My Accounts" />
      <ProfileLists />
    </>
  );
};

export default MyAccountPage;
