import essentialNutrients from './Content/essential-nutrients.json';
import prePostWorkout from './Content/pre-post-workout.json';
import hydrationStrategies from './Content/hydration-strategies.json';
import plantBasedProtein from './Content/plant-based-protein.json';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  essentialNutrients,
  prePostWorkout,
  hydrationStrategies,
  plantBasedProtein,
];
