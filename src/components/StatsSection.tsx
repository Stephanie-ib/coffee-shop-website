const StatsSection = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50K+", label: "Happy Customers" },
              { number: "15", label: "Coffee Varieties" },
              { number: "3", label: "Brussels Locations" },
              { number: "5★", label: "Average Rating" }
            ].map((stat, index) => (
              <div key={index} className="transform hover:scale-105 transition-transform duration-300">
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
    </>
  )
}

export default StatsSection
