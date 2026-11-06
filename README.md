# YAPS — Cloudflare Pages Store

Starter toko online responsif berdasarkan referensi UI yang diberikan.

## Fitur yang sudah ada
- Home, kategori, katalog produk, filter dan pencarian
- Detail produk
- Keranjang belanja tersimpan di browser (localStorage)
- Form checkout dan kode pesanan
- Endpoint Cloudflare Pages Function untuk menyimpan order ke D1 bila database dikonfigurasi
- Responsive mobile dan desktop

## Deploy gratis ke Cloudflare Pages
1. Buat akun di https://dash.cloudflare.com/
2. Buka **Workers & Pages** → **Create** → **Pages** → **Direct Upload**.
3. Upload folder project ini (atau ekstrak ZIP lalu upload isi folder sesuai instruksi dashboard).
4. Pilih nama project `yaps-store`. Cloudflare akan memberi alamat `yaps-store.pages.dev` jika tersedia.
5. Untuk update, upload ulang file project.

## Aktifkan penyimpanan pesanan permanen (D1)
Tanpa D1, website tetap bisa dicoba tetapi pesanan hanya tersimpan di browser pelanggan. Untuk menyimpan order di server:
1. Cloudflare Dashboard → **Storage & databases** → **D1 SQL Database** → Create database `yaps-orders`.
2. Buka database → Console, jalankan isi `schema.sql`.
3. Di project Pages → Settings → Functions → D1 database bindings, tambahkan binding bernama `DB` dan pilih `yaps-orders`.
4. Deploy ulang project. Endpoint `POST /api/orders` kemudian menyimpan pesanan ke D1.

## Catatan penting sebelum toko dipublikasikan
- Produk, gambar, harga, stok dan deskripsi di `app.js` masih data contoh. Ganti dengan data produk YAPS.
- Checkout saat ini mengumpulkan alamat dan metode pembayaran, tetapi tidak memproses pembayaran otomatis. Transfer/COD perlu dikonfirmasi admin. Integrasi payment gateway membutuhkan akun provider dan konfigurasi rahasia di Cloudflare.
- Belum ada dashboard admin, login pelanggan, manajemen stok, ongkir otomatis, atau pelacakan pesanan. Fitur-fitur itu perlu backend dan konfigurasi tambahan.
- Foto contoh menggunakan URL gambar Unsplash; ganti dengan foto produk sendiri sebelum publikasi.
- Jangan mengumpulkan atau menyimpan data pelanggan untuk produksi sebelum menambahkan kebijakan privasi, pengamanan, validasi, anti-spam/rate limit, dan prosedur pengelolaan data yang sesuai.

## Kustomisasi katalog
Edit array `products` di `app.js`. Setiap produk memakai `id`, `name`, `category`, `price`, `old`, `badge`, `tag`, `rating`, `image`, dan `desc`.
yaps store
yaps update
