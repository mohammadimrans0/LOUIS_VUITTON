'use client'

import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Banner from "@/components/ui/Banner";
import Services from "@/components/ui/Services";


export default function Home() {
  return (
    <>
      <Navbar />
      <Banner/>
      <Services/>
      <Footer />
    </>
  );
}
