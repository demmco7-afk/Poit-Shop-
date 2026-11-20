# POIT SHOP (Tahap 1-3 inti)
Tools: Next.js + Prisma + PostgreSQL (Neon gratis) agar jalan di Vercel.

## Cara menjalankan (pemula)
1. Install Node.js 20 LTS dari nodejs.org
2. Buka terminal di folder ini, lalu:
   npm install
   cp .env.example .env     (Windows: copy .env.example .env)
   -> edit .env: ganti AUTH_SECRET dan OWNER_PASSWORD
   npm run setup            (membuat database + akun Owner + kategori)
   npm run dev
3. Buka http://localhost:3000

## Sudah ada
Skema 22 tabel, register/login (password di-hash, cookie httpOnly, pembatas percobaan login), cek role di backend,
API produk, API Payment Methods (khusus OWNER/ADMIN, tercatat di audit log), halaman utama dari database.
## Belum ada (tahap berikutnya)
Keranjang/checkout, integrasi Pakasir (perlu baca dokumentasi resmi dulu), enkripsi apiConfig, upload bukti, POS, joki, panel admin, deployment.
Backup: pakai fitur backup/branch di Neon.

## Deploy ke Vercel
Lihat panduan di chat: buat database Neon, isi DATABASE_URL di .env, jalankan `npm run setup` sekali dari komputer, lalu import repo ke Vercel dan isi Environment Variables (DATABASE_URL, AUTH_SECRET).
