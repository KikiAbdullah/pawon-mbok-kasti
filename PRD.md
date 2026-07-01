Setelah saya cek menyeluruh, ditemukan **9 inkonsistensi dan kekurangan detail** yang perlu diperbaiki. Ini rinciannya:

---

## 🔍 Temuan Inkonsistensi & Kekurangan Detail

| No  | Lokasi                       | Masalah                                                                                                                                                             |
| --- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **4.12 Footer**              | Ada dua deklarasi "Quick Links" yang berbeda (4 link vs 6 link). Tidak sinkron.                                                                                     |
| 2   | **13. Risks & Mitigations**  | Format tabel rusak di baris pemisah, dua risiko baru (SEO multi-topik, edit JSON) tidak punya kolom "Probabilitas".                                                 |
| 3   | **12.2 Update Schedule**     | Ada dua tabel update schedule yang tumpang tindih (format lama vs format baru dengan kolom "Metode").                                                               |
| 4   | **TC-12 (10.3)**             | Masih bertuliskan "Redirect ke email", padahal sekarang form karir menggunakan **Formspree**, bukan `mailto:`.                                                      |
| 5   | **Daftar Isi**               | Belum mencantumkan sub-section baru: 1.1.1 Analisis Kompetitor, 6.4 Mekanisme Pembaruan Konten, 7.6 Keamanan Data, 15.3 Kebijakan Privasi, 15.4 Syarat & Ketentuan. |
| 6   | **15. Appendices**           | Privacy Policy & Terms belum ditambahkan sebagai 15.3 dan 15.4 (saat ini 15.3 malah Color Palette).                                                                 |
| 7   | **11.2 Struktur Repository** | Masih versi lama, belum memasukkan folder `data/` dan file `privacy.html`, `terms.html`.                                                                            |
| 8   | **15.1 Sitemap**             | Belum memasukkan halaman Privacy dan Terms.                                                                                                                         |
| 9   | **Versi Dokumen**            | Masih "Versi 3.0", seharusnya naik menjadi **3.1** setelah beberapa kali revisi.                                                                                    |

---

## ✅ PRD Final yang Sudah Diperbaiki (Konsisten & Detail)

Berikut dokumen yang sudah diperbaiki semua inkonsistensinya:

````markdown
# PRD - Website Pawon Mbok Kasti

**Product Requirements Document**  
**Versi:** 3.1  
**Tanggal:** 1 Juli 2026 (Revisi 2 Juli 2026)  
**Status:** Final

---

## Daftar Isi

