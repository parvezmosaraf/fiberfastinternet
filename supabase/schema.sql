-- Fiber Fast Internet - Supabase Database Schema
-- Run this in the Supabase SQL Editor (https://supabase.com/dashboard)

-- 1. Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. New Connection Requests Table
CREATE TABLE IF NOT EXISTS connection_requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT,
    address TEXT NOT NULL,
    area TEXT NOT NULL DEFAULT 'Gazipur Joydebpur',
    package_name TEXT NOT NULL,
    speed TEXT NOT NULL,
    price TEXT NOT NULL,
    notes TEXT,
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'connected', 'cancelled')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for searching and filtering
CREATE INDEX IF NOT EXISTS idx_conn_requests_created_at ON connection_requests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_conn_requests_status ON connection_requests(status);
CREATE INDEX IF NOT EXISTS idx_conn_requests_phone ON connection_requests(phone);

-- 3. Support Tickets Table (Customer Complaints & Service Requests)
CREATE TABLE IF NOT EXISTS support_tickets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    customer_id TEXT,
    name TEXT NOT NULL,
    phone TEXT NOT NULL,
    issue_category TEXT NOT NULL CHECK (issue_category IN ('slow_internet', 'no_connection', 'fiber_cut', 'router_issue', 'billing', 'other')),
    address TEXT NOT NULL,
    description TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'open' CHECK (status IN ('open', 'in_progress', 'resolved')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_support_tickets_status ON support_tickets(status);
CREATE INDEX IF NOT EXISTS idx_support_tickets_phone ON support_tickets(phone);

-- 4. Bill Payment Submissions (bKash/Nagad/Rocket verification)
CREATE TABLE IF NOT EXISTS payments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    customer_id TEXT NOT NULL,
    customer_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    payment_method TEXT NOT NULL CHECK (payment_method IN ('bkash', 'nagad', 'rocket', 'bank', 'cash')),
    amount NUMERIC NOT NULL,
    transaction_id TEXT NOT NULL UNIQUE,
    package_name TEXT,
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'verified', 'rejected')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_payments_trx ON payments(transaction_id);
CREATE INDEX IF NOT EXISTS idx_payments_status ON payments(status);

-- 5. Contact Inquiries Table
CREATE TABLE IF NOT EXISTS contact_messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ==========================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==========================================================

-- Enable RLS on all tables
ALTER TABLE connection_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE support_tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow public anonymous users to insert new connection requests
CREATE POLICY "Allow public insert to connection_requests"
    ON connection_requests FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Allow public read of connection_requests (or restrict to service role if strictly internal)
CREATE POLICY "Allow select on connection_requests"
    ON connection_requests FOR SELECT
    TO anon, authenticated
    USING (true);

-- Allow updates (for admin review dashboard)
CREATE POLICY "Allow update on connection_requests"
    ON connection_requests FOR UPDATE
    TO anon, authenticated
    USING (true);

-- Allow public insert to support_tickets
CREATE POLICY "Allow public insert to support_tickets"
    ON support_tickets FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

CREATE POLICY "Allow select on support_tickets"
    ON support_tickets FOR SELECT
    TO anon, authenticated
    USING (true);

CREATE POLICY "Allow update on support_tickets"
    ON support_tickets FOR UPDATE
    TO anon, authenticated
    USING (true);

-- Allow public insert to payments
CREATE POLICY "Allow public insert to payments"
    ON payments FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

CREATE POLICY "Allow select on payments"
    ON payments FOR SELECT
    TO anon, authenticated
    USING (true);

CREATE POLICY "Allow update on payments"
    ON payments FOR UPDATE
    TO anon, authenticated
    USING (true);

-- Allow public insert to contact_messages
CREATE POLICY "Allow public insert to contact_messages"
    ON contact_messages FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

CREATE POLICY "Allow select on contact_messages"
    ON contact_messages FOR SELECT
    TO anon, authenticated
    USING (true);

