import { Link } from "wouter";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-dark to-dark/90 text-white">
      <div 
        className="absolute inset-0 opacity-20" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      ></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-16 md:py-24 lg:py-32 max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
            Building Smarter Software Solutions for Tomorrow's Businesses
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-8 text-gray-200">
            Websites, Apps, Custom AI – Tailored to Your Vision and Goals
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md shadow-md font-medium transition inline-flex items-center">
              <span>Get a Free Consultation</span>
              <i className="fas fa-arrow-right ml-2"></i>
            </Link>
            <Link href="/#services" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-md shadow-md font-medium border border-white/20 transition inline-flex items-center">
              <span>Explore Our Services</span>
              <i className="fas fa-chevron-down ml-2"></i>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
