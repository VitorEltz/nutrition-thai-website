import { useParams } from 'react-router-dom';
import { blogPosts, BlogPost } from '../data/blogPosts';
import { BlogDetail } from '../components/ui/BlogDetail';

export function BlogDetailPage() {
  const { id } = useParams<{ id: string }>();
  const post: BlogPost | undefined = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
        <a href="/blog" className="text-green-600 hover:underline">Return to Blog</a>
      </div>
    );
  }

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <BlogDetail post={post} />
      </div>
    </section>
  );
}
