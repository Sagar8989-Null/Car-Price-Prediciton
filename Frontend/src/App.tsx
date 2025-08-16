import React, { useState } from 'react';
import Header from './components/Header';
import FeaturesSection from './components/FeaturesSection';
import { CarDetails, PredictionResult } from './types';
import VehicleDetailsForm from './components/VehicleDetailsForm';
import HeroSection from './components/HeroSection';

function App() {
  const [carDetails, setCarDetails] = useState<CarDetails>({
    make: '',
    model: '',
    year: new Date().getFullYear(),
    Kms: 0,
    condition: '',
    fuelType: '',
    transmission: '',
    location: ''
  });

  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);
  const handleInputChange = (field: keyof CarDetails, value: string | number) => {
    setCarDetails(prev => ({ ...prev, [field]: value }));
  };

  const handleCalculatePrice = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          year: carDetails.year,
          km_driven: carDetails.Kms,
          fuel: carDetails.fuelType,
          transmission: carDetails.transmission,
          owner: carDetails.condition,
        }),
      });

      const data = await response.json();

      if (data.predicted_price) {
        setEstimatedPrice(data.predicted_price);
      } else {
        console.error("Error from backend:", data.error);
      }
    } catch (error) {
      console.error("API call failed:", error);
    } finally {
      setIsLoading(false);
    }
  };


  const isFormValid = carDetails.make && carDetails.model && carDetails.year && carDetails.condition && carDetails.fuelType && carDetails.transmission;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <HeroSection />

        {/* <div className="grid lg:grid-cols-1 "> */}
        <div className="flex justify-center">
          <VehicleDetailsForm
            carDetails={carDetails}
            onInputChange={handleInputChange}
            onCalculatePrice={handleCalculatePrice}
            isLoading={isLoading}
            isFormValid={isFormValid}
          />
          </div>
          {estimatedPrice !== null && (
            <div className="mt-4 p-4 bg-white shadow rounded-lg text-center">
              <h3 className="text-lg font-semibold text-gray-700">
                Estimated Price: <span className="text-blue-600">₹{estimatedPrice.toLocaleString()}</span>
              </h3>
            </div>
          )}



        <FeaturesSection />
      </main>
    </div>
  );
}

export default App;