import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Search, Building2, Users, ArrowRight, Award, Clock, Shield, Activity } from 'lucide-react';
import BloodTypeCard from '../components/BloodTypeCard';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const HomePage: React.FC = () => {
  useEffect(() => {
    // Animate hero content
    gsap.fromTo(
      '.hero-content',
      { 
        y: 30, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: 'power2.out'
      }
    );

    // Animate blood type cards
    gsap.fromTo(
      '.blood-type-card',
      { 
        y: 50,
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out',
        delay: 0.5
      }
    );
  }, []);

  const bloodTypes = [
    {
      type: 'A+',
      canDonateTo: ['A+', 'AB+'],
      canReceiveFrom: ['A+', 'A-', 'O+', 'O-'],
      rarity: 'Common',
      currentStock: 'Medium',
    },
    {
      type: 'O-',
      canDonateTo: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      canReceiveFrom: ['O-'],
      rarity: 'Rare',
      currentStock: 'Critical',
    },
    {
      type: 'B+',
      canDonateTo: ['B+', 'AB+'],
      canReceiveFrom: ['B+', 'B-', 'O+', 'O-'],
      rarity: 'Common',
      currentStock: 'Low',
    },
    {
      type: 'AB+',
      canDonateTo: ['AB+'],
      canReceiveFrom: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      rarity: 'Uncommon',
      currentStock: 'High',
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Regular Donor',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      quote: "I've been donating blood for 5 years now. The LifeFlow system makes it so easy to schedule donations and track my impact. It's rewarding to know I've helped save lives.",
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      role: 'Hospital Administrator',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      quote: "The real-time inventory tracking has revolutionized how we manage blood supplies. During emergencies, we can quickly locate and request the blood types we need.",
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Blood Recipient',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      quote: "After my accident, I needed multiple transfusions. Thanks to LifeFlow's efficient donor matching, the hospital had exactly what I needed. I'm forever grateful to the donors who saved my life.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-red-50 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div 
              className="md:w-1/2 hero-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-dark leading-tight mb-6">
                Save Lives Through <span className="text-blood-red">Blood Donation</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Join our community of lifesavers. Every donation can save up to three lives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/donate" 
                    className="w-full px-8 py-4 bg-blood-red text-white rounded-lg hover:bg-blood-dark transition-colors duration-300 flex items-center justify-center shadow-lg"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Donate Now
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/find-blood" 
                    className="w-full px-8 py-4 border-2 border-blood-red text-blood-red rounded-lg hover:bg-blood-red hover:text-white transition-colors duration-300 flex items-center justify-center"
                  >
                    <Search className="w-5 h-5 mr-2" />
                    Find Blood
                  </Link>
                </motion.div>
              </div>
            </motion.div>
            <motion.div 
              className="md:w-1/2 mt-12 md:mt-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Blood Donation" 
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl font-bold text-blood-red mb-2">10,000+</div>
              <div className="text-lg text-gray-600">Registered Donors</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-blood-red mb-2">5,000+</div>
              <div className="text-lg text-gray-600">Lives Saved</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-4xl font-bold text-blood-red mb-2">100+</div>
              <div className="text-lg text-gray-600">Partner Hospitals</div>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="text-4xl font-bold text-blood-red mb-2">50+</div>
              <div className="text-lg text-gray-600">Blood Banks</div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Blood Types Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-text-dark mb-4">Blood Types & Compatibility</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Understanding blood types is crucial for successful transfusions. Learn about different blood types and their compatibility.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bloodTypes.map((bloodType, index) => (
              <motion.div 
                key={bloodType.type}
                className="blood-type-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <BloodTypeCard {...bloodType} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-text-dark mb-4">Why Choose LifeFlow</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our comprehensive blood management system connects donors, recipients, and healthcare providers seamlessly.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Activity className="w-6 h-6 text-blood-red" />
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-2">Real-time Updates</h3>
              <p className="text-gray-600">
                Get instant notifications about blood availability and donation requests.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-medical-blue" />
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-2">Secure & Private</h3>
              <p className="text-gray-600">
                Your data is protected with end-to-end encryption and strict privacy controls.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-2">Donor Recognition</h3>
              <p className="text-gray-600">
                Earn badges and track your impact in saving lives through donations.
              </p>
            </motion.div>
            
            <motion.div 
              className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-2">Smart Scheduling</h3>
              <p className="text-gray-600">
                AI-powered scheduling suggests optimal donation times based on local needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-text-dark mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Read inspiring stories from donors and recipients in our community.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                className="bg-white p-8 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-text-dark">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">{testimonial.quote}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blood-red to-blood-dark text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Save Lives?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
              Join our community of donors and make a difference today.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/donate" 
                className="inline-block px-8 py-4 bg-white text-blood-red rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold text-lg"
              >
                Start Donating Today
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;