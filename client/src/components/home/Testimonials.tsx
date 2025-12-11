import TestimonialCard from "@/components/common/TestimonialCard";
import SectionHeading from "@/components/common/SectionHeading";
import { testimonials } from "@/data/testimonials";

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="What Our Clients Say" 
          description="Don't just take our word for it. Here's what clients have to say about working with us."
          light={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
