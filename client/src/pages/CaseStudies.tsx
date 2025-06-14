import CaseStudyCard from "@/components/common/CaseStudyCard";
import SectionHeading from "@/components/common/SectionHeading";
import { caseStudies } from "@/data/caseStudies";
import { Helmet } from "react-helmet";

const CaseStudies = () => {
  return (
    <>
      <Helmet>
        <title>Case Studies | Danitum Technologies</title>
        <meta
          name="description"
          content="See how we've helped startups, enterprises, and everything in between achieve their digital goals."
        />
      </Helmet>
      <main>
        <div className="bg-gradient-to-r from-dark to-dark/90 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-500 max-w-3xl">
              See how we've helped startups, enterprises, and everything in
              between achieve their digital goals.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CaseStudies;
