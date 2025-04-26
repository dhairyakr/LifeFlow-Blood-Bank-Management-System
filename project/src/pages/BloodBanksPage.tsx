import React, { useState } from 'react';
import { MapPin, Phone, Clock, ExternalLink, Search, Filter } from 'lucide-react';
import BloodAvailabilityChart from '../components/BloodAvailabilityChart';

interface BloodBank {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  hours: string;
  distance: number;
  availability: {
    bloodType: string;
    units: number;
    status: 'High' | 'Medium' | 'Low' | 'Critical';
  }[];
}

const BloodBanksPage: React.FC = () => {
  const [searchParams, setSearchParams] = useState({
    location: '',
    bloodType: '',
  });
  
  const [bloodBanks, setBloodBanks] = useState<BloodBank[]>([
    {
      id: 'BB-001',
      name: 'Central Blood Bank',
      address: '123 Medical Center Dr',
      city: 'Healthcare City',
      phone: '(555) 123-4567',
      hours: 'Mon-Fri: 8AM-6PM, Sat: 9AM-2PM',
      distance: 1.2,
      availability: [
        { bloodType: 'A+', units: 45, status: 'High' },
        { bloodType: 'A-', units: 12, status: 'Medium' },
        { bloodType: 'B+', units: 25, status: 'Medium' },
        { bloodType: 'B-', units: 8, status: 'Low' },
        { bloodType: 'AB+', units: 15, status: 'Medium' },
        { bloodType: 'AB-', units: 3, status: 'Critical' },
        { bloodType: 'O+', units: 30, status: 'High' },
        { bloodType: 'O-', units: 5, status: 'Critical' },
      ],
    },
    {
      id: 'BB-002',
      name: 'Memorial Blood Center',
      address: '456 Hospital Ave',
      city: 'Healthcare City',
      phone: '(555) 987-6543',
      hours: 'Mon-Fri: 9AM-5PM, Sat-Sun: 10AM-2PM',
      distance: 3.5,
      availability: [
        { bloodType: 'A+', units: 35, status: 'High' },
        { bloodType: 'A-', units: 18, status: 'Medium' },
        { bloodType: 'B+', units: 15, status: 'Medium' },
        { bloodType: 'B-', units: 12, status: 'Medium' },
        { bloodType: 'AB+', units: 10, status: 'Low' },
        { bloodType: 'AB-', units: 6, status: 'Low' },
        { bloodType: 'O+', units: 25, status: 'Medium' },
        { bloodType: 'O-', units: 8, status: 'Low' },
      ],
    },
    {
      id: 'BB-003',
      name: 'University Blood Donation Center',
      address: '789 Campus Blvd',
      city: 'Healthcare City',
      phone: '(555) 456-7890',
      hours: 'Mon-Fri: 10AM-7PM',
      distance: 5.8,
      availability: [
        { bloodType: 'A+', units: 50, status: 'High' },
        { bloodType: 'A-', units: 20, status: 'Medium' },
        { bloodType: 'B+', units: 30, status: 'High' },
        { bloodType: 'B-', units: 15, status: 'Medium' },
        { bloodType: 'AB+', units: 12, status: 'Medium' },
        { bloodType: 'AB-', units: 5, status: 'Low' },
        { bloodType: 'O+', units: 40, status: 'High' },
        { bloodType: 'O-', units: 10, status: 'Low' },
      ],
    },
  ]);
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchParams({
      ...searchParams,
      [name]: value,
    });
  };
  
  const filteredBloodBanks = bloodBanks.filter((bloodBank) => {
    const locationMatch = searchParams.location === '' || 
      bloodBank.city.toLowerCase().includes(searchParams.location.toLowerCase()) ||
      bloodBank.address.toLowerCase().includes(searchParams.location.toLowerCase()) ||
      bloodBank.name.toLowerCase().includes(searchParams.location.toLowerCase());
      
    const bloodTypeMatch = searchParams.bloodType === '' || 
      bloodBank.availability.some(item => 
        item.bloodType === searchParams.bloodType && item.units > 0
      );
      
    return locationMatch && bloodTypeMatch;
  });
  
  return (
    <div className="min-h-screen pt-20">
      <div className="bg-medical-blue text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Blood Banks & Availability</h1>
          <p className="text-lg opacity-90 mb-6">
            Find blood banks near you and check real-time blood availability.
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <div className=" relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="City, district, or blood bank name"
                    value={searchParams.location}
                    onChange={handleSearchChange}
                    className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-medical-blue focus:ring focus:ring-medical-blue focus:ring-opacity-50 text-gray-900"
                  />
                </div>
              </div>
              
              <div className="flex-1">
                <label htmlFor="bloodType" className="block text-sm font-medium text-gray-700 mb-1">Blood Type</label>
                <select
                  id="bloodType"
                  name="bloodType"
                  value={searchParams.bloodType}
                  onChange={handleSearchChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-medical-blue focus:ring focus:ring-medical-blue focus:ring-opacity-50 text-gray-900"
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
              
              <div className="flex items-end">
                <button
                  type="button"
                  className="w-full h-10 bg-medical-blue text-white rounded-md hover:bg-medical-blue/90 transition-colors duration-200 flex items-center justify-center"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-text-dark">Blood Banks Near You</h2>
          <div className="flex items-center">
            <span className="text-sm text-gray-600 mr-2">Sort by:</span>
            <select className="rounded-md border-gray-300 shadow-sm focus:border-medical-blue focus:ring focus:ring-medical-blue focus:ring-opacity-50 text-sm">
              <option>Distance</option>
              <option>Availability</option>
              <option>Name (A-Z)</option>
            </select>
            <button className="ml-2 p-2 text-gray-600 hover:text-medical-blue">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {filteredBloodBanks.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredBloodBanks.map((bloodBank) => (
              <div key={bloodBank.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-text-dark">{bloodBank.name}</h3>
                      <div className="flex items-center mt-1 text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{bloodBank.address}, {bloodBank.city} ({bloodBank.distance} miles away)</span>
                      </div>
                      <div className="flex items-center mt-1 text-sm text-gray-600">
                        <Phone className="w-4 h-4 mr-1" />
                        <span>{bloodBank.phone}</span>
                      </div>
                      <div className="flex items-center mt-1 text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{bloodBank.hours}</span>
                      </div>
                    </div>
                    <a 
                      href="#" 
                      className="text-medical-blue hover:text-medical-blue/80 flex items-center text-sm"
                    >
                      <span className="mr-1">View Details</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="font-medium text-text-dark mb-3">Blood Availability</h4>
                    <BloodAvailabilityChart data={bloodBank.availability} />
                  </div>
                  
                  <div className="mt-6 flex justify-between">
                    <button className="px-4 py-2 border border-medical-blue text-medical-blue rounded-md hover:bg-medical-blue hover:text-white transition-colors duration-200">
                      Request Blood
                    </button>
                    <button className="px-4 py-2 bg-blood-red text-white rounded-md hover:bg-blood-dark transition-colors duration-200">
                      Schedule Donation
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600 mb-4">No blood banks match your search criteria.</p>
            <button 
              className="px-4 py-2 bg-medical-blue text-white rounded-md hover:bg-medical-blue/90 transition-colors duration-200"
              onClick={() => setSearchParams({ location: '', bloodType: '' })}
            >
              Reset Search
            </button>
          </div>
        )}
      </div>
      
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-text-dark mb-2">Blood Bank Network</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our network connects blood banks across the country to ensure efficient distribution and availability of all blood types.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-text-dark mb-4">Real-time Inventory</h3>
              <p className="text-gray-600 mb-4">
                All blood banks in our network update their inventory in real-time, ensuring accurate availability information.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 mr-2"></span>
                  <span>Live updates every 15 minutes</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 mr-2"></span>
                  <span>Automated low-stock alerts</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 mr-2"></span>
                  <span>Expiration date tracking</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-text-dark mb-4">Inter-Bank Transfers</h3>
              <p className="text-gray-600 mb-4">
                Our system facilitates blood transfers between banks to meet urgent needs and optimize distribution.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 mr-2"></span>
                  <span>Priority routing for emergency requests</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 mr-2"></span>
                  <span>Optimized logistics for minimal transit time</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 mr-2"></span>
                  <span>Temperature-controlled transport</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-text-dark mb-4">Quality Standards</h3>
              <p className="text-gray-600 mb-4">
                All blood banks in our network adhere to strict quality and safety standards.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 mr-2"></span>
                  <span>FDA-compliant processing</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 mr-2"></span>
                  <span>Regular quality audits</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 mr-2"></span>
                  <span>Comprehensive testing protocols</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-text-dark mb-4">Become a Partner Blood Bank</h2>
              <p className="text-gray-600 mb-6">
                Join our network of blood banks to improve blood availability and distribution efficiency in your region.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-text-dark mb-3">Benefits of Joining</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-2">
                        <span className="text-green-600 text-xs">✓</span>
                      </div>
                      <span className="text-gray-600">Access to our nationwide blood inventory network</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-2">
                        <span className="text-green-600 text-xs">✓</span>
                      </div>
                      <span className="text-gray-600">Advanced inventory management system</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-2">
                        <span className="text-green-600 text-xs">✓</span>
                      </div>
                      <span className="text-gray-600">Donor recruitment and retention tools</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-2">
                        <span className="text-green-600 text-xs">✓</span>
                      </div>
                      <span className="text-gray-600">Priority access to emergency blood supplies</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-2">
                        <span className="text-green-600 text-xs">✓</span>
                      </div>
                      <span className="text-gray-600">Marketing and community outreach support</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-text-dark mb-3">How to Join</h3>
                  <p className="text-gray-600 mb-4">
                    Complete the form below to express your interest in joining our blood bank network. Our team will contact you within 48 hours.
                  </p>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          placeholder="Blood Bank Name"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-medical-blue focus:ring focus:ring-medical-blue focus:ring-opacity-50"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Contact Person"
                          className="w-full rounded-md border-gray-300 shadow-sm focus:border-medical-blue focus:ring focus:ring-medical-blue focus:ring-opacity-50"
                        />
                      </div>
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-medical-blue focus:ring focus:ring-medical-blue focus:ring-opacity-50"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-medical-blue focus:ring focus:ring-medical-blue focus:ring-opacity-50"
                      />
                    </div>
                    <div>
                      <button className="w-full py-2 bg-medical-blue text-white rounded-md hover:bg-medical-blue/90 transition-colors duration-200">
                        Request Information
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodBanksPage;