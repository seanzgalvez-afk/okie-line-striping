import { ParkingSquare, Accessibility, FlameKindling, Warehouse, Volleyball, PaintBucket } from "lucide-react";

const services = [
  {
    icon: ParkingSquare,
    title: "Parking Lot Striping",
    description:
      "New layouts and full restriping for retail, office, and commercial lots. Clean, straight lines that hold up to weather and traffic.",
  },
  {
    icon: Accessibility,
    title: "ADA & Handicap Compliance",
    description:
      "ADA-compliant handicap stall markings and access aisles — avoid the fines and liability of a failed inspection.",
  },
  {
    icon: FlameKindling,
    title: "Fire Lane & Curb Markings",
    description:
      "Fire lane striping and curb markings that keep emergency access clear and get you through code inspections.",
  },
  {
    icon: Warehouse,
    title: "Warehouse & Facility Floor Lines",
    description:
      "Interior safety lines, aisle markings, and floor striping for warehouses, distribution centers, and industrial facilities.",
  },
  {
    icon: Volleyball,
    title: "Sports Courts & Athletic Fields",
    description:
      "Basketball courts, playgrounds, and athletic field line painting for schools, parks, and private facilities.",
  },
  {
    icon: PaintBucket,
    title: "Restriping & Layout Changes",
    description:
      "Faded lines refreshed or a full layout redesign to improve traffic flow and maximize usable parking spaces.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="w-full"
      style={{ background: "#111", padding: "clamp(60px, 8vw, 96px) clamp(24px, 5vw, 80px)" }}
      aria-label="Our services"
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Header */}
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
              What We Offer
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
            Full-Service Line Striping
          </h2>
        </div>

        {/* 3-column cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className="service-card flex flex-col"
                style={{
                  background: "#141414",
                  border: "1px solid #222",
                  borderRadius: "4px",
                  padding: "32px 28px",
                }}
              >
                <div style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "4px",
                  background: "rgba(255,209,0,0.08)",
                  border: "1px solid rgba(255,209,0,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}>
                  <Icon size={20} color="#ffd100" />
                </div>

                <h3 style={{
                  fontFamily: "var(--font-oswald), Arial Narrow, sans-serif",
                  fontSize: "19px",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "10px",
                  lineHeight: 1.2,
                }}>
                  {svc.title}
                </h3>

                <p style={{
                  fontFamily: "var(--font-dm), system-ui, sans-serif",
                  fontSize: "13px",
                  color: "#888",
                  lineHeight: 1.8,
                  marginBottom: "22px",
                  flex: 1,
                }}>
                  {svc.description}
                </p>

                <a
                  href="#contact"
                  style={{
                    display: "block",
                    textAlign: "center",
                    background: "transparent",
                    color: "#ffd100",
                    border: "1px solid rgba(255,209,0,0.4)",
                    fontFamily: "var(--font-dm), system-ui, sans-serif",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    padding: "12px",
                    borderRadius: "2px",
                    textDecoration: "none",
                  }}
                >
                  Get a Quote →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
