import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Fallback dummy client for when Supabase keys are not set up yet
export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  !supabaseUrl.includes('your-supabase-url') &&
  !supabaseAnonKey.includes('your-anon-key')
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Database Types
export interface ConnectionRequest {
  id?: string;
  name: string;
  phone: string;
  email?: string;
  address: string;
  area: string;
  package_name: string;
  speed: string;
  price: string;
  notes?: string;
  status?: 'pending' | 'contacted' | 'connected' | 'cancelled';
  created_at?: string;
}

export interface SupportTicket {
  id?: string;
  customer_id?: string;
  name: string;
  phone: string;
  issue_category: 'slow_internet' | 'no_connection' | 'fiber_cut' | 'router_issue' | 'billing' | 'other';
  address: string;
  description: string;
  status?: 'open' | 'in_progress' | 'resolved';
  created_at?: string;
}

export interface PaymentSubmission {
  id?: string;
  customer_id: string;
  customer_name: string;
  phone: string;
  payment_method: 'bkash' | 'nagad' | 'rocket' | 'bank' | 'cash';
  amount: number;
  transaction_id: string;
  package_name?: string;
  status?: 'pending' | 'verified' | 'rejected';
  created_at?: string;
}

export interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  created_at?: string;
}

