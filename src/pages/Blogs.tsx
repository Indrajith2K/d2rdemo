import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, ArrowRight } from 'lucide-react';
import { supabaseBlogClient } from '../lib/supabaseClient';
import { Blog } from '../types/blog';
import { format } from 'date-fns';

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const { data, error } = await supabaseBlogClient
          .from('blogs')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) {
          console.error('Error fetching blogs:', error);
          return;
        }

        if (data) {
          setBlogs(data);
        }
      } catch (err) {
        console.error('Unexpected error fetching blogs:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden flex-shrink-0">
        <div className="absolute inset-0 bg-blue-900">
          <img
            src="https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&q=80"
            alt="Travel Journal"
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 lg:mb-6 tracking-tight">
            Our Travel <span className="text-yellow-400">Journal</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto font-medium">
            Discover travel tips, destination guides, and stories from around the globe to inspire your next adventure.
          </p>
        </div>
      </section>

      {/* Blog Listing Grid */}
      <section className="py-16 flex-grow">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((skeleton) => (
                <div key={skeleton} className="bg-white rounded-[2rem] overflow-hidden shadow-lg animate-pulse">
                  <div className="h-48 lg:h-56 bg-slate-200" />
                  <div className="p-6 lg:p-8">
                    <div className="h-4 bg-slate-200 rounded w-1/3 mb-4" />
                    <div className="h-8 bg-slate-200 rounded w-full mb-4" />
                    <div className="h-8 bg-slate-200 rounded w-3/4" />
                  </div>
                </div>
              ))}
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-[2rem] shadow-sm border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">No posts yet!</h3>
              <p className="text-slate-500">Check back later for exciting travel stories and updates.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {blogs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((blog) => (
                <Link 
                  key={blog.id} 
                  to={`/blog/${blog.slug}`}
                  className="group bg-white rounded-3xl lg:rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-300 border border-slate-100 flex flex-col"
                >
                  <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden shrink-0">
                    <img 
                      src={blog.image_url || "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80"} 
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-6 lg:p-8 flex flex-col flex-grow">
                    <div className="flex items-center text-slate-500 text-xs lg:text-sm font-medium mb-3 lg:mb-4 shrink-0">
                      <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                      {format(new Date(blog.created_at), 'MMM dd, yyyy')}
                    </div>
                    
                    <h3 className="text-lg lg:text-xl font-bold leading-snug lg:leading-normal text-slate-900 mb-4 group-hover:text-blue-600 transition-colors line-clamp-3">
                      {blog.title}
                    </h3>
                    
                    <div className="mt-auto pt-4 lg:pt-6 flex items-center text-blue-600 font-bold text-xs lg:text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-300">
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {!isLoading && blogs.length > 0 && Math.ceil(blogs.length / itemsPerPage) > 1 && (
            <div className="flex justify-center items-center mt-16 gap-4">
              <button 
                onClick={() => {
                  setCurrentPage(p => Math.max(1, p - 1));
                  window.scrollTo({ top: 400, behavior: 'smooth' });
                }}
                disabled={currentPage === 1}
                className="px-6 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
              >
                Previous
              </button>
              <div className="text-slate-600 font-semibold bg-white px-4 py-2 rounded-lg border border-slate-100 shadow-sm">
                Page {currentPage} of {Math.ceil(blogs.length / itemsPerPage)}
              </div>
              <button 
                onClick={() => {
                  setCurrentPage(p => Math.min(Math.ceil(blogs.length / itemsPerPage), p + 1));
                  window.scrollTo({ top: 400, behavior: 'smooth' });
                }}
                disabled={currentPage === Math.ceil(blogs.length / itemsPerPage)}
                className="px-6 py-2.5 rounded-xl bg-[#c8991f] text-white font-semibold hover:bg-[#b58715] disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;
