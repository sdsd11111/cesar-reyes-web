import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_RETO_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_RETO_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables for Reto 7 Días');
}

export const supabaseReto = createClient(supabaseUrl, supabaseAnonKey);
