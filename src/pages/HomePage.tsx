import StatsSection from "../components/StatsSection";
import FeatureSection from "../components/FeatureSection";

const HomePage: React.FC<{ setCurrentPage: (page: string) => void }> = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1600&h=900&fit=crop')] bg-cover bg-center"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h2 className="text-6xl md:text-8xl font-bold mb-6 animate-pulse">
            Welcome to<br />
            <span className="text-amber-300">Brussels Brewery</span>
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Where Belgian tradition meets exceptional coffee craftsmanship
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => setCurrentPage('menu')}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-2xl"
            >
              Explore Our Menu
            </button>
            <button 
              onClick={() => setCurrentPage('locations')}
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/30 px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300"
            >
              Find Locations
            </button>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 text-6xl animate-bounce delay-100">☕</div>
        <div className="absolute top-40 right-20 text-4xl animate-bounce delay-300">🥐</div>
        <div className="absolute bottom-40 left-40 text-5xl animate-bounce delay-500">🫖</div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <FeatureSection />
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <StatsSection/>
      </section>
    </div>
  );
};

export default HomePage