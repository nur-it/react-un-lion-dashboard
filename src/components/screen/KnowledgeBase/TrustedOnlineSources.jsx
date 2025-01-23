import { useState } from "react";
import { useForm } from "react-hook-form";
import tickMark from "../../../assets/icon/check-circle.svg";
import info from "../../../assets/icon/information-circle.svg";
import rotateLeft from "../../../assets/icon/rotate_left.svg";
import crossCircle from "../../../assets/icon/x-circle.svg";

const TrustedOnlineSources = () => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useForm();
  
  const [inputStatus, setInputStatus] = useState({});

  const handleInputChange = (field, value) => {
    if (value.trim() === "") {
      setInputStatus((prev) => ({ ...prev, [field]: "invalid" }));
    } else {
      setInputStatus((prev) => ({ ...prev, [field]: "typing" }));
    }
  };

  const handleInputBlur = (field, value) => {
    if (value.trim().length >= 3 && !errors[field]) {
      setInputStatus((prev) => ({ ...prev, [field]: "valid" }));
    } else if (value.trim() !== "") {
      setInputStatus((prev) => ({ ...prev, [field]: "invalid" }));
    }
  };

  const clearInput = (field) => {
    setValue(field, ""); // Clear the input value
    setInputStatus((prev) => ({ ...prev, [field]: undefined })); // Reset the status
  };

  const renderIcon = (field, status) => {
    switch (status) {
      case "valid":
        return <img src={tickMark} alt="valid" className="w-6 h-6" />;
      case "typing":
        return (
          <img
            src={rotateLeft}
            alt="refresh"
            className="w-6 h-6 cursor-pointer"
            onClick={() => clearInput(field)}
          />
        );
      case "invalid":
        return (
          <img
            src={crossCircle}
            alt="invalid"
            className="w-6 h-6 cursor-pointer"
            onClick={() => clearInput(field)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="md:grid md:grid-cols-9 md:gap-10 space-y-4 md:space-y-0">
      <div className="md:col-span-3">
        <div className="relative flex items-center gap-1.5">
          <p className="text-base sm:text-lg font-medium text-secondary_main dark:text-white">
            Trusted Online Sources
          </p>
          <img src={info} alt="info" className="cursor-pointer w-5 h-5" />
        </div>
      </div>
      <div className="md:col-span-6">
        <form className="space-y-3 md:space-y-6">
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { name: "wikipedia", placeholder: "Wikipedia Page", label: "Wikipedia Page" },
              { name: "x", placeholder: "X account name", label: "X" },
              { name: "facebook", placeholder: "Facebook account name", label: "Facebook" },
              { name: "instagram", placeholder: "Instagram account name", label: "Instagram" },
              { name: "tiktok", placeholder: "TikTok account name", label: "TikTok" },
              { name: "youtube", placeholder: "Youtube account name", label: "Youtube" },
            ].map((field, index) => (
              <div className="space-y-1" key={index}>
                <label htmlFor={field.name} className="trusted-label dark:text-white">
                  {field.label}
                </label>
                <div className="trusted-input-box flex items-center gap-2">
                  <input
                    {...register(field.name, {
                      required: `${field.label} is required`,
                      minLength: {
                        value: 3,
                        message: `${field.label} must be at least 3 characters`,
                      },
                    })}
                    type="text"
                    placeholder={field.placeholder}
                    className="trusted-input-field"
                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                    onBlur={(e) => handleInputBlur(field.name, e.target.value)}
                  />
                  {renderIcon(field.name, inputStatus[field.name])}
                </div>
                {errors[field.name] && (
                  <p className="text-red-500 text-sm">
                    {errors[field.name].message}
                  </p>
                )}
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default TrustedOnlineSources;
