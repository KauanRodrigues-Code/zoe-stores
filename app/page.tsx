import About from "@/components/About";
import Clutches from "@/components/Clutches";
import Contact from "@/components/Contact";
import ExploreCollection from "@/components/ExploreCollection";
import FeaturedCollection from "@/components/FeaturedCollection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Location from "@/components/Location";
import Occasions from "@/components/Occasions";
import { dresses } from "@/lib/catalog";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <div id="topo" />
        <Hero />
        <FeaturedCollection />
        <ExploreCollection dresses={dresses} />
        <Occasions />
        <About />
        <HowItWorks />
        <Clutches />
        <Location />
        <Contact />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
