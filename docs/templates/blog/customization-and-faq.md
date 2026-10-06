# Kustomisasi & FAQ (Template Blog)

Panduan kustomisasi mendalam serta tanya-jawab teknis seputar konsep yang ada pada template **Blog & Portofolio**.

---

## Kustomisasi Tampilan & Tipografi

### 1. Tipografi Geist Font
Starter ini mengintegrasikan font modern **Geist Sans** dan **Geist Mono** dari `@fontsource`. Font ini diaktifkan di `app/assets/css/tailwind.css` dan dikonfigurasi pada `tailwind.config.ts`:

```typescript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist Sans', 'sans-serif'],
        mono: ['Geist Mono', 'monospace'],
      },
    },
  },
}
```

Jika ingin menggunakan font lain (misalnya Inter atau Plus Jakarta Sans), instal paket `@fontsource` yang diinginkan dan ubah konfigurasi di atas.

### 2. Warna Tema & Dark Mode
Warna latar belakang dan teks dikelola melalui class utility Tailwind dan modul `@nuxtjs/color-mode`:
- Class `.dark` otomatis ditambahkan ke elemen `<html>` saat mode gelap aktif.
- Konfigurasi default di `nuxt.config.ts` menggunakan preferensi sistem pengguna dengan fallback ke mode `dark`.

---

## Optimasi SEO & Social Share

Setiap halaman telah dikonfigurasi dengan composable `useSeoMeta()`:
- `title` dan `description` dibaca secara dinamis dari `content/www/site.yml` atau `overview.yml`.
- Untuk artikel blog, gambar thumbnail Open Graph (`og:image`) dan ringkasan dibaca dari frontmatter Markdown `content/blog/*.md`.

---

## Deployment ke Hosting Statis (SSG)

Karena seluruh data portofolio dan artikel blog bersifat file-based, situs ini sangat optimal di-build sebagai **Static Site (SSG)**:

```bash
pnpm generate
```

Nitro akan secara otomatis menelusuri (*crawlLinks*) seluruh rute (`/`, `/projects`, `/blog`, `/gallery`, `/friends`, dan semua slug artikel) dan menghasilkan file HTML statis murni di folder `.output/public/`.

Hasil build dapat di-deploy tanpa biaya server ke:
- **GitHub Pages**
- **Vercel**
- **Netlify**
- **Cloudflare Pages**

---

## FAQ & Konsep yang Perlu Dipahami Pengembang

### 1. Apa perbedaan Nuxt Content v3 dengan Nuxt Content v2?
Di Nuxt Content v2, konten diakses menggunakan fungsi `queryContent()`. Di **Nuxt Content v3**, Nuxt memperkenalkan arsitektur baru:
- Koleksi harus dideklarasikan di `content.config.ts` dengan fungsi `defineCollection()`.
- Setiap koleksi memiliki skema validasi berbasis **Zod**.
- Query konten menggunakan fungsi baru `queryCollection('namaKoleksi')`.
- Menghasilkan performa query yang jauh lebih cepat dan type-safe di waktu kompilasi (*build-time*).

### 2. Mengapa data portofolio diletakkan di file YAML `content/www/*.yml` bukan langsung di komponen Vue?
Pola ini mengadopsi arsitektur **Headless Flat-file CMS**:
- **Pemisahan Konten dan Kode (Separation of Concerns)**: Pengembang atau non-programmer dapat memperbarui biodata, menambah keahlian, atau mengedit proyek tanpa risiko merusak markup HTML atau skrip Vue.
- **Single Source of Truth**: Data seperti daftar media sosial atau nama profil cukup didefinisikan satu kali di `profile.yml` dan dapat dipakai bersama oleh Header, Hero, dan Footer.

### 3. Mengapa ada dependensi `better-sqlite3` di `package.json`?
Nuxt Content v3 menggunakan `better-sqlite3` pada tahap development dan build untuk membuat database cache lokal dari file Markdown dan YAML. Ini memungkinkan fitur pencarian, filter, dan sorting konten berjalan secepat database SQL saat kompilasi.

### 4. Bagaimana jika saya ingin menambah halaman baru di QuickSearch Palette?
Cukup buka file `content/www/site.yml`, cari bagian `search.pages`, dan tambahkan entri halaman baru kamu:
```yaml
search:
  pages:
    - title: "Dokumentasi API"
      subtitle: "Panduan integrasi endpoint"
      to: "/api-docs"
      icon: "lucide:file-code"
      category: "Dokumentasi"
```
Item tersebut akan langsung muncul di command palette saat pengguna menekan `Ctrl + K`.

