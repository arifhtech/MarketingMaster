export interface SectionHeadingProps {
  title: string;
  description?: string;
  subtitle?: string;
  light?: boolean;
}

const SectionHeading = ({ title, description, subtitle, light = false }: SectionHeadingProps) => {
  return (
    <div className="text-center mb-16">
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <h3 className={`text-lg sm:text-xl font-semibold mb-4 ${light ? 'text-gray-200' : 'text-gray-700'}`}>
          {subtitle}
        </h3>
      )}
      {description && (
        <p className={`text-lg sm:text-xl ${light ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
