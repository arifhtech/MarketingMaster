import { useEffect, useState } from "react";

const TrustBadges = () => {
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

    const section = document.getElementById("trust-badges");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  // Modern tech company logos (using Font Awesome icons)
  const companies = [
    { name: "ACME Corp", icon: "fa-building" },
    { name: "TechFirm", icon: "fa-microchip" },
    { name: "Innovate Inc", icon: "fa-lightbulb" },
    { name: "FutureTech", icon: "fa-rocket" },
    { name: "DataSphere", icon: "fa-database" }
  ];

  return (
    <section id="trust-badges" className="py-12 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`text-center mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-gray-600 font-medium inline-flex items-center">
            <span className="h-px w-12 bg-gray-300 mr-4 hidden md:block"></span>
            <span>TRUSTED BY LEADING COMPANIES WORLDWIDE</span>
            <span className="h-px w-12 bg-gray-300 ml-4 hidden md:block"></span>
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {companies.map((company, index) => (
            <div 
              key={company.name} 
              className={`grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110 ${
                isVisible ? "opacity-70 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center justify-center flex-col md:flex-row">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-3 mb-2 md:mb-0">
                  <i className={`fas ${company.icon} text-gray-500 text-xl`}></i>
                </div>
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-600">
                  {company.name}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <div 
          className={`flex justify-center mt-12 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-gray-100 rounded-full py-2 px-4 text-sm font-medium text-gray-700 flex items-center">
              <i className="fas fa-check-circle text-primary mr-2"></i>
              <span>Enterprise Grade</span>
            </div>
            <div className="bg-gray-100 rounded-full py-2 px-4 text-sm font-medium text-gray-700 flex items-center">
              <i className="fas fa-shield-alt text-primary mr-2"></i>
              <span>ISO Certified</span>
            </div>
            <div className="bg-gray-100 rounded-full py-2 px-4 text-sm font-medium text-gray-700 flex items-center">
              <i className="fas fa-star text-primary mr-2"></i>
              <span>4.9/5 Client Rating</span>
            </div>
            <div className="bg-gray-100 rounded-full py-2 px-4 text-sm font-medium text-gray-700 flex items-center">
              <i className="fas fa-award text-primary mr-2"></i>
              <span>Award Winning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
