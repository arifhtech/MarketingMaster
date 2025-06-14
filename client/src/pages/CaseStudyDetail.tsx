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
    const foundCaseStudy = caseStudies.find(
      (cs) => cs.id === parseInt(id || "0")
    );
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
        <title>{caseStudy.title} Case Study | Danitum Technologies</title>
        <meta name="description" content={caseStudy.description} />
      </Helmet>
      <main>
        <div className="bg-gradient-to-r from-dark to-dark/90 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <span
              className={`bg-${caseStudy.categoryColor}/10 text-${caseStudy.categoryColor} text-sm font-medium px-3 py-1 rounded-full mb-4 inline-block`}
            >
              {caseStudy.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {caseStudy.title}
            </h1>
            <p className="text-xl text-gray-500 max-w-3xl">
              {caseStudy.description}
            </p>
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
                  {caseStudy.challenge && (
                    <>
                      <h2>The Challenge</h2>
                      <ul>
                        {caseStudy.challenge.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  {caseStudy.solution && (
                    <>
                      <h2>Our Solution</h2>
                      <ul>
                        {caseStudy.solution.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </>
                  )}

                  {caseStudy.impact && (
                    <>
                      <h2>The Impact</h2>
                      <ul>
                        {caseStudy.impact.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-gray-50 p-8 rounded-xl sticky top-24">
                  <h3 className="text-2xl font-bold mb-6">Project Overview</h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-500 mb-1">
                        Client
                      </h4>
                      <p>{caseStudy.client}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-500 mb-1">
                        Industry
                      </h4>
                      <p>{caseStudy.category}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-500 mb-1">
                        Project Duration
                      </h4>
                      <p>{caseStudy.duration || "N/A"}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-500 mb-1">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {caseStudy.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {caseStudy.services && (
                      <div>
                        <h4 className="font-semibold text-gray-500 mb-1">
                          Services Provided
                        </h4>
                        <ul className="list-disc pl-5 text-gray-700">
                          {caseStudy.services.map((service, index) => (
                            <li key={index}>{service}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h4 className="font-bold mb-4">
                      Interested in similar results?
                    </h4>
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
