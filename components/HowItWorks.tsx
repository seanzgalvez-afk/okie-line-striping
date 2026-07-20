const steps = [
  {
    number: "01",
    title: "Get a Free Quote",
    description: "Call, text, or fill out the form with your property details. We'll get back to you fast, usually same day.",
  },
  {
    number: "02",
    title: "We Schedule Around You",
    description: "We work early mornings, evenings, or weekends to avoid disrupting your customers or operations.",
  },
  {
    number: "03",
    title: "Crisp Lines, Guaranteed Work",
    description: "We show up, do it right the first time, and send you photos when the job is complete.",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="w-full"
      style={{ background: "#0a0a0a", padding: "clamp(60px, 8vw, 96px) clamp(24px, 5vw, 80px)" }}
      aria-label="How it works"
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
              Simple Process
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
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              style={{
                background: "#111",
                border: "1px solid #1e1e1e",
                borderTop: "3px solid #ffd100",
                borderRadius: "4px",
                padding: "32px 28px",
              }}
            >
              <p style={{
                fontFamily: "var(--font-oswald), Arial Narrow, sans-serif",
                fontSize: "38px",
                fontWeight: 700,
                color: "rgba(255,209,0,0.3)",
                marginBottom: "12px",
              }}>
                {step.number}
              </p>
              <h3 style={{
                fontFamily: "var(--font-oswald), Arial Narrow, sans-serif",
                fontSize: "18px",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "10px",
              }}>
                {step.title}
              </h3>
              <p style={{
                fontFamily: "var(--font-dm), system-ui, sans-serif",
                fontSize: "13px",
                color: "#888",
                lineHeight: 1.8,
              }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
