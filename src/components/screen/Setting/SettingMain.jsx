import { FiEdit } from "react-icons/fi";
import userImg from "../../../assets/img/user.svg";
import Notification from "./Notification";
const SettingMain = () => {
  return (
    <div className="mt-6 space-y-6 rounded-2xl border border-gray200 bg-white p-6">
      {/* user-profile */}
      <div className="flex items-center justify-between rounded-xl border border-gray300 p-6">
        <div className="flex items-center gap-4">
          <img src={userImg} alt="userImg" width={64} height={64} />
          <h4 className="text-xl font-bold text-secondary_main">John Due</h4>
        </div>
        <button className="flex h-10 items-center gap-1.5 rounded-full border border-gray300 bg-[#FFFFFF0A] px-4 py-2 text-secondary_main">
          <FiEdit />
          <span className="text-sm font-medium">Edit</span>
        </button>
      </div>

      {/* Personal Information */}
      <div className="space-y-6 rounded-xl border border-gray300 p-6">
        <div className="flex items-center justify-between">
          <h5 className="text-lg font-medium text-secondary_main">
            Personal Information
          </h5>
          <button className="flex h-10 items-center gap-1.5 rounded-full border border-gray300 bg-[#FFFFFF0A] px-4 py-2 text-secondary_main">
            <FiEdit />
            <span className="text-sm font-medium">Edit</span>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-sm text-text_secondary">Full Name</p>
            <p className="text-base font-medium text-secondary_main">
              John Due
            </p>
          </div>
          <div>
            <p className="text-sm text-text_secondary">Email</p>
            <p className="text-base font-medium text-secondary_main">
              username@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Notification */}
      <Notification />
    </div>
  );
};

export default SettingMain;
