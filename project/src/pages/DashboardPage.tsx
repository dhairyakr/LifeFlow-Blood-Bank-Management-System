import React, { useEffect } from 'react';
import { Activity, Droplet, Users, Calendar, TrendingUp, Award, Clock, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import BloodAvailabilityChart from '../components/BloodAvailabilityChart';

const DashboardPage = () => {
  useEffect(() => {
    // Animate stats on load
    gsap.from('.stat-card', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out'
    });

    // Animate chart
    gsap.from('.chart-container', {
      scale: 0.9,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: 'elastic.out(1, 0.8)'
    });
  }, []);

  const bloodStock = [
    { bloodType: 'A+', units: 45, status: 'High' as const },
    { bloodType: 'B+', units: 30, status: 'Medium' as const },
    { bloodType: 'O-', units: 15, status: 'Critical' as const },
    { bloodType: 'AB+', units: 25, status: 'Medium' as const }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50 p-6">
      <motion.h1 
        className="text-4xl font-bold text-gray-900 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome Back, John
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Stats Cards */}
        <motion.div 
          className="stat-card bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
          whileHover={{ y: -5 }}
        >
          <div className="flex items-center">
            <div className="p-3 bg-red-100 rounded-full">
              <Droplet className="h-8 w-8 text-blood-red" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Total Donations</p>
              <motion.p 
                className="text-3xl font-bold text-gray-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                248
              </motion.p>
            </div>
          </div>
          <div className="mt-4 flex items-center text-green-500 text-sm">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span>12% increase</span>
          </div>
        </motion.div>

        <motion.div 
          className="stat-card bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
          whileHover={{ y: -5 }}
        >
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-full">
              <Users className="h-8 w-8 text-medical-blue" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Active Donors</p>
              <motion.p 
                className="text-3xl font-bold text-gray-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                156
              </motion.p>
            </div>
          </div>
          <div className="mt-4 flex items-center text-green-500 text-sm">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span>8% increase</span>
          </div>
        </motion.div>

        <motion.div 
          className="stat-card bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
          whileHover={{ y: -5 }}
        >
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-full">
              <Calendar className="h-8 w-8 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Appointments</p>
              <motion.p 
                className="text-3xl font-bold text-gray-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                12
              </motion.p>
            </div>
          </div>
          <div className="mt-4 flex items-center text-orange-500 text-sm">
            <Clock className="w-4 h-4 mr-1" />
            <span>Next in 2 hours</span>
          </div>
        </motion.div>

        <motion.div 
          className="stat-card bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
          whileHover={{ y: -5 }}
        >
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-full">
              <Award className="h-8 w-8 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm text-gray-500">Success Rate</p>
              <motion.p 
                className="text-3xl font-bold text-gray-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                98%
              </motion.p>
            </div>
          </div>
          <div className="mt-4 flex items-center text-purple-500 text-sm">
            <Heart className="w-4 h-4 mr-1" />
            <span>Outstanding</span>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        {/* Blood Availability Chart */}
        <motion.div 
          className="chart-container bg-white rounded-xl shadow-lg p-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Blood Availability</h2>
          <BloodAvailabilityChart data={bloodStock} />
        </motion.div>

        {/* Recent Activity */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg p-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { action: "Blood Donation", donor: "John Doe", type: "A+", time: "2 hours ago", color: "bg-green-100" },
              { action: "Appointment Scheduled", donor: "Jane Smith", type: "O-", time: "4 hours ago", color: "bg-blue-100" },
              { action: "Blood Request", donor: "City Hospital", type: "B+", time: "6 hours ago", color: "bg-red-100" }
            ].map((activity, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className={`flex items-center p-4 rounded-lg ${activity.color} hover:shadow-md transition-shadow duration-300`}
              >
                <div className="flex-1">
                  <p className="text-gray-900 font-medium">{activity.action}</p>
                  <p className="text-gray-600 text-sm">{activity.donor} • {activity.type}</p>
                </div>
                <span className="text-gray-500 text-sm">{activity.time}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardPage;