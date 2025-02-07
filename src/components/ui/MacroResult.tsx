import { useRef } from 'react';
import { Flame, Beef, UserCheck as Cheese, Apple, Download } from 'lucide-react';
import { toPng } from 'html-to-image';

interface MacroResultProps {
  results: {
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
  };
}

export function MacroResult({ results }: MacroResultProps) {
  const resultRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (resultRef.current) {
      try {
        const dataUrl = await toPng(resultRef.current, {
          quality: 1.0,
          backgroundColor: 'white',
        });
        
        const link = document.createElement('a');
        link.download = 'my-macro-results.png';
        link.href = dataUrl;
        link.click();
      } catch (error) {
        console.error('Error generating image:', error);
      }
    }
  };

  return (
    <div className="mt-8 space-y-4">
      <div ref={resultRef} className="bg-white rounded-lg shadow-lg p-8 animate-fade-in">
        <h3 className="text-2xl font-bold text-center mb-8">Your Daily Macros</h3>
        
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center p-4 rounded-lg bg-gray-50">
            <Flame className="w-6 h-6 mx-auto mb-2 text-orange-500" />
            <div className="font-bold text-2xl mb-2">{results.calories}</div>
            <div className="text-gray-600">Calories</div>
          </div>

          <div className="text-center p-4 rounded-lg bg-red-50">
            <Beef className="w-6 h-6 mx-auto mb-2 text-red-500" />
            <div className="font-bold text-2xl mb-2">{results.protein}g</div>
            <div className="text-gray-600">Protein</div>
          </div>

          <div className="text-center p-4 rounded-lg bg-yellow-50">
            <Cheese className="w-6 h-6 mx-auto mb-2 text-yellow-500" />
            <div className="font-bold text-2xl mb-2">{results.fats}g</div>
            <div className="text-gray-600">Fats</div>
          </div>

          <div className="text-center p-4 rounded-lg bg-green-50">
            <Apple className="w-6 h-6 mx-auto mb-2 text-green-500" />
            <div className="font-bold text-2xl mb-2">{results.carbs}g</div>
            <div className="text-gray-600">Carbs</div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-bold mb-2">Tips:</h4>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Try to spread your protein intake throughout the day</li>
            <li>Focus on whole food sources for better nutrient absorption</li>
            <li>Stay hydrated by drinking plenty of water</li>
            <li>Adjust these numbers based on your progress and energy levels</li>
          </ul>
        </div>
      </div>

      <button
        onClick={handleDownload}
        className="w-full flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors"
      >
        <Download size={20} />
        Download Results as Image
      </button>
    </div>
  );
}
