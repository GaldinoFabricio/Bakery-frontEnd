import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBlogPosts } from '../services/api';
import HeroSection from '../components/HeroSection';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const data = await getBlogPosts();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchPosts();
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <HeroSection
        title="Bakery Blog"
        subtitle="Insights, tips, and stories from our baking journey"
        imageSrc="https://images.pexels.com/photos/1707272/pexels-photo-1707272.jpeg"
        height="medium"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8">
              Latest Articles
            </h1>
            
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-600"></div>
              </div>
            ) : posts.length > 0 ? (
              <div className="space-y-12">
                {/* Featured Post */}
                <div className="bg-amber-50 rounded-lg overflow-hidden shadow-md">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img 
                        src={posts[0].image} 
                        alt={posts[0].title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-6 md:p-8">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{formatDate(posts[0].date)}</span>
                        <span className="mx-2">•</span>
                        <Tag className="w-4 h-4 mr-1" />
                        <span className="capitalize">{posts[0].category}</span>
                      </div>
                      
                      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-3">
                        <Link to={`/blog/${posts[0].id}`} className="hover:text-amber-700 transition-colors">
                          {posts[0].title}
                        </Link>
                      </h2>
                      
                      <p className="text-gray-600 mb-6">
                        {posts[0].excerpt}
                      </p>
                      
                      <Link 
                        to={`/blog/${posts[0].id}`} 
                        className="inline-flex items-center text-amber-700 font-medium hover:text-amber-800 transition-colors"
                      >
                        Read Full Article <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
                
                {/* Other Posts */}
                <div className="grid gap-8 md:grid-cols-2">
                  {posts.slice(1).map((post) => (
                    <article key={post.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                      <Link to={`/blog/${post.id}`} className="block">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-48 object-cover"
                        />
                      </Link>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{formatDate(post.date)}</span>
                          <span className="mx-2">•</span>
                          <Tag className="w-4 h-4 mr-1" />
                          <span className="capitalize">{post.category}</span>
                        </div>
                        
                        <h2 className="text-xl font-serif font-bold text-gray-900 mb-3">
                          <Link to={`/blog/${post.id}`} className="hover:text-amber-700 transition-colors">
                            {post.title}
                          </Link>
                        </h2>
                        
                        <p className="text-gray-600 mb-6">
                          {post.excerpt}
                        </p>
                        
                        <Link 
                          to={`/blog/${post.id}`} 
                          className="inline-flex items-center text-amber-700 font-medium hover:text-amber-800 transition-colors"
                        >
                          Read More <ArrowRight size={16} className="ml-2" />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg text-center">
                <h3 className="text-xl font-medium text-gray-900 mb-2">No blog posts found</h3>
                <p className="text-gray-600">
                  Check back later for new articles and updates.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
              Subscribe to Our Blog
            </h2>
            <p className="text-gray-600 mb-8">
              Get the latest baking tips, recipes, and news delivered straight to your inbox.
            </p>
            
            <div className="flex max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
              <button className="bg-amber-700 hover:bg-amber-800 text-white font-medium px-6 py-3 rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;