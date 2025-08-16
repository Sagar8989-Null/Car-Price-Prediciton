import React from 'react';
import { Car } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center space-x-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Car className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">CarValue Pro</h1>
            <p className="text-sm text-gray-600">AI-Powered Vehicle Valuation</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;