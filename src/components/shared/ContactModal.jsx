import { useForm } from "react-hook-form";
import { Button } from "../ui/button";

const ContactModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
  };

  return (
    <div className="space-y-8">
      <div className="h-[1px] w-full bg-[#E4E7EC] dark:bg-white_opacity10" />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-secondary_main dark:text-white">
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: "Name is required" })}
              className="h-[46px] w-full rounded-lg border border-gray300 bg-black/[0.04] px-4 py-2 text-sm outline-none placeholder:text-black/[0.50] dark:border-[#FFFFFF1A] dark:bg-[#FFFFFF0A] dark:placeholder:text-[#FFFFFF80] md:text-base"
            />
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-secondary_main dark:text-white">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                  message: "Invalid email",
                },
              })}
              className="h-[46px] w-full rounded-lg border border-gray300 bg-black/[0.04] px-4 py-2 text-sm outline-none placeholder:text-black/[0.50] dark:border-[#FFFFFF1A] dark:bg-[#FFFFFF0A] dark:placeholder:text-[#FFFFFF80] md:text-base"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-secondary_main dark:text-white">
              Message
            </label>
            <textarea
              placeholder="Type Your Message"
              rows={5}
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters",
                },
              })}
              className="w-full resize-none rounded-lg border border-gray300 bg-black/[0.04] px-4 py-2 text-sm outline-none placeholder:text-black/[0.50] dark:border-[#FFFFFF1A] dark:bg-[#FFFFFF0A] dark:placeholder:text-[#FFFFFF80] md:text-base"
            />
            {errors.message && (
              <p className="text-sm text-red-500">{errors.message.message}</p>
            )}
          </div>
        </div>
        <Button type="submit" className="w-full">
          Send
        </Button>
      </form>
    </div>
  );
};

export default ContactModal;
