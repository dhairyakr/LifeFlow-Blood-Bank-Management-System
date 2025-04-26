import React, { useState, useEffect } from 'react';

interface BloodBagAnimationProps {
  fillPercentage: number;
  bloodType: string;
  animate?: boolean;
}

const BloodBagAnimation: React.FC<BloodBagAnimationProps> = ({ 
  fillPercentage, 
  bloodType, 
  animate = false 
}) => {
  const [currentFill, setCurrentFill] = useState(animate ? 0 : fillPercentage);

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setCurrentFill(fillPercentage);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [animate, fillPercentage]);

  return (
    <div className="relative w-32 h-48 mx-auto">
      {/* Blood Bag Outline */}
      <div className="absolute inset-0 border-2 border-gray-300 rounded-b-lg rounded-t-md">
        {/* Top connector */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-4 border-2 border-gray-300 rounded-t-md bg-white"></div>
        
        {/* Blood Type Label */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded-md border border-gray-300 text-sm font-bold text-blood-red">
          {bloodType}
        </div>
      </div>
      
      {/* Blood Fill */}
      <div 
        className="absolute bottom-0 left-0 right-0 bg-blood-red rounded-b-lg transition-all duration-2000 ease-in-out blood-bag-fill"
        style={{ 
          height: `${currentFill}%`,
          transition: animate ? 'height 2s ease-in-out' : 'none'
        }}
      ></div>
      
      {/* Measurement Lines */}
      {[20, 40, 60, 80].map((level) => (
        <div 
          key={level} 
          className="absolute left-0 w-2 h-0.5 bg-gray-400"
          style={{ bottom: `${level}%` }}
        ></div>
      ))}
      
      {/* Percentage Text */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs font-bold text-white">
        {currentFill}%
      </div>
    </div>
  );
};

export default BloodBagAnimation;