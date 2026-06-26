import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Package } from './usePackages';

export const usePackageBySlug = (slug: string | undefined) => {
  const [pkg, setPkg] = useState<Package | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPackage = async () => {
      if (!slug) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        // Check if the slug is actually a UUID or an integer (from old links)
        const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(slug);
        const isNumber = /^\d+$/.test(slug);

        let query = supabase.from('packages').select('*').eq('is_active', true);
        
        if (isUuid || isNumber) {
          query = query.eq('id', slug);
        } else {
          query = query.eq('slug', slug);
        }

        const { data, error: queryError } = await query.single();

        if (queryError) {
          throw queryError;
        }

        setPkg(data as Package);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch package');
        console.error('Error fetching package by slug:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPackage();

    if (slug) {
      // Subscribe to real-time changes for this specific package
      const channel = supabase
        .channel(`package-realtime-${slug}`)
        .on(
          'postgres_changes',
          {
            event: 'UPDATE',
            schema: 'public',
            table: 'packages',
            filter: `slug=eq.${slug}`,
          },
          (payload) => {
            console.log('Real-time package update received:', payload);
            setPkg(payload.new as Package);
          }
        )
        .subscribe();

      return () => {
        supabase.removeChannel(channel);
      };
    }
  }, [slug]);

  return { pkg, loading, error };
};

export default usePackageBySlug;
