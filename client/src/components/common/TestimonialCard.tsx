import { Testimonial } from "@/lib/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="bg-dark border border-gray-700 rounded-xl p-8 relative">
      <div className="text-yellow-400 mb-6">
        {[...Array(5)].map((_, index) => (
          <i key={index} className="fas fa-star"></i>
        ))}
      </div>
      <p className="text-gray-300 mb-8 italic">
        "{testimonial.content}"
      </p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center">
          <span className="text-xl font-bold text-white">{testimonial.initials}</span>
        </div>
        <div className="ml-4">
          <h4 className="font-bold">{testimonial.name}</h4>
          <p className="text-gray-400 text-sm">{testimonial.position}, {testimonial.company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
