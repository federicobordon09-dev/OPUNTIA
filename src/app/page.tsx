import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import InfoBar from "@/components/sections/InfoBar";
import Experience from "@/components/sections/Experience";
import Menu from "@/components/sections/Menu";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Location from "@/components/sections/Location";
import FAQ from "@/components/sections/FAQ";
import Complex from "@/components/sections/Complex";
import FinalCTA from "@/components/sections/FinalCTA";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <InfoBar />
        <Experience />
        <Menu />
        <Gallery />
        <Testimonials />
        <Location />
        <FAQ />
        <Complex />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton variant="floating" />
    </>
  );
}
