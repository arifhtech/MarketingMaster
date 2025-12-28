import { Link } from "wouter";
import { CaseStudy } from "@/lib/types";

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

const CaseStudyCard = ({ caseStudy }: CaseStudyCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden">
      <img 
        src={caseStudy.image} 
        alt={caseStudy.title} 
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <div className={`text-sm font-medium text-${caseStudy.categoryColor} mb-2`}>
          {caseStudy.category}
        </div>
        <h3 className="text-xl font-bold mb-3">{caseStudy.title}</h3>
        <p className="text-gray-600 mb-4">
          {caseStudy.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {caseStudy.technologies.map((tech, index) => (
            <span key={index} className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
              {tech}
            </span>
          ))}
        </div>
        <Link 
          href={`/case-studies/${caseStudy.id}`} 
          className="text-primary font-medium inline-flex items-center hover:underline"
        >
          View case study <i className="fas fa-arrow-right ml-2 text-sm"></i>
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyCard;
