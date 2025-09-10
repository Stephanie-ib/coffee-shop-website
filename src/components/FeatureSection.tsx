const FeatureSection = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-16 text-gray-800">Why Choose Brussels Brewery?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "☕", title: "Premium Quality", description: "Sourced from the finest coffee farms worldwide, roasted to perfection in our Brussels facility." },
              { icon: "🇧🇪", title: "Belgian Heritage", description: "Combining centuries of Belgian culinary tradition with modern coffee expertise." },
              { icon: "🌱", title: "Sustainable Practice", description: "Committed to ethical sourcing and environmentally responsible practices." }
            ].map((feature, index) => (
              <div key={index} className="text-center group hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h4 className="text-2xl font-semibold mb-4 text-gray-800">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
    </>
  )
}

export default FeatureSection
