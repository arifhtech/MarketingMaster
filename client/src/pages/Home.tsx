import Hero from "@/components/home/Hero";
import TrustBadges from "@/components/home/TrustBadges";
import Services from "@/components/home/Services";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CaseStudiesSection from "@/components/home/CaseStudiesSection";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";
import BlogSection from "@/components/home/BlogSection";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>NexGen Solutions | Building Smarter Software Solutions</title>
        <meta name="description" content="Custom websites, apps, and AI solutions tailored to your business needs. Get a free consultation today." />
      </Helmet>
      <main>
        <Hero />
        <TrustBadges />
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
