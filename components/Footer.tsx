import Link from "next/link";
import { cities } from "@/lib/cities";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Service Areas", href: "/#service-areas" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

const serviceLinks = [
  { label: "Parking Lot Striping", href: "/#services" },
  { label: "ADA & Handicap Compliance", href: "/#services" },
  { label: "Fire Lane & Curb Markings", href: "/#services" },
  { label: "Warehouse Floor Lines", href: "/#services" },
  { label: "Sports Courts", href: "/#services" },
];

export default function Footer() {
  return (
    <footer
      className="w-full mobile-footer-pad"
      style={{
        background: "#0a0a0a",
        borderTop: "1px solid #1a1a1a",
        padding: "56px clamp(24px, 5vw, 64px) 32px",
      }}
      aria-label="Site footer"
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 mb-10">
          <div>
            <p style={{
              fontFamily: "var(--font-oswald), Arial Narrow, sans-serif",
              fontSize: "20px",
              fontWeight: 700,
              textTransform: "uppercase",
              color: "#fff",
              marginBottom: "6px",
            }}>
              OKIE <span style={{ color: "#ffd100" }}>LINE STRIPING</span>
            </p>
            <p className="italic" style={{
              fontFamily: "var(--font-dm), system-ui, sans-serif",
              fontSize: "13px",
              color: "#555",
            }}>
              Straight Lines, Statewide.
            </p>
          </div>

          <nav className="grid grid-cols-2 md:flex gap-x-6 gap-y-3 md:gap-6" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#ffd100] transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-dm), system-ui, sans-serif",
                  fontSize: "11px",
                  color: "#666",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-10"
          style={{ borderTop: "1px solid #1a1a1a" }}
        >
          <div>
            <p style={{
              fontFamily: "var(--font-dm), system-ui, sans-serif",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              color: "#ffd100",
              marginBottom: "14px",
            }}>
              Services
            </p>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} style={{
                    fontFamily: "var(--font-dm), system-ui, sans-serif",
                    fontSize: "12px",
                    color: "#777",
                    textDecoration: "none",
                  }}>
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p style={{
              fontFamily: "var(--font-dm), system-ui, sans-serif",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              color: "#ffd100",
              marginBottom: "14px",
            }}>
              Service Areas
            </p>
            <ul className="grid grid-cols-2 gap-2">
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link href={`/line-striping/${c.slug}`} style={{
                    fontFamily: "var(--font-dm), system-ui, sans-serif",
                    fontSize: "12px",
                    color: "#777",
                    textDecoration: "none",
                  }}>
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="text-center py-10"
          style={{
            borderTop: "1px solid #1a1a1a",
            borderBottom: "1px solid #1a1a1a",
          }}
        >
          <p style={{
            fontFamily: "var(--font-dm), system-ui, sans-serif",
            fontSize: "11px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#555",
            marginBottom: "12px",
          }}>
            Call or Text Anytime
          </p>
          <a
            href="tel:15393688266"
            className="footer-phone"
            style={{
              fontFamily: "var(--font-oswald), Arial Narrow, sans-serif",
              fontSize: "clamp(28px, 5vw, 44px)",
              fontWeight: 700,
              color: "#ffd100",
              textDecoration: "none",
              display: "block",
            }}
          >
            (539) 368-8266
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-6">
          <p style={{
            fontFamily: "var(--font-dm), system-ui, sans-serif",
            fontSize: "12px",
            color: "#333",
          }}>
            © 2026 Okie Line Striping · Oklahoma
          </p>
          <p style={{
            fontFamily: "var(--font-dm), system-ui, sans-serif",
            fontSize: "12px",
            color: "#333",
          }}>
            Proudly serving Oklahoma statewide
          </p>
        </div>
      </div>
    </footer>
  );
}
