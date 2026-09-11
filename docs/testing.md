# Mekanisme Testing E2E Template

Davingm Nuxt Starter menggunakan mekanisme pengujian otomatis *End-to-End* (E2E) untuk memastikan semua template sehat dan dapat di-build dengan baik oleh pengguna.

## Gambaran Umum

Kami menggunakan [Vitest](https://vitest.dev/) untuk mengeksekusi tes secara **paralel (concurrent)** untuk setiap proyek di dalam folder `templates/`. Pengujian ini memastikan:
1. Semua template dapat di-copy dengan sukses tanpa ada *file* atau artefak yang bocor.
2. Dependensi (package manager) dapat di-install tanpa *error*.
3. Proses build Nuxt (`npm run build`) berhasil 100%.

## Cara Menjalankan Testing

Untuk menjalankan pengujian template secara lokal, eksekusi perintah berikut di root proyek:

```bash
pnpm test
# atau
npm run test
```

### Memfilter Template Tertentu (Flag `-t`)
Jika Anda hanya ingin mengetes **satu** template saja (misalnya template `auth`) untuk menghemat waktu, Anda dapat menggunakan flag `-t` bawaan Vitest. Ini akan mem-filter nama *test* yang cocok dengan kata yang Anda berikan:
```bash
pnpm test -t auth
```

## Apa yang terjadi di balik layar?

Saat Anda menjalankan perintah testing:
1. Vitest akan mengeksekusi `test/e2e/templates.test.js`.
2. Pengujian akan memindai (looping) semua sub-folder yang ada di dalam `templates/`.
3. Untuk masing-masing template, sistem akan membuat tiruan/kloningan proyek sementara di dalam folder `test/.davingm/test-<nama-template>`.
4. Sistem akan menjalankan `pnpm install` menggunakan *global store* (sehingga sangat cepat dan hemat RAM/disk) dan `npm run build` di dalam folder sementara tersebut. Ini secara akurat menyimulasikan pengalaman asli pengguna (real-world user) setelah membuat project.
5. Setelah selesai, Vitest memberikan laporan *audit* dan *checklist* interaktif di terminal Anda.

## Isolasi Error & Output Interaktif

Karena kita menggunakan **Vitest**, output terminal berfungsi layaknya *checklist* yang dinamis:
- **Eksekusi Bersamaan**: Semua template dites pada saat yang sama (secara paralel).
- **Isolasi Error**: Jika ada 1 template yang bermasalah, pengujian untuk template tersebut akan ditandai dengan **silang merah (❌)**, tetapi template lain yang sedang berjalan **akan tetap dilanjutkan** hingga selesai. Vitest **tidak** akan menghentikan seluruh proses secara tiba-tiba.
- **Detail Error Terminal**: Jika sebuah template gagal di tahap instalasi atau saat *build*, Vitest akan langsung mencetak *log error* yang spesifik ke layar terminal. Anda bisa melihat baris kode mana atau *package* apa yang membuat *build* Nuxt gagal.

## Artefak yang Diabaikan

Folder hasil pengujian sementara (`test/.davingm/`) telah didaftarkan ke dalam `.gitignore` dan `.npmignore`. Dengan begitu, kloningan proyek dan *node_modules* berukuran besar yang dihasilkan selama proses *testing* **tidak akan** tersimpan ke repositori Git maupun terbawa saat publikasi ke NPM.
