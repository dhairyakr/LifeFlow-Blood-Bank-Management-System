import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X, Droplet, Search, Building2, Bell, Users, MessageSquare, LogIn } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/', icon: <Heart className="w-5 h-5" /> },
    { name: 'Donate', path: '/donate', icon: <Droplet className="w-5 h-5" /> },
    { name: 'Find Blood', path: '/find-blood', icon: <Search className="w-5 h-5" /> },
    { name: 'Blood Banks', path: '/blood-banks', icon: <Building2 className="w-5 h-5" /> },
    { name: 'Requests', path: '/requests', icon: <Bell className="w-5 h-5" /> },
    { name: 'Community', path: '/community', icon: <Users className="w-5 h-5" /> },
    { name: 'Contact', path: '/contact', icon: <MessageSquare className="w-5 h-5" /> },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Droplet className="w-8 h-8 text-blood-red" fill="#E63946" />
            <span className="text-2xl font-bold text-blood-red">LifeFlow</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-1 px-2 py-1 rounded-md transition-colors duration-200 hover:text-blood-red ${
                  location.pathname === link.path ? 'text-blood-red font-medium' : 'text-text-dark'
                }`}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className="flex items-center space-x-1 px-4 py-2 rounded-md border border-blood-red text-blood-red hover:bg-blood-red hover:text-white transition-colors duration-200"
            >
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 rounded-md bg-blood-red text-white hover:bg-blood-dark transition-colors duration-200"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-dark hover:text-blood-red"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-3 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center space-x-2 p-2 rounded-md transition-colors duration-200 ${
                    location.pathname === link.path ? 'bg-medical-light text-blood-red font-medium' : 'text-text-dark hover:bg-gray-100'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-gray-200 flex flex-col space-y-3">
                <Link
                  to="/login"
                  className="flex items-center justify-center space-x-1 p-2 rounded-md border border-blood-red text-blood-red hover:bg-blood-red hover:text-white transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <LogIn className="w-4 h-4" />
                  <span>Login</span>
                </Link>
                <Link
                  to="/register"
                  className="p-2 rounded-md bg-blood-red text-white hover:bg-blood-dark transition-colors duration-200 text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;