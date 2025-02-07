import { useState } from 'react';
import { Calendar, Clock, User, Share2 } from 'lucide-react';
import { BlogPost } from '../../data/blogPosts';

interface BlogDetailProps {
  post: BlogPost;
}

export function BlogDetail({ post }: BlogDetailProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error('Failed to copy link', error);
    }
  };

  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-80 object-cover"
        />
      </div>
      <div className="p-8">
        <h1 className="text-5xl font-bold mb-4">{post.title}</h1>
        <div className="flex flex-wrap items-center text-gray-500 space-x-4 mb-6">
          <div className="flex items-center gap-1">
            <User size={20} />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar size={20} />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={20} />
            <span>{post.readTime}</span>
          </div>
        </div>
        <div className="prose max-w-none text-gray-700 mb-8">
          {post.content.split('\n\n').map((para, index) => (
            <p key={index}>{para}</p>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors"
          >
            Share <Share2 size={20} />
          </button>
          {copied && (
            <span className="text-green-600 font-medium animate-fade-in">Link Copied!</span>
          )}
          <a href="/blog" className="text-green-600 hover:underline">← Back to Blog</a>
        </div>
      </div>
    </article>
  );
}
