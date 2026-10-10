import type { Metadata } from "next";

import ForgotPasswordForm from "@/components/auth/forgot-password-form";
import MaterialIcon from "@/components/material-icon";

export const metadata: Metadata = {
  title: "Forgot password | Nutripak",
  description:
    "Reset your Nutripak account password and get back to your nutrition routine.",
};

export default function ForgotPasswordPage() {
  return (
    <section className="w-full py-12 md:py-20 px-margin-mobile md:px-margin">
      <div className="max-w-[1320px] mx-auto">
        <nav className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant mb-6 flex-wrap">
          <span>Home</span>
          <span className="text-outline-variant">/</span>
          <span className="text-primary font-semibold">Forgot password</span>
        </nav>

        <div className="max-w-md mx-auto">
          <div className="rounded-3xl bg-surface-container-lowest p-8 md:p-10 shadow-md flex flex-col gap-6">
            <div className="flex flex-col items-center gap-3 text-center">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary-container text-on-secondary-fixed">
                <MaterialIcon name="lock_reset" className="text-[28px]" />
              </span>
              <h1 className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary font-normal">
                Forgot your password?
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Enter the email you signed up with and we&apos;ll send you a link
                to choose a new password.
              </p>
            </div>
            <ForgotPasswordForm />
          </div>
        </div>
      </div>
    </section>
  );
}
