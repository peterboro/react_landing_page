export default function Footer() {
  return (
    <footer id = "Contact" className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Petesal Homes</h3>
            <p className="text-sm">Luxury real estate services since 2010</p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>📞 (+254) 7123-45678</li>
              <li>📧 info@petesalhomes.com</li>
              <li>🏢 123 Luxury Ave, Nairobi</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#featuredproperties" className="hover:text-accent transition">Properties</a></li>
              <li><a href="#whychooseus" className="hover:text-accent transition">Why Choose Us</a></li>
              <li><a href="#Contact" className="hover:text-accent transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition">📘</a>
              <a href="#" className="hover:text-accent transition">📸</a>
              <a href="#" className="hover:text-accent transition">💼</a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>© 2025 Petesal Homes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
