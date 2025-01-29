import { Button } from "../ui/button";

const ContactModal = () => {
  return (
    <div className="space-y-8">
      <div className="h-[1px] w-full bg-[#E4E7EC] dark:bg-white_opacity10" />
      <form action="#" className="space-y-8">
        <div className="space-y-4">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="name"
              className="text-sm font-medium text-secondary_main dark:text-white"
            >
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              className="h-[46px] w-full rounded-lg border border-gray300 bg-black/[0.04] px-4 py-2 text-sm outline-none placeholder:text-black/[0.50] dark:border-[#FFFFFF1A] dark:bg-[#FFFFFF0A] dark:placeholder:text-[#FFFFFF80] md:text-base"
            />
          </div>{" "}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-sm font-medium text-secondary_main dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              required
              placeholder="Email"
              className="h-[46px] w-full rounded-lg border border-gray300 bg-black/[0.04] px-4 py-2 text-sm outline-none placeholder:text-black/[0.50] dark:border-[#FFFFFF1A] dark:bg-[#FFFFFF0A] dark:placeholder:text-[#FFFFFF80] md:text-base"
            />
          </div>{" "}
          <div className="flex flex-col gap-1">
            <label
              htmlFor="message"
              className="text-sm font-medium text-secondary_main dark:text-white"
            >
              Message
            </label>
            <textarea
              placeholder="Type Your Message"
              role="textbox"
              rows={5}
              className="w-full resize-none rounded-lg border border-gray300 bg-black/[0.04] px-4 py-2 text-sm outline-none placeholder:text-black/[0.50] dark:border-[#FFFFFF1A] dark:bg-[#FFFFFF0A] dark:placeholder:text-[#FFFFFF80] md:text-base"
            />
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
