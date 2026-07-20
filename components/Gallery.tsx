import Image from "next/image";

const photos = [
  { src: "/images/gallery-crosslines.jpg", alt: "Crisp white parking lot line striping on dark asphalt", caption: "Parking Lot Striping" },
  { src: "/images/gallery-ada.jpg", alt: "ADA handicap accessible parking symbol painted on pavement", caption: "ADA Compliance Markings" },
  { src: "/images/gallery-court-1.jpg", alt: "Painted lines on an outdoor sports court", caption: "Sports Court Striping" },
  { src: "/images/gallery-court-2.jpg", alt: "Basketball court line markings in blue and white", caption: "Athletic Field Markings" },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="w-full"
      style={{ background: "#0a0a0a", padding: "clamp(60px, 8vw, 96px) clamp(24px, 5vw, 80px)" }}
      aria-label="Photo gallery of completed line striping work"
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
              Our Work
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
            The Kind of Lines We Paint
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="card-hover"
              style={{
                position: "relative",
                borderRadius: "4px",
                overflow: "hidden",
                border: "1px solid #1e1e1e",
                aspectRatio: "4 / 5",
              }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                unoptimized
                className="object-cover"
              />
              <div
                className="absolute inset-x-0 bottom-0"
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)",
                  padding: "20px 14px 12px",
                }}
              >
                <p style={{
                  fontFamily: "var(--font-dm), system-ui, sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  color: "#fff",
                }}>
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