1. [Ringkasan Proyek](#1-ringkasan-proyek)
   - 1.1 Latar Belakang
   - 1.1.1 Analisis Kompetitor Singkat
   - 1.2 Tujuan
   - 1.3 Ruang Lingkup
2. [Target Audiens](#2-target-audiens)
   - 2.1 Persona Detail
   - 2.2 User Journey Map
3. [Brand Identity & Color Palette](#3-brand-identity--color-palette)
   - 3.1 Identitas Visual
   - 3.2 Skema Warna Lengkap
   - 3.3 Penggunaan Warna
   - 3.4 Tipografi
   - 3.5 Spacing System
   - 3.6 Visual Style Guidelines
4. [Fitur & Fungsionalitas](#4-fitur--fungsionalitas)
   - 4.1 Struktur Halaman
   - 4.2 Navigasi & Header
   - 4.3 Hero Section
   - 4.4 Highlights
   - 4.5 Menu Preview
   - 4.6 Event
   - 4.7 Tentang Kami
   - 4.8 Galeri
   - 4.9 Karir
   - 4.10 Reservasi
   - 4.11 Kontak & Lokasi
   - 4.12 Footer
5. [Desain UI/UX](#5-desain-uiux)
   - 5.1 Wireframe Deskripsi
   - 5.2 Responsivitas Detail
   - 5.3 Accessibility
   - 5.4 Micro-interactions
6. [Konten Strategi](#6-konten-strategi)
   - 6.1 Copywriting
   - 6.2 SEO
   - 6.3 Gambar & Asset
   - 6.4 Mekanisme Pembaruan Konten
7. [Teknologi & Arsitektur](#7-teknologi--arsitektur-frontend-only)
   - 7.1 Stack
   - 7.2 Struktur File
   - 7.3 Dependencies
   - 7.4 Browser Support
   - 7.5 Performance Optimization
   - 7.6 Keamanan Data
8. [Performance Metrics](#8-performance-metrics)
9. [Development Phases](#9-development-phases)
10. [Testing & QA](#10-testing--qa)
    - 10.1 Browser Testing Matrix
    - 10.2 Device Testing
    - 10.3 Functional Test Cases
    - 10.4 Performance Testing
11. [Deployment](#11-deployment)
    - 11.1 GitHub Pages Setup
    - 11.2 Struktur Repository
    - 11.3 Deployment Checklist
    - 11.4 Post-Deployment Verification
12. [Maintenance & Iterasi](#12-maintenance--iterasi)
    - 12.1 Regular Maintenance
    - 12.2 Update Schedule
    - 12.3 Iterasi Roadmap
13. [Risks & Mitigations](#13-risks--mitigations)
14. [Success Metrics](#14-success-metrics)
    - 14.1 Quantitative Metrics
    - 14.2 Qualitative Metrics
15. [Appendices](#15-appendices)
    - 15.1 Sitemap
    - 15.2 User Flow
    - 15.3 Halaman Kebijakan Privasi (privacy.html)
    - 15.4 Halaman Syarat & Ketentuan (terms.html)
    - 15.5 Color Palette Reference
16. [Approval](#16-approval)

---

## 1. Ringkasan Proyek

### 1.1 Latar Belakang

Pawon Mbok Kasti adalah restoran dan kafe yang mengusung konsep **Prasmanan Jawa modern** dengan suasana **Joglo vintage**. Berlokasi di Pandaan, Pasuruan, tempat ini telah beroperasi dan memiliki basis pelanggan yang signifikan di media sosial:

| Platform  | Username        | Pengikut | Konten                     |
| --------- | --------------- | -------- | -------------------------- |
| Instagram | @pawonmbokkasti | 96.800+  | 62 postingan (foto & reel) |
| TikTok    | @pawonmbokkasti | 1.915    | 100+ video                 |

**Kebutuhan Website:**

- Meningkatkan kredibilitas dan profesionalisme bisnis.
- Menyediakan satu sumber informasi terpusat.
- Memudahkan pelanggan melakukan reservasi dan mengakses informasi.
- Mendukung rekrutmen karyawan.
- Meningkatkan visibilitas di mesin pencari.

### 1.1.1 Analisis Kompetitor Singkat

| Kompetitor           | Fitur Unggulan            | Kelemahan                              | Peluang Pawon Mbok Kasti                               |
| -------------------- | ------------------------- | -------------------------------------- | ------------------------------------------------------ |
| Warung Joglo Pandaan | Menu online, reservasi WA | Desain kaku, tidak ada info live music | Desain lebih _instagramable_, halaman event interaktif |
| Cafe Sawah Pasuruan  | Halaman karir lengkap     | Navigasi membingungkan, load lambat    | Navigasi SPA mulus, performa tinggi                    |
| Rumah Makan Bu Tini  | Google Maps, foto banyak  | Tidak ada sistem reservasi langsung    | Form reservasi + WhatsApp otomatis                     |
| Kedai Kopi Pandaan   | Integrasi sosial media    | Tidak ada lowongan kerja               | Satu web untuk kuliner, event, dan karir               |

### 1.2 Tujuan

| Tujuan                     | Deskripsi                                     | Metrik Keberhasilan                     |
| -------------------------- | --------------------------------------------- | --------------------------------------- |
| **Brand Authority**        | Membangun kepercayaan melalui web profesional | Traffic 5.000+ pengunjung/bulan         |
| **Informasi Terpusat**     | Satu sumber informasi lengkap                 | Bounce rate < 40%                       |
| **Konversi**               | Memudahkan reservasi & lamaran                | 50+ reservasi/bulan, 20+ lamaran/bulan  |
| **Integrasi Media Sosial** | Menyatukan konten IG & TikTok                 | Engagement dari website ke sosial media |
| **SEO & Visibilitas**      | Meningkatkan visibilitas online               | Ranking di 3 besar keyword lokal        |

### 1.3 Ruang Lingkup

**In Scope:**

- Halaman profil bisnis (Tentang Kami)
- Menu interaktif dengan filter kategori
- Galeri foto & video
- Sistem reservasi dengan integrasi WhatsApp
- Halaman karir dengan form lamaran
- Integrasi media sosial (Instagram, TikTok)
- Responsive design (desktop, tablet, mobile)
- SEO on-page
- Analytics tracking
- Halaman Kebijakan Privasi (`privacy.html`)
- Halaman Syarat & Ketentuan (`terms.html`)
- Google Analytics 4 untuk tracking
- Formspree untuk backend form lamaran (menggantikan `mailto:`)
- Data konten terpisah (menu, event, lowongan) dalam file JSON agar mudah diperbarui

**Out of Scope:**

- Sistem pemesanan online dengan pembayaran
- Aplikasi mobile native
- Sistem loyalty program
- Backend database (data disimpan via email/WhatsApp)
- Sistem login/pendaftaran pengguna
- E-commerce atau penjualan online

---

## 2. Target Audiens

### 2.1 Persona Detail

#### Persona 1: Keluarga Santai

| Atribut         | Detail                                                             |
| --------------- | ------------------------------------------------------------------ |
| **Nama**        | Budi & Siti                                                        |
| **Usia**        | 35-50 tahun                                                        |
| **Pekerjaan**   | Karyawan & Ibu Rumah Tangga                                        |
| **Lokasi**      | Pandaan & sekitarnya                                               |
| **Kebutuhan**   | Makan bersama keluarga, suasana nyaman, menu halal                 |
| **Pain Points** | Sulit cari tempat makan yang nyaman untuk anak-anak, menu terbatas |
| **Device**      | Smartphone (60%), Laptop (40%)                                     |
| **Waktu Akses** | Malam hari & akhir pekan                                           |

#### Persona 2: Anak Muda Nongkrong

| Atribut         | Detail                                                       |
| --------------- | ------------------------------------------------------------ |
| **Nama**        | Rina                                                         |
| **Usia**        | 22-28 tahun                                                  |
| **Pekerjaan**   | Content Creator / Mahasiswa                                  |
| **Lokasi**      | Pasuruan, Surabaya                                           |
| **Kebutuhan**   | Spot instagramable, live music, kopi enak, harga terjangkau  |
| **Pain Points** | Bosan dengan cafe mainstream, mencari spot baru untuk konten |
| **Device**      | Smartphone (95%)                                             |
| **Waktu Akses** | Malam minggu, sore hari                                      |

#### Persona 3: Pekerja Remote (WFC)

| Atribut         | Detail                                                    |
| --------------- | --------------------------------------------------------- |
| **Nama**        | Andi                                                      |
| **Usia**        | 25-35 tahun                                               |
| **Pekerjaan**   | Freelancer / Digital Nomad                                |
| **Lokasi**      | Pandaan (sementara)                                       |
| **Kebutuhan**   | WiFi cepat, colokan listrik, suasana tenang, makanan enak |
| **Pain Points** | Susah cari tempat WFC yang nyaman dengan WiFi stabil      |
| **Device**      | Laptop (100%)                                             |
| **Waktu Akses** | Hari kerja (siang-sore)                                   |

#### Persona 4: Event Organizer

| Atribut         | Detail                                                |
| --------------- | ----------------------------------------------------- |
| **Nama**        | Dian                                                  |
| **Usia**        | 30-45 tahun                                           |
| **Pekerjaan**   | Event Organizer                                       |
| **Lokasi**      | Pasuruan                                              |
| **Kebutuhan**   | Venue untuk acara keluarga, gathering, pernikahan     |
| **Pain Points** | Sulit cari venue dengan nuansa Jawa, kapasitas sesuai |
| **Device**      | Laptop (80%), Smartphone (20%)                        |
| **Waktu Akses** | Hari kerja (jam kantor)                               |

#### Persona 5: Pencari Kerja

| Atribut         | Detail                                              |
| --------------- | --------------------------------------------------- |
| **Nama**        | Fajar                                               |
| **Usia**        | 20-25 tahun                                         |
| **Pekerjaan**   | Fresh Graduate                                      |
| **Lokasi**      | Pandaan                                             |
| **Kebutuhan**   | Informasi lowongan kerja, kemudahan melamar         |
| **Pain Points** | Tidak tahu tempat mencari kerja di bidang F&B lokal |
| **Device**      | Smartphone (100%)                                   |
| **Waktu Akses** | Kapan saja                                          |

### 2.2 User Journey Map

| Tahap          | Aksi                       | Touchpoint      | Emosi            |
| -------------- | -------------------------- | --------------- | ---------------- |
| **Sadar**      | Lihat postingan IG/TikTok  | Media sosial    | Penasaran        |
| **Cari Tahu**  | Buka website               | Halaman Beranda | Ingin tahu lebih |
| **Eksplorasi** | Lihat menu, galeri, lokasi | Menu & Galeri   | Tertarik         |
| **Keputusan**  | Reservasi                  | Form Reservasi  | Yakin            |
| **Kunjungan**  | Datang ke lokasi           | Google Maps     | Antusias         |
| **Pasca**      | Review di sosial media     | IG/TikTok       | Puas             |

---

## 3. Brand Identity & Color Palette

### 3.1 Identitas Visual (Berdasarkan Logo)

Logo **Pawon Mbok Kasti** menggunakan gaya tipografi elegan dengan sentuhan klasik, mencerminkan nuansa Jawa tradisional yang hangat. Logo terdiri dari dua baris:

- **Baris 1:** "Pawon" (dengan font lebih besar/tebal)
- **Baris 2:** "Mbok Kasti" (dengan font yang lebih elegan/italic)

| Elemen         | Spesifikasi             |
| -------------- | ----------------------- |
| **Warna Logo** | Cokelat Tua (#3D2314)   |
| **Style**      | Klasik, elegan, Jawa    |
| **Penggunaan** | Header, footer, favicon |

### 3.2 Skema Warna Lengkap

```css
:root {
  /* ===== Warna Primer (Brand) ===== */
  --color-primary: #3d2314;
  --color-primary-light: #5c3d2e;
  --color-primary-lighter: #8b6b4a;

  /* ===== Warna Sekunder ===== */
  --color-gold: #c89d4a;
  --color-gold-light: #e8d5a3;
  --color-gold-dark: #a87d3a;
  --color-gold-pale: #f5edd6;

  /* ===== Warna Netral ===== */
  --color-cream: #fdf8f0;
  --color-cream-dark: #f0e8d8;
  --color-cream-warm: #faf1e6;
  --color-white: #ffffff;
  --color-dark: #1a110a;
  --color-text: #2c1e14;
  --color-text-light: #6b5a4a;
  --color-text-muted: #9a8a7a;

  /* ===== Warna Aksen ===== */
  --color-green: #4a7c59;
  --color-green-light: #6a9c79;
  --color-green-pale: #e8f0e8;

  /* ===== Warna Status ===== */
  --color-success: #4a7c59;
  --color-warning: #d4a843;
  --color-error: #c0392b;

  /* ===== Shadow & Efek ===== */
  --shadow-sm: 0 2px 8px rgba(61, 35, 20, 0.08);
  --shadow: 0 4px 30px rgba(61, 35, 20, 0.12);
  --shadow-hover: 0 12px 40px rgba(61, 35, 20, 0.2);
  --shadow-lg: 0 20px 60px rgba(61, 35, 20, 0.15);

  /* ===== Border Radius ===== */
  --radius-xs: 4px;
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-xl: 32px;
  --radius-full: 9999px;

  /* ===== Transition ===== */
  --transition-fast: 0.15s ease;
  --transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-slow: 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  /* ===== Spacing ===== */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;
  --space-4xl: 80px;

  /* ===== Typography ===== */
  --font-serif: "Playfair Display", Georgia, serif;
  --font-sans: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;

  /* ===== Layout ===== */
  --max-width: 1200px;
  --header-height: 76px;
  --content-width: 1140px;
}
```
````

### 3.3 Penggunaan Warna

| Elemen         | Warna                | Penggunaan                           |
| -------------- | -------------------- | ------------------------------------ |
| **Primer**     | `--color-primary`    | Logo, heading utama, tombol utama    |
| **Sekunder**   | `--color-gold`       | Aksen, tombol CTA, highlight, border |
| **Background** | `--color-cream`      | Background utama halaman             |
| **Teks**       | `--color-text`       | Paragraf, deskripsi                  |
| **Teks Muda**  | `--color-text-light` | Subtitle, informasi tambahan         |
| **Aksen**      | `--color-green`      | Ikon, badge, dekorasi                |
| **Card**       | `--color-white`      | Card, form, komponen                 |
| **Hover**      | `--color-gold-light` | Hover state button                   |

### 3.4 Tipografi

#### Font System

| Elemen         | Font             | Weight | Size                         | Line Height | Penggunaan      |
| -------------- | ---------------- | ------ | ---------------------------- | ----------- | --------------- |
| **H1**         | Playfair Display | 700    | clamp(2.5rem, 5vw, 4.5rem)   | 1.1         | Hero title      |
| **H2**         | Playfair Display | 700    | clamp(2rem, 3.5vw, 3rem)     | 1.2         | Section title   |
| **H3**         | Playfair Display | 600    | clamp(1.3rem, 2vw, 1.8rem)   | 1.3         | Card title      |
| **H4**         | Playfair Display | 600    | 1.2rem                       | 1.4         | Subtitle        |
| **Body**       | Inter            | 400    | 1rem                         | 1.6         | Paragraf        |
| **Body Small** | Inter            | 400    | 0.875rem                     | 1.5         | Deskripsi kecil |
| **Label**      | Inter            | 600    | 0.875rem                     | 1.4         | Label form      |
| **Button**     | Inter            | 600    | 0.95rem                      | 1.2         | Tombol          |
| **Tagline**    | Playfair Display | 400    | clamp(1.2rem, 2vw, 1.8rem)   | 1.6         | Tagline hero    |
| **Quote**      | Playfair Display | 400    | clamp(1.1rem, 1.5vw, 1.4rem) | 1.7         | Testimoni       |

### 3.5 Spacing System

| Scale | Value         | Penggunaan                        |
| ----- | ------------- | --------------------------------- |
| 4px   | `--space-xs`  | Ikon, badge                       |
| 8px   | `--space-sm`  | Spacing kecil                     |
| 16px  | `--space-md`  | Padding card, gap                 |
| 24px  | `--space-lg`  | Section padding, gap antar elemen |
| 32px  | `--space-xl`  | Padding section                   |
| 48px  | `--space-2xl` | Spacing antar section             |
| 64px  | `--space-3xl` | Spacing antar section besar       |
| 80px  | `--space-4xl` | Spacing hero section              |

### 3.6 Visual Style Guidelines

| Aspek           | Spesifikasi                                     |
| --------------- | ----------------------------------------------- |
| **Style**       | Joglo vintage, hangat, instagramable            |
| **Texture**     | Pola kayu, tekstur tenun, elemen Jawa           |
| **Image Style** | Warm filter, lighting alami, depth of field     |
| **Icons**       | Minimalis, garis tipis, warna gold atau cokelat |
| **Gradien**     | Cokelat ke gold (warm gradient)                 |
| **Shapes**      | Soft rounded corners, natural curves            |
| **Decorations** | Ornamen Jawa minimalis, batik pattern subtle    |

---

## 4. Fitur & Fungsionalitas

### 4.1 Struktur Halaman (Single Page Application)

| Section          | ID            | Deskripsi                            |
| ---------------- | ------------- | ------------------------------------ |
| **Header/Nav**   | `#header`     | Logo, navigasi utama, CTA Reservasi  |
| **Hero**         | `#beranda`    | Slide show, tagline, CTA utama       |
| **Highlights**   | `#highlights` | 4 ikon layanan unggulan              |
| **Menu Preview** | `#menu`       | 8+ menu dengan filter kategori       |
| **Event**        | `#event`      | The Classic Vibes, jadwal live music |
| **Tentang Kami** | `#tentang`    | Sejarah, konsep, visi-misi           |
| **Galeri**       | `#galeri`     | Foto interior, makanan, suasana      |
| **Karir**        | `#karir`      | Lowongan aktif, form lamaran         |
| **Reservasi**    | `#reservasi`  | Form reservasi + WhatsApp            |
| **Kontak**       | `#kontak`     | Alamat, Google Maps, kontak          |
| **Footer**       | `#footer`     | Logo, quick links, sosial media      |

### 4.2 Navigasi & Header

#### Spesifikasi Teknis

| Item           | Detail                                    |
| -------------- | ----------------------------------------- |
| **Position**   | Fixed top                                 |
| **Height**     | 76px                                      |
| **Background** | `rgba(255,255,255,0.92)` dengan blur 16px |
| **Z-index**    | 1000                                      |
| **Border**     | Bottom 1px `rgba(44,30,22,0.08)`          |

#### Elemen Header

| Elemen           | Posisi              | Deskripsi                                                                          |
| ---------------- | ------------------- | ---------------------------------------------------------------------------------- |
| **Logo**         | Kiri                | Nama brand "Pawon Mbok Kasti" dalam font Playfair Display, warna `--color-primary` |
| **Menu Desktop** | Tengah              | Link: Beranda, Menu, Event, Tentang, Galeri, Karir, Kontak                         |
| **Status**       | Kanan (sebelah CTA) | Indikator "Buka" (hijau) / "Tutup" (merah) real-time                               |
| **CTA**          | Kanan               | Tombol "Reservasi" dengan warna `--color-gold`                                     |
| **Hamburger**    | Kanan (mobile)      | Tombol hamburger dengan animasi                                                    |

#### Menu Item

| Link    | Scroll Target | Active State                  |
| ------- | ------------- | ----------------------------- |
| Beranda | `#beranda`    | Bold, warna `--color-primary` |
| Menu    | `#menu`       | Bold, warna `--color-primary` |
| Event   | `#event`      | Bold, warna `--color-primary` |
| Tentang | `#tentang`    | Bold, warna `--color-primary` |
| Galeri  | `#galeri`     | Bold, warna `--color-primary` |
| Karir   | `#karir`      | Bold, warna `--color-primary` |
| Kontak  | `#kontak`     | Bold, warna `--color-primary` |

#### Status Operasional (Real-time)

| Hari                          | Status | Warna             |
| ----------------------------- | ------ | ----------------- |
| Selasa - Minggu (08.00-23.00) | Buka   | Hijau (`#4A7C59`) |
| Senin                         | Tutup  | Merah (`#C0392B`) |
| Di luar jam (Selasa-Minggu)   | Tutup  | Merah (`#C0392B`) |

### 4.3 Hero Section

#### Spesifikasi

| Item               | Detail                           |
| ------------------ | -------------------------------- |
| **Height**         | 100vh (min 600px)                |
| **Background**     | Slideshow dengan overlay gradien |
| **Slide Duration** | 5 detik per slide                |
| **Transition**     | Fade (1 detik)                   |

#### Slide Content

| Slide | Gambar            | Teks                                                    | CTA            |
| ----- | ----------------- | ------------------------------------------------------- | -------------- |
| 1     | Interior Joglo    | "Pawon Mbok Kasti" + tagline utama                      | "Reservasi"    |
| 2     | Makanan Prasmanan | "Prasmanan Jawa" + "Rasakan kehangatan masakan rumahan" | "Lihat Menu"   |
| 3     | Live Music        | "The Classic Vibes" + "Live music setiap Sabtu"         | "Detail Event" |

#### Hero Overlay

| Elemen         | Detail                                                            |
| -------------- | ----------------------------------------------------------------- |
| **Background** | Linear gradient dari `rgba(61,35,20,0.5)` ke `rgba(61,35,20,0.2)` |
| **Content**    | Center aligned                                                    |
| **Tagline**    | Font Playfair Display italic, warna `--color-gold`                |
| **Title**      | Font Playfair Display 700, warna putih                            |
| **Subtitle**   | Font Inter 400, warna `rgba(255,255,255,0.9)`                     |
| **CTA**        | 2 tombol: "Reservasi" (gold) dan "Lihat Menu" (outline putih)     |

### 4.4 Highlights (Layanan Unggulan)

#### Layout

| Item           | Detail                              |
| -------------- | ----------------------------------- |
| **Grid**       | 4 kolom desktop, 2 tablet, 1 mobile |
| **Background** | `--color-cream-warm`                |
| **Padding**    | `--space-3xl` top & bottom          |

#### Highlight Items

| Icon | Judul              | Deskripsi                                   |
| ---- | ------------------ | ------------------------------------------- |
| 🍛   | Prasmanan Jawa     | Menu rumahan khas Jawa berganti setiap hari |
| 🎵   | Live Music         | Hiburan musik setiap akhir pekan            |
| 💻   | Work From Cafe     | WiFi cepat & colokan di setiap meja         |
| 📸   | Instagramable Spot | Setiap sudut estetik dan fotogenik          |

### 4.5 Menu Preview

#### Spesifikasi

| Item           | Detail                                                |
| -------------- | ----------------------------------------------------- |
| **Layout**     | Grid 3 kolom desktop, 2 tablet, 1 mobile              |
| **Menu Items** | 8 menu dengan data statis                             |
| **Filter**     | Kategori: Semua, Prasmanan, Makanan, Minuman, Camilan |

#### Menu Data

| Nama         | Kategori  | Harga     | Deskripsi                           | Badge       |
| ------------ | --------- | --------- | ----------------------------------- | ----------- |
| Mix Platter  | Camilan   | Rp 45.000 | Camilan kekinian untuk nongkrong    | Rekomendasi |
| Kiwi Yakult  | Minuman   | Rp 18.000 | Segar, manis, dan menyegarkan       | -           |
| Bubur Madura | Prasmanan | Rp 25.000 | Hangat dengan topping khas Madura   | Favorit     |
| Ayam Bakar   | Makanan   | Rp 35.000 | Ayam bakar dengan bumbu khas        | Rekomendasi |
| Rawon        | Prasmanan | Rp 30.000 | Sup daging hitam khas Jawa Timur    | -           |
| Es Wedang    | Minuman   | Rp 15.000 | Minuman tradisional segar           | -           |
| Nasi Pecel   | Prasmanan | Rp 22.000 | Nasi dengan sayuran dan sambal khas | -           |
| Kopi Susu    | Minuman   | Rp 20.000 | Kopi dengan susu kekinian           | Rekomendasi |

#### Menu Card Design

```
┌─────────────────────┐
│     [Gambar]        │
│                     │
│  Nama Menu          │
│  Deskripsi singkat  │
│  ⭐ Rekomendasi     │
│  Rp XX.XXX          │
└─────────────────────┘
```

### 4.6 Event

#### Section: The Classic Vibes

| Item           | Detail                                              |
| -------------- | --------------------------------------------------- |
| **Event Name** | The Classic Vibes                                   |
| **Jadwal**     | Setiap Sabtu mulai Juli 2026                        |
| **Waktu**      | Mulai 19.00                                         |
| **Genre**      | Musik populer 80-an, 90-an, 2000-an                 |
| **Tagline**    | "Mari Makan, Ngopi, Berdansa, Bernyanyi bersama..." |

#### Elemen Event Section

| Elemen        | Deskripsi                                         |
| ------------- | ------------------------------------------------- |
| **Hero**      | Background event dengan overlay                   |
| **Judul**     | "The Classic Vibes" dengan font serif, warna emas |
| **Deskripsi** | Penjelasan event lengkap                          |
| **Jadwal**    | List jadwal Sabtu                                 |
| **CTA**       | "Reservasi untuk Event"                           |

### 4.7 Tentang Kami

#### Konten

| Section      | Konten                                                                                                                                             |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Sejarah**  | Pawon Mbok Kasti lahir dari kecintaan akan masakan rumahan Jawa dan keramahan khas desa. "Pawon" berarti dapur, sebagai pusat kehangatan keluarga. |
| **Konsep**   | Menggabungkan prasmanan Jawa dengan suasana Joglo vintage yang instagramable.                                                                      |
| **Visi**     | Menjadi destinasi kuliner keluarga favorit di Pandaan dan sekitarnya.                                                                              |
| **Misi**     | 1. Menyajikan masakan rumahan berkualitas 2. Menghadirkan suasana nyaman 3. Melestarikan budaya Jawa melalui kuliner                               |
| **Filosofi** | "Pawon" sebagai jantung rumah—tempat berkumpul, bercerita, dan menciptakan kenangan.                                                               |

### 4.8 Galeri

#### Spesifikasi

| Item         | Detail                                           |
| ------------ | ------------------------------------------------ |
| **Layout**   | Masonry grid (3-4 kolom)                         |
| **Filter**   | Semua, Interior, Makanan, Suasana                |
| **Lightbox** | Klik gambar → tampil full screen dengan navigasi |
| **Video**    | Placeholder untuk embed IG/TikTok                |

#### Galeri Item (12+ foto)

| Kategori | Jumlah | Contoh                                     |
| -------- | ------ | ------------------------------------------ |
| Interior | 4      | Joglo, ruang privat, area outdoor          |
| Makanan  | 5      | Prasmanan, Ayam Bakar, Bubur Madura        |
| Suasana  | 4      | Live music, malam di pawon, keluarga makan |

### 4.9 Karir

#### Lowongan Aktif

| Posisi              | Kualifikasi                   | Status |
| ------------------- | ----------------------------- | ------ |
| **Barista**         | Berpengalaman, passion kopi   | Dibuka |
| **Supervisor**      | Min. 2 tahun di restoran/cafe | Dibuka |
| **Admin**           | Menguasai Microsoft Office    | Dibuka |
| **Waiter/Waitress** | Fresh graduate dipersilakan   | Dibuka |
| **Dishwasher**      | -                             | Dibuka |

#### Form Lamaran

| Field              | Type     | Required | Deskripsi                    |
| ------------------ | -------- | -------- | ---------------------------- |
| Nama Lengkap       | Text     | ✅       | -                            |
| Email              | Email    | ✅       | -                            |
| Nomor Telepon      | Tel      | ✅       | -                            |
| Posisi             | Select   | ✅       | Dropdown dari lowongan aktif |
| Link CV/Portofolio | URL      | ❌       | Google Drive, LinkedIn, dsb. |
| Pesan              | Textarea | ❌       | Ceritakan tentang diri Anda  |

> **Catatan:** Upload file CV dihapus karena keterbatasan teknis. Pelamar diminta menyertakan link CV atau mengirim file langsung ke email setelah submit.

#### Submit Action

- Data dikirim melalui **Formspree** (`https://formspree.io/f/x...`) yang meneruskan ke `pawonmbokkasti@gmail.com`.
- Validasi tetap di sisi klien, notifikasi sukses/error tanpa reload.

### 4.10 Reservasi

#### Form Reservasi

| Field          | Type     | Required | Validasi          |
| -------------- | -------- | -------- | ----------------- |
| Nama Lengkap   | Text     | ✅       | Min. 3 karakter   |
| Nomor Telepon  | Tel      | ✅       | Min. 10 digit     |
| Tanggal        | Date     | ✅       | Tidak boleh Senin |
| Jam            | Time     | ✅       | 08.00 - 23.00     |
| Jumlah Orang   | Number   | ✅       | Min. 1, Max. 20   |
| Catatan Khusus | Textarea | ❌       | -                 |

#### WhatsApp Integration

- Gunakan tautan universal `https://wa.me/6282342707766?text=...`
- **Mobile:** Membuka aplikasi WhatsApp.
- **Desktop:** Membuka WhatsApp Web/Desktop.
- Tidak diperlukan fallback salin manual; namun nomor tetap ditampilkan di bawah tombol jika pengguna memilih menyalinnya.

#### Validation Rules

| Field   | Rule                   | Error Message                                |
| ------- | ---------------------- | -------------------------------------------- |
| Nama    | Required, min 3        | "Nama harus diisi minimal 3 karakter"        |
| Telepon | Required, min 10 digit | "Nomor telepon harus diisi minimal 10 digit" |
| Tanggal | Required, not Monday   | "Mohon pilih tanggal (Selasa-Minggu)"        |
| Jam     | Required               | "Jam harus diisi"                            |
| Jumlah  | Required, min 1        | "Jumlah orang minimal 1"                     |

### 4.11 Kontak & Lokasi

#### Informasi Kontak

| Item          | Detail                                                                      |
| ------------- | --------------------------------------------------------------------------- |
| **Alamat**    | Jl. Mangga 1, Klangkung, Nogosari, Kec. Pandaan, Pasuruan, Jawa Timur 67156 |
| **WhatsApp**  | 082342707766                                                                |
| **Email**     | pawonmbokkasti@gmail.com                                                    |
| **Instagram** | @pawonmbokkasti                                                             |
| **TikTok**    | @pawonmbokkasti                                                             |

#### Jam Operasional

| Hari            | Jam           |
| --------------- | ------------- |
| Selasa - Minggu | 08.00 - 23.00 |
| Senin           | Tutup         |

#### Google Maps

| Item          | Detail                                                    |
| ------------- | --------------------------------------------------------- |
| **Embed URL** | `https://maps.google.com/maps?q=Pawon+Mbok+Kasti+Pandaan` |
| **Height**    | 400px (desktop), 300px (mobile)                           |
| **Zoom**      | 15                                                        |

### 4.12 Footer

#### Layout

```
┌──────────────────────────────────────────────────────────┐
│  Logo        │  Quick Links  │  Social Media  │         │
│  Deskripsi   │  • Menu       │  📱 Instagram  │         │
│              │  • Event      │  🎵 TikTok     │         │
│              │  • Karir      │  💬 WhatsApp   │         │
│              │  • Kontak     │               │         │
│              │  • Kebijakan  │               │         │
│              │    Privasi    │               │         │
│              │  • Syarat &   │               │         │
│              │    Ketentuan  │               │         │
│                                                          │
│  © 2026 Pawon Mbok Kasti. All rights reserved.          │
└──────────────────────────────────────────────────────────┘
```

#### Elemen

| Elemen           | Detail                                                            |
| ---------------- | ----------------------------------------------------------------- |
| **Logo**         | "Pawon Mbok Kasti" dengan font Playfair Display                   |
| **Deskripsi**    | "Prasmanan Jawa & Cafe di Pandaan, Pasuruan"                      |
| **Quick Links**  | Menu, Event, Karir, Kontak, Kebijakan Privasi, Syarat & Ketentuan |
| **Social Icons** | Instagram, TikTok, WhatsApp (dengan link)                         |
| **Copyright**    | "© 2026 Pawon Mbok Kasti. All rights reserved."                   |

---

## 5. Desain UI/UX

### 5.1 Wireframe Deskripsi

#### Beranda

```
┌──────────────────────────────────────────────────────────┐
│ [Header]  Logo  [Menu]  [Status]  [Reservasi]           │
├──────────────────────────────────────────────────────────┤
│ ┌──────────────────────────────────────────────────────┐ │
│ │              HERO SECTION (100vh)                   │ │
│ │                                                    │ │
│ │   "Mau makan? Bisa. Ngopi saja? Bisa.              │ │
│ │    Atau makan, ngopi ditemani live music?          │ │
│ │                     Bisa banget!"                   │ │
│ │                                                    │ │
│ │   [Reservasi]  [Lihat Menu]                        │ │
│ │                                                    │ │
│ │   ● ● ●                                           │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌───┐ ┌───┐ ┌───┐ ┌───┐                                 │
│ │ 🍛 │ │ 🎵 │ │ 💻 │ │ 📸 │                                 │
│ └───┘ └───┘ └───┘ └───┘                                 │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │ [Menu Preview Section]                              │ │
│ │  [Filter: Semua Prasmanan Makanan Minuman Camilan]  │ │
│ │                                                    │ │
│ │  ┌───┐ ┌───┐ ┌───┐                                 │ │
│ │  │   │ │   │ │   │                                 │ │
│ │  └───┘ └───┘ └───┘                                 │ │
│ │  ┌───┐ ┌───┐ ┌───┐                                 │ │
│ │  │   │ │   │ │   │                                 │ │
│ │  └───┘ └───┘ └───┘                                 │ │
│ │                                                    │ │
│ │  [Lihat Menu Lengkap]                              │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │ [Event Banner]                                      │ │
│ │  THE CLASSIC VIBES                                  │ │
│ │  Live Music setiap Sabtu mulai Juli 2026            │ │
│ │  [Detail Event]                                     │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │ [Tentang Kami Preview]                              │ │
│ │  Sejarah singkat, konsep                           │ │
│ │  [Selengkapnya]                                     │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │ [Galeri Preview]                                    │ │
│ │  4 foto thumbnail + [Lihat Galeri]                  │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │ [Karir Preview]                                     │ │
│ │  Lowongan aktif + [Lihat Karir]                     │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │ [Reservasi Section]                                 │ │
│ │  Form reservasi + CTA WhatsApp                      │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ ┌──────────────────────────────────────────────────────┐ │
│ │ [Kontak & Lokasi]                                   │ │
│ │  Alamat, Map, kontak                                │ │
│ └──────────────────────────────────────────────────────┘ │
│                                                          │
│ [Footer]                                                 │
└──────────────────────────────────────────────────────────┘
```

### 5.2 Responsivitas Detail

#### Desktop (>1024px)

- Layout: 3-4 kolom grid
- Nav: Horizontal penuh
- Hero: Full width, teks center
- Font: Ukuran normal

#### Tablet (768px - 1023px)

- Layout: 2-3 kolom grid
- Nav: Horizontal dengan hamburger
- Hero: Full width, teks center
- Font: Ukuran sedikit lebih kecil

#### Mobile (<768px)

- Layout: 1 kolom
- Nav: Hamburger menu
- Hero: Full width, teks center, padding 24px
- Font: Ukuran 16px minimum
- Touch targets: Min. 44px

### 5.3 Accessibility (WCAG 2.1 AA)

| Aspek         | Implementasi                                  |
| ------------- | --------------------------------------------- |
| **Kontras**   | Rasio kontras ≥ 4.5:1 untuk teks normal       |
| **Alt Text**  | Semua gambar memiliki alt text deskriptif     |
| **Keyboard**  | Semua interaksi dapat diakses dengan keyboard |
| **Focus**     | Visible focus indicator (`:focus-visible`)    |
| **ARIA**      | Label untuk form, navigasi, carousel          |
| **Skip Link** | Skip to main content                          |
| **Font Size** | Minimum 16px pada mobile                      |

### 5.4 Micro-interactions

| Elemen         | Interaksi                        | Durasi    |
| -------------- | -------------------------------- | --------- |
| **Nav Link**   | Hover: underline bottom          | 0.2s      |
| **Button**     | Hover: transform + shadow        | 0.25s     |
| **Menu Card**  | Hover: translateY(-4px) + shadow | 0.3s      |
| **Gallery**    | Hover: scale(1.05) + overlay     | 0.3s      |
| **Form Input** | Focus: border color gold         | 0.2s      |
| **Carousel**   | Auto slide setiap 5 detik        | 0.5s fade |
| **Scroll**     | Smooth scroll                    | -         |
| **Hamburger**  | Animasi menjadi X                | 0.3s      |

---

## 6. Konten Strategi

### 6.1 Copywriting

#### Hero Tagline

> _"Mau makan? Bisa. Ngopi saja? Bisa. Atau makan, ngopi ditemani live music? Bisa banget!"_

#### Deskripsi Brand

> Pawon Mbok Kasti adalah restoran dan cafe di Pandaan yang menghadirkan kehangatan prasmanan Jawa dalam suasana Joglo vintage. Setiap sudutnya instagramable, setiap hidangannya menggugah selera.

#### Event Tagline

> _"Mari Makan, Ngopi, Berdansa, Bernyanyi bersama..."_ 🤟

#### Tentang Kami

> "Pawon" berarti dapur—jantung dari setiap rumah. Di Pawon Mbok Kasti, kami menghadirkan kehangatan dapur rumahan dengan cita rasa Jawa yang autentik. Dari prasmanan yang berganti setiap hari hingga kopi yang diseduh dengan penuh cinta, setiap hidangan adalah cerita.

#### Filosofi

> "Karena tempat nyaman paling enak dinikmati rame-rame."

### 6.2 SEO

| Aspek            | Implementasi                                                                                                                |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------- |
| **Title**        | Pawon Mbok Kasti - Prasmanan Jawa & Cafe di Pandaan, Pasuruan                                                               |
| **Description**  | Restoran dan cafe dengan konsep Prasmanan Jawa modern, suasana Joglo vintage di Pandaan, Pasuruan. Live music setiap Sabtu! |
| **Keywords**     | kuliner pandaan, prasmanan jawa, cafe pandaan, live music pandaan, pawon mbok kasti                                         |
| **Open Graph**   | Title, description, image, url                                                                                              |
| **Twitter Card** | Summary with large image                                                                                                    |
| **Schema**       | LocalBusiness, Menu, Event, JobPosting                                                                                      |

#### Catatan untuk Multi‑Topik

- Karena _single‑page_, bersaing untuk _keyword_ berbeda (kuliner, karir, event) dalam satu URL memiliki keterbatasan.
- **Mitigasi:** Halaman lowongan akan dibuat terpisah (`lowongan.html`) secara statis dengan schema `JobPosting` untuk Google for Jobs. Promosi lowongan juga dilakukan di platform eksternal.
- Konten event tetap dalam satu halaman, dioptimasi dengan schema `Event`.

#### Meta Tags

```html
<!-- Primary Meta Tags -->
<title>Pawon Mbok Kasti - Prasmanan Jawa & Cafe di Pandaan, Pasuruan</title>
<meta
  name="description"
  content="Restoran dan cafe dengan konsep Prasmanan Jawa modern, suasana Joglo vintage di Pandaan, Pasuruan. Live music setiap Sabtu!"
/>
<meta
  name="keywords"
  content="kuliner pandaan, prasmanan jawa, cafe pandaan, live music pandaan, pawon mbok kasti"
/>

<!-- Open Graph -->
<meta property="og:title" content="Pawon Mbok Kasti - Prasmanan Jawa & Cafe" />
<meta
  property="og:description"
  content="Restoran dan cafe dengan konsep Prasmanan Jawa modern, suasana Joglo vintage di Pandaan, Pasuruan."
/>
<meta property="og:type" content="website" />
<meta property="og:url" content="https://pawonmbokkasti.com" />
<meta
  property="og:image"
  content="https://pawonmbokkasti.com/assets/og-image.jpg"
/>

<!-- Schema Markup -->
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Pawon Mbok Kasti",
    "description": "Prasmanan Jawa dan Cafe dengan suasana Joglo vintage di Pandaan, Pasuruan.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Mangga 1, Klangkung, Nogosari",
      "addressLocality": "Pandaan",
      "addressRegion": "Pasuruan",
      "addressCountry": "Indonesia",
      "postalCode": "67156"
    },
    "openingHours": "Tu-Su 08:00-23:00",
    "telephone": "+6282342707766",
    "menu": "https://pawonmbokkasti.com/#menu"
  }
</script>
```

### 6.3 Gambar & Asset

| Asset          | Spesifikasi      | Sumber            |
| -------------- | ---------------- | ----------------- |
| **Logo**       | SVG, 200x80px    | Brand asset       |
| **Hero 1**     | JPG, 1920x1080px | Interior Pawon    |
| **Hero 2**     | JPG, 1920x1080px | Makanan prasmanan |
| **Hero 3**     | JPG, 1920x1080px | Live music        |
| **Menu Items** | JPG, 400x300px   | Foto menu         |
| **Galeri**     | JPG, 800x600px   | Berbagai sudut    |
| **Favicon**    | ICO, 32x32px     | Logo versi kecil  |
| **OG Image**   | JPG, 1200x630px  | Brand + tagline   |

### 6.4 Mekanisme Pembaruan Konten

Untuk memudahkan pembaruan tanpa mengedit kode HTML utama, data konten berikut disimpan dalam file JSON terpisah di folder `data/`:

- `data/menu.json` → daftar menu (nama, kategori, harga, deskripsi, badge)
- `data/events.json` → event mendatang (nama, jadwal, deskripsi)
- `data/jobs.json` → lowongan aktif (posisi, kualifikasi)

**Cara update:**

1. Buka file JSON terkait di repository GitHub.
2. Edit langsung di browser (teks editor GitHub) atau via text editor lokal.
3. Commit perubahan. Situs akan otomatis ter-deploy ulang oleh GitHub Pages dalam beberapa detik.

Pemilik bisnis akan diberikan panduan singkat untuk mengedit file‑file tersebut. Jika merasa kesulitan, developer dapat melakukan update berkala sesuai jadwal maintenance.

---

## 7. Teknologi & Arsitektur (Frontend Only)

### 7.1 Stack

| Layer            | Teknologi          | Keterangan                             |
| ---------------- | ------------------ | -------------------------------------- |
| **Markup**       | HTML5              | Semantic, accessible                   |
| **Styling**      | CSS3 + Variables   | Tanpa build tools, performa tinggi     |
| **Script**       | Vanilla JS (ES6+)  | Tanpa dependencies, ringan             |
| **Fonts**        | Google Fonts       | Playfair Display & Inter               |
| **Icons**        | Font Awesome 6     | CDN, library lengkap                   |
| **Maps**         | Google Maps Embed  | Simple, no API key needed              |
| **Data**         | JSON statis        | Menu, event, lowongan dimuat via fetch |
| **Analytics**    | Google Analytics 4 | Measurement ID                         |
| **Form Backend** | Formspree          | Form lamaran tanpa lampiran            |

### 7.2 Struktur File

```
pawonmbokkasti/
├── index.html              # Halaman utama (single page)
├── privacy.html            # Kebijakan Privasi
├── terms.html              # Syarat & Ketentuan
├── lowongan.html           # Halaman karir terpisah (SEO)
├── css/
│   └── style.css           # Semua styling
├── js/
│   └── main.js             # Semua JavaScript
├── data/
│   ├── menu.json           # Data menu
│   ├── events.json         # Data event
│   └── jobs.json           # Data lowongan
├── assets/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── hero-1.jpg
│   │   ├── hero-2.jpg
│   │   ├── hero-3.jpg
│   │   ├── menu-*.jpg
│   │   ├── gallery-*.jpg
│   │   ├── og-image.jpg
│   │   └── favicon.ico
│   └── icons/
│       ├── prasmanan.svg
│       ├── music.svg
│       ├── work.svg
│       └── instagram.svg
├── CNAME
└── README.md
```

### 7.3 Dependencies

| Library          | Penggunaan | CDN                                                                                                                             |
| ---------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **Font Awesome** | Icons      | `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css`                                                     |
| **Google Fonts** | Typography | `https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap` |

### 7.4 Browser Support

| Browser | Versi Minimum |
| ------- | ------------- |
| Chrome  | 90+           |
| Firefox | 88+           |
| Safari  | 14+           |
| Edge    | 90+           |
| Opera   | 76+           |

### 7.5 Performance Optimization

| Aspek             | Implementasi                           |
| ----------------- | -------------------------------------- |
| **Image Loading** | `loading="lazy"` + placeholder         |
| **Image Format**  | JPG/WebP (jika tersedia)               |
| **CSS**           | Minified, critical CSS inline          |
| **JS**            | Minified, defer                        |
| **Fonts**         | `font-display: swap`                   |
| **Caching**       | Cache-control headers via GitHub Pages |
| **CDN**           | GitHub Pages CDN (default)             |

### 7.6 Keamanan Data

- **Email Obfuscation:** Alamat email di halaman kontak dirender via JavaScript (base64) untuk mencegah scraping.
- **Form Sanitasi:** Semua input dibersihkan dari karakter berbahaya (XSS prevention).

---

## 8. Performance Metrics

| Metrik               | Target                        | Alat Pengukuran |
| -------------------- | ----------------------------- | --------------- |
| **LCP**              | < 2.5 detik                   | Lighthouse      |
| **FID**              | < 100 ms                      | Lighthouse      |
| **CLS**              | < 0.1                         | Lighthouse      |
| **First Load**       | < 3 detik                     | Chrome DevTools |
| **Lighthouse Score** | ≥ 90 (mobile), ≥ 95 (desktop) | Lighthouse      |
| **Page Size**        | < 2 MB                        | Chrome DevTools |
| **Requests**         | < 50                          | Chrome DevTools |
| **TTFB**             | < 200 ms                      | Chrome DevTools |

---

## 9. Development Phases

### Phase 1: Setup & Design System (1 Hari)

**Task:**

- Setup struktur folder
- Buat file `index.html`, `privacy.html`, `terms.html`, `style.css`, `main.js`
- Import Google Fonts dan Font Awesome
- Define CSS variables (color, typography, spacing)
- Buat favicon
- Setup Google Analytics 4
- Setup endpoint Formspree
- Siapkan file JSON (`data/menu.json`, `data/events.json`, `data/jobs.json`)

**Deliverable:**

- Struktur file lengkap
- CSS variables terdefinisi
- Logo terintegrasi

### Phase 2: HTML Structure (2 Hari)

**Task:**

- Semantic HTML untuk semua section
- Header dengan navigasi
- Hero dengan slide
- Highlights section
- Menu section
- Event section
- About section
- Galeri section
- Karir section
- Reservasi section
- Kontak section
- Footer dengan link legal
- Halaman `privacy.html` dan `terms.html`

**Deliverable:**

- Complete HTML structure
- Valid semantic HTML
- Section dengan ID untuk navigasi

### Phase 3: CSS Styling (3 Hari)

**Task:**

- Design System implementation
- Layout & grid systems
- Typography styling
- Color system implementation
- Responsive design (mobile-first)
- Animasi & transitions
- Hover states & micro-interactions
- Form styling

**Deliverable:**

- Complete CSS styling
- Responsive di semua device
- Brand consistency
- Animasi halus

### Phase 4: JavaScript (2 Hari)

**Task:**

- Navigation (smooth scroll, active state)
- Mobile hamburger menu
- Hero slideshow (autoplay)
- Menu filtering (kategori)
- Galeri filtering & lightbox
- Form validation (Reservasi)
- Form validation (Karir)
- WhatsApp integration
- Jam operasional real-time
- Scroll reveal animation
- Fetch data dari file JSON (menu, event, jobs) dan render dinamis
- Integrasi Formspree untuk form karir
- Email obfuscation

**Deliverable:**

- All JavaScript functional
- Form working (validation + WhatsApp)
- Interactive elements working
- No console errors

### Phase 5: Testing & Deployment (1 Hari)

**Task:**

- Cross-browser testing
- Mobile responsiveness testing
- Performance optimization
- SEO meta tags
- Deploy ke GitHub Pages
- Uji pembaruan konten dengan mengedit file JSON
- Verifikasi GA4 events
- Uji fallback WhatsApp di desktop/mobile

**Deliverable:**

- Website live di GitHub Pages
- Testing report
- Performance report

### Total: 9 Hari

---

## 10. Testing & QA

### 10.1 Browser Testing Matrix

| Browser          | Desktop | Mobile | Tablet |
| ---------------- | ------- | ------ | ------ |
| Chrome           | ✅      | ✅     | ✅     |
| Firefox          | ✅      | ✅     | ✅     |
| Safari           | ✅      | ✅     | ✅     |
| Edge             | ✅      | -      | -      |
| Samsung Internet | -       | ✅     | -      |

### 10.2 Device Testing

| Device            | Screen Size | Resolution | Status |
| ----------------- | ----------- | ---------- | ------ |
| iPhone SE         | 375x667     | 750x1334   | ✅     |
| iPhone 12/13      | 390x844     | 1170x2532  | ✅     |
| iPhone 14 Pro Max | 430x932     | 1290x2796  | ✅     |
| Pixel 6           | 412x915     | 1080x2400  | ✅     |
| iPad Air          | 820x1180    | 1640x2360  | ✅     |
| iPad Pro          | 1024x1366   | 2048x2732  | ✅     |
| Desktop 1366x768  | 1366x768    | 1366x768   | ✅     |
| Desktop 1920x1080 | 1920x1080   | 1920x1080  | ✅     |

### 10.3 Functional Test Cases

| ID    | Feature    | Test Case       | Expected Result                                       |
| ----- | ---------- | --------------- | ----------------------------------------------------- |
| TC-01 | Navigation | Klik semua menu | Scroll ke section yang sesuai                         |
| TC-02 | Navigation | Klik logo       | Scroll ke hero                                        |
| TC-03 | Mobile Nav | Klik hamburger  | Menu terbuka/tertutup                                 |
| TC-04 | Hero       | Tunggu 5 detik  | Slide berubah                                         |
| TC-05 | Hero       | Klik dot        | Slide berubah sesuai dot                              |
| TC-06 | Menu       | Klik filter     | Menu berubah sesuai kategori                          |
| TC-07 | Menu       | Cari menu       | Filter sesuai keyword                                 |
| TC-08 | Galeri     | Klik filter     | Galeri berubah sesuai kategori                        |
| TC-09 | Galeri     | Klik gambar     | Lightbox terbuka                                      |
| TC-10 | Reservasi  | Submit valid    | Redirect ke WhatsApp                                  |
| TC-11 | Reservasi  | Submit invalid  | Error message muncul                                  |
| TC-12 | Karir      | Submit valid    | Data terkirim via Formspree, notifikasi sukses muncul |
| TC-13 | Karir      | Submit invalid  | Error message muncul                                  |
| TC-14 | Status     | Buka di Selasa  | Status "Buka"                                         |
| TC-15 | Status     | Buka di Senin   | Status "Tutup"                                        |

### 10.4 Performance Testing

| Test          | Tool               | Target      |
| ------------- | ------------------ | ----------- |
| Lighthouse    | Chrome DevTools    | ≥ 90        |
| Page Speed    | PageSpeed Insights | ≥ 90 mobile |
| Load Test     | WebPageTest        | < 3 detik   |
| Accessibility | Lighthouse         | ≥ 90        |

---

## 11. Deployment

### 11.1 GitHub Pages Setup

**Steps:**

1. Buat repository baru: `pawonmbokkasti`
2. Push kode ke branch `main`
3. Settings → Pages → Source: `main` branch
4. Custom domain (opsional)

### 11.2 Struktur Repository

```
pawonmbokkasti/
├── index.html
├── privacy.html
├── terms.html
├── lowongan.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── data/
│   ├── menu.json
│   ├── events.json
│   └── jobs.json
├── assets/
│   ├── images/
│   └── icons/
├── CNAME
└── README.md
```

### 11.3 Deployment Checklist

- [ ] Semua file terpush ke repository
- [ ] GitHub Pages aktif
- [ ] Custom domain terkonfigurasi (jika ada)
- [ ] SSL aktif (default)
- [ ] Semua link bekerja
- [ ] Meta tags terisi
- [ ] Favicon terpasang
- [ ] Google Analytics aktif
- [ ] Social Media link aktif
- [ ] Halaman Privacy & Terms bisa diakses

### 11.4 Post-Deployment Verification

- [ ] Website bisa diakses
- [ ] Semua halaman/section terbuka
- [ ] Gambar dimuat dengan baik
- [ ] Form reservasi bekerja
- [ ] Form lamaran bekerja (Formspree)
- [ ] Responsive di berbagai device
- [ ] SEO meta tags terlihat
- [ ] File JSON bisa di-fetch

---

## 12. Maintenance & Iterasi

### 12.1 Regular Maintenance

| Aktivitas             | Frekuensi | Deskripsi                    |
| --------------------- | --------- | ---------------------------- |
| **Content Update**    | Bulanan   | Update menu, event, lowongan |
| **Performance Check** | Bulanan   | Lighthouse, PageSpeed        |
| **Security Check**    | Bulanan   | Review dependencies, XSS     |
| **Backup**            | Mingguan  | Backup file via git          |
| **Analytics Review**  | Bulanan   | Review traffic & behavior    |

### 12.2 Update Schedule

| Jenis Update | Frekuensi         | Metode                             |
| ------------ | ----------------- | ---------------------------------- |
| **Menu**     | Mingguan/harian   | Edit `data/menu.json` via GitHub   |
| **Event**    | Bulanan           | Edit `data/events.json` via GitHub |
| **Lowongan** | Saat dibuka/tutup | Edit `data/jobs.json` via GitHub   |
| **Gambar**   | Bulanan           | Developer bantu unggah             |
| **Bug Fix**  | Sesuai kebutuhan  | Developer perbaikan                |

Panduan edit file JSON akan disertakan dalam dokumentasi. Jika pemilik kesulitan, developer menyediakan jasa update berkala.

### 12.3 Iterasi Roadmap

| Fase     | Timeline | Fitur                            |
| -------- | -------- | -------------------------------- |
| **V1**   | Launch   | Semua fitur di PRD               |
| **V1.1** | 1 bulan  | Analytics dashboard, newsletter  |
| **V1.2** | 2 bulan  | Testimoni dinamis, review system |
| **V2**   | 3 bulan  | E-commerce, online ordering      |

---

## 13. Risks & Mitigations

| Risiko                           | Dampak                             | Probabilitas | Mitigasi                                          |
| -------------------------------- | ---------------------------------- | ------------ | ------------------------------------------------- |
| **Integrasi WhatsApp gagal**     | Form tidak terkirim                | Rendah       | Fallback: salin manual nomor WA                   |
| **Performance lambat**           | Bounce rate tinggi                 | Sedang       | Image optimization, lazy loading                  |
| **Mobile UX buruk**              | Konversi rendah                    | Sedang       | Mobile-first design, testing                      |
| **Content tidak update**         | Website terlihat usang             | Rendah       | Admin guide, update schedule                      |
| **Browser compatibility**        | Sebagian pengguna tidak bisa akses | Rendah       | Cross-browser testing                             |
| **Security (XSS)**               | Form disalahgunakan                | Rendah       | Input sanitasi, validation                        |
| **SEO tidak efektif**            | Traffic rendah                     | Sedang       | On-page SEO, schema markup                        |
| **Keterbatasan SEO multi‑topik** | Peringkat rendah karir/event       | Sedang       | Halaman `lowongan.html` terpisah, Google for Jobs |
| **Pemilik kesulitan edit JSON**  | Konten tidak terupdate             | Sedang       | Developer menyediakan jasa update bulanan         |

---

## 14. Success Metrics

### 14.1 Quantitative Metrics

| KPI                       | Target (1 Bulan) | Target (3 Bulan) | Alat Ukur          |
| ------------------------- | ---------------- | ---------------- | ------------------ |
| **Unique Visitors**       | 2,000            | 5,000            | Google Analytics   |
| **Page Views**            | 8,000            | 20,000           | Google Analytics   |
| **Reservasi via Website** | 20               | 50               | WhatsApp tracking  |
| **Lamaran via Website**   | 10               | 20               | Formspree tracking |
| **Bounce Rate**           | < 50%            | < 40%            | Google Analytics   |
| **Session Duration**      | > 1.5 min        | > 2 min          | Google Analytics   |
| **CTR Reservasi**         | > 5%             | > 10%            | Google Analytics   |
| **Mobile Traffic**        | > 60%            | > 60%            | Google Analytics   |

### 14.2 Qualitative Metrics

| KPI                   | Metode Pengukuran     | Target    |
| --------------------- | --------------------- | --------- |
| **User Satisfaction** | WhatsApp feedback     | 4.5/5     |
| **Brand Awareness**   | Social media mentions | Meningkat |
| **Visual Appeal**     | User feedback         | Positif   |

---

## 15. Appendices

### 15.1 Sitemap

```
pawonmbokkasti.com/
├── index.html (#beranda)
│   ├── #highlights
│   ├── #menu
│   │   ├── Prasmanan
│   │   ├── Makanan
│   │   ├── Minuman
│   │   └── Camilan
│   ├── #event
│   │   └── The Classic Vibes
│   ├── #tentang
│   │   ├── Sejarah
│   │   ├── Konsep
│   │   └── Visi-Misi
│   ├── #galeri
│   │   ├── Interior
│   │   ├── Makanan
│   │   └── Suasana
│   ├── #karir
│   │   ├── Lowongan Aktif
│   │   └── Form Lamaran
│   ├── #reservasi
│   │   └── Form + WhatsApp
│   └── #kontak
│       ├── Alamat & Maps
│       ├── Jam Operasional
│       └── Kontak
├── lowongan.html (halaman karir terpisah untuk SEO)
├── privacy.html (Kebijakan Privasi)
└── terms.html (Syarat & Ketentuan)
```

### 15.2 User Flow

```
User Flow 1: Reservasi
Beranda → Menu → Pilih Item → Reservasi → Form → WhatsApp

User Flow 2: Event
Beranda → Event → Detail Event → Reservasi → Form → WhatsApp

User Flow 3: Karir
Beranda → Karir → Lihat Lowongan → Apply → Form → Formspree → Email

User Flow 4: Info
Beranda → Tentang/Kontak → Informasi

User Flow 5: Galeri
Beranda → Galeri → Filter → Lightbox
```

### 15.3 Halaman Kebijakan Privasi (privacy.html) – Ringkasan Konten

- **Data yang dikumpulkan:** Nama lengkap, email, nomor telepon, link CV/portofolio.
- **Tujuan pengumpulan:** Memproses reservasi dan lamaran pekerjaan.
- **Penyimpanan data:** Data tidak disimpan di server. Data reservasi dikirim via WhatsApp, data lamaran dikirim via Formspree ke email.
- **Cookie & Analytics:** Website menggunakan Google Analytics 4 untuk mengukur traffic. Pengguna dapat menonaktifkan cookie melalui pengaturan browser.
- **Hak pengguna:** Pengguna dapat meminta penghapusan data pribadi dengan menghubungi `pawonmbokkasti@gmail.com` atau WhatsApp `082342707766`.
- **Keamanan:** Form dilindungi dengan sanitasi input dan HTTPS.

### 15.4 Halaman Syarat & Ketentuan (terms.html) – Ringkasan Konten

- **Ketentuan reservasi:** Reservasi melalui website bersifat permintaan dan memerlukan konfirmasi dari pihak Pawon Mbok Kasti. Pembatalan atau perubahan jadwal harap diinformasikan minimal 2 jam sebelumnya.
- **Batasan tanggung jawab:** Informasi menu dan harga dapat berubah sewaktu-waktu tanpa pemberitahuan. Foto bersifat ilustrasi.
- **Hak kekayaan intelektual:** Seluruh konten (logo, foto, teks) adalah milik Pawon Mbok Kasti dan dilindungi hak cipta.
- **Penggunaan website:** Dilarang menyalahgunakan form untuk spam atau konten tidak pantas.

### 15.5 Color Palette Reference

```
Primary:         #3D2314  ████████████
Primary-Light:   #5C3D2E  ████████████
Primary-Lighter: #8B6B4A  ████████████

Gold:            #C89D4A  ████████████
Gold-Light:      #E8D5A3  ████████████
Gold-Dark:       #A87D3A  ████████████

Cream:           #FDF8F0  ████████████
Cream-Dark:      #F0E8D8  ████████████

Green:           #4A7C59  ████████████
Green-Light:     #6A9C79  ████████████

White:           #FFFFFF  ████████████
Dark:            #1A110A  ████████████
Text:            #2C1E14  ████████████
Text-Light:      #6B5A4A  ████████████
```

---

## 16. Approval

| Nama | Jabatan           | Tanggal     | Tanda Tangan |
| ---- | ----------------- | ----------- | ------------ |
|      | Owner/Stakeholder | 2 Juli 2026 |              |
|      | Project Manager   | 2 Juli 2026 |              |
|      | Lead Developer    | 2 Juli 2026 |              |
|      | UI/UX Designer    | 2 Juli 2026 |              |

---

**Dokumen ini adalah versi final (3.1) PRD untuk website Pawon Mbok Kasti. Perubahan setelah approval harus melalui proses change request.**

**Next Steps:**

1. Finalisasi desain UI (Figma)
2. Development dimulai sesuai Phase 1–5
3. Testing & QA
4. Deployment ke GitHub Pages

---

**© 2026 Pawon Mbok Kasti. All rights reserved.**

```

```
