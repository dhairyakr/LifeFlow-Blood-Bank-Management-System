import React, { useState } from 'react';
import { Search, MapPin, AlertTriangle, Clock, Check, X, Calendar, Phone, Filter, Heart, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BloodRequest {
  id: string;
  patientName: string;
  bloodType: string;
  units: number;
  hospital: string;
  location: string;
  urgency: 'Normal' | 'Urgent' | 'Critical';
  requestDate: string;
  status: 'Open' | 'In Progress' | 'Fulfilled' | 'Expired';
  contactPhone: string;
  notes?: string;
  distance?: number;
}

interface Donor {
  id: string;
  name: string;
  bloodType: string;
  location: string;
  distance: number;
  lastDonation: string;
  status: 'Available' | 'Recently Donated' | 'Unavailable';
  matchScore: number;
  avatar?: string;
  donationCount: number;
}

const FindBloodPage: React.FC = () => {
  const [searchParams, setSearchParams] = useState({
    bloodType: '',
    location: '',
    urgency: '',
  });
  
  const [activeTab, setActiveTab] = useState<'find' | 'request'>('find');
  const [isLoading, setIsLoading] = useState(false);
  
  // Simulated data
  const donors: Donor[] = [
    {
      id: 'D-001',
      name: 'Michael Brown',
      bloodType: 'O-',
      location: 'Downtown, Healthcare City',
      distance: 1.2,
      lastDonation: '2025-01-15',
      status: 'Available',
      matchScore: 98,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      donationCount: 12
    },
    {
      id: 'D-002',
      name: 'Sarah Wilson',
      bloodType: 'O-',
      location: 'West End, Healthcare City',
      distance: 3.5,
      lastDonation: '2025-02-20',
      status: 'Available',
      matchScore: 95,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      donationCount: 8
    },
    {
      id: 'D-003',
      name: 'David Miller',
      bloodType: 'O+',
      location: 'North District, Healthcare City',
      distance: 2.8,
      lastDonation: '2025-03-05',
      status: 'Available',
      matchScore: 85,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
      donationCount: 15
    }
  ];

  const [bloodRequests] = useState<BloodRequest[]>([
    {
      id: 'REQ-001',
      patientName: 'John Doe',
      bloodType: 'O-',
      units: 3,
      hospital: 'Central Hospital',
      location: 'Downtown, Healthcare City',
      urgency: 'Critical',
      requestDate: '2025-04-10T09:30:00',
      status: 'Open',
      contactPhone: '(555) 123-4567',
      notes: 'Emergency surgery scheduled for tomorrow morning',
      distance: 1.5
    },
    {
      id: 'REQ-002',
      patientName: 'Jane Smith',
      bloodType: 'AB+',
      units: 2,
      hospital: 'Memorial Medical Center',
      location: 'North District, Healthcare City',
      urgency: 'Normal',
      requestDate: '2025-04-09T14:15:00',
      status: 'In Progress',
      contactPhone: '(555) 987-6543',
      distance: 3.2
    }
  ]);

  const handleSearch = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

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
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 to-red-50">
      {/* Search Section */}
      <section className="relative py-16 overflow-hidden">
        <motion.div 
          className="container mx-auto px-4 md:px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Find Blood Donors
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Connect with nearby donors or submit a blood request. Our smart matching system helps you find the right match quickly.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Blood Type</label>
                  <select
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blood-red focus:ring focus:ring-blood-red focus:ring-opacity-50"
                    value={searchParams.bloodType}
                    onChange={(e) => setSearchParams({ ...searchParams, bloodType: e.target.value })}
                  >
                    <option value="">All Blood Types</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Enter your location"
                      className="w-full pl-10 rounded-lg border-gray-300 shadow-sm focus:border-blood-red focus:ring focus:ring-blood-red focus:ring-opacity-50"
                      value={searchParams.location}
                      onChange={(e) => setSearchParams({ ...searchParams, location: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Urgency</label>
                  <select
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blood-red focus:ring focus:ring-blood-red focus:ring-opacity-50"
                    value={searchParams.urgency}
                    onChange={(e) => setSearchParams({ ...searchParams, urgency: e.target.value })}
                  >
                    <option value="">Any Urgency</option>
                    <option value="Normal">Normal</option>
                    <option value="Urgent">Urgent</option>
                    <option value="Critical">Critical</option>
                  </select>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <motion.button
                  className="px-8 py-3 bg-blood-red text-white rounded-lg flex items-center space-x-2 hover:bg-blood-dark transition-colors duration-300"
                  onClick={handleSearch}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Searching...
                    </div>
                  ) : (
                    <>
                      <Search size={20} />
                      <span>Search Donors</span>
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Results Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Donors List */}
            <motion.div 
              className="md:w-2/3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Available Donors</h2>
              <div className="space-y-4">
                {donors.map((donor) => (
                  <motion.div
                    key={donor.id}
                    variants={itemVariants}
                    className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center">
                        <img
                          src={donor.avatar}
                          alt={donor.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div className="ml-4">
                          <h3 className="text-lg font-semibold text-gray-900">{donor.name}</h3>
                          <div className="flex items-center text-sm text-gray-600 mt-1">
                            <MapPin size={16} className="mr-1" />
                            <span>{donor.location} ({donor.distance} miles)</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blood-red">{donor.bloodType}</div>
                        <div className="flex items-center mt-1">
                          <Heart size={16} className="text-blood-red mr-1" />
                          <span className="text-sm text-gray-600">{donor.donationCount} donations</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="text-sm font-medium text-gray-900">Match Score:</div>
                          <div className="ml-2 text-sm font-semibold text-green-600">{donor.matchScore}%</div>
                        </div>
                        <motion.button
                          className="px-4 py-2 bg-blood-red text-white rounded-lg flex items-center space-x-2 hover:bg-blood-dark transition-colors duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>Contact Donor</span>
                          <ArrowRight size={16} />
                        </motion.button>
                      </div>
                      <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-500 h-2 rounded-full"
                          style={{ width: `${donor.matchScore}%` }}
                        ></div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Active Requests */}
            <motion.div 
              className="md:w-1/3"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Active Requests</h2>
              <div className="space-y-4">
                {bloodRequests.map((request) => (
                  <motion.div
                    key={request.id}
                    variants={itemVariants}
                    className={`bg-white rounded-xl shadow-lg p-6 border-l-4 ${
                      request.urgency === 'Critical' ? 'border-red-500' :
                      request.urgency === 'Urgent' ? 'border-orange-500' :
                      'border-green-500'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{request.hospital}</h3>
                        <div className="flex items-center text-sm text-gray-600 mt-1">
                          <MapPin size={16} className="mr-1" />
                          <span>{request.location}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blood-red">{request.bloodType}</div>
                        <div className="text-sm text-gray-600">{request.units} units needed</div>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          request.urgency === 'Critical' ? 'bg-red-100 text-red-800' :
                          request.urgency === 'Urgent' ? 'bg-orange-100 text-orange-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {request.urgency}
                        </span>
                        <span className="text-sm text-gray-500">
                          {new Date(request.requestDate).toLocaleDateString()}
                        </span>
                      </div>
                      <motion.button
                        className="px-4 py-2 bg-blood-red text-white rounded-lg hover:bg-blood-dark transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Respond
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FindBloodPage;