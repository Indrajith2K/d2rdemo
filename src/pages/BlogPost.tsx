import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, ArrowLeft } from 'lucide-react';
import { supabaseBlogClient } from '../lib/supabaseClient';
import { Blog } from '../types/blog';
import { format } from 'date-fns';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!slug) return;
      
      try {
        const { data, error } = await supabaseBlogClient
          .from('blogs')
          .select('*')
          .eq('slug', slug)
          .single();

        if (error) {
          console.error('Error fetching blog:', error);
          navigate('/not-found');
          return;
        }

        if (data) {
          setBlog(data);
          document.title = `${data.title} | Dare2Roam Blogs`;
        }
      } catch (err) {
        console.error('Unexpected error:', err);
        navigate('/not-found');
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog();

    return () => {
      document.title = 'Dare2Roam Holidays';
    };
  }, [slug, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Navbar />
        <div className="flex-grow pt-32 pb-20 px-4 flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!blog) return null;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero Header with Banner Image */}
      <section className="relative pt-24 lg:pt-32 h-[50vh] min-h-[400px] flex-shrink-0">
        <div className="absolute inset-0">
          <img
            src={blog.image_url || "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80"}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>
        
        <div className="absolute inset-0 flex items-end pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <Link 
              to="/blogs" 
              className="inline-flex items-center text-white/80 hover:text-white text-sm font-semibold mb-6 transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
              Back to all posts
            </Link>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
              {blog.title}
            </h1>
            
            <div className="flex items-center text-white/80 font-medium">
              <Calendar className="h-5 w-5 mr-2" />
              {format(new Date(blog.created_at), 'MMMM dd, yyyy')}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 lg:py-24 flex-grow">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article 
            className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-img:rounded-2xl prose-img:shadow-lg"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
          
          <div className="mt-16 pt-8 border-t border-slate-200">
             <Link 
              to="/blogs" 
              className="inline-flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold px-8 py-4 rounded-full transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Read More Articles
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost;
