import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pipeline from "./components/Pipeline";
import Metrics from "./components/Metrics";
import Architecture from "./components/Architecture";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <section id="features">
        <Features />
      </section>
      <section id="pipeline">
        <Pipeline />
      </section>
      <section id="metrics">
        <Metrics />
      </section>
      <section id="architecture">
        <Architecture />
      </section>
      <CTA />
      <Footer />
    </>
  );
}
