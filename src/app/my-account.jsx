import ProfileLists from "@/components/screen/Accounts/profile-lists";

const MyAccountPage = () => {
  return (
    <>
      <h2 className="text-[24px] font-bold text-secondary_main dark:text-white sm:text-2xl">
        My Accounts
      </h2>
      <ProfileLists />
    </>
  );
};

export default MyAccountPage;
