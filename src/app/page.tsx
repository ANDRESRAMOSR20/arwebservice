import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Faq from "@/components/Faq";
import {Footer} from "@/components/Footer";
export default function Home() {
  return (
    <>
      <Navbar/>
        <Hero/>
        <About/>
        <Faq/>
        <Footer/>
    </>
  );
}
