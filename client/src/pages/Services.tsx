import { Link } from "wouter";
import { services } from "@/data/services";
import { Helmet } from "react-helmet";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Services | Danitum Technologies</title>
        <meta name="description" content="Explore our full range of web, mobile, and AI development services" />
      </Helmet>
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-white/90">
                We offer a comprehensive range of digital solutions to help your business thrive in the digital landscape.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Link key={service.id} href={`/services/${service.slug}`}>
                  <a className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="h-3 bg-gradient-to-r from-primary to-secondary"></div>
                    <div className="p-6">
                      <div className="w-14 h-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                        <i className={`fas fa-${service.icon} text-xl`}></i>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="flex items-center text-primary font-medium">
                        <span>Learn more</span>
                        <i className="fas fa-arrow-right ml-2 text-sm"></i>
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-10 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to discuss your project?</h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
                Our team is ready to help you transform your ideas into impactful digital solutions.
              </p>
              <Link href="/contact">
                <a className="inline-block bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-8 py-3 rounded-lg shadow-lg font-medium transition-all duration-300">
                  Get a Free Consultation
                </a>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Services;