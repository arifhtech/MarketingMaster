import { Link } from "wouter";
import { useEffect, useState } from "react";
import danitumLogo from "@assets/DANITUM TECHNOLOGIES LOGO PDF_page-0001.jpg";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/90 z-0"></div>

      {/* Animated Pattern Background */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-0"></div>

      {/* Blob Shapes */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-secondary/30 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-accent/20 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/4 w-[25vw] h-[25vw] bg-white/10 rounded-full filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ease-out ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {/* <div className="mb-8">
              <img src={danitumLogo} alt="Danitum Technologies" className="h-20 md:h-24 mb-4" />
              <h4 className="text-white/90 text-sm mb-2">Danitum Technologies Pvt Ltd</h4>
            </div> */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 text-white drop-shadow-md">
              Transforming Ambitious Ideas Into Impactful Digital Solutions
            </h1>
            <p className="text-xl md:text-2xl font-medium mb-8 text-white/90">
              We help startups and growing businesses unlock their digital
              potential with world-class web, mobile, and AI-driven
              solutions—rapidly delivered, robustly engineered, and tailored to
              market needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-6 py-3 rounded-xl shadow-lg font-medium transition-all duration-300 inline-flex items-center hover:translate-y-[-2px]"
              >
                <span>Get a Free Consultation</span>
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
              <Link
                href="/services"
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl shadow-md font-medium border border-white/20 transition-all duration-300 inline-flex items-center hover:translate-y-[-2px]"
              >
                <span>Explore Our Services</span>
                <i className="fas fa-chevron-right ml-2"></i>
              </Link>
            </div>
          </div>

          <div
            className={`flex justify-center transition-all duration-1000 delay-300 ease-out ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 blur-xl rounded-full"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="Team collaborating on software solution"
                className="relative z-10 rounded-2xl shadow-2xl object-cover max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/80 animate-bounce">
        <span className="text-sm font-medium mb-2">Scroll Down</span>
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-chevron-down"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
