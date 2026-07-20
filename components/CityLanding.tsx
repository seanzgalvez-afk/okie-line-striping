import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

export default function CityLanding({ cityName }: { cityName: string }) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ paddingTop: "170px", paddingBottom: "72px" }}
      aria-label={`Line striping in ${cityName}, Oklahoma`}
    >
      <div className="absolute inset-0 z-0" style={{
        background: "linear-gradient(160deg, #0a0a0a 0%, #161616 55%, #0a0a0a 100%)",
      }} />
      <div
        className="hazard-stripe absolute inset-x-0 bottom-0"
        style={{ height: "10px", opacity: 0.9 }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
        <div className="flex items-center justify-center gap-2 mb-5">
          <MapPin size={14} color="#ffd100" />
          <span style={{
            fontFamily: "var(--font-dm), system-ui, sans-serif",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#ffd100",
          }}>
            {cityName}, Oklahoma
          </span>
        </div>

        <h1
          className="uppercase"
          style={{
            fontFamily: "var(--font-oswald), Arial Narrow, sans-serif",
            fontWeight: 700,
            lineHeight: 1.05,
            color: "#fff",
            fontSize: "clamp(32px, 5vw, 54px)",
            marginBottom: "20px",
          }}
        >
          Line Striping in<br />
          <span style={{ color: "#ffd100" }}>{cityName}</span>
        </h1>

        <p style={{
          fontFamily: "var(--font-dm), system-ui, sans-serif",
          fontSize: "clamp(14px, 1.6vw, 17px)",
          color: "#aaa",
          maxWidth: "540px",
          margin: "0 auto 32px",
          lineHeight: 1.7,
        }}>
          Parking lot striping, ADA-compliant markings, warehouse floor lines, and more —
          serving businesses and property managers throughout {cityName} and the surrounding area.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
              padding: "16px 28px",
              borderRadius: "3px",
              textDecoration: "none",
              width: "100%",
              maxWidth: "260px",
            }}
          >
            <Phone size={15} />
            Call (539) 368-8266
          </a>
          <Link
            href="/#contact"
            style={{
              display: "block",
              textAlign: "center",
              background: "rgba(255,255,255,0.06)",
              color: "#fff",
              fontFamily: "var(--font-dm), system-ui, sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              padding: "16px 28px",
              borderRadius: "3px",
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.18)",
              width: "100%",
              maxWidth: "260px",
            }}
          >
            Get a Free Quote →
          </Link>
        </div>
      </div>
    </section>
  );
}
