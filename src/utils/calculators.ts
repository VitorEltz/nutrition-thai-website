// Calculate Basal Metabolic Rate (BMR)
export function calculateBMR(
  weight: number,
  height: number,
  age: number,
  gender: string
): number {
  // Mifflin-St Jeor Equation
  const bmr = 10 * weight + 6.25 * height - 5 * age;
  return gender === 'male' ? bmr + 5 : bmr - 161;
}

// Calculate Total Daily Energy Expenditure (TDEE)
export function calculateTDEE(bmr: number, activityLevel: string): number {
  const activityMultipliers = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    very_active: 1.9
  };

  return Math.round(bmr * activityMultipliers[activityLevel as keyof typeof activityMultipliers]);
}

// Calculate Macronutrients based on goals
export function calculateMacros(tdee: number, goal: string) {
  let calories: number;
  let proteinMultiplier: number;
  let fatMultiplier: number;

  switch (goal) {
    case 'lose':
      calories = tdee - 500; // 500 calorie deficit
      proteinMultiplier = 2.2; // Higher protein for muscle preservation
      fatMultiplier = 0.8;
      break;
    case 'gain':
      calories = tdee + 500; // 500 calorie surplus
      proteinMultiplier = 2.0;
      fatMultiplier = 1.0;
      break;
    default: // maintain
      calories = tdee;
      proteinMultiplier = 1.8;
      fatMultiplier = 0.9;
  }

  // Calculate macros in grams
  const protein = Math.round(proteinMultiplier * (calories * 0.3) / 4);
  const fats = Math.round(fatMultiplier * (calories * 0.25) / 9);
  const carbs = Math.round((calories - (protein * 4 + fats * 9)) / 4);

  return {
    calories: Math.round(calories),
    protein,
    carbs,
    fats
  };
}
