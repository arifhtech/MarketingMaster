import { Testimonial } from "@/lib/types";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

const TestimonialCard = ({ testimonial, index = 0 }: TestimonialCardProps) => {
  const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div
      ref={ref}
      className={`bg-dark border border-gray-700 rounded-xl p-6 sm:p-8 relative shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out group cursor-pointer ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: isIntersecting ? `${index * 150}ms` : '0ms'
      }}
    >
      <div className="text-yellow-400 mb-6 group-hover:scale-110 transition-transform duration-300">
        {[...Array(5)].map((_, index) => (
          <i key={index} className="fas fa-star"></i>
        ))}
      </div>
      <p className="text-gray-300 mb-6 sm:mb-8 italic text-base sm:text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
        "{testimonial.content}"
      </p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center group-hover:bg-gray-600 transition-colors duration-300">
          <span className="text-xl font-bold text-white">{testimonial.initials}</span>
        </div>
        <div className="ml-4">
          <h4 className="font-semibold text-white text-lg group-hover:text-primary transition-colors duration-300">{testimonial.name}</h4>
          <p className="text-gray-400 text-sm font-medium group-hover:text-gray-300 transition-colors duration-300">{testimonial.position}, {testimonial.company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
