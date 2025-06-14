import { useEffect, useState } from "react";

const USPSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById("usp-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  return (
    <section
      id="usp-section"
      className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50"
    >
      {/* Background Elements */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/5 rounded-full"></div>
      <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-secondary/5 rounded-full"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            What Sets Us Apart
          </h2>
          <p className="text-lg text-gray-600">
            Our unique approach combines technical expertise, business acumen,
            and innovative solutions to deliver exceptional results for our
            clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* USP 1 */}
          <div
            className={`bg-white rounded-2xl shadow-lg p-8 border-t-4 border-primary transform transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <i className="fas fa-layer-group text-2xl text-primary"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Full-Spectrum Expertise</h3>
            <p className="text-gray-600">
              One team, every solution—offering seamless, end-to-end digital
              services from brand new websites and mobile apps to advanced AI/ML
              integrations and custom LLM models.
            </p>
          </div>

          {/* USP 2 */}
          <div
            className={`bg-white rounded-2xl shadow-lg p-8 border-t-4 border-secondary transform transition-all duration-700 delay-200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
              <i className="fas fa-rocket text-2xl text-secondary"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Speed & Flexibility</h3>
            <p className="text-gray-600">
              We deliver at startup speed and adapt to your business—no red
              tape, just results. Need a stunning site last week? You'll get
              rapid prototyping, MVPs, and launch-ready builds—fast.
            </p>
          </div>

          {/* USP 3 */}
          <div
            className={`bg-white rounded-2xl shadow-lg p-8 border-t-4 border-accent transform transition-all duration-700 delay-400 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
              <i className="fas fa-robot text-2xl text-accent"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">AI-First Approach</h3>
            <p className="text-gray-600">
              Our edge is intelligence. Unlike vanilla agencies, we bake modern
              AI/ML capabilities into everything—from smart chatbots to
              automated workflows—future-proofing your business.
            </p>
          </div>

          {/* USP 4 */}
          <div
            className={`bg-white rounded-2xl shadow-lg p-8 border-t-4 border-primary transform transition-all duration-700 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            } md:col-span-2 lg:col-span-1`}
          >
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <i className="fas fa-chart-line text-2xl text-primary"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">
              Results, Not Just Deliverables
            </h3>
            <p className="text-gray-600">
              We stand out by deeply learning each client's goals, personalizing
              our solutions, and obsessing over measurable outcomes—traffic,
              conversions, and revenue.
            </p>
          </div>

          {/* USP 5 */}
          <div
            className={`bg-white rounded-2xl shadow-lg p-8 border-t-4 border-secondary transform transition-all duration-700 delay-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="w-16 h-16 bg-secondary/10 rounded-xl flex items-center justify-center mb-6">
              <i className="fas fa-handshake text-2xl text-secondary"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">
              Trusted Partner, Not Just Developers
            </h3>
            <p className="text-gray-600">
              We're your long-term technology ally, not a one-off
              vendor—bringing strategic insight, transparent communication, and
              a portfolio of success stories. We focus on building lasting
              relationships and helping your business grow through technology
              excellence.
            </p>
          </div>

          {/* USP 6 */}
          <div
            className={`bg-white rounded-2xl shadow-lg p-8 border-t-4 border-primary transform transition-all duration-700 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            } md:col-span-2 lg:col-span-1`}
          >
            <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <i className="fas fa-chart-line text-2xl text-primary"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">
              Results, Not Just Deliverables
            </h3>
            <p className="text-gray-600">
              We stand out by deeply learning each client's goals, personalizing
              our solutions, and obsessing over measurable outcomes—traffic,
              conversions, and revenue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USPSection;
