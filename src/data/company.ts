export interface Package {
  id: string;
  name: string;
  speed: string; // e.g. "25 MBPS"
  speedNum: number;
  price: number; // in BDT
  priceFormatted: string; // "500 Tk."
  tag?: string;
  isPopular?: boolean;
  colorScheme: 'red' | 'blue' | 'indigo' | 'purple';
  features: string[];
  bdixSpeed: string;
  youtubeSpeed: string;
  idealFor: string;
}

export const PACKAGES: Package[] = [
  {
    id: 'pkg-35',
    name: 'Starter Fiber',
    speed: '35 MBPS',
    speedNum: 35,
    price: 500,
    priceFormatted: '500 Tk.',
    tag: 'Budget Friendly',
    colorScheme: 'blue',
    features: [
      '35 Mbps Dedicated Pure Optical Fiber',
      'Free Internet Connection Charge (সংযোগ চার্জ ফ্রি)',
      '100 Mbps BDIX & Local Cache Speed',
      'Buffer-Free YouTube & Facebook Streaming',
      '24/7 Fast Customer Care & Technical Support',
      'Optical Fiber Low Latency & High Stability',
    ],
    bdixSpeed: '100 Mbps',
    youtubeSpeed: '100 Mbps',
    idealFor: 'Browsing, Social Media & HD Streaming',
  },
  {
    id: 'pkg-50',
    name: 'Basic Fiber',
    speed: '50 MBPS',
    speedNum: 50,
    price: 600,
    priceFormatted: '600 Tk.',
    tag: 'Home Standard',
    colorScheme: 'blue',
    features: [
      '50 Mbps High-Speed Fiber Internet',
      'Free Internet Connection Charge (সংযোগ চার্জ ফ্রি)',
      '100 Mbps BDIX Movie & Media Servers',
      'Smooth HD Streaming on Multiple Devices',
      'Low Latency Zoom & Video Conferencing',
      '24/7 Technical Support',
    ],
    bdixSpeed: '100 Mbps',
    youtubeSpeed: '100 Mbps',
    idealFor: 'Family Streaming, Zoom & Online Classes',
  },
  {
    id: 'pkg-60',
    name: 'Standard Fiber',
    speed: '60 MBPS',
    speedNum: 60,
    price: 700,
    priceFormatted: '700 Tk.',
    tag: 'Best Value',
    colorScheme: 'blue',
    features: [
      '60 Mbps Blazing Fast Pure Optical Fiber',
      'Free Internet Connection Charge (সংযোগ চার্জ ফ্রি)',
      '150 Mbps BDIX & Local Cache Access',
      'Full HD & 2K Streaming Across 4+ Devices',
      'Smooth Gaming Ping (<15ms Local)',
      'Reliable Power Backup & Optical Splicing',
    ],
    bdixSpeed: '150 Mbps',
    youtubeSpeed: '150 Mbps',
    idealFor: 'Multi-Device Streaming & Freelancers',
  },
  {
    id: 'pkg-70',
    name: 'Turbo Fiber',
    speed: '70 MBPS',
    speedNum: 70,
    price: 800,
    priceFormatted: '800 Tk.',
    isPopular: true,
    tag: 'Most Popular',
    colorScheme: 'blue',
    features: [
      '70 Mbps Pure Optical Fiber Dedicated Speed',
      'Free Internet Connection Charge (সংযোগ চার্জ ফ্রি)',
      '150 Mbps Supercharged BDIX & FTP Cache',
      '4K UHD Netflix, Prime Video & YouTube',
      'Ultra-Low Latency for Valorant, PUBG, CS2',
      'Priority Phone & On-Site Technician Support',
    ],
    bdixSpeed: '150 Mbps',
    youtubeSpeed: '150 Mbps',
    idealFor: 'Gamers, Remote Work & Multi-Device Homes',
  },
  {
    id: 'pkg-80',
    name: 'Pro Gamer Fiber',
    speed: '80 MBPS',
    speedNum: 80,
    price: 900,
    priceFormatted: '900 Tk.',
    tag: 'High Performance',
    colorScheme: 'indigo',
    features: [
      '80 Mbps High-Throughput Optical Bandwidth',
      'Free Internet Connection Charge (সংযোগ চার্জ ফ্রি)',
      '200 Mbps Blazing Fast BDIX Server Access',
      'Zero Packet Loss Dual-Ring Backbone',
      'High Bitrate Live Streaming & Fast Uploads',
      'Priority Technical Care',
    ],
    bdixSpeed: '200 Mbps',
    youtubeSpeed: '200 Mbps',
    idealFor: 'Ultra-Low Ping Gaming & Fast Downloads',
  },
  {
    id: 'pkg-100',
    name: 'Ultra Pro Fiber',
    speed: '100 MBPS',
    speedNum: 100,
    price: 1000,
    priceFormatted: '1000 Tk.',
    tag: 'Maximum Performance',
    colorScheme: 'purple',
    features: [
      '100 Mbps Enterprise-Grade High-Throughput Speed',
      'Free Internet Connection Charge (সংযোগ চার্জ ফ্রি)',
      '200 Mbps Blazing Fast BDIX & FTP Servers',
      'Simultaneous 4K UHD Streaming on 8+ Screens',
      'Dedicated Dual-Ring Redundancy & Zero Packet Loss',
      'VIP Quick Response Technical Hotline',
    ],
    bdixSpeed: '200 Mbps',
    youtubeSpeed: '200 Mbps',
    idealFor: 'Heavy Downloaders, Smart Homes & Studios',
  },
];

