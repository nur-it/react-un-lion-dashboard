import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const SignInPage = () => {
  return (
    <section>
      <div className="flex h-screen w-full items-center justify-center bg-dark_bg">
        <div className="w-[540px] space-y-10 rounded-2xl border border-[#FFFFFF1A] bg-[#FFFFFF0A] p-10">
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
          <form action="#" className="space-y-6">
            <div className="space-y-5">
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
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="accent-checkbox"
                    className="h-5 w-5 rounded border-[#98A2B3] text-blue-600"
                  />
                  <label htmlFor="accent-checkbox" className="text-white">
                    Remember me
                  </label>
                </div>
                <div>
                  <Link to={"#"} className="font-medium text-primary_main">
                    Forget Password?
                  </Link>
                </div>
              </div>
            </div>
            <Button className="h-[56px] w-full bg-primary_main">Sign In</Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
