import { Button } from "@/components/ui/button";
import useAuthentication from "@/hooks/use-authentication";

const ForgetPasswordPage = () => {
  const { register, errors, handleSubmit, onSubmitForgotPassword, isLoading } =
    useAuthentication();
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
          <form
            action="#"
            onSubmit={handleSubmit(onSubmitForgotPassword)}
            className="space-y-10"
          >
            <div className="space-y-2">
              <label htmlFor="Email" className="text-sm text-white">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="auth_input_field"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="text-sm text-error">
                  {errors.email.message}
                </span>
              )}
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="h-12 w-full bg-primary_main sm:h-[56px]"
            >
              {isLoading ? "Continuing..." : "Continue"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgetPasswordPage;
