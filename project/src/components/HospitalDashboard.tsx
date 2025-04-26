import React, { useState } from 'react';
import { Building, AlertTriangle, Check, Clock, RefreshCw, X } from 'lucide-react';
import BloodAvailabilityChart from './BloodAvailabilityChart';

interface BloodRequest {
  id: string;
  bloodType: string;
  units: number;
  urgency: 'Normal' | 'Urgent' | 'Critical';
  status: 'Pending' | 'Processing' | 'Fulfilled' | 'Cancelled';
  requestedAt: string;
  hospital?: string;
}

const HospitalDashboard: React.FC = () => {
  const [bloodStock, setBloodStock] = useState([
    { bloodType: 'A+', units: 45, status: 'High' as const },
    { bloodType: 'A-', units: 12, status: 'Medium' as const },
    { bloodType: 'B+', units: 25, status: 'Medium' as const },
    { bloodType: 'B-', units: 8, status: 'Low' as const },
    { bloodType: 'AB+', units: 15, status: 'Medium' as const },
    { bloodType: 'AB-', units: 3, status: 'Critical' as const },
    { bloodType: 'O+', units: 30, status: 'High' as const },
    { bloodType: 'O-', units: 5, status: 'Critical' as const },
  ]);

  const [requests, setRequests] = useState<BloodRequest[]>([
    {
      id: 'REQ-001',
      bloodType: 'O-',
      units: 3,
      urgency: 'Critical',
      status: 'Processing',
      requestedAt: '2025-04-10T09:30:00',
    },
    {
      id: 'REQ-002',
      bloodType: 'AB+',
      units: 2,
      urgency: 'Normal',
      status: 'Fulfilled',
      requestedAt: '2025-04-09T14:15:00',
    },
    {
      id: 'REQ-003',
      bloodType: 'B+',
      units: 4,
      urgency: 'Urgent',
      status: 'Pending',
      requestedAt: '2025-04-10T11:45:00',
      hospital: 'Central Hospital',
    },
  ]);

  const [newRequest, setNewRequest] = useState({
    bloodType: '',
    units: 1,
    urgency: 'Normal' as const,
  });

  const handleRequestChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewRequest({
      ...newRequest,
      [name]: name === 'units' ? parseInt(value) : value,
    });
  };

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newRequestObj: BloodRequest = {
      id: `REQ-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}`,
      bloodType: newRequest.bloodType,
      units: newRequest.units,
      urgency: newRequest.urgency,
      status: 'Pending',
      requestedAt: new Date().toISOString(),
    };
    
    setRequests([newRequestObj, ...requests]);
    
    setNewRequest({
      bloodType: '',
      units: 1,
      urgency: 'Normal',
    });
  };

  const getStatusBadge = (status: string, urgency: string) => {
    switch (status) {
      case 'Pending':
        return (
          <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center ${
            urgency === 'Critical' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
          }`}>
            <Clock className="w-3 h-3 mr-1" />
            Pending
          </span>
        );
      case 'Processing':
        return (
          <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 flex items-center">
            <RefreshCw className="w-3 h-3 mr-1" />
            Processing
          </span>
        );
      case 'Fulfilled':
        return (
          <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 flex items-center">
            <Check className="w-3 h-3 mr-1" />
            Fulfilled
          </span>
        );
      case 'Cancelled':
        return (
          <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 flex items-center">
            <X className="w-3 h-3 mr-1" />
            Cancelled
          </span>
        );
      default:
        return null;
    }
  };

  const getUrgencyBadge = (urgency: string) => {
    switch (urgency) {
      case 'Critical':
        return (
          <span className="px-2 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 flex items-center">
            <AlertTriangle className="w-3 h-3 mr-1" />
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

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-medical-blue p-4 text-white">
        <div className="flex items-center">
          <Building className="w-6 h-6 mr-2" />
          <h2 className="text-xl font-bold">Hospital Dashboard</h2>
        </div>
        <p className="text-sm opacity-90">Manage blood inventory and requests</p>
      </div>
      
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Blood Inventory Section */}
          <div>
            <h3 className="text-lg font-semibold text-text-dark mb-4">Blood Inventory</h3>
            <BloodAvailabilityChart data={bloodStock} />
            
            <div className="mt-6">
              <h4 className="text-md font-semibold text-text-dark mb-2">Low Stock Alerts</h4>
              <div className="space-y-2">
                {bloodStock
                  .filter(item => item.status === 'Low' || item.status === 'Critical')
                  .map(item => (
                    <div 
                      key={item.bloodType}
                      className={`p-3 rounded-md flex justify-between items-center ${
                        item.status === 'Critical' ? 'bg-red-50 border-l-4 border-red-500' : 'bg-orange-50 border-l-4 border-orange-500'
                      }`}
                    >
                      <div className="flex items-center">
                        <AlertTriangle className={`w-5 h-5 ${item.status === 'Critical' ? 'text-red-500' : 'text-orange-500'} ${
                          item.status === 'Critical' ? 'animate-pulse' : ''
                        }`} />
                        <span className="ml-2 font-medium">{item.bloodType} Blood</span>
                      </div>
                      <div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.status === 'Critical' ? 'bg-red-500 text-white' : 'bg-orange-500 text-white'
                        }`}>
                          {item.units} units left
                        </span>
                      </div>
                    </div>
                  ))}
                
                {bloodStock.filter(item => item.status === 'Low' || item.status === 'Critical').length === 0 && (
                  <div className="p-3 bg-green-50 rounded-md flex items-center">
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="ml-2">All blood types are adequately stocked</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Blood Requests Section */}
          <div>
            <h3 className="text-lg font-semibold text-text-dark mb-4">Blood Requests</h3>
            
            <form onSubmit={handleRequestSubmit} className="bg-gray-50 p-4 rounded-lg mb-6">
              <h4 className="text-md font-semibold text-text-dark mb-3">New Blood Request</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="bloodType" className="block text-sm font-medium text-gray-700 mb-1">Blood Type</label>
                  <select
                    id="bloodType"
                    name="bloodType"
                    value={newRequest.bloodType}
                    onChange={handleRequestChange}
                    required
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-medical-blue focus:ring focus:ring-medical-blue focus:ring-opacity-50"
                  >
                    <option value="">Select Type</option>
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
                  <label htmlFor="units" className="block text-sm font-medium text-gray-700 mb-1">Units</label>
                  <input
                    type="number"
                    id="units"
                    name="units"
                    min="1"
                    max="20"
                    value={newRequest.units}
                    onChange={handleRequestChange}
                    required
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-medical-blue focus:ring focus:ring-medical-blue focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-1">Urgency</label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={newRequest.urgency}
                    onChange={handleRequestChange}
                    required
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-medical-blue focus:ring focus:ring-medical-blue focus:ring-opacity-50"
                  >
                    <option value="Normal">Normal</option>
                    <option value="Urgent">Urgent</option>
                    <option value="Critical">Critical</option>
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="w-full py-2 bg-medical-blue text-white rounded-md hover:bg-medical-blue/90 transition-colors duration-200"
                >
                  Submit Request
                </button>
              </div>
            </form>
            
            <div className="overflow-hidden">
              <h4 className="text-md font-semibold text-text-dark mb-3">Recent Requests</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        ID
                      </th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Blood Type
                      </th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Units
                      </th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Urgency
                      </th>
                      <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {requests.map((request) => (
                      <tr key={request.id}>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                          {request.id}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                          <span className="font-medium">{request.bloodType}</span>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                          {request.units} units
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                          {getUrgencyBadge(request.urgency)}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                          {getStatusBadge(request.status, request.urgency)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalDashboard;