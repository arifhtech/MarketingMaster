import ContactForm from "@/components/common/ContactForm";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Danitum Technologies</title>
        <meta
          name="description"
          content="Ready to start your project? Contact us for a free consultation."
        />
      </Helmet>
      <main>
        <div className="bg-gradient-to-r from-dark to-dark/90 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-500 max-w-3xl">
              Ready to start your project? Contact us for a free consultation.
            </p>
          </div>
        </div>

        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Get in Touch
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Ready to start your project? Contact us for a free
                  consultation.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <i className="fas fa-envelope text-primary"></i>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold mb-1">Email Us</h3>
                      <p className="text-gray-600">danitum.tech@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <i className="fas fa-phone-alt text-primary"></i>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold mb-1">Call Us</h3>
                      <p className="text-gray-600">+91 70834 52095</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                        <i className="fas fa-map-marker-alt text-primary"></i>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold mb-1">Visit Us</h3>
                      <p className="text-gray-600">
                        Office 178/206 Sanquelim - Goa, 403505
                        <br />
                        {/* San Francisco, CA 94105 */}
                      </p>
                    </div>
                  </div>
                </div>

                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800"
                  alt="Our office space"
                  className="rounded-xl shadow-md w-full h-auto mt-6"
                />
              </div>

              <div className="bg-white rounded-xl shadow-md p-8">
                <h3 className="text-2xl font-bold mb-6">
                  Let's Start Your Project
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
