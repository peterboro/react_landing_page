import { motion } from 'framer-motion'

const properties = [
  {
    title: 'Luxury Villa',
    price: 'KES 75M',
    location: 'Karen, Kajiado County',
    image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf'
  },
  {
    title: 'Modern Penthouse',
    price: 'KES 40M',
    location: 'Kilimani, Nairobi County',
    image: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c97d'
  },
  {
    title: 'Beachfront Estate',
    price: 'KES 60M',
    location: 'Kilifi, Kilifi County',
    image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c'
  }
]

export default function FeaturedProperties() {
  return (
    <section id = "featuredproperties" className="py-16 px-4 md:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map((prop, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={prop.image}
                alt={prop.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{prop.title}</h3>
                <p className="text-primary dark:text-accent text-lg mb-2">{prop.price}</p>
                <p className="text-gray-600 dark:text-gray-300">{prop.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
