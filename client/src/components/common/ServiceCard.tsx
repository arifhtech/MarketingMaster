import { Link } from "wouter";
import { Service } from "@/lib/types";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div id={service.slug} className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-8 border border-gray-100">
      <div className={`w-14 h-14 bg-${service.iconColor}/10 rounded-lg flex items-center justify-center mb-6`}>
        <i className={`fas fa-${service.icon} text-2xl text-${service.iconColor}`}></i>
      </div>
      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-6">
        {service.description}
      </p>
      <Link 
        href={`/services/${service.slug}`} 
        className="text-primary font-medium inline-flex items-center hover:underline"
      >
        Learn more <i className="fas fa-arrow-right ml-2 text-sm"></i>
      </Link>
    </div>
  );
};

export default ServiceCard;
