import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router";
import userImg from "../../../assets/img/user.svg";
import Notification from "./Notification";
import ProfileEditModal from "./ProfileEditModal";
const SettingMain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState({
    name: "John Due",
    email: "username@gmail.com",
    profilePic: userImg,
  });

  const handleSave = (updatedUser) => {
    setUser(updatedUser);
  };
  return (
    <div className="mt-6 space-y-5 rounded-2xl border border-gray200 bg-white p-6 dark:border-[#FFFFFF33] dark:bg-[#FFFFFF0A] sm:space-y-6">
      {/* user-profile */}
      <div className="flex items-center justify-between rounded-xl border border-gray300 px-[11px] py-2 dark:border-[#344054] sm:px-6 sm:py-6">
        <div className="flex items-center gap-4">
          <img
            src={userImg}
            alt="userImg"
            className="h-[42px] w-[42px] sm:h-[64px] sm:w-[64px]"
          />
          <h4 className="text-lg font-bold text-secondary_main dark:text-white sm:text-xl">
            John Due
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
              John Due
            </p>
          </div>
          <div>
            <p className="text-sm text-text_secondary dark:text-[#D0D5DD]">
              Email
            </p>
            <p className="text-base font-medium text-secondary_main dark:text-white">
              username@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Notification */}
      <Notification />

      <p className="text-base text-text_secondary dark:text-[#98A2B3]">
        If you need any help{" "}
        <Link
          to={"/contact-us"}
          className="font-medium text-primary_main underline dark:text-[#665CF3]"
        >
          Contact us
        </Link>{" "}
      </p>

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
