import { useState } from "react";
import { FiX } from "react-icons/fi";

const ProfileEditModal = ({ isOpen, onClose, user, onSave }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [profilePic, setProfilePic] = useState(user.profilePic);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e) => {
    setIsUploading(true);
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file));
      setIsUploading(false);
    } else {
      setIsUploading(false);
    }
  };

  const handleSave = () => {
    onSave({ name, email, profilePic });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative rounded-lg bg-white border-gray300  dark:bg-[#070c22] p-6 w-[300px] sm:w-[340px]">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500"
        >
          <FiX size={28} />
        </button>
        <h2 className="text-center text-lg font-bold mt-5">Edit Profile</h2>
        <div className="flex w-full items-center justify-center">
          <div className="mt-4 ">
            {profilePic && (
              <img
                src={profilePic}
                alt="Profile"
                className="mb-5 h-24 w-24 rounded-full border-[2px] border-[#070c22] dark:border-[#FFFFFF1A]"
              />
            )}
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer rounded border border-gray-300 bg-primary_main text-white px-2 h-8 flex items-center text-center hover:bg-blue-500 dark:border-[#FFFFFF1A]"
            >
              {isUploading ? "Uploading image..." : "Choose file"}
            </label>
          </div>
        </div>
        <div className="mt-4">
          <label className="mb-2 block">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="modal_input-field"
          />
        </div>
        <div className="mt-4">
          <label className="mb-2 block">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="modal_input-field"
          />
        </div>
        <button
          onClick={handleSave}
          className="mt-8 w-full rounded bg-blue-500 p-2 text-white hover:bg-blue-600"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ProfileEditModal;
