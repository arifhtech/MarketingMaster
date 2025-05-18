import { Link } from "wouter";
import { useEffect, useState } from "react";

const CTABanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("cta-banner");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  return (
    <section 
      id="cta-banner" 
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary z-0"></div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-0"></div>
      
      {/* Decorative Elements */}
      <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-white/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -left-32 top-0 w-80 h-80 bg-secondary/20 rounded-full filter blur-3xl"></div>
      
      {/* Code Icon */}
      <div className="absolute right-0 bottom-0 opacity-10 transform translate-y-1/4">
        <i className="fas fa-code text-9xl"></i>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 transform-none" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white drop-shadow-sm">
            Let's Build Something Great Together
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Ready to transform your ambitious ideas into impactful digital solutions? 
            Our team of experts is here to help you create innovative experiences that drive results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-block bg-white text-primary hover:bg-white/90 font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:translate-y-[-2px] hover:shadow-xl"
            >
              Get a Free Consultation
            </Link>
            <Link 
              href="/case-studies" 
              className="inline-block bg-transparent border-2 border-white/30 text-white hover:bg-white/10 font-bold px-8 py-4 rounded-xl shadow-md transition-all duration-300 hover:translate-y-[-2px]"
            >
              View Our Work
            </Link>
          </div>
          
          <div className="mt-16 text-white/80 text-sm">
            <p>Danitum Technologies Pvt Ltd</p>
            <p>Office 178/206 Sanquelim - Goa, 403505</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
