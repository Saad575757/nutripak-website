import type { Metadata } from "next";

import ResetPasswordForm from "@/components/auth/reset-password-form";
import MaterialIcon from "@/components/material-icon";

export const metadata: Metadata = {
  title: "Reset password | Nutripak",
  description: "Choose a new password for your Nutripak account.",
};

export default async function ResetPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string | string[] }>;
}) {
  const params = await searchParams;
  const token = typeof params.token === "string" ? params.token : "";

  return (
    <section className="w-full py-12 md:py-20 px-margin-mobile md:px-margin">
      <div className="max-w-[1320px] mx-auto">
        <nav className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant mb-6 flex-wrap">
          <span>Home</span>
          <span className="text-outline-variant">/</span>
          <span className="text-primary font-semibold">Reset password</span>
        </nav>

        <div className="max-w-md mx-auto">
          <div className="rounded-3xl bg-surface-container-lowest p-8 md:p-10 shadow-md flex flex-col gap-6">
            <div className="flex flex-col items-center gap-3 text-center">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary-container text-on-secondary-fixed">
                <MaterialIcon name="lock_reset" className="text-[28px]" />
              </span>
              <h1 className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary font-normal">
                Choose a new password
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Pick a strong password you haven&apos;t used before.
              </p>
            </div>
            <ResetPasswordForm token={token} />
          </div>
        </div>
      </div>
    </section>
  );
}
