interface SectionHeadingProps {
  title: string;
  description: string;
  light?: boolean;
}

const SectionHeading = ({ title, description, light = false }: SectionHeadingProps) => {
  return (
    <div className="text-center mb-16">
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : ''}`}>
        {title}
      </h2>
      <p className={`text-xl ${light ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
        {description}
      </p>
    </div>
  );
};

export default SectionHeading;
