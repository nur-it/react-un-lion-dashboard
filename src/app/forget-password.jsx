import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

const ForgetPasswordPage = () => {
  const navigate = useNavigate();
  return (
    <section>
      <div className="flex h-screen w-full items-center justify-center bg-dark_bg">
        <div className="w-[335px] space-y-10 rounded-2xl border border-[#FFFFFF1A] bg-[#FFFFFF0A] p-6 sm:w-[540px] sm:p-10">
          <div className="flex items-center justify-center">
            <div className="space-y-2">
              <h4 className="text-center text-2xl font-bold text-white">
                Forget Password?
              </h4>
              <p className="text-center text-[#666D80]">
                Enter the email address associated with your account and we will
                send you 6 digit code to reset your password.
              </p>
            </div>
          </div>
          <form action="#" className="space-y-10">
            <div className="space-y-2">
              <label htmlFor="Email" className="text-sm text-white">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="auth_input_field"
              />
            </div>

            <Button
              onClick={() => navigate("/forget-password-message")}
              className="h-12 w-full bg-primary_main sm:h-[56px]"
            >
              Continue
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgetPasswordPage;
