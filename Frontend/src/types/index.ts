export interface CarDetails {
  make: string;
  model: string;
  year: number;
  Kms: number;
  condition: string;
  fuelType: string;
  transmission: string;
  location: string;
}

export interface PredictionResult {
  estimatedPrice: number;
  priceRange: {
    min: number;
    max: number;
  };
  confidence: number;
  factors: string[];
}

export interface Condition {
  value: string;
  label: string;
}