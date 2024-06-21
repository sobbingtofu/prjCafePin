import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
export const loginRedirectUrl = import.meta.env.VITE_LOGIN_REDIRECT_URL;

const supabase = createClient(supabaseUrl, supabaseKey);

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Supabase URL이나 KEY가 존재하지 않습니다.');
}

export default supabase;
