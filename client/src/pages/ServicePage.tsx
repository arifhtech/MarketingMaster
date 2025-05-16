import { useParams } from "wouter";
import { useEffect, useState } from "react";
import { services } from "@/data/services";
import { Service } from "@/lib/types";
import SectionHeading from "@/components/common/SectionHeading";
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
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold">Service not found</h1>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{service.title} | NexGen Solutions</title>
        <meta name="description" content={service.description} />
      </Helmet>
      <main>
        <div className="bg-gradient-to-r from-dark to-dark/90 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl text-gray-200 max-w-3xl">{service.description}</p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
                <p className="text-lg text-gray-600 mb-8">{service.fullDescription}</p>
                
                <div className="space-y-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mt-1 bg-primary/10 p-2 rounded-full text-primary">
                        <i className={`fas fa-${feature.icon} text-sm`}></i>
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold mb-4">Benefits</h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <i className="fas fa-check-circle text-primary mt-1"></i>
                        <span className="ml-3">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-2xl font-bold mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-3">
                    {service.technologies.map((tech, index) => (
                      <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
    </>
  );
};

export default ServicePage;
