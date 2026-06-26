import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import { Play, X } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2532&auto=format&fit=crop',
    destination: 'Kerala',
    alt: 'Kerala Backwaters'
  },
  {
    id: 2,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2532&auto=format&fit=crop',
    destination: 'Thailand',
    alt: 'Thailand Beach'
  },
  {
    id: 3,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1605649488919-039d6aaa59be?q=80&w=2532&auto=format&fit=crop',
    destination: 'Kashmir',
    alt: 'Kashmir Valley'
  },
  {
    id: 4,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2532&auto=format&fit=crop',
    destination: 'Bali',
    alt: 'Bali Temple'
  },
  {
    id: 5,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2532&auto=format&fit=crop',
    destination: 'Andaman',
    alt: 'Andaman Beach'
  },
  {
    id: 6,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2532&auto=format&fit=crop',
    destination: 'Singapore',
    alt: 'Singapore Marina'
  },
  {
    id: 7,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2532&auto=format&fit=crop',
    destination: 'Himachal',
    alt: 'Himachal Mountains'
  },
  {
    id: 8,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2532&auto=format&fit=crop',
    destination: 'Goa',
    alt: 'Goa Beach Sunset'
  },
  {
    id: 9,
    type: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2532&auto=format&fit=crop',
    src: '',
    destination: 'Dubai',
    alt: 'Dubai Tour'
  },
  {
    id: 10,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2532&auto=format&fit=crop',
    destination: 'Malaysia',
    alt: 'Malaysia Petronas Towers'
  },
  {
    id: 11,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=2532&auto=format&fit=crop',
    destination: 'Sri Lanka',
    alt: 'Sri Lanka Tea Gardens'
  },
  {
    id: 12,
    type: 'image',
    src: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2532&auto=format&fit=crop',
    destination: 'Tamil Nadu',
    alt: 'Tamil Nadu Temples'
  }
];

const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="relative py-16 md:py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Travel <span className="text-yellow-400">Gallery</span>
              </h1>
              <p className="font-sans text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
                Explore stunning moments captured by our travelers across breathtaking destinations. 
                See the world through their lens and get inspired for your next adventure!
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer aspect-square"
                  onClick={() => setSelectedItem(item)}
                >
                  <img
                    src={item.type === 'video' ? item.thumbnail : item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg mb-1">{item.destination}</h3>
                      {item.type === 'video' && (
                        <div className="flex items-center gap-2 text-yellow-400 text-sm">
                          <Play className="w-4 h-4" />
                          <span>Play Video</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Video Icon */}
                  {item.type === 'video' && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="bg-yellow-400 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-slate-900" />
                      </div>
                    </div>
                  )}

                  {/* Destination Tag */}
                  <div className="absolute top-4 right-4 bg-yellow-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {item.destination}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Create Your Own <span className="text-yellow-400">Memories</span>?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join thousands of happy travelers and capture your own unforgettable moments
            </p>
            <a
              href="https://whatsform.com/4rhIjb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              Book Your Trip Now
            </a>
          </div>
        </section>

        <Footer />
      </div>
      <FloatingContact />

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors duration-200"
            onClick={() => setSelectedItem(null)}
          >
            <X className="w-8 h-8" />
          </button>

          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            {selectedItem.type === 'video' ? (
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <iframe
                  className="absolute inset-0 w-full h-full rounded-lg"
                  src={selectedItem.src}
                  title={selectedItem.alt}
                  allowFullScreen
                />
              </div>
            ) : (
              <img
                src={selectedItem.src}
                alt={selectedItem.alt}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              />
            )}
            <div className="text-center mt-4">
              <h3 className="text-white text-2xl font-bold">{selectedItem.destination}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
