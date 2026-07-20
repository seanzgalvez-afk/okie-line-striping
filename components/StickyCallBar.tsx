"use client";

import { useEffect, useState } from "react";

export default function StickyCallBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-50"
      style={{
        transform: visible ? "translateY(0)" : "translateY(100%)",
        transition: "transform 0.3s ease",
      }}
    >
      <a
        href="tel:15393688266"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          background: "#ffd100",
          color: "#0a0a0a",
          fontFamily: "var(--font-dm), system-ui, sans-serif",
          fontSize: "15px",
          fontWeight: 900,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          padding: "18px 24px",
          textDecoration: "none",
          boxShadow: "0 -4px 24px rgba(255,209,0,0.45)",
        }}
      >
        <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.47 11.47 0 0 0 3.58.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.47 11.47 0 0 0 .57 3.58 1 1 0 0 1-.24 1.01l-2.21 2.2z" />
        </svg>
        Call Now — (539) 368-8266
      </a>
    </div>
  );
}
