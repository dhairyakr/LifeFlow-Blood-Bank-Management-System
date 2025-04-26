import React, { useState } from 'react';
import { Calendar, MapPin, User, Phone, Mail, AlertCircle, Check } from 'lucide-react';
import BloodBagAnimation from './BloodBagAnimation';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  bloodType: string;
  dateOfBirth: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  lastDonation: string;
  medicalConditions: string;
  agreeToTerms: boolean;
}

const DonorRegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    bloodType: '',
    dateOfBirth: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    lastDonation: '',
    medicalConditions: '',
    agreeToTerms: false,
  });

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  if (isSuccess) {
    return (
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 text-center">
        <div className="mb-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <Check className="w-8 h-8 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-text-dark mt-4">Registration Successful!</h2>
          <p className="text-gray-600 mt-2">Thank you for registering as a blood donor.</p>
        </div>
        
        <div className="mb-8">
          <BloodBagAnimation fillPercentage={100} bloodType={formData.bloodType} animate={true} />
        </div>
        
        <div className="text-left bg-gray-50 p-4 rounded-lg mb-6">
          <h3 className="font-semibold text-gray-700 mb-2">Your Donor Information:</h3>
          <p><span className="font-medium">Name:</span> {formData.firstName} {formData.lastName}</p>
          <p><span className="font-medium">Blood Type:</span> {formData.bloodType}</p>
          <p><span className="font-medium">Contact:</span> {formData.phone}</p>
        </div>
        
        <div className="space-y-4">
          <button 
            className="w-full py-2 bg-blood-red text-white rounded-md hover:bg-blood-dark transition-colors duration-200"
            onClick={() => window.location.href = '/dashboard'}
          >
            Go to Donor Dashboard
          </button>
          <button 
            className="w-full py-2 border border-blood-red text-blood-red rounded-md hover:bg-blood-red hover:text-white transition-colors duration-200"
            onClick={() => {
              setIsSuccess(false);
              setStep(1);
              setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                bloodType: '',
                dateOfBirth: '',
                address: '',
                city: '',
                state: '',
                zipCode: '',
                lastDonation: '',
                medicalConditions: '',
                agreeToTerms: false,
              });
            }}
          >
            Register Another Donor
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-blood-red p-4 text-white">
        <h2 className="text-xl font-bold">Donor Registration</h2>
        <p className="text-sm opacity-90">Join our community of lifesavers</p>
      </div>
      
      <div className="p-6">
        <div className="flex mb-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex-1 relative">
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto ${
                  step >= i ? 'bg-blood-red text-white' : 'bg-gray-200 text-gray-500'
                }`}
              >
                {i}
              </div>
              <div className="text-xs text-center mt-2">{
                i === 1 ? 'Personal Info' : i === 2 ? 'Medical Info' : 'Confirmation'
              }</div>
              {i < 3 && (
                <div 
                  className={`absolute top-4 left-1/2 w-full h-0.5 ${
                    step > i ? 'bg-blood-red' : 'bg-gray-200'
                  }`}
                ></div>
              )}
            </div>
          ))}
        </div>
        
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blood-red focus:ring focus:ring-blood-red focus:ring-opacity-50"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blood-red focus:ring focus:ring-blood-red focus:ring-opacity-50"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blood-red focus:ring focus:ring-blood-red focus:ring-opacity-50"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blood-red focus:ring focus:ring-blood-red focus:ring-opacity-50"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blood-red focus:ring focus:ring-blood-red focus:ring-opacity-50"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blood-red focus:ring focus:ring-blood-red focus:ring-opacity-50"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blood-red focus:ring focus:ring-blood-red focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">State</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blood-red focus:ring focus:ring-blood-red focus:ring-opacity-50"
                  />
                </div>
                <div className="col-span-2 md:col-span-1">
                  <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border-gray-300 shadow-sm focus:border-blood-red focus:ring focus:ring-blood-red focus:ring-opacity-50"
                  />
                </div>
              </div>
            </div>
          )}
          
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label htmlFor="bloodType" className="block text-sm font-medium text-gray-700 mb-1">Blood Type</label>
                <select
                  id="bloodType"
                  name="bloodType"
                  value={formData.bloodType}
                  onChange={handleChange}
                  required
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blood-red focus:ring focus:ring-blood-red focus:ring-opacity-50"
                >
                  <option value="">Select Blood Type</option>
                  {bloodTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="lastDonation" className="block text-sm font-medium text-gray-700 mb-1">Last Donation Date (if applicable)</label>
                <input
                  type="date"
                  id="lastDonation"
                  name="lastDonation"
                  value={formData.lastDonation}
                  onChange={handleChange}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blood-red focus:ring focus:ring-blood-red focus:ring-opacity-50"
                />
              </div>
              
              <div>
                <label htmlFor="medicalConditions" className="block text-sm font-medium text-gray-700 mb-1">
                  Medical Conditions (if any)
                </label>
                <textarea
                  id="medicalConditions"
                  name="medicalConditions"
                  value={formData.medicalConditions}
                  onChange={handleChange}
                  rows={3}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-blood-red focus:ring focus:ring-blood-red focus:ring-opacity-50"
                  placeholder="Please list any medical conditions, medications, or allergies..."
                ></textarea>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-md">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <AlertCircle className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-yellow-800">Eligibility Criteria</h3>
                    <div className="mt-2 text-sm text-yellow-700">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>You must be at least 18 years old</li>
                        <li>You must weigh at least 110 lbs (50 kg)</li>
                        <li>You must be in good health</li>
                        <li>You must not have donated blood in the last 56 days</li>
                        <li>You must not have any blood-borne diseases</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {step === 3 && (
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-700 mb-4">Review Your Information</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-500">Full Name</p>
                    <p className="font-medium">{formData.firstName} {formData.lastName}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Blood Type</p>
                    <p className="font-medium">{formData.bloodType}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Email</p>
                    <p className="font-medium">{formData.email}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Phone</p>
                    <p className="font-medium">{formData.phone}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Date of Birth</p>
                    <p className="font-medium">{formData.dateOfBirth}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Address</p>
                    <p className="font-medium">{formData.address}, {formData.city}, {formData.state} {formData.zipCode}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="agreeToTerms"
                    name="agreeToTerms"
                    type="checkbox"
                    checked={formData.agreeToTerms as boolean}
                    onChange={handleChange}
                    required
                    className="h-4 w-4 text-blood-red border-gray-300 rounded focus:ring-blood-red"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="agreeToTerms" className="font-medium text-gray-700">
                    I agree to the terms and conditions
                  </label>
                  <p className="text-gray-500">
                    By checking this box, you agree to our{' '}
                    <a href="#" className="text-blood-red hover:underline">Terms of Service</a>{' '}
                    and{' '}
                    <a href="#" className="text-blood-red hover:underline">Privacy Policy</a>.
                  </p>
                </div>
              </div>
            </div>
          )}
          
          <div className="mt-8 flex justify-between">
            {step > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blood-red"
              >
                Back
              </button>
            ) : (
              <div></div>
            )}
            
            {step < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-4 py-2 bg-blood-red text-white rounded-md hover:bg-blood-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blood-red"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting || !formData.agreeToTerms}
                className={`px-4 py-2 bg-blood-red text-white rounded-md hover:bg-blood-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blood-red ${
                  (isSubmitting || !formData.agreeToTerms) ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Complete Registration'}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default DonorRegistrationForm;