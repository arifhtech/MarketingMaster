import { Link } from "wouter";
import SectionHeading from "@/components/common/SectionHeading";
import ServiceCard from "@/components/common/ServiceCard";
import { services } from "@/data/services";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const Services = () => {
  const { ref: sectionRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  return (
    <section
      id="services"
      ref={sectionRef}
      className={`py-16 md:py-24 transition-all duration-700 ease-out ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What We Do"
          description="From stunning websites to advanced AI solutions, we serve as your end-to-end technology partner."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-16">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
