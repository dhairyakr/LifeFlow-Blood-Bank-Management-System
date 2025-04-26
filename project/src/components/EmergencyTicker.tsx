import React, { useState, useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';

interface EmergencyRequest {
  id: number;
  bloodType: string;
  location: string;
  urgency: 'High' | 'Critical';
  hospital: string;
}

const EmergencyTicker: React.FC = () => {
  const [emergencyRequests, setEmergencyRequests] = useState<EmergencyRequest[]>([
    { id: 1, bloodType: 'O-', location: 'Central Hospital', urgency: 'Critical', hospital: 'Memorial Hospital' },
    { id: 2, bloodType: 'AB+', location: 'North Medical Center', urgency: 'High', hospital: 'City Medical Center' },
    { id: 3, bloodType: 'B+', location: 'East General Hospital', urgency: 'Critical', hospital: 'University Hospital' },
    { id: 4, bloodType: 'A-', location: 'South Medical Institute', urgency: 'High', hospital: 'Children\'s Hospital' },
  ]);

  return (
    <div className="bg-blood-red text-white py-2 overflow-hidden">
      <div className="ticker-container">
        <div className="ticker-content">
          {emergencyRequests.map((request) => (
            <span key={request.id} className="inline-flex items-center mx-6">
              <AlertTriangle className={`w-4 h-4 mr-2 ${request.urgency === 'Critical' ? 'animate-pulse' : ''}`} />
              <strong>URGENT:</strong> {request.bloodType} blood needed at {request.hospital} - {request.urgency} priority
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmergencyTicker;