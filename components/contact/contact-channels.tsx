"use client";

import { useState } from "react";
import Image from "next/image";

import MaterialIcon from "@/components/material-icon";
import {
  CONCIERGE_PHONE_IMAGE,
  HEADQUARTERS_ADDRESS,
  INBOX_CHANNELS,
  TELEPHONE_DISPLAY,
  TELEPHONE_HREF,
} from "@/lib/contact";

type ChatStatus = "idle" | "connecting" | "connected";

const CHAT_AVATARS = ["DR", "MS", "RD"];

export default function ContactChannels() {
  const [chatStatus, setChatStatus] = useState<ChatStatus>("idle");

  const handleStartChat = () => {
    setChatStatus("connecting");
    setTimeout(() => setChatStatus("connected"), 1400);
  };

  return (
    <div className="lg:col-span-5 flex flex-col gap-6">
      <div className="p-6 md:p-8 rounded-xl bg-primary text-on-primary shadow-xl relative overflow-hidden">
        <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-primary-container/60 blur-2xl pointer-events-none"></div>
        <div className="flex items-center justify-between mb-4">
          <span className="px-3 py-1 rounded-full bg-primary-container text-secondary-fixed font-label-sm text-label-sm uppercase tracking-wider font-bold">
            Instant Triage
          </span>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary-fixed animate-pulse"></span>
            <span className="font-label-sm text-label-sm text-primary-fixed">
              Online Now
            </span>
          </div>
        </div>
        <h2 className="font-headline-md text-headline-md font-normal leading-tight mb-2 text-on-primary">
          Live Clinical Chat
        </h2>
        <p className="font-body-md text-body-md text-primary-fixed-dim mb-6">
          Get prompt guidance on supplement interactions, batch purity reports,
          or order tracking with on-duty nutrition specialists.
        </p>
        <div className="flex items-center justify-between gap-4 p-3.5 rounded-lg bg-primary-container/80 mb-6">
          <div className="flex items-center gap-3">
            <MaterialIcon name="schedule" className="text-secondary-fixed text-[24px]" />
            <div>
              <span className="font-caption text-caption text-primary-fixed-dim uppercase tracking-wider block">
                Estimated Wait
              </span>
              <span className="font-label-md text-label-md text-on-primary font-bold">
                &lt; 3 minutes
              </span>
            </div>
          </div>
          <div className="flex -space-x-2">
            {CHAT_AVATARS.map((avatar, index) => (
              <div
                key={avatar}
                className={`w-8 h-8 rounded-full flex items-center justify-center font-label-sm text-label-sm font-bold shadow-sm ${
                  index === 0
                    ? "bg-surface-container text-primary"
                    : index === 1
                      ? "bg-secondary-fixed text-on-secondary-fixed"
                      : "bg-primary-fixed text-primary"
                }`}
              >
                {avatar}
              </div>
            ))}
          </div>
        </div>
        <button
          className="w-full py-3.5 px-6 rounded-full bg-secondary-container text-on-secondary-fixed hover:bg-secondary-fixed font-label-md text-label-md font-bold transition-all shadow-md flex items-center justify-center gap-2"
          id="start-live-chat-btn"
          type="button"
          onClick={handleStartChat}
        >
          {chatStatus === "idle" ? (
            <>
              <MaterialIcon name="chat_bubble" className="text-[20px]" />
              <span>Start Live Session Now</span>
            </>
          ) : chatStatus === "connecting" ? (
            <>
              <MaterialIcon name="refresh" className="text-[20px] animate-spin" />
              <span>Connecting to Clinician...</span>
            </>
          ) : (
            <>
              <MaterialIcon name="check_circle" className="text-[20px] text-secondary" />
              <span>Advisor Connected (#RD-402)</span>
            </>
          )}
        </button>
      </div>

      <div className="p-6 md:p-8 rounded-xl bg-surface-container-lowest shadow-md flex flex-col justify-between">
        <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-5">
          <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0 shadow-sm">
            <Image
              src={CONCIERGE_PHONE_IMAGE}
              alt="A friendly female clinical nutrition director in a modern laboratory setting wearing an ivory clinical blazer, with clean background glass beakers, soft bright natural light, professional and warm."
              fill
              sizes="80px"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-secondary flex items-center justify-center text-on-secondary">
              <MaterialIcon name="verified" className="text-[12px]" />
            </div>
          </div>
          <div>
            <span className="font-label-sm text-label-sm text-secondary uppercase font-bold tracking-wider block mb-0.5">
              Complimentary Service
            </span>
            <h3 className="font-title-lg text-title-lg text-primary font-bold">
              1-on-1 Nutrition Intake
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              15-minute video review of your health stack &amp; biomarkers.
            </p>
          </div>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant mb-5">
          Discuss blood panel indicators, dosage timing, and dietary synergy
          directly with Dr. Linda Mercer&rsquo;s nutrition advisory board.
        </p>
        <a
          className="w-full py-3 px-5 rounded-full bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md font-semibold text-center transition-colors flex items-center justify-center gap-2"
          href="#"
        >
          <MaterialIcon name="calendar_month" className="text-[18px]" />
          <span>Select Available Time Slot</span>
        </a>
      </div>

      <div className="p-6 md:p-8 rounded-xl bg-surface-container-low shadow-sm">
        <h3 className="font-title-lg text-title-lg text-primary font-bold mb-4 flex items-center gap-2">
          <MaterialIcon name="alternate_email" className="text-secondary text-[22px]" />
          Specialized Direct Inboxes
        </h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
          Direct your inquiry straight to the appropriate laboratory desk for
          expedited review.
        </p>
        <div className="flex flex-col gap-4">
          {INBOX_CHANNELS.map((channel) => (
            <a
              key={channel.email}
              className="p-4 rounded-lg bg-surface-container-lowest hover:shadow-md transition-all group flex items-start gap-3.5"
              href={`mailto:${channel.email}`}
            >
              <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors flex-shrink-0">
                <MaterialIcon name={channel.icon} className="text-[20px]" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-label-md text-label-md text-primary font-bold">
                    {channel.title}
                  </h4>
                  <MaterialIcon
                    name="arrow_forward"
                    className="text-outline-variant group-hover:text-primary text-[18px] transition-transform group-hover:translate-x-1"
                  />
                </div>
                <p className="font-caption text-caption text-secondary font-mono">
                  {channel.email}
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                  {channel.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-4">
        <div className="w-10 h-10 rounded-full bg-secondary-container/30 flex items-center justify-center text-primary flex-shrink-0">
          <MaterialIcon name="domain" className="text-[22px]" />
        </div>
        <div>
          <h4 className="font-label-md text-label-md text-primary font-bold">
            Formulation Labs &amp; Flagship
          </h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
            {HEADQUARTERS_ADDRESS.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
          <div className="mt-3 flex items-center gap-2">
            <MaterialIcon name="phone_in_talk" className="text-secondary text-[18px]" />
            <a
              className="font-label-md text-label-md text-primary font-bold hover:text-secondary transition-colors"
              href={TELEPHONE_HREF}
            >
              {TELEPHONE_DISPLAY}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}