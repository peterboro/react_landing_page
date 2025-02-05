export default function WhyChooseUs() {
  const features = [
    {
      title: 'Verified Listings',
      icon: '✅',
      description: 'Every property undergoes rigorous verification to ensure authenticity'
    },
    {
      title: 'Expert Agents',
      icon: '👔',
      description: 'Certified professionals with local market expertise'
    },
    {
      title: 'Best Deals',
      icon: '💲',
      description: 'Exclusive access to off-market opportunities'
    }
  ]

  return (
    <section id = "why choose us" className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
