import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fiber Fast Internet - Gazipur High-Speed Optical Fiber',
  description: 'Fiber Fast Internet. Gazipur Joydebpur Shimultole BOF & Mostan Khan Plaza. Free Connection Charge, 25-60 Mbps high-speed optical fiber internet, buffer-free BDIX streaming and 24/7 dedicated support.',
  keywords: [
    'Fiber Fast Internet',
    'Shimultali Internet',
    'Mostan Khan Plaza Gazipur',
    'Joydebpur BOF Internet',
    'Broadband Gazipur',
    'High Speed Fiber Internet',
    'BDIX Gazipur',
  ],
  authors: [{ name: 'Fiber Fast Internet' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="antialiased bg-slate-50 text-slate-900 min-h-screen selection:bg-blue-600 selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
