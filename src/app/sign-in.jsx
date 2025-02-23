import CustomCheckbox from "@/components/shared/CustomCheckbox";
import { Button } from "@/components/ui/button";
import useAuthentication from "@/hooks/use-authentication";
import { Link } from "react-router";

const SignInPage = () => {
  const { register, errors, handleSubmit, onSubmitLogin, isLoading } = useAuthentication();
  return (
    <section>
      <div className="flex h-screen w-full items-center justify-center bg-dark_bg">
        <div className="w-[335px] space-y-10 rounded-2xl border border-[#FFFFFF1A] bg-[#FFFFFF0A] p-6 sm:w-[540px] sm:p-10">
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
          <form onSubmit={handleSubmit(onSubmitLogin)} className="space-y-6">
            <div className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="username" className="text-sm text-white">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="User name"
                  defaultValue="admin"
                  className="auth_input_field"
                  {...register("username", {
                    required: "Username is required",
                  })}
                />
                {errors.username && (
                  <p className="text-sm text-error">
                    {errors.username.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm text-white">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  defaultValue="admin"
                  className="auth_input_field"
                  {...register("password", {
                    required:
                      "The password you entered is incorrect. Please try again or reset your password.",
                  })}
                />
                {errors.password && (
                  <p className="text-sm text-error">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <CustomCheckbox id="remember-me" />
                  <label
                    htmlFor="remember-me"
                    className="cursor-pointer text-white"
                  >
                    Remember me
                  </label>
                </div>
                <div>
                  <Link
                    to={"/forget-password"}
                    className="font-medium text-primary_main"
                  >
                    Forget Password?
                  </Link>
                </div>
              </div>
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="h-12 w-full bg-primary_main sm:h-[56px]"
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
