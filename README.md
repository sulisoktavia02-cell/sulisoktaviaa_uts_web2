# ShopKu - Aplikasi E-Commerce Sederhana

Aplikasi web belanja online (e-commerce) berbasis frontend murni menggunakan HTML5, JavaScript ES6+, dan Tailwind CSS. Semua data disimpan di LocalStorage tanpa memerlukan backend atau server.

---

## Fitur

- **Autentikasi** — Register & Login dengan validasi, session disimpan di LocalStorage
- **Katalog Produk** — Grid produk dari data JSON, lengkap dengan gambar, harga, rating, dan kategori
- **Search & Filter** — Cari produk berdasarkan nama, filter kategori, rentang harga, dan pengurutan
- **Detail Produk** — Halaman detail dengan pilihan jumlah, produk serupa, dan tombol wishlist
- **Keranjang Belanja** — Tambah, hapus, update jumlah, hitung total otomatis + ongkos kirim
- **Checkout** — Form pengiriman, pilihan metode pembayaran, generate ID transaksi otomatis
- **Riwayat Pesanan** — Tampilkan semua pesanan dengan detail lengkap via modal
- **Wishlist** — Simpan produk favorit
- **Dark Mode** — Toggle tema gelap/terang, tersimpan di LocalStorage
- **Toast Notification** — Notifikasi pop-up untuk setiap aksi pengguna
- **Pagination** — Navigasi halaman produk
- **Responsive** — Tampilan optimal di mobile dan desktop

---

## Cara Menjalankan

Tidak memerlukan instalasi apapun. Cukup buka file `index.html` di browser.

### Opsi 1: Buka langsung
```
Klik dua kali file index.html
```

### Opsi 2: Menggunakan Live Server (VS Code)
1. Install ekstensi **Live Server** di VS Code
2. Klik kanan `index.html` → **Open with Live Server**

### Opsi 3: Menggunakan Python HTTP Server
```bash
python -m http.server 8080
# Buka http://localhost:8080
```

### Opsi 4: Menggunakan Node.js
```bash
npx serve .
```

> **Catatan:** Karena menggunakan `fetch()` untuk memuat `data/products.json`, aplikasi perlu dijalankan melalui HTTP server (bukan langsung buka file). Gunakan salah satu opsi di atas.

---

## Struktur Folder

```
shopku/
├── index.html              # Halaman utama / daftar produk
├── assets/
│   └── style.css           # Custom CSS tambahan
├── data/
│   └── products.json       # Data produk (12 produk dummy)
├── js/
│   ├── storage.js          # Utility LocalStorage
│   ├── auth.js             # Modul autentikasi
│   ├── cart.js             # Modul keranjang belanja
│   ├── products.js         # Modul produk & render
│   ├── navbar.js           # Komponen navbar
│   ├── toast.js            # Notifikasi toast
│   └── theme.js            # Dark mode toggle
└── pages/
    ├── login.html          # Halaman login
    ├── register.html       # Halaman registrasi
    ├── product.html        # Halaman detail produk
    ├── cart.html           # Halaman keranjang
    ├── checkout.html       # Halaman checkout
    ├── orders.html         # Riwayat pesanan
    └── wishlist.html       # Halaman wishlist
```

---

## Teknologi

| Teknologi | Keterangan |
|-----------|------------|
| HTML5 | Struktur halaman |
| JavaScript ES6+ | Logika aplikasi, modular |
| Tailwind CSS (CDN) | Styling & responsive design |
| LocalStorage | Penyimpanan data (users, cart, orders, wishlist) |
| JSON | Data produk dummy |

---

## Demo

🔗 [Link Demo](https://username.github.io/shopku) *(ganti dengan URL GitHub Pages Anda)*

---

## Deploy ke GitHub Pages

1. Push semua file ke repository GitHub
2. Buka **Settings** → **Pages**
3. Pilih branch `main` dan folder `/ (root)`
4. Klik **Save** — situs akan aktif dalam beberapa menit

---

## Lisensi

MIT License — bebas digunakan dan dimodifikasi.
