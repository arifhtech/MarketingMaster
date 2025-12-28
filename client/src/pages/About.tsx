import SectionHeading from "@/components/common/SectionHeading";
import CTABanner from "@/components/home/CTABanner";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Danitum Technologies</title>
        <meta
          name="description"
          content="We are a software company passionate about building scalable, intelligent, and user-focused digital products."
        />
      </Helmet>
      <main>
        <div className="bg-gradient-to-r from-dark to-dark/90 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-500 max-w-3xl">
              We are a software company passionate about building scalable,
              intelligent, and user-focused digital products.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Danitum Technologies began with a simple mission:
                  to help businesses leverage technology for sustainable growth.
                  Our team of passionate developers, designers, and strategists
                  has grown from a small startup to a versatile digital partner
                  for companies around the world.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  We believe that great software isn't just about writing
                  code—it's about understanding business challenges and creating
                  solutions that drive real value. From stunning websites to
                  advanced AI systems, we approach each project with a focus on
                  quality, innovation, and results.
                </p>
                <p className="text-lg text-gray-600">
                  Today, we're proud to work with clients ranging from ambitious
                  startups to established enterprises, helping them navigate the
                  ever-changing digital landscape and stay ahead of the
                  competition.
                </p>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="Our team collaborating on a project"
                  className="rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Our Mission & Vision"
              description="Building technology that makes a difference"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-bullseye text-2xl text-primary"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To empower businesses with innovative software solutions that
                  drive growth, improve efficiency, and create exceptional user
                  experiences. We're committed to delivering technology that
                  solves real problems and creates measurable value.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-6">
                  <i className="fas fa-eye text-2xl text-secondary"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To become the most trusted technology partner for
                  forward-thinking businesses worldwide. We envision a future
                  where every organization, regardless of size, has access to
                  powerful, user-friendly software that helps them thrive in a
                  digital-first world.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Our Values"
              description="The principles that guide our work"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-gem text-2xl text-primary"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-gray-600">
                  We're committed to delivering the highest quality in
                  everything we do.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-lightbulb text-2xl text-secondary"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We embrace new technologies and approaches to solve complex
                  problems.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-users text-2xl text-accent"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Collaboration</h3>
                <p className="text-gray-600">
                  We work closely with our clients, treating their challenges as
                  our own.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-shield-alt text-2xl text-primary"></i>
                </div>
                <h3 className="text-xl font-bold mb-2">Integrity</h3>
                <p className="text-gray-600">
                  We maintain the highest ethical standards in all our business
                  practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title="Our Team"
              description="The talented people behind our success"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt="Team member"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Michael Johnson</h3>
                  <p className="text-primary mb-4">Founder & CEO</p>
                  <p className="text-gray-600">
                    With 15+ years in software development and business
                    leadership, Michael founded NexGen Solutions to help
                    companies thrive in the digital age.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt="Team member"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Sarah Chen</h3>
                  <p className="text-secondary mb-4">CTO</p>
                  <p className="text-gray-600">
                    Sarah leads our technical strategy and engineering teams,
                    bringing extensive experience in AI, cloud architecture, and
                    software development.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                  alt="Team member"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">David Rodriguez</h3>
                  <p className="text-accent mb-4">Head of Design</p>
                  <p className="text-gray-600">
                    David ensures our solutions not only function perfectly but
                    provide intuitive, engaging experiences for users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <CTABanner />
      </main>
    </>
  );
};

export default About;
