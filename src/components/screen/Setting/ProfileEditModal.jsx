import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";

const ProfileEditModal = ({ isOpen, onClose, user, onSave }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [profilePic, setProfilePic] = useState(user.profilePic);
  const [isUploading, setIsUploading] = useState(false);

  // Sync the state with the user prop when the modal opens
  useEffect(() => {
    if (isOpen) {
      setName(user.name);
      setEmail(user.email);
      setProfilePic(user.profilePic);
    }
  }, [isOpen, user]);

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
      <div className="relative z-50 w-[300px] rounded-lg border-gray300 bg-white p-6 dark:bg-[#070c22] sm:w-[340px]">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500"
        >
          <FiX size={28} />
        </button>
        <h2 className="mt-1 text-center text-lg font-bold sm:mt-5">
          Edit Profile
        </h2>
        <div className="flex w-full items-center justify-center">
          <div className="mt-4">
            {profilePic && (
              <div className="mb-2 sm:mb-5">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="h-24 w-24 rounded-full border-[2px] border-[#070c22] dark:border-[#FFFFFF1A]"
                />
              </div>
            )}
            <input
              type="file"
              onChange={handleFileChange}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="flex h-8 cursor-pointer items-center rounded border border-gray-300 bg-primary_main px-2 text-center text-white hover:bg-blue-500 dark:border-[#FFFFFF1A]"
            >
              {isUploading ? "Uploading image..." : "Choose file"}
            </label>
          </div>
        </div>
        <div className="mt-2 sm:mt-4">
          <label className="mb-1 block text-sm">Full Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="modal_input-field"
          />
        </div>
        <div className="mt-2 sm:mt-4">
          <label className="mb-1 block text-sm">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="modal_input-field"
          />
        </div>
        <button
          onClick={handleSave}
          className="mt-2 w-full rounded bg-blue-500 p-2 text-white hover:bg-blue-600 sm:mt-8"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ProfileEditModal;
