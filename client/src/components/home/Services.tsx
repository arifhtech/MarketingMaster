import { Link } from "wouter";
import SectionHeading from "@/components/common/SectionHeading";
import ServiceCard from "@/components/common/ServiceCard";
import { services } from "@/data/services";

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="What We Do" 
          description="From stunning websites to advanced AI solutions, we serve as your end-to-end technology partner."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
