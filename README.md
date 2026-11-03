# Fiber Fast Internet

Official website for **Fiber Fast Internet**, an Internet Service Provider (ISP) based in Gazipur, Bangladesh.

---

## 🚀 Company Overview & Details
- **Company Name:** Fiber Fast Internet
- **Head Office:** Shimultali, Mostan Khan plaza, 3rd Floor, Gazipur, Bangladesh, 1703
- **Local Office / Address:** Gazipur Joydebpur Shimultole BOF
- **Primary Phone / WhatsApp:** `01314-088375`
- **Hotlines:** `01898 800 806`, `01898 800 807`, `01861 003 388`
- **Email:** `abirict786@gmail.com`
- **Special Promotion:** **ইন্টারনেট সংযোগ চার্জ সম্পূর্ণ ফ্রি! (FREE Connection Charge)**

---

## 📦 Internet Packages
| Package Speed | Monthly Price | Installation Charge | BDIX Speed | YouTube / Facebook Cache |
| :--- | :--- | :--- | :--- | :--- |
| **35 MBPS** | **500 Tk.** | **FREE (৳০)** | 100 Mbps | 100 Mbps Buffer-free |
| **50 MBPS** | **600 Tk.** | **FREE (৳০)** | 100 Mbps | 100 Mbps Buffer-free |
| **60 MBPS** | **700 Tk.** | **FREE (৳০)** | 150 Mbps | 150 Mbps Buffer-free |
| **70 MBPS** (Popular) | **800 Tk.** | **FREE (৳০)** | 150 Mbps | 150 Mbps Buffer-free |
| **80 MBPS** | **900 Tk.** | **FREE (৳০)** | 200 Mbps | 200 Mbps Buffer-free |
| **100 MBPS** (Ultra) | **1000 Tk.** | **FREE (৳০)** | 200 Mbps | 200 Mbps Buffer-free |

---

## 🛠️ Tech Stack
- **Framework:** Next.js (App Router, React 19, TypeScript)
- **Styling:** Tailwind CSS v4 & Lucide Icons (WCAG 2.2 AA compliant tokens from `design.md` & `skill.md`)
- **Database:** Supabase (PostgreSQL with Row Level Security, tables for new connection requests, customer complaints, bill payments)
- **Admin Management:** Included at `/admin` route

---

## 🗄️ Supabase Setup Instructions

1. Create a free project at [supabase.com](https://supabase.com).
2. Go to your **SQL Editor** in the Supabase Dashboard.
3. Open [`supabase/schema.sql`](file:///Users/parvezalmuqtadir/Desktop/fiber-fast-internet/supabase/schema.sql) in this repository, copy all SQL statements, paste them into the SQL Editor, and click **Run**.
4. In Supabase **Project Settings > API**, copy:
   - **Project URL**
   - **anon / public key**
5. Add them to `.env.local`:
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-public-key
   ```
*(Note: If Supabase keys are not provided yet, the website features a graceful local fallback with instant feedback and sample data for the Admin view).*

---

## 💻 How to Run Locally

```bash
# Install dependencies (already completed)
npm install

# Start development server
npm run dev
```

Visit:
- Website: `http://localhost:3000`
- Admin Dashboard: `http://localhost:3000/admin`

