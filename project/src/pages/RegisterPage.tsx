import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, User, Building, Calendar, MapPin, Phone, Heart } from 'lucide-react';

const RegisterPage: React.FC = () => {
  const [userType, setUserType] = useState<'donor' | 'hospital'>('donor');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [step, setStep] = useState(1);
  
  const [formData, setFormData] = useState({
    // Common fields
    email: '',
    password: '',
    confirmPassword: '',
    
    // Donor fields
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    bloodType: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    
    // Hospital fields
    hospitalName: '',
    licenseNumber: '',
    contactPerson: '',
    hospitalPhone: '',
    hospitalAddress: '',
    hospitalCity: '',
    hospitalState: '',
    hospitalZipCode: '',
    
    agreeToTerms: false,
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  
  const nextStep = () => {
    setStep(step + 1);
  };
  
  const prevStep = () => {
    setStep(step - 1);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration form submitted:', formData);
  };
  
  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-text-dark">Create an Account</h2>
          <p className="mt-2 text-gray-600">Join the LifeFlow community</p>
        </div>
        
        <div className="flex rounded-md shadow-sm p-1 bg-gray-100">
          <button
            type="button"
            className={`flex-1 py-2 px-4 rounded-md flex items-center justify-center ${
              userType === 'donor'
                ? 'bg-white shadow-sm text-blood-red'
                : 'text-gray-700 hover:text-blood-red'
            }`}
            onClick={() => setUserType('donor')}
          >
            <User className="w-5 h-5 mr-2" />
            Donor
          </button>
          <button
            type="button"
            className={`flex-1 py-2 px-4 rounded-md flex items-center justify-center ${
              userType === 'hospital'
                ? 'bg-white shadow-sm text-medical-blue'
                : 'text-gray-700 hover:text-medical-blue'
            }`}
            onClick={() => setUserType('hospital')}
          >
            <Building className="w-5 h-5 mr-2" />
            Hospital/Blood Bank
          </button>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {userType === 'donor' && (
            <div>
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blood-red focus:ring focus:ring-blood-red focus:ring-opacity-50"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="new-password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blood-red focus:ring focus:ring-blood-red focus:ring-opacity-50"
                        placeholder="••••••••"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="text-gray-400 hover:text-gray-500 focus:outline-none"
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </div>
                    <p className="mt-1 text-xs text-gray-500">
                      Password must be at least 8 characters long with a mix of letters, numbers, and symbols.
                    </p>
                  </div>
                  
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        autoComplete="new-password"
                        required
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blood-red focus:ring focus:ring-blood-red focus:ring-opacity-50"
                        placeholder="••••••••"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="text-gray-400 hover:text-gray-500 focus:outline-none"
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {step === 2 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        autoComplete="given-name"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blood-red focus:ring focus:ring-blood-red focus:ring-opacity-50"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        autoComplete="family-name"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blood-red focus:ring focus:ring-blood-red focus:ring-opacity-50"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700 mb-1">
                      Date of Birth
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Calendar className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="dateOfBirth"
                        name="dateOfBirth"
                        type="date"
                        required
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blood-red focus:ring focus:ring-blood-red focus:ring-opacity-50"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="bloodType" className="block text-sm font-medium text-gray-700 mb-1">
                      Blood Type
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Heart className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        id="bloodType"
                        name="bloodType"
                        required
                        value={formData.bloodType}
                        onChange={handleChange}
                        className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blood-red focus:ring focus:ring-blood-red focus:ring-opacity-50"
                      >
                        <option value="">Select Blood Type</option>
                        {bloodTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blood-red focus:ring focus:ring-blood-red focus:ring-opacity-50"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                </div>
              )}
              
              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="address"
                        name="address"
                        type="text"
                        autoComplete="street-address"
                        required
                        value={formData.address}
                        onChange={handleChange}
                        className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-blood-red focus:ring focus:ring-blood-red focus:ring-opacity-50"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        autoComplete="address-level2"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blood-red focus:ring focus:ring-blood-red focus:ring-opacity-50"
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                        State
                      </label>
                      <input
                        id="state"
                        name="state"
                        type="text"
                        autoComplete="address-level1"
                        required
                        value={formData.state}
                        onChange={handleChange}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-blood-red focus:ring focus:ring-blood-red focus:ring-opacity-50"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                      Zip Code
                    </label>
                    <input
                      id="zipCode"
                      name="zipCode"
                      type="text"
                      autoComplete="postal-code"
                      required
                      value={formData.zipCode}
                      onChange={handleChange}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blood-red focus:ring focus:ring-blood-red focus:ring-opacity-50"
                    />
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="agreeToTerms"
                        name="agreeToTerms"
                        type="checkbox"
                        required
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
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
            </div>
          )}
          
          {userType === 'hospital' && (
            <div>
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-medical-blue focus:ring focus:ring-medical-blue focus:ring-opacity-50"
                        placeholder="hospital@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        autoComplete="new-password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-medical-blue focus:ring focus:ring-medical-blue focus:ring-opacity-50"
                        placeholder="••••••••"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="text-gray-400 hover:text-gray-500 focus:outline-none"
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </div>
                    <p className="mt-1 text-xs text-gray-500">
                      Password must be at least 8 characters long with a mix of letters, numbers, and symbols.
                    </p>
                  </div>
                  
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Lock className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        autoComplete="new-password"
                        required
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-medical-blue focus:ring focus:ring-medical-blue focus:ring-opacity-50"
                        placeholder="••••••••"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="text-gray-400 hover:text-gray-500 focus:outline-none"
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="hospitalName" className="block text-sm font-medium text-gray-700 mb-1">
                      Hospital/Blood Bank Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Building className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="hospitalName"
                        name="hospitalName"
                        type="text"
                        required
                        value={formData.hospitalName}
                        onChange={handleChange}
                        className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-medical-blue focus:ring focus:ring-medical-blue focus:ring-opacity-50"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="licenseNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      License/Registration Number
                    </label>
                    <input
                      id="licenseNumber"
                      name="licenseNumber"
                      type="text"
                      required
                      value={formData.licenseNumber}
                      onChange={handleChange}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-medical-blue focus:ring focus:ring-medical-blue focus:ring-opacity-50"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Person
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="contactPerson"
                        name="contactPerson"
                        type="text"
                        required
                        value={formData.contactPerson}
                        onChange={handleChange}
                        className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-medical-blue focus:ring focus:ring-medical-blue focus:ring-opacity-50"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="hospitalPhone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="hospitalPhone"
                        name="hospitalPhone"
                        type="tel"
                        required
                        value={formData.hospitalPhone}
                        onChange={handleChange}
                        className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-medical-blue focus:ring focus:ring-medical-blue focus:ring-opacity-50"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                </div>
              )}
              
              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="hospitalAddress" className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MapPin className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        id="hospitalAddress"
                        name="hospitalAddress"
                        type="text"
                        required
                        value={formData.hospitalAddress}
                        onChange={handleChange}
                        className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-medical-blue focus:ring focus:ring-medical-blue focus:ring-opacity-50"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="hospitalCity" className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <input
                        id="hospitalCity"
                        name="hospitalCity"
                        type="text"
                        required
                        value={formData.hospitalCity}
                        onChange={handleChange}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-medical-blue focus:ring focus:ring-medical-blue focus:ring-opacity-50"
                      />
                    </div>
                    <div>
                      <label htmlFor="hospitalState" className="block text-sm font-medium text-gray-700 mb-1">
                        State
                      </label>
                      <input
                        id="hospitalState"
                        name="hospitalState"
                        type="text"
                        required
                        value={formData.hospitalState}
                        onChange={handleChange}
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-medical-blue focus:ring focus:ring-medical-blue focus:ring-opacity-50"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="hospitalZipCode" className="block text-sm font-medium text-gray-700 mb-1">
                      Zip Code
                    </label>
                    <input
                      id="hospitalZipCode"
                      name="hospitalZipCode"
                      type="text"
                      required
                      value={formData.hospitalZipCode}
                      onChange={handleChange}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-medical-blue focus:ring focus:ring-medical-blue focus:ring-opacity-50"
                    />
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="agreeToTerms"
                        name="agreeToTerms"
                        type="checkbox"
                        required
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        className="h-4 w-4 text-medical-blue border-gray-300 rounded focus:ring-medical-blue"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="agreeToTerms" className="font-medium text-gray-700">
                        I agree to the terms and conditions
                      </label>
                      <p className="text-gray-500">
                        By checking this box, you agree to our{' '}
                        <a href="#" className="text-medical-blue hover:underline">Terms of Service</a>{' '}
                        and{' '}
                        <a href="#" className="text-medical-blue hover:underline">Privacy Policy</a>.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          
          <div className="flex justify-between">
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
                className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-white font-medium ${
                  userType === 'donor'
                    ? 'bg-blood-red hover:bg-blood-dark focus:ring-blood-red'
                    : 'bg-medical-blue hover:bg-medical-blue/90 focus:ring-medical-blue'
                } focus:outline-none focus:ring-2 focus:ring-offset-2`}
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-white font-medium ${
                  userType === 'donor'
                    ? 'bg-blood-red hover:bg-blood-dark focus:ring-blood-red'
                    : 'bg-medical-blue hover:bg-medical-blue/90 focus:ring-medical-blue'
                } focus:outline-none focus:ring-2 focus:ring-offset-2`}
              >
                Register
              </button>
            )}
          </div>
          
          <div className="text-center text-sm">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className={`font-medium ${userType === 'donor' ? 'text-blood-red hover:text-blood-dark' : 'text-medical-blue hover:text-medical-blue/90'}`}>
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;