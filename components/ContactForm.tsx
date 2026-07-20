"use client";

import { useState } from "react";
import { Phone, Mail, Clock, CheckCircle } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "909cd6de-0fdf-4399-8ac0-3a99d72767fe";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [focused, setFocused] = useState<string | null>(null);

  const fieldStyle = (name: string): React.CSSProperties => ({
    width: "100%",
    background: "#0a0a0a",
    border: focused === name ? "1px solid #ffd100" : "1px solid #2a2a2a",
    color: "#fff",
    padding: "13px 16px",
    borderRadius: "3px",
    fontFamily: "var(--font-dm), system-ui, sans-serif",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    boxShadow: focused === name ? "0 0 0 3px rgba(255,209,0,0.08)" : "none",
  });

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-dm), system-ui, sans-serif",
    fontSize: "10px",
    fontWeight: 700,
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    color: "#555",
    display: "block",
    marginBottom: "6px",
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_ACCESS_KEY);
    data.append("subject", "New Quote Request — Okie Line Striping");
    data.append("from_name", "Okie Line Striping Website");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please call or text us at (539) 368-8266.");
      }
    } catch {
      setError("Network error. Please call or text us at (539) 368-8266.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="w-full relative overflow-hidden"
      style={{ background: "#0a0a0a", padding: "clamp(60px, 8vw, 96px) clamp(24px, 5vw, 80px)" }}
      aria-label="Contact form — get a free quote"
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>
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
              Get In Touch
            </span>
          </div>
          <h2 style={{
            fontFamily: "var(--font-oswald), Arial Narrow, sans-serif",
            fontSize: "clamp(30px, 4vw, 48px)",
            fontWeight: 700,
            textTransform: "uppercase",
            color: "#fff",
            lineHeight: 1.1,
            marginBottom: "14px",
          }}>
            Get Your Free Quote
          </h2>
          <p style={{
            fontFamily: "var(--font-dm), system-ui, sans-serif",
            fontSize: "14px",
            color: "#888",
            lineHeight: 1.7,
          }}>
            Call, text, or fill out the form — we respond fast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          {/* LEFT — Form */}
          <div
            className="md:col-span-3"
            style={{
              background: "#111",
              border: "1px solid #1e1e1e",
              borderRadius: "6px",
              padding: "clamp(24px, 5vw, 40px) clamp(20px, 5vw, 36px)",
            }}
          >
            {submitted ? (
              <div className="flex flex-col items-start gap-5 py-6">
                <div style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "rgba(255,209,0,0.1)",
                  border: "1px solid rgba(255,209,0,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <CheckCircle size={28} color="#ffd100" />
                </div>
                <h3 style={{
                  fontFamily: "var(--font-oswald), Arial Narrow, sans-serif",
                  fontSize: "26px",
                  fontWeight: 700,
                  color: "#fff",
                }}>
                  We&rsquo;ll be in touch soon!
                </h3>
                <p style={{
                  fontFamily: "var(--font-dm), system-ui, sans-serif",
                  fontSize: "15px",
                  color: "#888",
                  lineHeight: 1.7,
                }}>
                  Expect a call or text from us at{" "}
                  <a href="tel:15393688266" style={{ color: "#ffd100", textDecoration: "none" }}>
                    (539) 368-8266
                  </a>{" "}
                  soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Smith"
                      required
                      style={fieldStyle("name")}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="(539) 368-8266"
                      required
                      style={fieldStyle("phone")}
                      onFocus={() => setFocused("phone")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Property Address *</label>
                  <input
                    type="text"
                    name="address"
                    placeholder="123 Main St, Oklahoma City, OK"
                    required
                    style={fieldStyle("address")}
                    onFocus={() => setFocused("address")}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label style={labelStyle}>Service Needed</label>
                    <select
                      name="service"
                      style={{ ...fieldStyle("service"), appearance: "none" as const, cursor: "pointer" }}
                      onFocus={() => setFocused("service")}
                      onBlur={() => setFocused(null)}
                      defaultValue=""
                    >
                      <option value="" disabled>Select a service…</option>
                      <option value="parking-lot">Parking Lot Striping</option>
                      <option value="ada">ADA & Handicap Compliance</option>
                      <option value="fire-lane">Fire Lane & Curb Markings</option>
                      <option value="warehouse">Warehouse & Facility Floor Lines</option>
                      <option value="sports">Sports Courts & Athletic Fields</option>
                      <option value="restripe">Restriping & Layout Changes</option>
                      <option value="unsure">Not Sure Yet</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Email (optional)</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@email.com"
                      style={fieldStyle("email")}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Notes / Property Details</label>
                  <textarea
                    name="message"
                    placeholder="Lot size, current condition, timing preferences…"
                    rows={4}
                    style={{ ...fieldStyle("message"), resize: "vertical" as const }}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-glow"
                  style={{
                    width: "100%",
                    background: submitting ? "#c9a614" : "#ffd100",
                    color: "#0a0a0a",
                    fontFamily: "var(--font-dm), system-ui, sans-serif",
                    fontSize: "12px",
                    fontWeight: 900,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    padding: "17px",
                    borderRadius: "3px",
                    border: "none",
                    cursor: submitting ? "not-allowed" : "pointer",
                    marginTop: "4px",
                    opacity: submitting ? 0.8 : 1,
                    transition: "background 0.2s, opacity 0.2s",
                  }}
                >
                  {submitting ? "Sending…" : "Send My Quote Request →"}
                </button>

                {error && (
                  <p style={{
                    fontFamily: "var(--font-dm), system-ui, sans-serif",
                    fontSize: "12px",
                    color: "#e05555",
                    textAlign: "center",
                  }}>
                    {error}
                  </p>
                )}

                <p style={{
                  fontFamily: "var(--font-dm), system-ui, sans-serif",
                  fontSize: "11px",
                  color: "#444",
                  textAlign: "center",
                  letterSpacing: "0.5px",
                }}>
                  Free, no-obligation quotes
                </p>
              </form>
            )}
          </div>

          {/* RIGHT — Contact info */}
          <div className="md:col-span-2 flex flex-col gap-5 order-first md:order-last">
            <div
              style={{
                background: "#111",
                border: "1px solid #1e1e1e",
                borderRadius: "6px",
                padding: "32px 28px",
                borderLeft: "3px solid #ffd100",
              }}
            >
              <p style={{
                fontFamily: "var(--font-dm), system-ui, sans-serif",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                color: "#555",
                marginBottom: "10px",
              }}>
                Call or Text Anytime
              </p>
              <a
                href="tel:15393688266"
                className="footer-phone block"
                style={{
                  fontFamily: "var(--font-oswald), Arial Narrow, sans-serif",
                  fontSize: "clamp(26px, 3vw, 34px)",
                  fontWeight: 700,
                  color: "#ffd100",
                  textDecoration: "none",
                  lineHeight: 1,
                  marginBottom: "16px",
                }}
              >
                (539) 368-8266
              </a>

              <div className="flex gap-3" style={{ marginBottom: "20px" }}>
                <a
                  href="tel:15393688266"
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "7px",
                    background: "#ffd100",
                    color: "#0a0a0a",
                    fontFamily: "var(--font-dm), system-ui, sans-serif",
                    fontSize: "11px",
                    fontWeight: 900,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    padding: "12px",
                    borderRadius: "3px",
                    textDecoration: "none",
                  }}
                >
                  <Phone size={13} />
                  Call
                </a>
                <a
                  href="sms:15393688266"
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "7px",
                    background: "transparent",
                    color: "#ffd100",
                    border: "1px solid rgba(255,209,0,0.4)",
                    fontFamily: "var(--font-dm), system-ui, sans-serif",
                    fontSize: "11px",
                    fontWeight: 900,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    padding: "12px",
                    borderRadius: "3px",
                    textDecoration: "none",
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                  </svg>
                  Text
                </a>
              </div>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:sean@okielinestriping.com"
                  className="contact-link flex items-center gap-3"
                  style={{
                    fontFamily: "var(--font-dm), system-ui, sans-serif",
                    fontSize: "13px",
                    color: "#888",
                    textDecoration: "none",
                  }}
                >
                  <Mail size={15} color="#444" />
                  sean@okielinestriping.com
                </a>
                <span className="flex items-center gap-3" style={{
                  fontFamily: "var(--font-dm), system-ui, sans-serif",
                  fontSize: "13px",
                  color: "#888",
                }}>
                  <Clock size={15} color="#444" />
                  Mon–Fri · 7am–6pm
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
