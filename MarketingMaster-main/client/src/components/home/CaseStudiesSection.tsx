import { Link } from "wouter";
import CaseStudyCard from "@/components/common/CaseStudyCard";
import SectionHeading from "@/components/common/SectionHeading";
import { caseStudies } from "@/data/caseStudies";

const CaseStudiesSection = () => {
  // Get the first 3 case studies for the homepage
  const featuredCaseStudies = caseStudies.slice(0, 3);

  return (
    <section id="case-studies" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Case Studies" 
          description="See how we've helped startups, enterprises, and everything in between achieve their digital goals."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {featuredCaseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/case-studies" 
            className="inline-flex items-center bg-white border border-gray-300 hover:bg-gray-50 text-dark font-medium rounded-md px-6 py-3 shadow-sm transition"
          >
            View more case studies <i className="fas fa-arrow-right ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
