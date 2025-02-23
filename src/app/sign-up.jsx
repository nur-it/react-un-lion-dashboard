import CustomCheckbox from "@/components/shared/CustomCheckbox";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const SignUpPage = () => {
  return (
    <section>
      <div className="flex h-screen w-full items-center justify-center overflow-hidden bg-dark_bg">
        <div className="w-[335px] space-y-5 rounded-2xl border border-[#FFFFFF1A] bg-[#FFFFFF0A] p-6 sm:w-[540px] sm:space-y-10 sm:p-10">
          <div className="flex items-center justify-center">
            <div className="space-y-2">
              <h4 className="text-center text-2xl font-bold text-white">
                Welcome Back
              </h4>
              <p className="text-center text-text_disable">
                Enter your credentials to continue
              </p>
            </div>
          </div>
          <form action="#" className="space-y-5 sm:space-y-6">
            <div className="space-y-4 sm:space-y-5">
              <div className="space-y-2">
                <label htmlFor="Username" className="text-sm text-white">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="User name"
                  className="auth_input_field"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm text-white">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="auth_input_field"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="Username" className="text-sm text-white">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="auth_input_field"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <CustomCheckbox id="remember-me" />
                  <label htmlFor="remember-me" className="text-white cursor-pointer">
                    Remember me
                  </label>
                </div>
                <div>
                  <Link
                    to={"./forget-password"}
                    className="font-medium text-primary_main"
                  >
                    Forget Password?
                  </Link>
                </div>
              </div>
            </div>
            <Button className="h-12 w-full bg-primary_main sm:h-[56px]">
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
