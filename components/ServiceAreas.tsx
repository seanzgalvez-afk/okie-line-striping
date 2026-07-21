import Link from "next/link";
import { MapPin } from "lucide-react";
import { cities } from "@/lib/cities";

export default function ServiceAreas() {
  return (
    <section
      id="service-areas"
      className="w-full"
      style={{ background: "#111", padding: "clamp(60px, 8vw, 96px) clamp(24px, 5vw, 80px)" }}
      aria-label="Service areas — cities we serve in Oklahoma"
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
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
              Where We Work
            </span>
          </div>
          <h2 style={{
            fontFamily: "var(--font-oswald), Arial Narrow, sans-serif",
            fontSize: "clamp(30px, 4vw, 48px)",
            fontWeight: 700,
            textTransform: "uppercase",
            color: "#fff",
            lineHeight: 1.1,
            marginBottom: "16px",
          }}>
            Serving Tulsa &amp; Surrounding Areas
          </h2>
          <p style={{
            fontFamily: "var(--font-dm), system-ui, sans-serif",
            fontSize: "14px",
            color: "#888",
            maxWidth: "460px",
            margin: "0 auto",
            lineHeight: 1.7,
          }}>
            Based in Tulsa and available across the metro — click your city or just reach out.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-10">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/line-striping/${city.slug}`}
              className="city-card group"
              style={{
                background: "#0a0a0a",
                border: "1px solid #1e1e1e",
                borderRadius: "4px",
                padding: "18px 16px",
                textAlign: "center",
                textDecoration: "none",
                display: "block",
              }}
            >
              <MapPin size={14} color="#ffd100" style={{ margin: "0 auto 8px" }} />
              <p style={{
                fontFamily: "var(--font-dm), system-ui, sans-serif",
                fontSize: "13px",
                fontWeight: 500,
                color: "#ccc",
                letterSpacing: "0.5px",
              }}>
                {city.name}
              </p>
              <p style={{
                fontFamily: "var(--font-dm), system-ui, sans-serif",
                fontSize: "9px",
                fontWeight: 700,
                color: "#444",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                marginTop: "4px",
              }}>
                View →
              </p>
            </Link>
          ))}
        </div>

        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          style={{
            background: "#0a0a0a",
            border: "1px solid #1e1e1e",
            borderLeft: "3px solid #ffd100",
            borderRadius: "4px",
            padding: "20px 28px",
          }}
        >
          <p style={{
            fontFamily: "var(--font-dm), system-ui, sans-serif",
            fontSize: "13px",
            color: "#888",
          }}>
            Not sure if we cover your area? We probably do — just reach out.
          </p>
          <a
            href="tel:15393688266"
            style={{
              fontFamily: "var(--font-dm), system-ui, sans-serif",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#ffd100",
              textDecoration: "none",
              whiteSpace: "nowrap",
              borderBottom: "1px solid rgba(255,209,0,0.4)",
              paddingBottom: "2px",
            }}
          >
            Call or Text (539) 368-8266 →
          </a>
        </div>
      </div>
    </section>
  );
}
