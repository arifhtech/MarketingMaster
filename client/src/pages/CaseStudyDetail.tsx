import { useParams, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { caseStudies } from "@/data/caseStudies";
import { CaseStudy } from "@/lib/types";
import SectionHeading from "@/components/common/SectionHeading";
import CTABanner from "@/components/home/CTABanner";
import { Helmet } from "react-helmet";

const CaseStudyDetail = () => {
  const { id } = useParams();
  const [, setLocation] = useLocation();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);

  useEffect(() => {
    const foundCaseStudy = caseStudies.find((cs) => cs.id === parseInt(id || "0"));
    if (foundCaseStudy) {
      setCaseStudy(foundCaseStudy);
    } else {
      setLocation("/case-studies");
    }
  }, [id, setLocation]);

  if (!caseStudy) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>{caseStudy.title} Case Study | NexGen Solutions</title>
        <meta name="description" content={caseStudy.description} />
      </Helmet>
      <main>
        <div className="bg-gradient-to-r from-dark to-dark/90 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <span className={`bg-${caseStudy.categoryColor}/10 text-${caseStudy.categoryColor} text-sm font-medium px-3 py-1 rounded-full mb-4 inline-block`}>
              {caseStudy.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{caseStudy.title}</h1>
            <p className="text-xl text-gray-200 max-w-3xl">{caseStudy.description}</p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <img 
                  src={caseStudy.image} 
                  alt={caseStudy.title} 
                  className="w-full h-auto rounded-xl mb-8"
                />
                
                <div className="prose prose-lg max-w-none">
                  <h2>The Challenge</h2>
                  <p>
                    Our client, a leading {caseStudy.category.toLowerCase()} company, faced significant challenges
                    with their existing systems. They needed a solution that would allow them to scale their operations,
                    improve customer experience, and stay ahead of the competition in a rapidly evolving market.
                  </p>
                  
                  <p>
                    Key challenges included:
                  </p>
                  
                  <ul>
                    <li>Legacy systems that couldn't handle growing transaction volumes</li>
                    <li>Poor user experience leading to customer dissatisfaction</li>
                    <li>Lack of data visibility for business decision making</li>
                    <li>Increasing security and compliance requirements</li>
                  </ul>
                  
                  <h2>Our Solution</h2>
                  <p>
                    After a thorough analysis of the client's requirements and existing infrastructure,
                    our team designed and implemented a comprehensive solution:
                  </p>
                  
                  <ul>
                    <li>Developed a scalable, cloud-based platform using {caseStudy.technologies.join(", ")}</li>
                    <li>Redesigned the user interface with a focus on usability and accessibility</li>
                    <li>Implemented robust data analytics tools for real-time business insights</li>
                    <li>Built secure authentication and data protection measures to meet compliance standards</li>
                  </ul>
                  
                  <p>
                    The project was delivered in an agile fashion over a six-month period, with regular milestones 
                    and continuous client feedback to ensure alignment with business goals.
                  </p>
                  
                  <h2>The Results</h2>
                  <p>
                    The implementation of our solution resulted in significant improvements across the client's operations:
                  </p>
                  
                  <ul>
                    <li>45% increase in system performance and transaction processing speed</li>
                    <li>37% reduction in customer support tickets related to platform issues</li>
                    <li>Data-driven insights enabled the client to identify new revenue opportunities</li>
                    <li>Improved security posture with successful compliance audits</li>
                    <li>Reduced operational costs through automated workflows and improved efficiency</li>
                  </ul>
                  
                  <blockquote>
                    <p>
                      "The NexGen team delivered a solution that not only addressed our immediate challenges 
                      but positioned us for future growth. Their technical expertise and business understanding 
                      made them true partners in our digital transformation journey."
                    </p>
                    <cite>— Client CTO</cite>
                  </blockquote>
                </div>
              </div>
              
              <div className="lg:col-span-1">
                <div className="bg-gray-50 p-8 rounded-xl sticky top-24">
                  <h3 className="text-2xl font-bold mb-6">Project Overview</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-500 mb-1">Client</h4>
                      <p>{caseStudy.client}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-500 mb-1">Industry</h4>
                      <p>{caseStudy.category}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-500 mb-1">Project Duration</h4>
                      <p>6 months</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-500 mb-1">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {caseStudy.technologies.map((tech, index) => (
                          <span key={index} className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-500 mb-1">Services Provided</h4>
                      <ul className="list-disc pl-5 text-gray-700">
                        <li>Custom Development</li>
                        <li>UX/UI Design</li>
                        <li>System Architecture</li>
                        <li>Quality Assurance</li>
                        <li>Deployment & Support</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h4 className="font-bold mb-4">Interested in similar results?</h4>
                    <a 
                      href="/contact" 
                      className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-4 rounded-md inline-block text-center"
                    >
                      Contact Us
                    </a>
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

export default CaseStudyDetail;
