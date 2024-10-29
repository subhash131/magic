import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden min-h-screen">
      <Navbar />
      <Hero />
      <div className="w-screen h-screen"></div>
    </div>
  );
}
