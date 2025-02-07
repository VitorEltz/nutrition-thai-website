import { Calendar, Clock, User } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

export function BlogCard({ 
  title, 
  excerpt, 
  imageUrl, 
  author, 
  date, 
  readTime,
  category 
}: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <span className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm">
          {category}
        </span>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 line-clamp-2 hover:text-primary-500">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="flex items-center text-sm text-gray-500 gap-4">
          <div className="flex items-center gap-1">
            <User size={16} />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={16} />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{readTime}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
