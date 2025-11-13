import { Link } from "wouter";
import { services } from "@/data/services";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import danitumLogo from "@assets/danitum-logo.jpg";

const Footer = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send this to your newsletter service
    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter.",
    });

    setEmail("");
  };

  return (
    <footer className="bg-dark text-white pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src={danitumLogo}
                alt="Danitum Technologies"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              Transforming ambitious ideas into impactful digital solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in text-lg"></i>
              </a>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-base font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-base font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-primary transition-colors duration-200 text-sm"
                >
                  Blog & Insights
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-base font-semibold mb-4 text-white">Get in Touch</h4>
            <ul className="space-y-2 text-gray-400 mb-4 text-sm">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-0.5 mr-2 text-primary"></i>
                <span>Office 178/206 Sanquelim - Goa, 403505</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone mr-2 text-primary"></i>
                <span>+91 1234567890</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-2 text-primary"></i>
                <span>arif@danitum.com</span>
              </li>
            </ul>

            <h4 className="text-base font-semibold mb-3 text-white">Stay Updated</h4>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2.5 rounded-lg bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200 text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-200 hover:shadow-md text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Danitum Technologies. All rights
              reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/#"
                className="text-gray-400 hover:text-primary text-sm transition"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
