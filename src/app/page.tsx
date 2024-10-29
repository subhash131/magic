import Features from "@/components/features";
import Hero from "@/components/hero/";
import HomeWrapper from "@/components/home-wrapper";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <HomeWrapper>
      <Navbar />
      <Hero />
      <Features />
      <div className="w-full h-screen bg-green-50 sticky top-0"></div>
    </HomeWrapper>
  );
}
