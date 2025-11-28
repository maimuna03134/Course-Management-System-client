
import Features from "@/components/home/Features";
import Categories from "@/components/home/Categories";
import Instructors from "@/components/home/Instructors";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <Features />
      <Categories />
      <Instructors />
      <Testimonials />
      <CTA />
    </div>
  );
}
