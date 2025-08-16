import React from 'react';
import { Calculator, Calendar, Gauge, Award, Wrench, MapPin } from 'lucide-react';
import { CarDetails, Condition } from '../types';

interface VehicleDetailsFormProps {
  carDetails: CarDetails;
  onInputChange: (field: keyof CarDetails, value: string | number) => void;
  onCalculatePrice: () => void;
  isLoading: boolean;
  isFormValid: boolean;
  setEstimatedPrice: (price: number) => void;
}

const VehicleDetailsForm: React.FC<VehicleDetailsFormProps> = ({
  carDetails,
  onInputChange,
  onCalculatePrice,
  isLoading,
  isFormValid
}) => {
  const carMakes = [
    'Toyota', 'Honda', 'Ford', 'Chevrolet', 'BMW', 'Mercedes-Benz', 
    'Audi', 'Volkswagen', 'Nissan', 'Hyundai', 'Kia', 'Mazda'
  ];

  const conditions: Condition[] = [
    { value: 'First', label: 'First owner'},
    { value: 'Second', label: 'Second Owner'},
    { value: 'Third', label: 'Third owner'},
    { value: 'Fourth and Above', label: 'Fourth and Above'},
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      <div className="flex items-center space-x-3 mb-6">
        <Calculator className="h-6 w-6 text-blue-600" />
        <h3 className="text-2xl font-semibold text-gray-900">Vehicle Details</h3>
      </div>

      <div className="space-y-6">
        {/* Make and Model */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Make
            </label>
            <select
              value={carDetails.make}
              onChange={(e) => onInputChange('make', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Select Make</option>
              {carMakes.map(make => (
                <option key={make} value={make}>{make}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Model
            </label>
            <input
              type="text"
              value={carDetails.model}
              onChange={(e) => onInputChange('model', e.target.value)}
              placeholder="Enter model name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        {/* Year and Mileage */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar className="inline h-4 w-4 mr-1" />
              Year
            </label>
            <input
              type="number"
              value={carDetails.year}
              onChange={(e) => onInputChange('year', parseInt(e.target.value))}
              min="1990"
              max={new Date().getFullYear()}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Gauge className="inline h-4 w-4 mr-1" />
              Kms Traveled
            </label>
            <input
              type="number"
              value={carDetails.Kms}
              onChange={(e) => onInputChange('Kms', parseInt(e.target.value))}
              placeholder="Enter mileage"
              min="0"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        {/* Condition */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Award className="inline h-4 w-4 mr-1" />
            Condition
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
            {conditions.map(condition => (
              <button
                key={condition.value}
                type="button"
                onClick={() => onInputChange('condition', condition.value)}
                className={`px-3 py-2 text-sm rounded-lg border transition-all duration-200 ${
                  carDetails.condition === condition.value
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-blue-300'
                }`}
              >
                {condition.label}
              </button>
            ))}
          </div>
        </div>

        {/* Fuel Type and Transmission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Fuel Type
            </label>
            <select
              value={carDetails.fuelType}
              onChange={(e) => onInputChange('fuelType', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Select Fuel Type</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              {/* <option value="hybrid">Hybrid</option>
              <option value="electric">Electric</option> */}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Wrench className="inline h-4 w-4 mr-1" />
              Transmission
            </label>
            <select
              value={carDetails.transmission}
              onChange={(e) => onInputChange('transmission', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Select Transmission</option>
              <option value="automatic">Automatic</option>
              <option value="manual">Manual</option>
              {/* <option value="cvt">CVT</option> */}
            </select>
          </div>
        </div>

        {/* Location
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MapPin className="inline h-4 w-4 mr-1" />
            Location
          </label>
          <input
            type="text"
            value={carDetails.location}
            onChange={(e) => onInputChange('location', e.target.value)}
            placeholder="City, State"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
        </div> */}

        {/* Calculate Button */}
        <button
            onClick={onCalculatePrice}
            // onClick={handleSubmit}
          disabled={!isFormValid || isLoading}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
        >
          {isLoading ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Calculating...</span>
            </div>
          ) : (
            'Get Price Estimate'
          )}
        </button>
      </div>
    </div>
  );
};

export default VehicleDetailsForm;