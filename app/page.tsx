"use client";

import Hero from "@/components/sections/Hero";
import SpotifyEmbed from "@/components/sections/SpotifyEmbed";
import Discography from "@/components/sections/Discography";
import Show from "@/components/sections/Show";
import PreSave from "@/components/sections/PreSave";
import BusinessHub from "@/components/sections/BusinessHub";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <SpotifyEmbed />
      <Discography />
      <Show />
      <PreSave />
      <BusinessHub />
      <Footer />
    </main>
  );
}
