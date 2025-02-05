import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9')] bg-cover bg-center opacity-90">
        <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center relative z-10 px-4"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Find Your Dream Home
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Discover premium properties with verified listings and expert guidance from our certified agents.
        </p>
        <button className="bg-accent text-white px-8 py-3 rounded-lg text-lg hover:bg-opacity-90 transition">
          Get Started
        </button>
      </motion.div>
    </section>
  )
}
