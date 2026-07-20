"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long does line striping take to dry?",
    a: "Most traffic paint is dry to the touch within 30–60 minutes and safe for vehicle traffic within a few hours, depending on temperature and humidity.",
  },
  {
    q: "Do you work around my business hours?",
    a: "Yes — we typically schedule striping for early mornings, evenings, or weekends so we don't disrupt your customers or operations.",
  },
  {
    q: "What's required for ADA-compliant parking?",
    a: "ADA requires a specific number of accessible spaces based on lot size, proper stall width, and a striped access aisle. We'll lay out your lot to meet current code.",
  },
  {
    q: "What happens if my lot isn't ADA compliant or my fire lanes aren't marked?",
    a: "You can be fined during an inspection, and in the case of blocked fire lanes, held liable if emergency vehicles can't get through. It's usually far cheaper to get it striped correctly than to deal with the fine — or worse.",
  },
  {
    q: "Do you handle both new layouts and restriping faded lots?",
    a: "Both. We can design a new traffic-flow layout from scratch or simply repaint your existing lines to look fresh again.",
  },
  {
    q: "Will I know the price before you start?",
    a: "Yes. You'll get a written estimate with the layout and exact pricing before any work begins — no surprise charges once we're done.",
  },
  {
    q: "Does weather affect scheduling?",
    a: "Line striping needs dry pavement and mild temperatures to cure properly, so we monitor the forecast and reschedule around rain if needed.",
  },
  {
    q: "How do I get a quote?",
    a: "Call or text us, or fill out the form below with your property details — we'll follow up quickly with pricing.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="w-full"
      style={{ background: "#111", padding: "clamp(60px, 8vw, 96px) clamp(24px, 5vw, 80px)" }}
      aria-label="Frequently asked questions"
    >
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div className="mb-14 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#ffd100" }} />
            <span style={{
              fontFamily: "var(--font-dm), system-ui, sans-serif",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#ffd100",
            }}>
              Questions
            </span>
          </div>
          <h2 style={{
            fontFamily: "var(--font-oswald), Arial Narrow, sans-serif",
            fontSize: "clamp(30px, 4vw, 48px)",
            fontWeight: 700,
            textTransform: "uppercase",
            color: "#fff",
            lineHeight: 1.1,
          }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div
                key={faq.q}
                className="faq-row"
                data-open={open}
                style={{ borderBottom: "1px solid #222" }}
              >
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex items-center justify-between w-full text-left"
                  style={{ padding: "20px 4px", background: "none", border: "none", cursor: "pointer" }}
                >
                  <span className="faq-question" style={{
                    fontFamily: "var(--font-dm), system-ui, sans-serif",
                    fontSize: "15px",
                    fontWeight: 700,
                    color: "#e8e8e8",
                    paddingRight: "16px",
                  }}>
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    color="#ffd100"
                    style={{
                      flexShrink: 0,
                      transform: open ? "rotate(180deg)" : "none",
                      transition: "transform 0.2s",
                    }}
                  />
                </button>
                {open && (
                  <p style={{
                    fontFamily: "var(--font-dm), system-ui, sans-serif",
                    fontSize: "13px",
                    color: "#888",
                    lineHeight: 1.8,
                    padding: "0 4px 20px",
                  }}>
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
