Kamu adalah seorang senior front-end developer yang ahli dalam HTML, CSS, dan Vanilla JavaScript. Tugasmu adalah membuat website single-page untuk restoran "Pawon Mbok Kasti" sesuai dengan spesifikasi PRD yang sudah disediakan.

### Teknologi yang Wajib Digunakan
- HTML5 (semantik)
- CSS3 (dengan variabel kustom di `:root`)
- JavaScript ES6+ (tanpa framework, full vanilla)
- **Library/CDN:**
  - Font Awesome 6.5.1: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css`
  - Google Fonts (Playfair Display dan Inter): `https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600;700&display=swap`
- **Form Karir:** Gunakan Formspree dengan endpoint placeholder `https://formspree.io/f/your-formspree-id` (ganti nanti)
- **Google Maps Embed:** `https://maps.google.com/maps?q=Pawon+Mbok+Kasti+Pandaan` (tampilkan dalam iframe)
- **Google Analytics 4:** Sisipkan script GA4 dengan measurement ID placeholder `G-XXXXXXXXXX`

### Struktur Halaman (Single Page, satu file index.html)
Buatkan halaman dengan section-section berikut (masing-masing memiliki ID sesuai):
1. **Header** (fixed, background semi-transparan dengan blur, logo "Pawon Mbok Kasti", menu navigasi: Beranda, Menu, Event, Tentang, Galeri, Karir, Kontak, tombol CTA "Reservasi", indikator status Buka/Tutup real-time)
2. **Hero** (#beranda): slideshow 3 slide full-screen dengan fade transition, overlay gradien, tagline, tombol Reservasi & Lihat Menu. Auto-play 5 detik, dot navigasi.
3. **Highlights** (#highlights): 4 kartu ikon (Prasmanan Jawa, Live Music, WFC, Instagramable) menggunakan Font Awesome ikon, grid responsive.
4. **Menu** (#menu): 8 menu (data disediakan di bawah), filter kategori (Semua, Prasmanan, Makanan, Minuman, Camilan), tampilkan grid kartu dengan gambar placeholder (beri warna background acak atau `picsum.photos`), nama, deskripsi, harga, badge jika ada. Animasi hover.
5. **Event** (#event): banner "The Classic Vibes", jadwal Sabtu mulai 19:00, tombol Reservasi Event.
6. **Tentang Kami** (#tentang): sejarah singkat, konsep, visi-misi, filosofi.
7. **Galeri** (#galeri): grid masonry (bisa 3-4 kolom) dengan 12 foto placeholder (dari `picsum.photos`), filter kategori (Semua, Interior, Makanan, Suasana), lightbox saat klik (tampilkan gambar besar dengan close button).
8. **Karir** (#karir): daftar lowongan (dari data jobs), form lamaran (Nama, Email, Telepon, Posisi [dropdown dari jobs], Link CV/Portofolio, Pesan). Validasi klien, kirim via Formspree (fetch POST), tampilkan pesan sukses/error.
9. **Reservasi** (#reservasi): form (Nama, Telepon, Tanggal, Jam, Jumlah Orang, Catatan), validasi (tanggal tidak boleh Senin, jam 08:00-23:00, minimal 10 digit telepon, jumlah 1-20). Saat submit, susun teks untuk WhatsApp lalu buka tautan `https://wa.me/6282342707766?text=...` dengan teks terformat. Sediakan pula nomor WA yang bisa disalin manual.
10. **Kontak & Lokasi** (#kontak): alamat lengkap, Google Maps iframe, jam operasional (Selasa-Minggu 08.00-23.00, Senin tutup), WhatsApp, Email, Instagram, TikTok.
11. **Footer**: logo, deskripsi singkat, quick links (Menu, Event, Karir, Kontak, Kebijakan Privasi, Syarat & Ketentuan), ikon sosial media, copyright.

**Navigasi:** Smooth scroll ke section saat menu diklik. Active state pada menu saat section terlihat. Mobile: hamburger menu (animasi menjadi X).

### Data Konten (gunakan array dalam JavaScript)
```js
const menuItems = [
  { name: 'Mix Platter', category: 'Camilan', price: 'Rp 45.000', desc: 'Camilan kekinian untuk nongkrong', badge: 'Rekomendasi', image: 'https://picsum.photos/400/300?random=1' },
  { name: 'Kiwi Yakult', category: 'Minuman', price: 'Rp 18.000', desc: 'Segar, manis, dan menyegarkan', badge: null, image: 'https://picsum.photos/400/300?random=2' },
  { name: 'Bubur Madura', category: 'Prasmanan', price: 'Rp 25.000', desc: 'Hangat dengan topping khas Madura', badge: 'Favorit', image: 'https://picsum.photos/400/300?random=3' },
  { name: 'Ayam Bakar', category: 'Makanan', price: 'Rp 35.000', desc: 'Ayam bakar dengan bumbu khas', badge: 'Rekomendasi', image: 'https://picsum.photos/400/300?random=4' },
  { name: 'Rawon', category: 'Prasmanan', price: 'Rp 30.000', desc: 'Sup daging hitam khas Jawa Timur', badge: null, image: 'https://picsum.photos/400/300?random=5' },
  { name: 'Es Wedang', category: 'Minuman', price: 'Rp 15.000', desc: 'Minuman tradisional segar', badge: null, image: 'https://picsum.photos/400/300?random=6' },
  { name: 'Nasi Pecel', category: 'Prasmanan', price: 'Rp 22.000', desc: 'Nasi dengan sayuran dan sambal khas', badge: null, image: 'https://picsum.photos/400/300?random=7' },
  { name: 'Kopi Susu', category: 'Minuman', price: 'Rp 20.000', desc: 'Kopi dengan susu kekinian', badge: 'Rekomendasi', image: 'https://picsum.photos/400/300?random=8' }
];

const jobs = [
  { title: 'Barista', qualification: 'Berpengalaman, passion kopi', status: 'Dibuka' },
  { title: 'Supervisor', qualification: 'Min. 2 tahun di restoran/cafe', status: 'Dibuka' },
  { title: 'Admin', qualification: 'Menguasai Microsoft Office', status: 'Dibuka' },
  { title: 'Waiter/Waitress', qualification: 'Fresh graduate dipersilakan', status: 'Dibuka' },
  { title: 'Dishwasher', qualification: '-', status: 'Dibuka' }
];

// Gunakan ini untuk dropdown posisi karir dan daftar lowongan.
````

**Galeri:** Buat array 12 objek dengan kategori (Interior, Makanan, Suasana) dan gambar dari `picsum.photos` ukuran 800x600 dengan id random.

**Event:** Cukup tulis statis "The Classic Vibes", tidak perlu data array.

### Desain & Tema

- **Skema warna** (definisikan sebagai variabel CSS di `:root`):
  - `--color-primary: #3D2314`
  - `--color-primary-light: #5C3D2E`
  - `--color-gold: #C89D4A`
  - `--color-gold-light: #E8D5A3`
  - `--color-cream: #FDF8F0`
  - `--color-cream-dark: #F0E8D8`
  - `--color-white: #FFFFFF`
  - `--color-dark: #1A110A`
  - `--color-text: #2C1E14`
  - `--color-text-light: #6B5A4A`
  - `--color-green: #4A7C59`
  - Shadow, border-radius, transition, spacing sesuai PRD.
- **Font:** Playfair Display untuk heading (H1-H4, tagline, quote), Inter untuk body, button, label.
- **Responsif:** Mobile-first. Breakpoint: 768px (tablet) dan 1024px (desktop). Grid kartu 1 kolom mobile, 2 tablet, 3 desktop. Header jadi hamburger di mobile. Font size menyesuaikan.
- **Mikro-interaksi:**
  - Tombol: hover scale 1.05 dengan shadow
  - Kartu menu: hover translateY(-4px) + shadow
  - Galeri: hover scale 1.05 + overlay
  - Link navigasi: hover underline transisi 0.2s
  - Form input: focus border gold
- **Status operasional:** Tampilkan badge "Buka" (hijau) jika hari Selasa-Minggu antara jam 08.00-23.00 WIB (gunakan waktu lokal perangkat, tapi anggap WIB karena target lokal). Jika Senin atau di luar jam, "Tutup" (merah).

### Form & Validasi

- **Reservasi:**
  - Nama: required, min 3 karakter.
  - Telepon: required, min 10 digit angka.
  - Tanggal: required, tidak boleh memilih hari Senin (disabled tanggal Senin di input date? Atau validasi pesan error). Lebih baik gunakan input date dan validasi saat submit: jika hari Senin, tolak.
  - Jam: required, antara 08.00-23.00. Bisa input time.
  - Jumlah orang: min 1, max 20.
  - Tampilkan error di bawah field.
- **Karir:**
  - Nama, Email, Telepon, Posisi (dropdown dari jobs) wajib.
  - Link CV opsional.
  - Saat submit, kirim fetch POST ke Formspree endpoint dengan header `Accept: application/json`. Tampilkan notifikasi sukses/gagal tanpa reload. Reset form jika sukses.

### Integrasi WhatsApp

Setelah validasi reservasi berhasil, bentuk teks:

```
Halo, saya ingin melakukan reservasi:
Nama: [nama]
Tanggal: [tanggal]
Jam: [jam]
Jumlah Orang: [jumlah]
Catatan: [catatan]
```

Encode URI, lalu buka `https://wa.me/6282342707666?text=...` di tab baru. Sediakan juga salinan nomor jika gagal.

### SEO & Meta

- Tambahkan meta deskripsi, keywords, Open Graph, Twitter Card.
- Sertakan JSON-LD schema tipe `Restaurant`, `Event` (untuk The Classic Vibes), `JobPosting` (beberapa posisi, gunakan data jobs). Ini penting untuk SEO. Tempatkan di head.

### Aksesibilitas

- Gunakan atribut alt pada gambar.
- Pastikan semua interaksi bisa diakses keyboard (tabindex, focus styles).
- Sediakan skip to main content link.

### Kode Harus Lengkap & Langsung Dapat Dijalankan

- Output hanya satu file `index.html` yang berisi semua HTML, CSS di dalam `<style>` (atau inline di <style>), dan JavaScript di dalam `<script>` di akhir body.
- Jangan gunakan file terpisah.
- Semua gambar dari picsum.photos agar langsung tampil.
- Endpoint Formspree placeholder siap diganti.

Tuliskan kode lengkapnya.
