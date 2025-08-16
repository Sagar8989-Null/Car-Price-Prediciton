import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Get Your Car's Market Value
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Our advanced algorithm analyzes market data, vehicle condition, and location to provide accurate price predictions
      </p>
    </div>
  );
};

export default HeroSection;