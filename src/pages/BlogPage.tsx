import { Link } from 'react-router-dom';
import { BlogCard } from '../components/ui/BlogCard';
import { blogPosts } from '../data/blogPosts';
import { useLanguage } from '../contexts/LanguageContext';

export function BlogPage() {
  const { t } = useLanguage();
  
  return (
    <div className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{t('blog.title')}</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('blog.description')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.id}`}>
              <BlogCard
                title={post.title}
                excerpt={post.excerpt}
                imageUrl={post.imageUrl}
                author={post.author}
                date={post.date}
                readTime={`${post.readTime} ${t('blog.readTime')}`}
                category={post.category}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
