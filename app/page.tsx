import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EnquirySection from "@/components/EnquirySection";
import Features from "@/components/Features";
import Philosophy from "@/components/Philosophy";
import Programs from "@/components/Programs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallButton from "@/components/CallButton";
import StickyMobileCTA from "@/components/StickyMobileCTA";

export default function Home() {
  return (
    <div className="pb-mobile-cta">
      <Header />
      <main>
        <Hero />
        <EnquirySection />
        <Features />
        <Philosophy />
        <Programs />
        <Gallery />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
      <CallButton />
      <StickyMobileCTA />
    </div>
  );
}
