import { LuFacebook , LuInstagram, LuMail, LuMapPin, LuPhone, LuTwitter, LuYoutube } from 'react-icons/lu'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-5xl font-bold font-logo text-primary">ChefHub</span>
            </div>
            <p className="text-gray-400 mb-6">
              Discover, share, and enjoy amazing recipes from around the world. 
              Connect with fellow food enthusiasts and elevate your cooking journey.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <LuFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <LuTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <LuInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <LuYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                  <NavLink
                      to="recipes"
                      className={({ isActive }) => (isActive ? "text-primary" : "nav-item")}
                      end
                  >
                      Recipes
                  </NavLink>
              </li>
              <li>
                  <NavLink
                      to="blogs"
                      className={({ isActive }) => (isActive ? "text-primary" : "nav-item")}
                      end
                  >
                      Blogs
                  </NavLink>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Italian</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mexican</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Asian</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Mediterranean</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Desserts</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <LuMail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-400">hello@chefhub.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <LuPhone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <LuMapPin className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-gray-400">New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 ChefHub. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer