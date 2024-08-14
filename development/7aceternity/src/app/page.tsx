import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";
import GoogleGeminiEffectDemo from "@/components/Gemini";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <div className="mb-80 w-9/12 m-auto pb-80">
        <GoogleGeminiEffectDemo />
      </div>
      {/* <FeaturedSection />
      <WhyChooseUs />
      <TestimonialCards />
      <UpcomingWebinars />
      <Instructors />
      <Footer /> */}
    </main>
  );
}
