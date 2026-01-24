import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_ARTS_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ARTS_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables for Artes Vivas');
}

export const supabaseArtes = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: false
  }
});
