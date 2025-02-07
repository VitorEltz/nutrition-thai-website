export const colors = {
  // Brand colors
  primary: {
    50: '#f6f1fe',    // Lightest purple
    100: '#ede4fd',   // Light purple
    500: '#9a19ef',   // Main brand color (purple)
    600: '#8516cc',   // Darker shade for hover states
  },

  // Neutral colors
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    900: '#111827',
  },

  // Semantic colors
  success: {
    50: '#f6f1fe',    // Light purple
    500: '#9a19ef',   // Main purple
    600: '#8516cc',   // Dark purple
  },
  warning: {
    50: '#fefce8',
    500: '#eab308',
    600: '#ca8a04',
  },
  error: {
    50: '#fef2f2',
    500: '#ef4444',
    600: '#dc2626',
  },
  info: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
  },

  // Macro calculator specific colors
  macros: {
    calories: {
      bg: '#f8fafc',  // slate-50
      text: '#f97316', // orange-500
    },
    protein: {
      bg: '#fef2f2',  // red-50
      text: '#ef4444', // red-500
    },
    fats: {
      bg: '#fefce8',  // yellow-50
      text: '#eab308', // yellow-500
    },
    carbs: {
      bg: '#f6f1fe',  // purple-50
      text: '#9a19ef', // purple-500
    },
  },
} as const;

// Helper function to get color with type safety
export function getColor(path: string): string {
  return path.split('.').reduce((obj: any, key: string) => obj[key], colors);
}

// Helper type for autocompletion
export type ColorPath = keyof typeof colors | 
  `${keyof typeof colors}.${string}` |
  `${keyof typeof colors}.${string}.${string}`;

// Example usage:
// const primaryColor = getColor('primary.500');
// const macroCaloriesBg = getColor('macros.calories.bg'); 