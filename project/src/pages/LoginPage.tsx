import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, User, Building } from 'lucide-react';

const LoginPage: React.FC = () => {
  const [userType, setUserType] = useState<'donor' | 'hospital'>('donor');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login form submitted:', formData);
  };
  
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-text-dark">Welcome Back</h2>
          <p className="mt-2 text-gray-600">Sign in to your LifeFlow account</p>
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
                  autoComplete="current-password"
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
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="rememberMe"
                type="checkbox"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="h-4 w-4 text-blood-red border-gray-300 rounded focus:ring-blood-red"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>
            
            <div className="text-sm">
              <a href="#" className="font-medium text-blood-red hover:text-blood-dark">
                Forgot your password?
              </a>
            </div>
          </div>
          
          <div>
            <button
              type="submit"
              className={`w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-white font-medium ${
                userType === 'donor'
                  ? 'bg-blood-red hover:bg-blood-dark focus:ring-blood-red'
                  : 'bg-medical-blue hover:bg-medical-blue/90 focus:ring-medical-blue'
              } focus:outline-none focus:ring-2 focus:ring-offset-2`}
            >
              Sign in
            </button>
          </div>
          
          <div className="text-center text-sm">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="font-medium text-blood-red hover:text-blood-dark">
                Register now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;