import React from 'react';
import { Droplet } from 'lucide-react';

interface BloodTypeCardProps {
  type: string;
  canDonateTo: string[];
  canReceiveFrom: string[];
  rarity: 'Common' | 'Uncommon' | 'Rare' | 'Very Rare';
  currentStock: 'High' | 'Medium' | 'Low' | 'Critical';
}

const BloodTypeCard: React.FC<BloodTypeCardProps> = ({
  type,
  canDonateTo,
  canReceiveFrom,
  rarity,
  currentStock,
}) => {
  const getStockColor = () => {
    switch (currentStock) {
      case 'High':
        return 'bg-green-500';
      case 'Medium':
        return 'bg-yellow-500';
      case 'Low':
        return 'bg-orange-500';
      case 'Critical':
        return 'bg-red-500 animate-pulse';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="p-4 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Droplet className="w-8 h-8 text-blood-red" fill="#E63946" />
            <h3 className="text-2xl font-bold text-text-dark">{type}</h3>
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getStockColor()}`}>
            {currentStock} Stock
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-500">{rarity} blood type</p>
      </div>
      <div className="p-4">
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700 mb-1">Can donate to:</h4>
          <div className="flex flex-wrap gap-1">
            {canDonateTo.map((recipient) => (
              <span
                key={recipient}
                className="px-2 py-1 bg-medical-light text-medical-blue rounded-md text-xs font-medium"
              >
                {recipient}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-1">Can receive from:</h4>
          <div className="flex flex-wrap gap-1">
            {canReceiveFrom.map((donor) => (
              <span
                key={donor}
                className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
              >
                {donor}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-4 bg-gray-50">
        <button className="w-full py-2 bg-blood-red text-white rounded-md hover:bg-blood-dark transition-colors duration-200">
          Donate {type} Blood
        </button>
      </div>
    </div>
  );
};

export default BloodTypeCard;