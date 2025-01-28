import { Button } from "@/components/ui/button";
import useAuthentication from "@/hooks/use-authentication";

const ResetPasswordPage = () => {
  const { register, errors, handleSubmit, onSubmitResetPassword, isLoading } =
    useAuthentication();
  return (
    <section>
      <div className="flex h-screen w-full items-center justify-center bg-dark_bg">
        <div className="w-[335px] space-y-10 rounded-2xl border border-[#FFFFFF1A] bg-[#FFFFFF0A] p-6 sm:w-[540px] sm:p-10">
          <div className="flex items-center justify-center">
            <div className="space-y-2">
              <h4 className="text-center text-2xl font-bold text-white">
                Reset Password?
              </h4>
              <p className="text-center text-[#666D80]">
                Enter the your new password and confirm password to reset your
                password.
              </p>
            </div>
          </div>
          <form
            action="#"
            onSubmit={handleSubmit(onSubmitResetPassword)}
            className="space-y-10"
          >
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm text-white">
                New Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="auth_input_field"
                {...register("password", {
                  required: "The password you entered is incorrect.",
                })}
              />
              {errors.password && (
                <p className="text-sm text-error">{errors.password.message}</p>
              )}
            </div>{" "}
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm text-white">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="auth_input_field"
                {...register("confirm_password", {
                  required: "The password you entered is incorrect",
                })}
              />
              {errors.confirm_password && (
                <p className="text-sm text-error">
                  {errors.confirm_password.message}
                </p>
              )}
            </div>
            <Button
              disabled={isLoading}
              type="submit"
              className="h-12 w-full bg-primary_main sm:h-[56px]"
            >
              {isLoading ? "Resetting..." : "Reset Password"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ResetPasswordPage;
