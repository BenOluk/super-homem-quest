import Hero from "@/components/Hero";
import SevenDays from "@/components/SevenDays";
import Bio from "@/components/Bio";
import FinalCTA from "@/components/FinalCTA";
import Guarantee from "@/components/Guarantee";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero />
      <SevenDays />
      <Bio />
      <FinalCTA />
      <Guarantee />
      <FAQ />
    </div>
  );
};

export default Index;
