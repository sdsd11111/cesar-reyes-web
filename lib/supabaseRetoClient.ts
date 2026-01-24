import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_RETO_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_RETO_ANON_KEY;
const supabaseServiceKey = process.env.SUPABASE_RETO_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseAnonKey || !supabaseServiceKey) {
  console.error('Missing Supabase Reto credentials');
}

// Client for client-side operations (if needed, using anon key)
export const supabaseRetoClient = createClient(
  supabaseUrl || '',
  supabaseAnonKey || ''
);

// Admin client for server-side operations (using service role key)
// This bypasses RLS, useful for mailing lists and admin tasks
export const supabaseRetoAdmin = createClient(
  supabaseUrl || '',
  supabaseServiceKey || ''
);
