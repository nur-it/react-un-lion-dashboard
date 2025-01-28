import { useState } from "react";
import { useForm } from "react-hook-form";
import tickMark from "../../../assets/icon/check-circle.svg";
import info from "../../../assets/icon/information-circle.svg";
import rotateLeft from "../../../assets/icon/rotate_left.svg";
import crossCircle from "../../../assets/icon/x-circle.svg";
import Tooltip from "./Tooltip";

const TrustedOnlineSources = () => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const [hoveredTooltip, setHoveredTooltip] = useState(null);

  const fields = [
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
    { name: "tiktok", placeholder: "TikTok account name", label: "TikTok" },
    { name: "youtube", placeholder: "Youtube account name", label: "Youtube" },
  ];

  const patterns = {
    wikipedia: /^https?:\/\/(www\.)?wikipedia\.org\/.+$/,
    x: /^[a-zA-Z0-9_]{3,}$/,
    facebook: /^[a-zA-Z0-9.]{3,}$/,
    instagram: /^[a-zA-Z0-9._]{3,}$/,
    tiktok: /^[a-zA-Z0-9._]{3,}$/,
    youtube: /^https?:\/\/(www\.)?youtube\.com\/.+$/,
  };

  const [inputStatus, setInputStatus] = useState(
    fields.reduce((acc, field) => ({ ...acc, [field.name]: "typing" }), {}),
  );

  const [typingTimeouts, setTypingTimeouts] = useState({});

  const handleInputChange = (field, value) => {
    setInputStatus((prev) => ({ ...prev, [field]: "typing" }));

    // Clear the existing timeout for this field
    if (typingTimeouts[field]) {
      clearTimeout(typingTimeouts[field]);
    }

    // Set a new timeout to validate the input after a delay
    const timeout = setTimeout(() => {
      const pattern = patterns[field];
      if (value.trim() && pattern && pattern.test(value.trim())) {
        setInputStatus((prev) => ({ ...prev, [field]: "valid" }));
      } else {
        setInputStatus((prev) => ({ ...prev, [field]: "invalid" }));
      }
    }, 500);

    setTypingTimeouts((prev) => ({ ...prev, [field]: timeout }));
  };

  const clearInput = (field) => {
    setValue(field, "");
    setInputStatus((prev) => ({ ...prev, [field]: "typing" }));
    if (typingTimeouts[field]) {
      clearTimeout(typingTimeouts[field]);
    }
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

  const tooltips = {
    trustedOnlineSources: "Enter trusted online sources",
  };

  return (
    <div className="space-y-4 md:grid md:grid-cols-9 md:gap-10 md:space-y-0">
      <div className="md:col-span-3">
        <div className="relative flex items-center gap-1.5">
          <h5 className="text-sm font-medium text-secondary_main dark:text-white sm:text-lg">
            Trusted Online Sources
          </h5>
          <div
            className="relative"
            onMouseEnter={() => setHoveredTooltip("trustedOnlineSources")}
            onMouseLeave={() => setHoveredTooltip(null)}
          >
            <img src={info} alt="info" className="cursor-pointer" />
            <Tooltip
              content={tooltips.trustedOnlineSources}
              isVisible={hoveredTooltip === "trustedOnlineSources"}
            />
          </div>
        </div>
      </div>
      <div className="md:col-span-6">
        <form className="space-y-3 md:space-y-6">
          <div className="grid gap-3 md:grid-cols-2">
            {fields.map((field, index) => (
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
                      pattern: {
                        value: patterns[field.name],
                        message: `Invalid ${field.label}`,
                      },
                    })}
                    type="text"
                    placeholder={field.placeholder}
                    className="trusted-input-field bg-transparent"
                    onChange={(e) =>
                      handleInputChange(field.name, e.target.value)
                    }
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
