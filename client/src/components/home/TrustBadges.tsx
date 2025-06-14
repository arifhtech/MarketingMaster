import { useEffect, useState } from "react";

// Import client logos
import acronLogo from "@assets/acron-logo.png";
import kcicLogo from "@assets/kcic-logo.png";
import mangeshLogo from "@assets/mangesh-logo.png";

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

  // Client logos configuration
  const clients = [
    { 
      name: "ACRON", 
      logo: acronLogo,
      width: 160
    },
    { 
      name: "KCIC", 
      logo: kcicLogo,
      width: 180
    },
    { 
      name: "Mangesh Gaonkar", 
      logo: mangeshLogo,
      width: 140
    },
    // Adding two additional logos with Font Awesome icons
    { 
      name: "FutureTech", 
      icon: "fa-rocket",
      width: 0
    },
    { 
      name: "DataSphere", 
      icon: "fa-database",
      width: 0
    }
  ];

  return (
    <section id="trust-badges" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-gray-600 font-medium inline-flex items-center">
            <span className="h-px w-16 bg-gradient-to-r from-primary/30 to-primary mr-4 hidden md:block"></span>
            <span>TRUSTED BY LEADING COMPANIES</span>
            <span className="h-px w-16 bg-gradient-to-r from-primary to-primary/30 ml-4 hidden md:block"></span>
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 md:gap-x-20">
          {clients.map((client, index) => (
            <div 
              key={client.name} 
              className={`grayscale hover:grayscale-0 transition-all duration-500 transform hover:scale-110 ${
                isVisible ? "opacity-70 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {client.logo ? (
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="h-auto object-contain"
                  style={{ width: `${client.width}px` }}
                />
              ) : (
                <div className="flex items-center justify-center flex-col md:flex-row">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-3 mb-2 md:mb-0">
                    <i className={`fas ${client.icon} text-primary text-xl`}></i>
                  </div>
                  <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                    {client.name}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div 
          className={`flex justify-center mt-16 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-purple-50 rounded-full py-2 px-4 text-sm font-medium text-gray-700 flex items-center">
              <i className="fas fa-check-circle text-primary mr-2"></i>
              <span>Enterprise Grade</span>
            </div>
            <div className="bg-purple-50 rounded-full py-2 px-4 text-sm font-medium text-gray-700 flex items-center">
              <i className="fas fa-shield-alt text-primary mr-2"></i>
              <span>ISO Certified</span>
            </div>
            <div className="bg-purple-50 rounded-full py-2 px-4 text-sm font-medium text-gray-700 flex items-center">
              <i className="fas fa-star text-primary mr-2"></i>
              <span>4.9/5 Client Rating</span>
            </div>
            <div className="bg-purple-50 rounded-full py-2 px-4 text-sm font-medium text-gray-700 flex items-center">
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
