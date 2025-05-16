const WhyChooseUs = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us</h2>
            <p className="text-gray-600 mb-8 text-lg">
              We are a software company passionate about building scalable, intelligent, and user-focused digital products.
            </p>
            
            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <i className="fas fa-medal text-primary"></i>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">Expertise & Experience</h3>
                  <p className="text-gray-600">Our team of seasoned developers and designers brings years of experience across industries and technologies.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                    <i className="fas fa-sliders-h text-secondary"></i>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">Tailored Solutions</h3>
                  <p className="text-gray-600">We craft custom solutions that align perfectly with your unique business needs and goals.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <i className="fas fa-tachometer-alt text-accent"></i>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">Agile Delivery</h3>
                  <p className="text-gray-600">Our iterative approach ensures faster time-to-market while maintaining the highest quality standards.</p>
                </div>
              </div>
              
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <i className="fas fa-headset text-primary"></i>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">Dedicated Support</h3>
                  <p className="text-gray-600">We provide ongoing maintenance and support to ensure your digital products evolve with your business.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
              alt="Our team of software professionals collaborating" 
              className="rounded-xl shadow-lg w-full h-auto object-cover" 
              style={{ maxHeight: "600px" }}
            />
            
            <div className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-8 bg-white p-4 md:p-6 rounded-lg shadow-lg max-w-xs">
              <div className="flex items-center mb-3">
                <div className="text-primary text-5xl font-bold">10+</div>
                <div className="ml-3 text-gray-800 font-medium">Years of Experience</div>
              </div>
              <p className="text-gray-600 text-sm">Delivering exceptional software solutions to clients worldwide.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
