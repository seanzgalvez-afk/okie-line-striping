import { Ruler, Clock, MessageSquareText, BadgeCheck, FileText, Target } from "lucide-react";

const points = [
  {
    icon: Target,
    title: "Striping Is All We Do",
    description: "We're not a paving company that also stripes on the side — this is our one focus, so it's done right.",
  },
  {
    icon: Ruler,
    title: "Straight Lines, Every Time",
    description: "Laser-guided layouts and careful prep work — no crooked stalls or bleeding paint.",
  },
  {
    icon: FileText,
    title: "Detailed Written Estimates",
    description: "You'll see exact pricing and a layout plan before we start — no surprise charges after the job's done.",
  },
  {
    icon: Clock,
    title: "Scheduled Around Your Business",
    description: "Early mornings, evenings, or weekends — we work when it's least disruptive for you.",
  },
  {
    icon: MessageSquareText,
    title: "You Talk to the Owner",
    description: "No call centers or middlemen. You'll always know who's doing your job and when.",
  },
  {
    icon: BadgeCheck,
    title: "Compliance Done Right",
    description: "ADA and fire lane markings that meet code — avoid the fines and liability of a failed inspection.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="w-full"
      style={{ background: "#0a0a0a", padding: "clamp(60px, 8vw, 96px) clamp(24px, 5vw, 80px)" }}
      aria-label="Why choose us"
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
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
              Why Okie Line Striping
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
            New to the Area, Not New to the Work
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((point) => {
            const Icon = point.icon;
            return (
              <div key={point.title} className="flex gap-4">
                <div style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "4px",
                  background: "rgba(255,209,0,0.08)",
                  border: "1px solid rgba(255,209,0,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <Icon size={20} color="#ffd100" />
                </div>
                <div>
                  <h3 style={{
                    fontFamily: "var(--font-oswald), Arial Narrow, sans-serif",
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: "6px",
                  }}>
                    {point.title}
                  </h3>
                  <p style={{
                    fontFamily: "var(--font-dm), system-ui, sans-serif",
                    fontSize: "13px",
                    color: "#888",
                    lineHeight: 1.7,
                  }}>
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