export const COMPANY_INFO = {
  name: 'Fiber Fast Internet',
  shortName: 'Fiber Fast',
  tagline: 'Gazipur’s Ultra-Reliable High-Speed Optical Fiber Internet',
  subTagline: 'সংযোগ চার্জ সম্পূর্ণ ফ্রি! Unlimited Speed, Zero Buffering, 24/7 Dedicated Support.',
  primaryPhone: '01314-088375',
  hotlines: ['01898 800 806', '01898 800 807', '01861 003 388'],
  email: 'abirict786@gmail.com',
  address: 'Gazipur Joydebpur Shimultole BOF',
  headOffice: 'Shimultali, Mostan Khan plaza, 3rd Floor, Gazipur, Bangladesh, 1703',
  supportHours: '24 Hours / 7 Days a Week',
  whatsappUrl: 'https://wa.me/8801314088375',
  areasCovered: [
    { name: 'গাজীপুর চৌরাস্তা', en: 'Gazipur Chourasta', status: 'Full Fiber Coverage' },
    { name: 'গাজীপুর পুলিশ লাইন', en: 'Gazipur Police Lines', status: 'Full Fiber Coverage' },
    { name: 'ধান গবেষণা', en: 'Dhan Gobeshona (BRRI)', status: 'Full Fiber Coverage' },
    { name: 'কৃষি গবেষণা', en: 'Krishi Gobeshona (BARI)', status: 'Full Fiber Coverage' },
    { name: 'লক্ষ্মীপুরা', en: 'Laxmipura', status: 'Full Fiber Coverage' },
    { name: 'বাস স্ট্যান্ড', en: 'Bus Stand', status: 'Full Fiber Coverage' },
    { name: 'মুন্সিপাড়া', en: 'Munsipara', status: 'Full Fiber Coverage' },
    { name: 'জয়দেবপুর বাজার', en: 'Joydebpur Bazar', status: 'Full Fiber Coverage' },
    { name: 'গনিমুন্সির ট্যাগ', en: 'Goni Munsir Tek', status: 'Full Fiber Coverage' },
    { name: 'নিয়ামত সড়ক', en: 'Niamat Sarak', status: 'Full Fiber Coverage' },
    { name: 'বিলাসপুর', en: 'Bilashpur', status: 'Full Fiber Coverage' },
    { name: 'সাহাপাড়া', en: 'Sahapara', status: 'Full Fiber Coverage' },
    { name: 'উত্তর ছায়াবীথি', en: 'Uttar Chayabithi', status: 'Full Fiber Coverage' },
    { name: 'দক্ষিন ছায়াবীথি', en: 'Dakshin Chayabithi', status: 'Full Fiber Coverage' },
    { name: 'রতখোলা', en: 'Rothkhola', status: 'Full Fiber Coverage' },
    { name: 'পৌর মার্কেট', en: 'Pouro Market', status: 'Full Fiber Coverage' },
    { name: 'মাঝিরখোলা', en: 'Majhirkhola', status: 'Full Fiber Coverage' },
    { name: 'ডুয়েট', en: 'DUET Gazipur', status: 'Full Fiber Coverage' },
    { name: 'বিএডিসি বাজার', en: 'BADC Bazar', status: 'Full Fiber Coverage' },
    { name: 'শিমুলতলী', en: 'Shimultoli', status: 'Full Fiber Coverage' },
    { name: 'সালনা বাজার', en: 'Salna Bazar', status: 'Full Fiber Coverage' },
    { name: 'পোড়াবাড়ি', en: 'Porabari', status: 'Full Fiber Coverage' },
    { name: 'মাস্টার বাড়ি', en: 'Master Bari', status: 'Full Fiber Coverage' },
    { name: 'বাংলা বাজার', en: 'Bangla Bazar', status: 'Full Fiber Coverage' },
    { name: 'বাঘের বাজার', en: 'Bagher Bazar', status: 'Full Fiber Coverage' },
  ],
};

export const BDIX_SERVERS = [
  { name: 'CircleFTP', category: 'Movies & Media', speed: 'Up to 100 Mbps', status: 'Active' },
  { name: 'Samonline FTP', category: 'TV, Movies, Games', speed: 'Up to 100 Mbps', status: 'Active' },
  { name: 'Discovery FTP', category: 'Software & 4K Media', speed: 'Up to 100 Mbps', status: 'Active' },
  { name: 'Roar Media & Torrent', category: 'Torrents & Files', speed: 'High Speed', status: 'Active' },
  { name: 'ICC BDIX Live TV', category: 'Live TV & Sports', speed: 'Buffer-Free', status: 'Active' },
  { name: 'Dhaka Movie Box', category: 'Entertainment', speed: 'Buffer-Free', status: 'Active' },
];

export const PAYMENT_METHODS = [
  {
    name: 'bKash Merchant / Personal',
    type: 'Mobile Banking',
    number: '01314-088375',
    instructions: 'Send Money or Payment to 01314-088375. Use your Customer ID / Phone as reference. Save the TrxID and submit in the portal.',
    color: 'from-pink-600 to-rose-700',
  },
  {
    name: 'Nagad',
    type: 'Mobile Banking',
    number: '01314-088375',
    instructions: 'Send Money to 01314-088375. Mention your Phone / Name in reference. Enter Transaction ID to verify.',
    color: 'from-orange-600 to-amber-700',
  },
  {
    name: 'Rocket',
    type: 'Mobile Banking',
    number: '01314-088375-8',
    instructions: 'Send Money to Rocket account. Use your mobile number as reference.',
    color: 'from-purple-600 to-indigo-700',
  },
  {
    name: 'Cash at Head Office',
    type: 'Office Payment',
    number: 'Shimultali, Mostan Khan plaza, 3rd Floor, Gazipur',
    instructions: 'Visit our Head Office anytime from 9:00 AM to 9:00 PM for instant cash receipt.',
    color: 'from-emerald-600 to-teal-700',
  },
];

