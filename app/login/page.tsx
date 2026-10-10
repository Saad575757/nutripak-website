import type { Metadata } from "next";

import LoginForm from "@/components/auth/login-form";
import MaterialIcon from "@/components/material-icon";
import { ROUTES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sign in | Nutripak",
  description:
    "Sign in to your Nutripak account to track orders and manage your nutrition routine.",
};

export default function LoginPage() {
  return (
    <section className="w-full py-12 md:py-20 px-margin-mobile md:px-margin">
      <div className="max-w-[1320px] mx-auto">
        <nav className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant mb-6 flex-wrap">
          <span>Home</span>
          <span className="text-outline-variant">/</span>
          <span className="text-primary font-semibold">Sign in</span>
        </nav>

        <div className="max-w-md mx-auto">
          <div className="rounded-3xl bg-surface-container-lowest p-8 md:p-10 shadow-md flex flex-col gap-6">
            <div className="flex flex-col items-center gap-3 text-center">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary-container text-on-secondary-fixed">
                <MaterialIcon name="account_circle" className="text-[28px]" />
              </span>
              <h1 className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary font-normal">
                Welcome back
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Sign in to your Nutripak account to review your orders and
                personal nutrition plan.
              </p>
            </div>
            <LoginForm />
            <p className="font-caption text-caption text-on-surface-variant text-center">
              Orders don&apos;t require an account —{" "}
              <a className="text-secondary font-bold hover:underline" href={ROUTES.shop}>
                continue as a guest
              </a>{" "}
              at checkout.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}