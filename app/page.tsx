import Nav from "./components/Nav";
import Hero from "./components/Hero";
import MarqueeTicker from "./components/MarqueeTicker";
import StandortSection from "./components/StandortSection";
import SortimentSection from "./components/SortimentSection";
import VorteileSection from "./components/VorteileSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative bg-paper-200">
      <Nav />
      <Hero />
      <MarqueeTicker />
      <StandortSection />
      <SortimentSection />
      <VorteileSection />
      <Footer />
    </main>
  );
}
