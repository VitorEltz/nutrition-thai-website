import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { calculateBMR, calculateTDEE, calculateMacros } from '../../utils/calculators';
import { MacroResult } from '../ui/MacroResult';
import { InfoTooltip } from '../ui/InfoTooltip';

interface FormData {
  age: number;
  gender: 'male' | 'female';
  weight: number;
  height: number;
  activityLevel: string;
  goal: string;
}

const initialFormData: FormData = {
  age: 25,
  gender: 'male',
  weight: 70,
  height: 170,
  activityLevel: 'moderate',
  goal: 'maintain'
};

export function MacroCalculator() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [results, setResults] = useState<any>(null);
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const bmr = calculateBMR(formData.weight, formData.height, formData.age, formData.gender);
    const tdee = calculateTDEE(bmr, formData.activityLevel);
    const macros = calculateMacros(tdee, formData.goal);
    setResults(macros);
    setShowResults(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="py-20 px-4" id="calculator">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calculator className="w-8 h-8 text-green-600" />
            <h2 className="text-4xl font-bold">Macro Calculator</h2>
          </div>
          <p className="text-gray-600">
            Calculate your daily macronutrient needs based on your goals and activity level
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Age
                  <InfoTooltip text="Your current age in years" />
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                  min="15"
                  max="100"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gender
                  <InfoTooltip text="Biological sex for BMR calculation" />
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Weight (kg)
                  <InfoTooltip text="Your current weight in kilograms" />
                </label>
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                  min="30"
                  max="300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Height (cm)
                  <InfoTooltip text="Your height in centimeters" />
                </label>
                <input
                  type="number"
                  name="height"
                  value={formData.height}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                  min="100"
                  max="250"
                  required
                />
              </div>
            </div>

            {/* Activity Level */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Activity Level
                <InfoTooltip text="Your typical weekly activity level" />
              </label>
              <select
                name="activityLevel"
                value={formData.activityLevel}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
              >
                <option value="sedentary">Sedentary (little or no exercise)</option>
                <option value="light">Light (exercise 1-3 times/week)</option>
                <option value="moderate">Moderate (exercise 3-5 times/week)</option>
                <option value="active">Active (exercise 6-7 times/week)</option>
                <option value="very_active">Very Active (intense exercise daily)</option>
              </select>
            </div>

            {/* Goal */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Goal
                <InfoTooltip text="Your primary fitness goal" />
              </label>
              <select
                name="goal"
                value={formData.goal}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
              >
                <option value="lose">Weight Loss</option>
                <option value="maintain">Maintenance</option>
                <option value="gain">Muscle Gain</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors"
            >
              Calculate Macros
            </button>
          </form>
        </div>

        {showResults && results && (
          <MacroResult results={results} />
        )}
      </div>
    </section>
  );
}
