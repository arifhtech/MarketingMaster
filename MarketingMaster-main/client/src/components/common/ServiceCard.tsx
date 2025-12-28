import { Link } from "wouter";
import { Service } from "@/lib/types";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface ServiceCardProps {
  service: Service;
  index?: number;
}

const ServiceCard = ({ service, index = 0 }: ServiceCardProps) => {
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div
      ref={ref}
      id={service.slug}
      className={`bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ease-out p-6 sm:p-8 border border-gray-100 group cursor-pointer ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: isIntersecting ? `${index * 100}ms` : '0ms'
      }}
    >
      <div className={`w-14 h-14 bg-${service.iconColor}/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        <i className={`fas fa-${service.icon} text-2xl text-${service.iconColor}`}></i>
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
      <p className="text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">
        {service.description}
      </p>
      <Link
        href={`/services/${service.slug}`}
        className="text-primary font-medium inline-flex items-center group-hover:translate-x-1 transition-transform duration-300"
      >
        Learn more <i className="fas fa-arrow-right ml-2 text-sm transition-transform duration-300 group-hover:translate-x-1"></i>
      </Link>
    </div>
  );
};

export default ServiceCard;
