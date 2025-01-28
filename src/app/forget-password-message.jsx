import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
import closeIcon from "../assets/icon/x.svg";
import mgsBox from "../assets/img/message-box.svg";

const ForgetPasswordMessagePage = () => {
  const navigate = useNavigate();
  return (
    <section>
      <div className="flex h-screen w-full items-center justify-center bg-dark_bg">
        <div className="relative w-[335px] space-y-10 rounded-2xl border border-[#FFFFFF1A] bg-[#FFFFFF0A] p-6 sm:w-[540px] sm:p-10">
          <div className="space-y-3">
            <div className="flex items-center justify-center">
              <img src={mgsBox} alt="mgsBox" />
            </div>
            <h4 className="text-center text-2xl font-bold text-white">
              Check Your Email
            </h4>
            <p className="text-center leading-6 text-[#D0D5DD]">
              If an account with this email address exists in our system,
              we&apos;ve sent a password reset link to your email. Please check
              your inbox (and spam folder) for further instructions.
            </p>
          </div>

          <Button
            onClick={() => navigate("/reset-password")}
            className="h-12 w-full bg-primary_main sm:h-[56px]"
          >
            OK
          </Button>

          <div className="absolute right-[21px] top-[-21px]">
            <button className="cursor-pointer">
              <img src={closeIcon} alt="closeIcon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgetPasswordMessagePage;
