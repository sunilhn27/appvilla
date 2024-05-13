import Accordion from "@/components/Accordion";
import AyroUI from "@/components/AyroUI";
import FeaturesFour from "@/components/FeaturesFour";
import FeaturesOne from "@/components/FeaturesOne";
import FeaturesThree from "@/components/FeaturesThree";
import FeaturesTwo from "@/components/FeaturesTwo";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import OurTeam from "@/components/OurTeam";
import Pricing from "@/components/Pricing";
import UseApp from "@/components/UseApp";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <FeaturesOne />
      <FeaturesTwo />
      <FeaturesThree />
      <FeaturesFour />
      <Pricing />
      <OurTeam />
      <AyroUI />
      <Accordion />
      <UseApp />
      <Footer />
    </main>
  );
}
