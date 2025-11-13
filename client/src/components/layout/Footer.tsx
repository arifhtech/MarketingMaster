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
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6">
              <img
                src={danitumLogo}
                alt="Danitum Technologies"
                className="h-16"
              />
            </div>
            <p className="text-gray-400 mb-6">
              Transforming ambitious ideas into impactful digital solutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-gray-400 hover:text-primary transition"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-primary transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="text-gray-400 hover:text-primary transition"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-primary transition"
                >
                  Blog & Insights
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-3 text-gray-400 mb-6">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3"></i>
                <span>Office 178/206 Sanquelim - Goa, 403505</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone mr-3"></i>
                <span>+91 1234567890</span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3"></i>
                <span>arif@danitum.com</span>
              </li>
            </ul>

            <h4 className="text-lg font-bold mb-4">Newsletter</h4>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-primary transition"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 hover:translate-y-[-2px] shadow-lg"
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
