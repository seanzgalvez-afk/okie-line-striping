import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cities, citySlugs } from "@/lib/cities";
import Header from "@/components/Header";
import CityLanding from "@/components/CityLanding";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServiceAreas from "@/components/ServiceAreas";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";

export function generateStaticParams() {
  return citySlugs.map((city) => ({ city }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const cityData = cities.find((c) => c.slug === city);
  if (!cityData) return {};

  return {
    title: `Line Striping in ${cityData.name}, OK | Okie Line Striping`,
    description: `Professional parking lot striping, ADA compliance markings, and warehouse floor lines in ${cityData.name}, Oklahoma. Free quotes.`,
    alternates: {
      canonical: `https://www.okielinestriping.com/line-striping/${cityData.slug}`,
    },
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const cityData = cities.find((c) => c.slug === city);
  if (!cityData) notFound();

  return (
    <>
      <Header />
      <main>
        <CityLanding cityName={cityData.name} />
        <Services />
        <WhyChooseUs />
        <ServiceAreas />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
