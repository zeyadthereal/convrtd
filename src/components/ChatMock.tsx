"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { t, type Lang } from "../lib/i18n";

export type ChatMessage = {
  sender: "user" | "bot" | "agent";
  text: string;
  /** Optional override: wait this many ms before showing this message */
  delay?: number;
};

export type ChatMockProps = {
  script?: ChatMessage[];
  loop?: boolean;
  className?: string;
  lang?: Lang;
};

function getScript(lang: Lang): ChatMessage[] {
  return [
    { sender: "user", text: t(lang, "chat_customer1") },
    { sender: "bot", text: t(lang, "chat_ai1") },
    { sender: "user", text: t(lang, "chat_customer2") },
    { sender: "bot", text: t(lang, "chat_ai2") },
  ];
}

/** Timing controls */
const DEFAULT_USER_DELAY = 1200;   // ⏳ longer pause for user messages
const DEFAULT_BOT_DELAY = 450;     // ⚡ quicker for bot/agent (non-typing)
const DEFAULT_TYPING_DELAY = 900;  // 🤖 bot typing bubble duration
const LOOP_PAUSE = 1800;           // 🌀 wait before replay when loop=true

type TimelineItem =
  | { kind: "msg"; msg: ChatMessage; id: string }
  | { kind: "typing"; id: string };

