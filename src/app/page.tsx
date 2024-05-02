import FeaturesFour from "@/components/FeaturesFour";
import FeaturesOne from "@/components/FeaturesOne";
import FeaturesThree from "@/components/FeaturesThree";
import FeaturesTwo from "@/components/FeaturesTwo";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
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
    </main>
  );
}
