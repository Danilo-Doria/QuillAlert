import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ocizslvfikhdkcjpktbp.supabase.co';
const supabaseKey = 'sb_publishable_WKiJLWUvq9cSWyVxNaPrKg_7PMhp1CW';

export const supabase = createClient(supabaseUrl, supabaseKey);