import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Home Buyer',
    text: 'Petesal Homes made our dream home a reality. Their agents were patient and knowledgeable throughout the entire process.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
  },
  {
    name: 'Michael Chen',
    role: 'Investor',
    text: 'Exceptional service! They found me properties I would never have discovered on my own.',
    image: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf'
  }
]

export default function Testimonials() {
  return (
    <section id = "Testimonials" className="py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Client Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-6 bg-white dark:bg-gray-700 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">"{testimonial.text}"</p>
              <div className="mt-4 flex gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>&#9733;</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
