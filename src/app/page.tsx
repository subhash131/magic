import AppIcon from "@/components/app-icon";
import Hero from "@/components/hero/";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <AppIcon />
      <Navbar />
      <Hero />
      <div className="w-full h-screen bg-red-50 sticky top-0"></div>
    </div>
  );
}
