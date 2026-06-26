import { useState, useEffect, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import type { RealtimePostgresChangesPayload } from '@supabase/supabase-js';

export interface Package {
  id: string;
  name: string;
  location: string;
  category: string;
  state_or_country: string;
  duration_days: number;
  duration_nights: number;
  price_per_person: number;
  quick_facts: string[];
  trip_speciality: string | null;
  image_url: string | null;
  rating: number | null;
  is_active: boolean;
  slug?: string | null;
  description?: string | null;
  top_attractions?: string[] | null;
  itinerary?: any[] | null;
  seo_keywords?: string[] | null;
  seo_meta_description?: string | null;
}

interface UsePackagesOptions {
  category?: 'domestic' | 'international';
  stateOrCountry?: string;
}

export const usePackages = (options: UsePackagesOptions = {}) => {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const optionsRef = useRef(options);
  
  // Keep options ref updated
  optionsRef.current = options;

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setLoading(true);
        let query = supabase
          .from('packages')
          .select('*')
          .eq('is_active', true);

        if (options.category) {
          query = query.eq('category', options.category);
        }

        if (options.stateOrCountry) {
          query = query.eq('state_or_country', options.stateOrCountry);
        }

        const { data, error: queryError } = await query.order('rating', { ascending: false });

        if (queryError) {
          throw queryError;
        }

        setPackages(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch packages');
        console.error('Error fetching packages:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();

    // Subscribe to real-time changes
    const channel = supabase
      .channel(`packages-realtime-${options.category || 'all'}-${options.stateOrCountry || 'all'}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'packages',
        },
        (payload: RealtimePostgresChangesPayload<Package>) => {
          console.log('Real-time update received:', payload);
          const currentOptions = optionsRef.current;

          if (payload.eventType === 'INSERT') {
            const newPackage = payload.new as Package;
            const matchesCategory = !currentOptions.category || newPackage.category === currentOptions.category;
            const matchesStateOrCountry = !currentOptions.stateOrCountry || newPackage.state_or_country === currentOptions.stateOrCountry;
            
            if (matchesCategory && matchesStateOrCountry && newPackage.is_active) {
              setPackages((prev) => [...prev, newPackage].sort((a, b) => (b.rating || 0) - (a.rating || 0)));
            }
          } else if (payload.eventType === 'UPDATE') {
            const updatedPackage = payload.new as Package;
            setPackages((prev) => {
              const matchesCategory = !currentOptions.category || updatedPackage.category === currentOptions.category;
              const matchesStateOrCountry = !currentOptions.stateOrCountry || updatedPackage.state_or_country === currentOptions.stateOrCountry;
              const shouldBeIncluded = matchesCategory && matchesStateOrCountry && updatedPackage.is_active;

              const existingIndex = prev.findIndex((p) => p.id === updatedPackage.id);

              if (existingIndex >= 0 && shouldBeIncluded) {
                const newList = [...prev];
                newList[existingIndex] = updatedPackage;
                return newList.sort((a, b) => (b.rating || 0) - (a.rating || 0));
              } else if (existingIndex >= 0 && !shouldBeIncluded) {
                return prev.filter((p) => p.id !== updatedPackage.id);
              } else if (existingIndex < 0 && shouldBeIncluded) {
                return [...prev, updatedPackage].sort((a, b) => (b.rating || 0) - (a.rating || 0));
              }
              return prev;
            });
          } else if (payload.eventType === 'DELETE') {
            const deletedPackage = payload.old as Package;
            setPackages((prev) => prev.filter((p) => p.id !== deletedPackage.id));
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [options.category, options.stateOrCountry]);

  const formatPrice = (price: number) => `₹${price.toLocaleString('en-IN')}`;
  const formatDuration = (days: number, nights: number) => `${days} Days / ${nights} Nights`;

  return { packages, loading, error, formatPrice, formatDuration };
};

export default usePackages;
