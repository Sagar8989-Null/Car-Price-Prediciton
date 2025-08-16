import React from 'react';
import { TrendingUp, Award, Calculator } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  return (
    <div className="mt-16">
      <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
        Why Choose CarValue Pro?
      </h3>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center p-6">
          <div className="bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <TrendingUp className="h-8 w-8 text-blue-600" />
          </div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Accurate Pricing</h4>
          <p className="text-gray-600">
            Our AI analyzes thousands of data points to provide the most accurate market valuations
          </p>
        </div>
        <div className="text-center p-6">
          <div className="bg-green-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Award className="h-8 w-8 text-green-600" />
          </div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Trusted Results</h4>
          <p className="text-gray-600">
            Used by dealers and individuals nationwide with 95% accuracy rating
          </p>
        </div>
        <div className="text-center p-6">
          <div className="bg-purple-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Calculator className="h-8 w-8 text-purple-600" />
          </div>
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Instant Results</h4>
          <p className="text-gray-600">
            Get your car's value in seconds with our advanced calculation engine
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;