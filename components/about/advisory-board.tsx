import MaterialIcon from "@/components/material-icon";
import { ABOUT_TEAM, ABOUT_TEAM_MEMBERS } from "@/lib/about";

export default function AdvisoryBoard() {
  return (
    <section className="w-full py-16 md:py-24" id="team">
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-normal leading-tight">
            {ABOUT_TEAM.heading}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            {ABOUT_TEAM.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABOUT_TEAM_MEMBERS.map((member) => (
            <div
              key={member.role}
              className="rounded-xl bg-surface-container-lowest p-7 flex flex-col gap-6 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                <MaterialIcon name={member.icon} className="text-[30px]" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-title-lg text-title-lg text-primary font-bold leading-snug">
                  {member.role}
                </h3>
                <span className="self-start px-3 py-1 rounded-full bg-secondary-container/40 text-secondary font-label-sm text-label-sm font-bold uppercase tracking-wider">
                  {member.focus}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
