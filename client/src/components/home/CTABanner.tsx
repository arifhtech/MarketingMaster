import { Link } from "wouter";

const CTABanner = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-primary to-accent text-white relative overflow-hidden">
      <div className="absolute right-0 bottom-0 opacity-10">
        <i className="fas fa-code text-9xl"></i>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build Something Great Together</h2>
          <p className="text-xl text-white/90 mb-8">
            Ready to transform your idea into reality? Our team of experts is here to help you create innovative digital solutions.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-primary hover:bg-gray-100 font-bold px-8 py-4 rounded-md shadow-md transition"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
