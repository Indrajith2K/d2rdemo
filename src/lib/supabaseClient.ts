import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_BLOG_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_BLOG_SUPABASE_ANON_KEY || 'placeholder';

if (supabaseUrl === 'https://placeholder.supabase.co') {
  console.warn('Missing Supabase environment variables. Please restart your dev server.');
}

export const supabaseBlogClient = createClient(supabaseUrl, supabaseAnonKey);
