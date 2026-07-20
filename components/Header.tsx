"use client";

import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Service Areas", href: "/#service-areas" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [ctaHovered, setCtaHovered] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50" aria-label="Site header">
      {/* Top utility bar */}
      <div style={{ background: "#111111", borderBottom: "1px solid #222", height: "34px" }}>
        <div className="flex items-center justify-center h-full max-w-7xl mx-auto px-6">
          <a
            href="tel:15393688266"
            className="header-phone flex items-center gap-2"
            style={{ color: "#ffd100", textDecoration: "none" }}
          >
            <Phone size={12} color="#ffd100" />
            <span style={{
              fontFamily: "var(--font-dm), system-ui, sans-serif",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#ffd100",
            }}>
              (539) 368-8266 &middot; Free Quotes Statewide
            </span>
          </a>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-[#0a0a0a] border-b border-[#1c1c1c]" style={{ height: "68px" }}>
        <div className="flex items-center justify-between h-full px-6 max-w-7xl mx-auto">
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0" style={{ textDecoration: "none" }}>
            <span
              className="hazard-stripe"
              style={{ width: "10px", height: "34px", borderRadius: "1px", marginRight: "10px" }}
              aria-hidden="true"
            />
            <span style={{
              fontFamily: "var(--font-oswald), Arial Narrow, sans-serif",
              fontSize: "20px",
              fontWeight: 700,
              letterSpacing: "0.5px",
              textTransform: "uppercase",
              color: "#fff",
            }}>
              Okie <span style={{ color: "#ffd100" }}>Line Striping</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="header-nav-link"
                style={{
                  fontFamily: "var(--font-dm), system-ui, sans-serif",
                  fontSize: "11px",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "#e8e8e8",
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex">
            <a
              href="#contact"
              onMouseEnter={() => setCtaHovered(true)}
              onMouseLeave={() => setCtaHovered(false)}
              style={{
                fontFamily: "var(--font-dm), system-ui, sans-serif",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                padding: "10px 20px",
                background: ctaHovered ? "#ffe14d" : "#ffd100",
                color: "#0a0a0a",
                borderRadius: "2px",
                textDecoration: "none",
                whiteSpace: "nowrap",
                transition: "background 0.2s, box-shadow 0.2s, transform 0.15s",
                boxShadow: ctaHovered
                  ? "0 0 10px rgba(255,209,0,0.7), 0 0 22px rgba(255,209,0,0.4)"
                  : "none",
                transform: ctaHovered ? "translateY(-1px)" : "none",
              }}
            >
              Get a Free Quote
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-1"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden bg-[#0a0a0a] border-b border-[#222] overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-4" aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[#888] hover:text-white transition-colors duration-200 py-1"
              style={{
                fontFamily: "var(--font-dm), system-ui, sans-serif",
                fontSize: "12px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-[#ffd100] text-[#0a0a0a] text-center py-3 font-bold mt-2"
            style={{
              fontFamily: "var(--font-dm), system-ui, sans-serif",
              fontSize: "11px",
              letterSpacing: "1px",
              textTransform: "uppercase",
              borderRadius: "2px",
            }}
          >
            Get a Free Quote
          </a>
        </nav>
      </div>
    </header>
  );
}