export default function ChatMock({
  script,
  className = "",
  lang = "en",
  loop = false,
}: ChatMockProps) {
  const baseScript = useMemo(() => script ?? getScript(lang), [script, lang]);
  const [timeline, setTimeline] = useState<TimelineItem[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const reducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
  }, []);

  // Auto-scroll to bottom whenever a new item appears
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [timeline.length]);

  // Drive the playback sequence
  useEffect(() => {
    let cancelled = false;

    async function play() {
      setTimeline([]); // reset

      for (let i = 0; i < baseScript.length; i++) {
        if (cancelled) return;

        const step = baseScript[i];

        // Allow per-message override, otherwise choose defaults by sender
        let msgDelay = step.delay;
        if (msgDelay == null) {
          msgDelay = step.sender === "user" ? DEFAULT_USER_DELAY : DEFAULT_BOT_DELAY;
        }

        // Non-bot messages (user/agent): wait then append
        if (step.sender !== "bot") {
          await wait(cancelled ? 0 : msgDelay);
          if (cancelled) return;
          setTimeline((prev) => prev.concat({ kind: "msg", msg: step, id: uid() }));
          continue;
        }

        // Bot messages: show typing bubble first, then swap for the message
        setTimeline((prev) => prev.concat({ kind: "typing", id: uid() }));
        await wait(cancelled ? 0 : DEFAULT_TYPING_DELAY);
        if (cancelled) return;

        setTimeline((prev) => {
          const copy = prev.slice();
          // Remove the most recent typing item
          for (let j = copy.length - 1; j >= 0; j--) {
            if (copy[j].kind === "typing") {
              copy.splice(j, 1);
              break;
            }
          }
          copy.push({ kind: "msg", msg: step, id: uid() });
          return copy;
        });

        // Optional: small pause between bot message and next step to feel natural
        await wait(cancelled ? 0 : msgDelay);
      }

      if (loop && !cancelled) {
        await wait(cancelled ? 0 : LOOP_PAUSE);
        if (!cancelled) play();
      }
    }

    play();
    return () => {
      cancelled = true;
    };
  }, [baseScript, loop]);

  return (
    <div
      className={`glass rounded-2xl p-6 md:p-8 w-full max-w-xl h-[440px] overflow-y-auto border border-white/20 shadow-2xl flex flex-col bg-gradient-to-br from-[#1e293b] via-[#0b1024] to-[#0b1024] backdrop-blur-lg ${className}`}
      tabIndex={-1}
      style={{ boxShadow: "0 8px 32px 0 rgba(16,30,54,0.25), 0 1.5px 8px 0 rgba(16,30,54,0.10)" }}
      ref={containerRef}
      aria-label="Demo conversation"
    >
      {/* Local keyframes for typing + pop-in */}
      <style jsx>{`
        @keyframes dot {
          0%, 60%, 100% { transform: translateY(0); opacity: .7; }
          30% { transform: translateY(-3px); opacity: 1; }
        }
        @keyframes pop {
          from { opacity: 0; transform: translateY(6px) scale(.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>

      <div className="flex flex-col gap-4 justify-end min-h-full">
        {timeline.map((item) =>
          item.kind === "typing" ? (
            <TypingRow key={item.id} reduced={reducedMotion} />
          ) : (
            <Bubble key={item.id} msg={item.msg} reduced={reducedMotion} />
          )
        )}
      </div>
    </div>
  );
}

/* ---------- UI pieces ---------- */

function Bubble({ msg, reduced }: { msg: ChatMessage; reduced: boolean }) {
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const raf = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  let bubbleClass = "";
  if (msg.sender === "user") {
    bubbleClass =
      "bg-[#22263a] text-[#e5e7eb] rounded-2xl rounded-bl-none self-start border border-white/10";
  } else if (msg.sender === "bot") {
    bubbleClass =
      "bg-gradient-to-r from-sky-400/80 to-emerald-500/80 text-[#0b1024] rounded-2xl rounded-br-none self-end border border-sky-400/30";
  } else {
    bubbleClass =
      "bg-emerald-500/20 border border-emerald-400/30 text-[#e5e7eb] rounded-2xl rounded-br-none self-end";
  }

  return (
    <div
      className={`flex flex-col items-${
        msg.sender === "user" ? "start" : "end"
      } w-full ${shown ? "" : "opacity-0 translate-y-[6px]"} ${
        reduced ? "" : "transition-all duration-300"
      }`}
      style={shown || reduced ? {} : { animation: "pop 260ms cubic-bezier(.2,.8,.2,1) both" }}
    >
      {msg.sender === "user" && (
        <span className="flex items-center gap-1 text-xs font-semibold text-sky-400 mb-1 ml-1">
          {/* tiny IG-like icon */}
          <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 32 32">
            <rect x="8" y="8" width="16" height="16" rx="6" />
            <circle cx="16" cy="16" r="5" />
            <circle cx="22" cy="10" r="1.5" />
          </svg>
          Instagram
        </span>
      )}
      {msg.sender === "bot" && (
        <span className="text-xs font-bold text-sky-400 mb-1 mr-1">AI</span>
      )}
      {msg.sender === "agent" && (
        <span className="text-xs font-bold text-emerald-400 mb-1 mr-1 inline-flex items-center gap-1">
          {/* human/person icon inline */}
          <svg aria-hidden="true" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5Z" />
          </svg>
          AGENT
        </span>
      )}

      <div className={`px-4 py-2 max-w-[80%] text-sm shadow-lg ${bubbleClass}`}>{msg.text}</div>

      {msg.sender === "bot" && (
        <span className="text-[11px] text-emerald-400 mt-1 ml-2 select-none">✓✓ Delivered</span>
      )}
    </div>
  );
}

function TypingRow({ reduced }: { reduced: boolean }) {
  return (
    <div className="flex items-center gap-2 justify-end w-full">
      <span className="text-xs font-bold text-emerald-400 mb-1 mr-1">AI</span>
      <div
        className="rounded-2xl rounded-br-none bg-gradient-to-r from-sky-400/50 to-emerald-500/50 text-[#0b1024] px-3 py-2 shadow-lg border border-sky-400/30"
        aria-label="Typing indicator"
      >
        <div className="flex items-center gap-1">
          <Dot i={0} reduced={reduced} />
          <Dot i={1} reduced={reduced} />
          <Dot i={2} reduced={reduced} />
          <span className="text-xs text-[#0b1024]/70 ml-1 select-none">typing…</span>
        </div>
      </div>
    </div>
  );
}

function Dot({ i, reduced }: { i: number; reduced: boolean }) {
  const style = reduced ? {} : { animation: `dot 1000ms ease-in-out ${i * 120}ms infinite` };
  return <span className="inline-block w-2 h-2 rounded-full bg-[#0b1024]/80" style={style} />;
}

/* ---------- utils ---------- */
function wait(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}
function uid() {
  return Math.random().toString(36).slice(2);
}
