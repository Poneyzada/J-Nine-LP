import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import SpotifyEmbed from "@/components/sections/SpotifyEmbed";
import Marquee from "@/components/sections/Marquee";
import Discography from "@/components/sections/Discography";
import Compositions from "@/components/sections/Compositions";
import Show from "@/components/sections/Show";
import BusinessHub from "@/components/sections/BusinessHub";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Stats />
      <SpotifyEmbed />
      <Marquee />
      <Discography />
      <Compositions />
      <Show />
      <BusinessHub />
      <Footer />
    </main>
  );
}
