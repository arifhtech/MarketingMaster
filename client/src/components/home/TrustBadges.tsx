const TrustBadges = () => {
  return (
    <section className="py-8 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-gray-600 font-medium">Trusted by leading companies worldwide</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition">
            <span className="text-2xl font-bold text-gray-400">ACME Corp</span>
          </div>
          <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition">
            <span className="text-2xl font-bold text-gray-400">TechFirm</span>
          </div>
          <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition">
            <span className="text-2xl font-bold text-gray-400">Innovate Inc</span>
          </div>
          <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition">
            <span className="text-2xl font-bold text-gray-400">FutureTech</span>
          </div>
          <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition">
            <span className="text-2xl font-bold text-gray-400">DataSphere</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
