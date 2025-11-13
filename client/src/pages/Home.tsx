import Hero from "@/components/home/Hero";
import TrustBadges from "@/components/home/TrustBadges";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";
import BlogSection from "@/components/home/BlogSection";
import USPSection from "@/components/home/USPSection";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Danitum Technologies | Transforming Ambitious Ideas Into Digital Solutions
        </title>
        <meta
          name="description"
          content="We help startups and growing businesses unlock their digital potential with world-class web, mobile, and AI-driven solutions. Get a free consultation today."
        />
      </Helmet>
      <main>
        <Hero />
        <TrustBadges />
        <USPSection />
        <Services />
        <WhyChooseUs />
        <CaseStudiesSection />
        <Testimonials />
        <CTABanner />
        <BlogSection />
      </main>
    </>
  );
};

export default Home;
