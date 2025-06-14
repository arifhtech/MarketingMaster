import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { services } from "@/data/services";
import danitumLogo from "@assets/danitum-logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white ${
        scrolled ? "shadow-sm" : ""
      } transition-shadow`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex flex-col">
            <Link href="/" className="flex items-center ">
              <img
                src={danitumLogo}
                alt="Danitum Technologies"
                className="h-10"
              />
            </Link>
            {/* <span className="text-xs text-gray-600">Danitum Technologies Pvt Ltd</span> */}
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <Link
                href="/"
                className={`font-medium ${
                  location === "/" ? "text-primary" : "hover:text-primary"
                } transition`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`font-medium ${
                  location === "/about" ? "text-primary" : "hover:text-primary"
                } transition`}
              >
                About
              </Link>
              <div className="relative group inline-block">
                <button
                  className={`font-medium transition flex items-center ${
                    location.startsWith("/services")
                      ? "text-primary"
                      : "hover:text-primary"
                  }`}
                >
                  Services <i className="fas fa-chevron-down ml-1 text-xs"></i>
                </button>

                <div
                  className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-md py-2 z-50
    opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto
    transition duration-200 ease-out"
                >
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block px-4 py-2 hover:bg-gray-100 transition"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/case-studies"
                className={`font-medium ${
                  location === "/case-studies"
                    ? "text-primary"
                    : "hover:text-primary"
                } transition`}
              >
                Case Studies
              </Link>
              <Link
                href="/blog"
                className={`font-medium ${
                  location === "/blog" ? "text-primary" : "hover:text-primary"
                } transition`}
              >
                Insights
              </Link>
              <Link
                href="/contact"
                className={`font-medium ${
                  location === "/contact"
                    ? "text-primary"
                    : "hover:text-primary"
                } transition`}
              >
                Contact
              </Link>
            </nav>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-5 py-2 rounded-md shadow-sm font-medium transition"
            >
              Get a Free Consultation
            </Link>
          </div>

          <button className="lg:hidden focus:outline-none" onClick={toggleMenu}>
            <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-xl`}></i>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden ${
            isOpen ? "block" : "hidden"
          } transition-all duration-300 ease-in-out`}
        >
          <div className="py-4 space-y-4 border-t border-gray-200">
            <Link href="/" className="block font-medium py-2">
              Home
            </Link>
            <Link href="/about" className="block font-medium py-2">
              About
            </Link>

            <div className="relative">
              <button
                onClick={toggleServices}
                className="flex w-full items-center justify-between font-medium py-2"
              >
                Services
                <i
                  className={`fas fa-chevron-${
                    servicesOpen ? "up" : "down"
                  } text-xs`}
                ></i>
              </button>
              <div
                className={`${
                  servicesOpen ? "block" : "hidden"
                } pl-4 pt-2 space-y-2`}
              >
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="block py-2 text-gray-700"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/case-studies" className="block font-medium py-2">
              Case Studies
            </Link>
            <Link href="/blog" className="block font-medium py-2">
              Insights
            </Link>
            <Link href="/contact" className="block font-medium py-2">
              Contact
            </Link>
            <Link
              href="/contact"
              className="block bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-5 py-2 rounded-md text-center font-medium mt-4"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
