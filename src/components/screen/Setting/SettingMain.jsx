import ContactModal from "@/components/shared/ContactModal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Cookies from "js-cookie";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import Notification from "./Notification";
import ProfileEditModal from "./ProfileEditModal";

const SettingMain = () => {
  const selectedProfileCookie = Cookies.get("selectedProfile");
  // Safely parse the cookie or default to null
  const selectedProfile = selectedProfileCookie
    ? JSON.parse(selectedProfileCookie)
    : null;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState({
    name: `${selectedProfile?.name ? selectedProfile?.name : "John Due"}`,
    email: !selectedProfile?.email ? "unlie@user.com" : selectedProfile?.email,
    user_picture: !selectedProfile?.picture_url
      ? "/images/danj/user_profile_pic.jpeg"
      : selectedProfile?.picture_url,
  });

  const handleSave = (updatedUser) => {
    setUser((prevUser) => ({ ...prevUser, ...updatedUser }));
  };
  return (
    <div className="mt-6 space-y-5 rounded-2xl border border-gray200 bg-white p-6 dark:border-[#FFFFFF33] dark:bg-[#FFFFFF0A] sm:space-y-6">
      {/* user-profile */}
      <div className="flex items-center justify-between rounded-xl border border-gray300 px-[11px] py-2 dark:border-[#344054] sm:px-6 sm:py-6">
        <div className="flex items-center gap-4">
          <img
            src={user.user_picture}
            alt="userImg"
            className="h-[42px] w-[42px] rounded-full sm:h-[64px] sm:w-[64px]"
          />
          <h4 className="text-lg font-bold text-secondary_main dark:text-white sm:text-xl">
            {user.name}
          </h4>
        </div>
        {/* profile edit */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex h-10 w-10 items-center justify-center gap-1.5 rounded-full border border-gray300 bg-[#FFFFFF0A] py-2 text-secondary_main dark:border-[#344054] dark:bg-[#FFFFFF0A] dark:text-white sm:w-auto sm:px-4"
        >
          <FiEdit />
          <span className="hidden text-sm font-medium sm:block">Edit</span>
        </button>
      </div>

      {/* Personal Information */}
      <div className="space-y-6 rounded-xl border border-gray300 p-4 dark:border-[#344054] sm:p-6">
        <div className="flex items-center justify-between">
          <h5 className="text-lg font-medium text-secondary_main dark:text-white">
            Personal Information
          </h5>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex h-10 w-10 items-center justify-center gap-1.5 rounded-full border border-gray300 bg-[#FFFFFF0A] py-2 text-secondary_main dark:border-[#344054] dark:text-white sm:w-auto sm:px-4"
          >
            <FiEdit />
            <span className="hidden text-sm font-medium sm:block">Edit</span>
          </button>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <p className="text-sm text-text_secondary dark:text-[#D0D5DD]">
              Full Name
            </p>
            <p className="text-base font-medium text-secondary_main dark:text-white">
              {user.name}
            </p>
          </div>
          <div>
            <p className="text-sm text-text_secondary dark:text-[#D0D5DD]">
              Email
            </p>
            <p className="text-base font-medium text-secondary_main dark:text-white">
              {user.email}
            </p>
          </div>
        </div>
      </div>

      {/* Notification */}
      <Notification />

      <div className="inline-flex items-center gap-1 text-base text-text_secondary dark:text-[#98A2B3]">
        <p>If you need any help</p>{" "}
        <Dialog>
          <DialogTrigger className="font-medium text-primary_main underline dark:text-[#665CF3]">
            Contact us
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Contact Us</DialogTitle>

              <DialogDescription>
                <ContactModal />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      <ProfileEditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        user={user}
        onSave={handleSave}
      />
    </div>
  );
};

export default SettingMain;
