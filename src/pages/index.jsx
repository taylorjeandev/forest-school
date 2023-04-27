import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Feature from "@/components/Feature";
import Contact from "@/components/ContactForm";
import Article from "../components/Article";
import Testimonial from "../components/Testimonial";
import PhotoCarousel from "../components/PhotoCarousel";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Testimonial />
      <PhotoCarousel />
      <Footer />
    </>
  );
}
