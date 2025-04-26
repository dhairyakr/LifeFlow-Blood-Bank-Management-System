import React from 'react';
import { Heart, Calendar, MapPin, AlertCircle, Award, Clock } from 'lucide-react';
import DonorRegistrationForm from '../components/DonorRegistrationForm';
import BloodBagAnimation from '../components/BloodBagAnimation';

const DonatePage: React.FC = () => {
  const eligibilityCriteria = [
    { id: 1, title: 'Age', description: 'You must be at least 18 years old' },
    { id: 2, title: 'Weight', description: 'You must weigh at least 110 lbs (50 kg)' },
    { id: 3, title: 'Health', description: 'You must be in good health and feeling well' },
    { id: 4, title: 'Time Since Last Donation', description: 'At least 56 days since your last whole blood donation' },
    { id: 5, title: 'Hemoglobin Level', description: 'At least 12.5 g/dL for women and 13.0 g/dL for men' },
    { id: 6, title: 'No Infections', description: 'Free from cold, flu, or other infections' },
  ];

  const donationProcess = [
    { 
      id: 1, 
      title: 'Registration', 
      description: 'Complete the donor registration form and provide identification',
      icon: <Heart className="w-6 h-6 text-blood-red" />
    },
    { 
      id: 2, 
      title: 'Health Screening', 
      description: 'Brief physical examination and confidential health questionnaire',
      icon: <AlertCircle className="w-6 h-6 text-blood-red" />
    },
    { 
      id: 3, 
      title: 'Donation', 
      description: 'The actual blood donation takes only about 8-10 minutes',
      icon: <Clock className="w-6 h-6 text-blood-red" />
    },
    { 
      id: 4, 
      title: 'Refreshments', 
      description: 'Rest and enjoy refreshments for 15 minutes after donation',
      icon: <Award className="w-6 h-6 text-blood-red" />
    },
  ];

  const upcomingDrives = [
    {
      id: 1,
      name: 'Central Hospital Blood Drive',
      date: 'April 15, 2025',
      time: '9:00 AM - 4:00 PM',
      location: '123 Medical Center Dr, Healthcare City',
      slotsAvailable: 15,
    },
    {
      id: 2,
      name: 'Community Center Blood Drive',
      date: 'April 20, 2025',
      time: '10:00 AM - 3:00 PM',
      location: '456 Community Ave, Downtown',
      slotsAvailable: 8,
    },
    {
      id: 3,
      name: 'University Campus Blood Drive',
      date: 'April 25, 2025',
      time: '11:00 AM - 5:00 PM',
      location: 'University Student Center, Campus Blvd',
      slotsAvailable: 20,
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="bg-blood-red text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Become a Blood Donor</h1>
              <p className="text-lg opacity-90 mb-6">
                Your donation can save up to three lives. Join our community of lifesavers today!
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>Takes only 30-45 minutes</span>
                </div>
                <div className="flex items-center">
                  <Heart className="w-5 h-5 mr-2" />
                  <span>Save up to 3 lives</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>Donate every 56 days</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
              <BloodBagAnimation fillPercentage={75} bloodType="A+" />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-text-dark mb-6">Donor Registration</h2>
            <DonorRegistrationForm />
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 className="text-xl font-bold text-text-dark mb-4">Eligibility Criteria</h3>
              <div className="space-y-4">
                {eligibilityCriteria.map((criteria) => (
                  <div key={criteria.id} className="flex">
                    <div className="flex-shrink-0 mr-3">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                        <span className="text-blood-red text-sm font-medium">{criteria.id}</span>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-text-dark">{criteria.title}</h4>
                      <p className="text-sm text-gray-600">{criteria.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-text-dark mb-4">Upcoming Blood Drives</h3>
              <div className="space-y-4">
                {upcomingDrives.map((drive) => (
                  <div key={drive.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <h4 className="font-medium text-text-dark">{drive.name}</h4>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{drive.date}, {drive.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{drive.location}</span>
                    </div>
                    <div className="mt-2 flex justify-between items-center">
                      <span className="text-xs text-gray-500">{drive.slotsAvailable} slots available</span>
                      <button className="px-3 py-1 text-sm bg-blood-red text-white rounded-md hover:bg-blood-dark transition-colors duration-200">
                        Book Slot
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-text-dark text-center mb-8">The Donation Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {donationProcess.map((step) => (
              <div key={step.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold text-text-dark mb-2">Step {step.id}: {step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold text-text-dark mb-4">Did You Know?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-blood-red mb-2">4.5M</div>
                <p className="text-gray-600">Americans need blood transfusions each year</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-blood-red mb-2">1 in 7</div>
                <p className="text-gray-600">People entering hospitals need blood</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-blood-red mb-2">43,000</div>
                <p className="text-gray-600">Pints of donated blood used each day in the U.S.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="py-12 bg-blood-red text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Save Lives?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-6">
            Your donation can make a critical difference for patients in need.
          </p>
          <button className="px-6 py-3 bg-white text-blood-red rounded-md hover:bg-gray-100 transition-colors duration-200 font-medium animate-heartbeat">
            Schedule Your Donation
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonatePage;