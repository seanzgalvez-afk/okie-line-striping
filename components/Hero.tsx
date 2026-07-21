"use client";

import { useState } from "react";
import Image from "next/image";
import { Zap, Shield, Smartphone, MapPin } from "lucide-react";

export default function Hero() {
  const [btnHovered, setBtnHovered] = useState(false);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ paddingTop: "170px", paddingBottom: "0" }}
      aria-label="Hero section — Okie Line Striping"
    >
      {/* Background — real photo of freshly striped asphalt, dark overlay for text contrast */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-lot.jpg"
          alt="Freshly striped parking lot with yellow line markings"
          fill
          priority
          unoptimized
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(160deg, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.6) 55%, rgba(10,10,10,0.85) 100%)",
          }}
        />
      </div>
      <div
        className="hazard-stripe absolute inset-x-0 bottom-0"
        style={{ height: "10px", opacity: 0.9 }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center px-6" style={{ paddingBottom: "72px" }}>
        <div className="flex items-center justify-center gap-2 mb-5">
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#ffd100" }} />
          <span style={{
            fontFamily: "var(--font-dm), system-ui, sans-serif",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#ffd100",
          }}>
            Serving Tulsa &amp; Surrounding Areas
          </span>
        </div>

        <h1
          className="uppercase"
          style={{
            fontFamily: "var(--font-oswald), Arial Narrow, sans-serif",
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: "-0.5px",
            color: "#fff",
            fontSize: "clamp(38px, 6vw, 68px)",
            marginBottom: "22px",
          }}
        >
          Faded Lines Cost You<br />
          <span style={{ color: "#ffd100" }}>Customers &amp; Compliance.</span>
        </h1>

        <p style={{
          fontFamily: "var(--font-dm), system-ui, sans-serif",
          fontSize: "clamp(15px, 1.8vw, 18px)",
          color: "#aaa",
          maxWidth: "560px",
          margin: "0 auto 36px",
          lineHeight: 1.7,
        }}>
          Crisp parking lot striping, ADA-compliant markings, and warehouse floor lines — done right the first time, across Tulsa and the surrounding area.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href="tel:15393688266"
            className="flex items-center justify-center gap-2"
            style={{
              background: "#ffd100",
              color: "#0a0a0a",
              fontFamily: "var(--font-dm), system-ui, sans-serif",
              fontSize: "13px",
              fontWeight: 900,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              padding: "17px 30px",
              borderRadius: "3px",
              textDecoration: "none",
              boxShadow: "0 0 28px rgba(255,209,0,0.35)",
              width: "100%",
              maxWidth: "280px",
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.47 11.47 0 0 0 3.58.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.47 11.47 0 0 0 .57 3.58 1 1 0 0 1-.24 1.01l-2.21 2.2z"/>
            </svg>
            Call (539) 368-8266
          </a>
          <a
            href="#contact"
            onMouseEnter={() => setBtnHovered(true)}
            onMouseLeave={() => setBtnHovered(false)}
            style={{
              display: "block",
              textAlign: "center",
              background: btnHovered ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.06)",
              color: "#fff",
              fontFamily: "var(--font-dm), system-ui, sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              padding: "17px 30px",
              borderRadius: "3px",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.18)",
              width: "100%",
              maxWidth: "280px",
            }}
          >
            Get a Free Quote →
          </a>
        </div>

        {/* Trust bar — honest, no fabricated stats */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {[
            { icon: <Zap size={15} />, label: "Free Estimates" },
            { icon: <Shield size={15} />, label: "ADA-Compliant Work" },
            { icon: <Smartphone size={15} />, label: "Call or Text Anytime" },
            { icon: <MapPin size={15} />, label: "Tulsa Metro Service" },
          ].map((item) => (
            <span key={item.label} className="flex items-center gap-2" style={{
              fontFamily: "var(--font-dm), system-ui, sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "#999",
            }}>
              <span style={{ color: "#ffd100" }}>{item.icon}</span>
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
