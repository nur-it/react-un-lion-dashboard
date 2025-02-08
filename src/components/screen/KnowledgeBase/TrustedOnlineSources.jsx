import useKnowledgeBase from "@/hooks/use-knowledge-base.jsx";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import tickMark from "../../../assets/icon/check-circle.svg";
import rotateLeft from "../../../assets/icon/rotate_left.svg";
import crossCircle from "../../../assets/icon/x-circle.svg";

const TrustedOnlineSources = () => {
  const { fetchInitSources, saveTrustfulSource } = useKnowledgeBase();
  const [initialValues, setSourceData] = useState({ url: {}, status: {} });

  const {
    register,
    setValue,
    watch,
    formState: { errors, isValid, isDirty },
    handleSubmit,
  } = useForm({ mode: "onChange" }); // Enable onChange mode for validation

  const [inputStatus, setInputStatus] = useState({});

  // Fetch and initialize data
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchInitSources(); // Fetch URLs and statuses
      setSourceData(data);

      // Set initial values dynamically
      Object.entries(data.url || {}).forEach(([key, value]) => {
        setValue(key, value);
      });

      // Initialize inputStatus with the status from the fetched data
      setInputStatus(
        Object.keys(data.status || {}).reduce(
          (acc, key) => ({ ...acc, [key]: data.status[key] || "typing" }),
          {},
        ),
      );
    };

    fetchData();
  }, [setValue]);

  const fields = [
    {
      name: "Wikipedia",
      placeholder: "Wikipedia Page",
      label: "Wikipedia Page",
    },
    { name: "X", placeholder: "X account name", label: "X" },
    {
      name: "Facebook",
      placeholder: "Facebook account name",
      label: "Facebook",
    },
    {
      name: "Instagram",
      placeholder: "Instagram account name",
      label: "Instagram",
    },
    { name: "Tiktok", placeholder: "TikTok account name", label: "TikTok" },
    { name: "Youtube", placeholder: "Youtube account name", label: "Youtube" },
  ];

  const handleSave = async (data) => {
    const updatedData = { ...data }; // Prepare data to be sent
    await saveTrustfulSource(updatedData); // Call your API to save the data
  };

  const renderIcon = (field) => {
    const error = errors[field];
    const isValidField = !error && watch(field); // Valid if no error and the value exists

    if (error) {
      return (
        <img
          src={crossCircle}
          alt="invalid"
          className="h-6 w-6 cursor-pointer"
          onMouseDown={(e) => e.preventDefault()}
        />
      );
    }

    if (isValidField) {
      return (
        <img
          src={tickMark}
          alt="valid"
          className="h-6 w-6 cursor-pointer"
          onClick={() => handleSave({ [field]: watch(field) })} // Save when clicking tick mark
        />
      );
    }

    return (
      <img
        src={rotateLeft}
        alt="in progress"
        className="h-6 w-6 cursor-pointer"
        onMouseDown={(e) => e.preventDefault()} // Prevent click to avoid issues
      />
    );
  };

  return (
    <div className="space-y-4 md:grid md:grid-cols-9 md:gap-10 md:space-y-0">
      <div className="md:col-span-3">
        <h5 className="text-sm font-medium text-secondary_main dark:text-white sm:text-lg">
          Trusted Online Sources
        </h5>
      </div>
      <div className="md:col-span-6">
        <form
          className="space-y-3 md:space-y-6"
          onSubmit={handleSubmit(handleSave)}
        >
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
                      pattern:
                        field.name === "Wikipedia"
                          ? {
                              value: /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/gm,
                              message: "Please enter a valid URL",
                            }
                          : undefined,
                    })}
                    type="text"
                    placeholder={field.placeholder}
                    value={watch(field.name) || ""}
                    className="trusted-input-field bg-transparent"
                  />
                  {renderIcon(field.name)}
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
