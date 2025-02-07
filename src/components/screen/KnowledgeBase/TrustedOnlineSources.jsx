import useKnowledgeBase from "@/hooks/use-knowledge-base.jsx";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import tickMark from "../../../assets/icon/check-circle.svg";
import rotateLeft from "../../../assets/icon/rotate_left.svg";
import crossCircle from "../../../assets/icon/x-circle.svg";

const TrustedOnlineSources = () => {
  const { fetchInitSources } = useKnowledgeBase();
  const [initialValues, setSourceData] = useState({ url: {}, status: {} });

  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  const [inputStatus, setInputStatus] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchInitSources(); // Fetch URLs and statuses
      setSourceData(data);

      // ✅ Set field values dynamically
      Object.entries(data.url || {}).forEach(([key, value]) => {
        setValue(key, value); // ✅ Set the URL as the value
      });

      // ✅ Initialize inputStatus with corresponding statuses
      setInputStatus(
        Object.keys(data.status || {}).reduce(
          (acc, key) => ({ ...acc, [key]: data.status[key] || "typing" }),
          {},
        ),
      );
    };

    fetchData();
  }, [setValue]); // ✅ `setValue` ensures proper updates

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

  const renderIcon = (field) => {
    const status = inputStatus[field] || "typing"; // ✅ Use fetched status

    switch (status) {
      case "valid":
        return <img src={tickMark} alt="valid" className="h-6 w-6" />;
      case "in progress":
        return (
          <img
            src={rotateLeft}
            alt="refresh"
            className="h-6 w-6 cursor-pointer"
            onMouseDown={(e) => e.preventDefault()}
          />
        );
      case "invalid":
        return (
          <img
            src={crossCircle}
            alt="invalid"
            className="h-6 w-6 cursor-pointer"
            onMouseDown={(e) => e.preventDefault()}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4 md:grid md:grid-cols-9 md:gap-10 md:space-y-0">
      <div className="md:col-span-3">
        <h5 className="text-sm font-medium text-secondary_main dark:text-white sm:text-lg">
          Trusted Online Sources
        </h5>
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
                    {...register(field.name)}
                    type="text"
                    placeholder={field.placeholder}
                    value={watch(field.name) || ""} // ✅ Ensure value updates dynamically
                    className="trusted-input-field bg-transparent"
                    onChange={(e) => setValue(field.name, e.target.value)}
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
