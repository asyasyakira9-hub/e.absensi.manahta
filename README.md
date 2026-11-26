# E-Absensi MA Nahdhiyah Talun (Paket GitHub Pages v2)

Paket ini berisi berkas siap unggah ke *root* repository GitHub Pages:
- `index.html`: Aplikasi PWA lengkap dengan absensi barcode/QR, manajemen siswa/guru/tendik/kelas, ekspor/impor Excel, kartu barcode + QR (tanpa nama wali murid), notifikasi WhatsApp, sinkronisasi lintas perangkat otomatis, dan penyimpanan ke Google Drive.
- `manifest.webmanifest`: Konfigurasi PWA relatif (`./`).
- `sw.js`: *Service worker* dengan strategi *network-first* untuk aset lokal agar pembaruan cepat tampil.
- `.nojekyll`: Menonaktifkan pemrosesan Jekyll bawaan GitHub Pages.

## Cara Unggah ke GitHub
1. Ekstrak seluruh isi file ZIP ini.
2. Unggah semua file (`index.html`, `manifest.webmanifest`, `sw.js`, `.nojekyll`) langsung ke folder **root** repository GitHub Anda.
3. Aktifkan GitHub Pages pada **Settings -> Pages** (*Branch: main*, *Folder: / (root)*).
