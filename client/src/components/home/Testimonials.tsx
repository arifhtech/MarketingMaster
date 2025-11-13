import React from "react";
import TestimonialCard from "@/components/common/TestimonialCard";
import SectionHeading from "@/components/common/SectionHeading";
import { testimonials } from "@/data/testimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const Testimonials = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const { ref: sectionRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  return (
    <section
      ref={sectionRef}
      className={`py-16 md:py-24 bg-dark text-white transition-all duration-700 ease-out ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Our Clients Say"
          description="Don't just take our word for it. Here's what clients have to say about working with us."
          light={true}
        />

        <div className="mt-16">
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-5xl mx-auto"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <TestimonialCard testimonial={testimonial} index={index} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex hover:bg-white/20 transition-all duration-300 hover:scale-110" />
            <CarouselNext className="hidden md:flex hover:bg-white/20 transition-all duration-300 hover:scale-110" />
          </Carousel>
          {/* Navigation dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className="w-3 h-3 rounded-full bg-gray-600 hover:bg-gray-500 transition-all duration-300 hover:scale-125 hover:shadow-lg focus:bg-white focus:shadow-lg focus:scale-125 active:scale-95"
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

