"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";

import MaterialIcon from "@/components/material-icon";
import {
  CHAT_FALLBACK_ID,
  getChatNode,
  resolveIntent,
  type ChatNode,
  type ChatQuickReply,
} from "@/lib/chatbot";

interface ChatMessage {
  id: number;
  role: "bot" | "user";
  text: string;
  quickReplies?: ChatQuickReply[];
}

function toBotMessage(node: ChatNode, id: number): ChatMessage {
  return {
    id,
    role: "bot",
    text: node.message,
    quickReplies: node.quickReplies,
  };
}

/** Removes the quick replies from every message that is no longer the last. */
function withoutTrailingReplies(messages: ChatMessage[]): ChatMessage[] {
  return messages.map((message) =>
    message.quickReplies
      ? { ...message, quickReplies: undefined }
      : message,
  );
}

const isExternalLink = (href: string) =>
  /^(https?:|mailto:|tel:)/.test(href);

export default function AiAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const start = getChatNode("root");
    return start
      ? [toBotMessage(start, 0)]
      : [];
  });

  const nextId = useRef(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, open]);

  const advance = (userLabel: string, nodeId: string) => {
    const node = getChatNode(nodeId) ?? getChatNode(CHAT_FALLBACK_ID);
    if (!node) return;

    setMessages((previous) => [
      ...withoutTrailingReplies(previous),
      { id: nextId.current++, role: "user", text: userLabel },
      toBotMessage(node, nextId.current++),
    ]);
  };

  const handleQuickReply = (reply: ChatQuickReply) => {
    if (reply.next) advance(reply.label, reply.next);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = input.trim();
    if (!text) return;

    advance(text, resolveIntent(text));
    setInput("");
  };

  const lastMessageId = messages[messages.length - 1]?.id;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {open && (
        <div className="w-80 max-w-[calc(100vw-3rem)] h-[30rem] max-h-[calc(100vh-8rem)] bg-surface-container-lowest rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-primary text-on-primary shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px] text-secondary-container">
                  smart_toy
                </span>
              </span>
              <div className="flex flex-col">
                <span className="font-title-md text-title-md font-bold leading-tight">
                  Nutripak Assistant
                </span>
                <span className="font-caption text-caption text-on-primary/70 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary-container" />
                  Online
                </span>
              </div>
            </div>
            <button
              className="text-on-primary/80 hover:text-on-primary transition-colors"
              onClick={() => setOpen(false)}
              type="button"
              aria-label="Close assistant"
            >
              <MaterialIcon name="close" className="text-[18px]" />
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-3 py-4 flex flex-col gap-3 bg-surface-container-lowest"
            aria-live="polite"
          >
            {messages.map((message) => {
              const showReplies =
                message.id === lastMessageId && message.quickReplies?.length;

              return (
                <div key={message.id} className="flex flex-col gap-2">
                  <div
                    className={
                      message.role === "user"
                        ? "self-end max-w-[85%] rounded-2xl rounded-tr-sm bg-primary text-on-primary px-3 py-2 font-body-sm text-body-sm"
                        : "self-start max-w-[90%] rounded-2xl rounded-tl-sm bg-surface-container text-on-surface px-3 py-2 font-body-sm text-body-sm"
                    }
                  >
                    {message.text}
                  </div>

                  {showReplies ? (
                    <div className="flex flex-wrap gap-1.5">
                      {message.quickReplies!.map((reply) =>
                        reply.href ? (
                          isExternalLink(reply.href) ? (
                            <a
                              key={reply.label}
                              className="px-2.5 py-1 rounded-full border border-outline-variant text-primary font-caption text-caption hover:bg-surface-container transition-colors"
                              href={reply.href}
                              rel="noreferrer"
                              target="_blank"
                              onClick={() => setOpen(false)}
                            >
                              {reply.label}
                            </a>
                          ) : (
                            <Link
                              key={reply.label}
                              className="px-2.5 py-1 rounded-full border border-outline-variant text-primary font-caption text-caption hover:bg-surface-container transition-colors"
                              href={reply.href}
                              onClick={() => setOpen(false)}
                            >
                              {reply.label}
                            </Link>
                          )
                        ) : (
                          <button
                            key={reply.label}
                            className="px-2.5 py-1 rounded-full border border-outline-variant text-primary font-caption text-caption hover:bg-surface-container transition-colors"
                            onClick={() => handleQuickReply(reply)}
                            type="button"
                          >
                            {reply.label}
                          </button>
                        ),
                      )}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>

          <form
            className="flex items-center gap-2 border-t border-surface-container px-3 py-2 shrink-0"
            onSubmit={handleSubmit}
          >
            <input
              className="flex-1 rounded-full bg-surface-container px-3 py-2 font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary/30"
              onChange={(event) => setInput(event.target.value)}
              placeholder="Type your question…"
              type="text"
              value={input}
              aria-label="Your message"
            />
            <button
              className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center hover:bg-primary-container transition-colors disabled:opacity-40"
              disabled={!input.trim()}
              type="submit"
              aria-label="Send message"
            >
              <MaterialIcon name="send" className="text-[18px]" />
            </button>
          </form>
        </div>
      )}

      <button
        aria-label="Open Nutripak assistant"
        className="pointer-events-auto w-14 h-14 rounded-full bg-primary text-on-primary shadow-[0_4px_12px_rgba(15,23,42,0.15),0_20px_32px_-6px_rgba(15,23,42,0.2)] flex items-center justify-center hover:bg-primary-container transition-transform hover:scale-105 active:scale-95 group"
        type="button"
        onClick={() => setOpen((value) => !value)}
      >
        <span
          className={`material-symbols-outlined text-[26px] text-secondary-container transition-transform group-hover:rotate-12 ${
            open ? "rotate-12" : ""
          }`}
        >
          {open ? "close" : "smart_toy"}
        </span>
      </button>
    </div>
  );
}
