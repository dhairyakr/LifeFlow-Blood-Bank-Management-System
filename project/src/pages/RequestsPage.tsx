import React, { useState } from 'react';
import { Search, Filter, AlertTriangle, Clock, Check, X, Calendar, MapPin, Phone } from 'lucide-react';

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
}

const RequestsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useState({
    bloodType: '',
    location: '',
    urgency: '',
    status: '',
  });
  
  const [bloodRequests, setBloodRequests] = useState<BloodRequest[]>([
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
    },
    {
      id: 'REQ-003',
      patientName: 'Robert Johnson',
      bloodType: 'B+',
      units: 4,
      hospital: 'University Hospital',
      location: 'East Side, Healthcare City',
      urgency: 'Urgent',
      requestDate: '2025-04-08T11:45:00',
      status: 'Open',
      contactPhone: '(555) 456-7890',
      notes: 'Patient requires multiple transfusions',
    },
    {
      id: 'REQ-004',
      patientName: 'Maria Garcia',
      bloodType: 'A-',
      units: 2,
      hospital: 'Community Medical Center',
      location: 'West End, Healthcare City',
      urgency: 'Normal',
      requestDate: '2025-04-07T10:00:00',
      status: 'Fulfilled',
      contactPhone: '(555) 789-0123',
    },
    {
      id: 'REQ-005',
      patientName: 'David Wilson',
      bloodType: 'O+',
      units: 3,
      hospital: 'St. Mary Hospital',
      location: 'South District, Healthcare City',
      urgency: 'Urgent',
      requestDate: '2025-04-06T16:30:00',
      status: 'Expired',
      contactPhone: '(555) 234-5678',
      notes: 'Request expired due to fulfillment from another source',
    },
  ]);
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchParams({
      ...searchParams,
      [name]: value,
    });
  };
  
  const getUrgencyBadge = (urgency: string) => {
    switch (urgency) {
      case 'Critical':
        return (
          <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 flex items-center">
            <AlertTriangle className="w-3 h-3 mr-1 animate-pulse" />
            Critical
          </span>
        );
      case 'Urgent':
        return (
          <span className="px-2 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 flex items-center">
            <AlertTriangle className="w-3 h-3 mr-1" />
            Urgent
          </span>
        );
      case 'Normal':
        return (
          <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            Normal
          </span>
        );
      default:
        return null;
    }
  };
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Open':
        return (
          <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            Open
          </span>
        );
      case 'In Progress':
        return (
          <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            In Progress
          </span>
        );
      case 'Fulfilled':
        return (
          <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 flex items-center">
            <Check className="w-3 h-3 mr-1" />
            Fulfilled
          </span>
        );
      case 'Expired':
        return (
          <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 flex items-center">
            <X className="w-3 h-3 mr-1" />
            Expired
          </span>
        );
      default:
        return null;
    }
  };
  
  const filteredRequests = bloodRequests.filter((request) => {
    return (
      (searchParams.bloodType === '' || request.bloodType === searchParams.bloodType) &&
      (searchParams.location === '' || request.location.toLowerCase().includes(searchParams.location.toLowerCase())) &&
      (searchParams.urgency === '' || request.urgency === searchParams.urgency) &&
      (searchParams.status === '' || request.status === searchParams.status)
    );
  });
  
  return (
    <div className="min-h-screen pt-20">
      <div className="bg-blood-red text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Blood Requests</h1>
          <p className="text-lg opacity-90 mb-6">
            View and manage all blood requests in the system. Track status and respond to urgent needs.
          </p>
          
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label htmlFor="bloodType" className="block text-sm font-medium text-gray-700 mb-1">Blood Type</label>
                <select
                  id="bloodType"
                  name="bloodType"
                  value={searchParams.bloodType}
                  onChange={handleSearchChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blood-red focus:ring focus:ring-blood-red focus:ring-opacity-50 text-gray-900"
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
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="City, district, or hospital"
                  value={searchParams.location}
                  onChange={handleSearchChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blood-red focus:ring focus:ring-blood-red focus:ring-opacity-50 text-gray-900"
                />
              </div>
              
              <div>
                <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-1">Urgency</label>
                <select
                  id="urgency"
                  name="urgency"
                  value={searchParams.urgency}
                  onChange={handleSearchChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blood-red focus:ring focus:ring-blood-red focus:ring-opacity-50 text-gray-900"
                >
                  <option value="">All Urgency Levels</option>
                  <option value="Normal">Normal</option>
                  <option value="Urgent">Urgent</option>
                  <option value="Critical">Critical</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  id="status"
                  name="status"
                  value={searchParams.status}
                  onChange={handleSearchChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blood-red focus:ring focus:ring-blood-red focus:ring-opacity-50 text-gray-900"
                >
                  <option value="">All Statuses</option>
                  <option value="Open">Open</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Fulfilled">Fulfilled</option>
                  <option value="Expired">Expired</option>
                </select>
              </div>
            </div>
            
            <div className="mt-4 flex justify-end">
              <button
                type="button"
                className="px-4 py-2 bg-blood-red text-white rounded-md hover:bg-blood-dark transition-colors duration-200 flex items-center"
              >
                <Search className="w-5 h-5 mr-2" />
                Search Requests
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-text-dark">Blood Requests</h2>
          <div className="flex items-center">
            <span className="text-sm text-gray-600 mr-2">Sort by:</span>
            <select className="rounded-md border-gray-300 shadow-sm focus:border-blood-red focus:ring focus:ring-blood-red focus:ring-opacity-50 text-sm">
              <option>Date (Newest)</option>
              <option>Date (Oldest)</option>
              <option>Urgency (High to Low)</option>
              <option>Status</option>
            </select>
            <button className="ml-2 p-2 text-gray-600 hover:text-blood-red">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {filteredRequests.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredRequests.map((request) => (
              <div 
                key={request.id} 
                className={`bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  request.urgency === 'Critical' ? 'border-l-4 border-red-500' : 
                  request.urgency === 'Urgent' ? 'border-l-4 border-orange-500' : ''
                }`}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center">
                        <h3 className="text-xl font-bold text-text-dark">{request.patientName}</h3>
                        <span className="ml-2 text-sm text-gray-500">#{request.id}</span>
                      </div>
                      <div className="flex items-center mt-1 text-sm text-gray-600">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{request.hospital}, {request.location}</span>
                      </div>
                      <div className="flex items-center mt-1 text-sm text-gray-600">
                        <Phone className="w-4 h-4 mr-1" />
                        <span>{request.contactPhone}</span>
                      </div>
                      <div className="flex items-center mt-1 text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{new Date(request.requestDate).toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="text-2xl font-bold text-blood-red">{request.bloodType}</span>
                      <span className="text-lg font-medium text-gray-700">{request.units} units</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {getUrgencyBadge(request.urgency)}
                    {getStatusBadge(request.status)}
                  </div>
                  
                  {request.notes && (
                    <div className="bg-gray-50 p-3 rounded-md mb-4">
                      <p className="text-sm text-gray-600">{request.notes}</p>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    {request.status === 'Open' && (
                      <button className="px-4 py-2 bg-blood-red text-white rounded-md hover:bg-blood-dark transition-colors duration-200">
                        Respond to Request
                      </button>
                    )}
                    {request.status === 'In Progress' && (
                      <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-200">
                        Mark as Fulfilled
                      </button>
                    )}
                    {(request.status === 'Fulfilled' || request.status === 'Expired') && (
                      <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors duration-200">
                        View Details
                      </button>
                    )}
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200">
                      Contact Requester
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600 mb-4">No blood requests match your search criteria.</p>
            <button 
              className="px-4 py-2 bg-blood-red text-white rounded-md hover:bg-blood-dark transition-colors duration-200"
              onClick={() => setSearchParams({ bloodType: '', location: '', urgency: '', status: '' })}
            >
              Reset Search
            </button>
          </div>
        )}
      </div>
      
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-text-dark mb-2">Request Statistics</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Overview of blood request patterns and fulfillment rates.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blood-red mb-2">78%</div>
              <p className="text-gray-600">Fulfillment rate for all requests</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blood-red mb-2">4.2 hrs</div>
              <p className="text-gray-600">Average response time for urgent requests</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blood-red mb-2">O-</div>
              <p className="text-gray-600">Most requested blood type</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-blood-red mb-2">92%</div>
              <p className="text-gray-600">Critical request fulfillment rate</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-bold text-text-dark mb-4">Need to Make a Blood Request?</h2>
              <p className="text-gray-600 mb-6">
                If you need blood for a patient, you can submit a new request through our system.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-text-dark mb-3">How It Works</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-2">
                        <span className="text-blood-red text-xs">1</span>
                      </div>
                      <span className="text-gray-600">Fill out the request form with patient and blood details</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-2">
                        <span className="text-blood-red text-xs">2</span>
                      </div>
                      <span className="text-gray-600">Our system matches your request with available donors and blood banks</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-2">
                        <span className="text-blood-red text-xs">3</span>
                      </div>
                      <span className="text-gray-600">Receive notifications as donors respond to your request</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-0.5 mr-2">
                        <span className="text-blood-red text-xs">4</span>
                      </div>
                      <span className="text-gray-600">Track the status of your request in real-time</span>
                    </li>
                  </ul>
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-gray-600 mb-4">
                      Click the button below to create a new blood request.
                    </p>
                    <a 
                      href="/find-blood?tab=request" 
                      className="inline-block px-6 py-3 bg-blood-red text-white rounded-md hover:bg-blood-dark transition-colors duration-200"
                    >
                      Create New Request
                    </a>
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

export default RequestsPage;