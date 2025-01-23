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
    setValue(field, ""); 
    setInputStatus((prev) => ({ ...prev, [field]: undefined }));
  };

  const renderIcon = (field, status) => {
    switch (status) {
      case "valid":
        return <img src={tickMark} alt="valid" className="h-6 w-6" />;
      case "typing":
        return (
          <img
            src={rotateLeft}
            alt="refresh"
            className="h-6 w-6 cursor-pointer"
            onMouseDown={(e) => e.preventDefault()} 
            onClick={() => clearInput(field)} 
          />
        );
      case "invalid":
        return (
          <img
            src={crossCircle}
            alt="invalid"
            className="h-6 w-6 cursor-pointer"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => clearInput(field)} 
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4 md:grid md:grid-cols-9 md:gap-10 md:space-y-0">
      <div className="md:col-span-3">
        <div className="relative flex items-center gap-1.5">
          <p className="text-base font-medium text-secondary_main dark:text-white sm:text-lg">
            Trusted Online Sources
          </p>
          <img src={info} alt="info" className="h-5 w-5 cursor-pointer" />
        </div>
      </div>
      <div className="md:col-span-6">
        <form className="space-y-3 md:space-y-6">
          <div className="grid gap-3 md:grid-cols-2">
            {[
              {
                name: "wikipedia",
                placeholder: "Wikipedia Page",
                label: "Wikipedia Page",
              },
              { name: "x", placeholder: "X account name", label: "X" },
              {
                name: "facebook",
                placeholder: "Facebook account name",
                label: "Facebook",
              },
              {
                name: "instagram",
                placeholder: "Instagram account name",
                label: "Instagram",
              },
              {
                name: "tiktok",
                placeholder: "TikTok account name",
                label: "TikTok",
              },
              {
                name: "youtube",
                placeholder: "Youtube account name",
                label: "Youtube",
              },
            ].map((field, index) => (
              <div className="space-y-1" key={index}>
                <label
                  htmlFor={field.name}
                  className="trusted-label dark:text-white"
                >
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
                    onChange={(e) =>
                      handleInputChange(field.name, e.target.value)
                    }
                    onBlur={(e) => handleInputBlur(field.name, e.target.value)}
                  />
                  {renderIcon(field.name, inputStatus[field.name])}
                </div>
                {errors[field.name] && (
                  <p className="text-sm text-red-500">
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
