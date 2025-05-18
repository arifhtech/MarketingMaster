import { useParams } from "wouter";
import { useEffect, useState } from "react";
import { services } from "@/data/services";
import { Service } from "@/lib/types";
import { Link } from "wouter";
import CTABanner from "@/components/home/CTABanner";
import { Helmet } from "react-helmet";

const ServicePage = () => {
  const { slug } = useParams();
  const [service, setService] = useState<Service | null>(null);

  useEffect(() => {
    const foundService = services.find((s) => s.slug === slug);
    if (foundService) {
      setService(foundService);
    }
  }, [slug]);

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Service not found</h1>
        <p className="text-gray-600 mb-8">The service you're looking for doesn't exist or has been moved.</p>
        <Link href="/services">
          <a className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
            View All Services
          </a>
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{service.title} | Danitum Technologies</title>
        <meta name="description" content={service.description} />
      </Helmet>
      <main>
        <div className="bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-6">
              <Link href="/services">
                <a className="text-white/80 hover:text-white flex items-center transition-colors">
                  <i className="fas fa-chevron-left mr-2"></i>
                  <span>All Services</span>
                </a>
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-white/90 max-w-3xl">{service.description}</p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
                <p className="text-lg text-gray-600 mb-8">{service.fullDescription}</p>
                
                <div className="space-y-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mt-1 bg-primary/10 p-3 rounded-full text-primary">
                        <i className={`fas fa-${feature.icon} text-sm`}></i>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <i className="fas fa-check-circle text-primary mt-1 mr-3"></i>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8 bg-gray-50 p-8 rounded-xl shadow-sm">
                  <h3 className="text-2xl font-bold mb-6">Technologies We Use</h3>
                  <div className="flex flex-wrap gap-3">
                    {service.technologies.map((tech, index) => (
                      <span key={index} className="bg-white border border-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8">
                  <Link href="/contact">
                    <a className="w-full block text-center bg-primary hover:bg-primary/90 text-white font-medium py-4 rounded-xl transition-colors">
                      Request a Free Consultation
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Other Services You Might Be Interested In</h2>
              <p className="text-gray-600">Explore our other services that complement {service.title}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services
                .filter(s => s.id !== service.id)
                .slice(0, 3)
                .map(relatedService => (
                  <Link key={relatedService.id} href={`/services/${relatedService.slug}`}>
                    <a className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                      <div className="p-6">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                          <i className={`fas fa-${relatedService.icon} text-lg`}></i>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{relatedService.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{relatedService.description}</p>
                        <div className="text-primary font-medium text-sm flex items-center">
                          <span>Learn more</span>
                          <i className="fas fa-arrow-right ml-2 text-xs"></i>
                        </div>
                      </div>
                    </a>
                  </Link>
                ))
              }
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
    </>
  );
};

export default ServicePage;
