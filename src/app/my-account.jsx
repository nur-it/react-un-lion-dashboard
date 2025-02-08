import { useEffect, useState } from "react";
import ProfileLists from "@/components/screen/Accounts/profile-lists";
import useAvatarList from "@/hooks/use-avatar-list";

const MyAccountPage = () => {
  const { listAvatars } = useAvatarList();
  const [avatars, setAvatars] = useState([]); // ✅ Define state for avatars

  useEffect(() => {
    const fetchAvatars = async () => {
      const data = await listAvatars(); // ✅ Fetch avatars
      setAvatars(data); // ✅ Update state
    };
    fetchAvatars();
  }, []); // ✅ Run once on mount

  return (
    <>
      <h2 className="text-[24px] font-bold text-secondary_main dark:text-white sm:text-2xl">
        My Accounts
      </h2>
      <ProfileLists profiles={avatars} /> {/* ✅ Pass fetched avatars */}
    </>
  );
};

export default MyAccountPage;

