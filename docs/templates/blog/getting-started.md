# Memulai Template Blog & Portofolio

Starter kit modern untuk membangun **Website Portofolio Pribadi & Blog** bertenaga **Nuxt 4**, **Nuxt Content v3**, **Tailwind CSS**, dan **Dark / Light mode**.

---

## Fitur Utama

- 🚀 **Nuxt 4 & Nuxt Content v3**: Content engine generasi terbaru berbasis SQLite internal dengan skema type-safe Zod.
- 📝 **Dual Content Architecture**: 
  - **Data Portofolio via YAML** (`content/www/`): Edit seluruh teks, profile, skill, experience, featured project, FAQ, galeri, dan kontak tanpa menyentuh kode Vue.
  - **Blog Teknis via Markdown** (`content/blog/`): Tulis artikel dengan frontmatter lengkap, tag, perkiraan waktu baca, dan styling typography yang elegan.
- 🔍 **QuickSearch Command Palette (`Ctrl+K`)**: Modal pencarian instan berbasis keyboard untuk menavigasi seluruh halaman dan menu situs.
- 🎨 **Modern Minimalist UI & Geist Font**: Tipografi premium menggunakan font `@fontsource/geist-sans` dan `@fontsource/geist-mono`.
- 🌓 **Dark & Light Mode**: Switch tema halus dengan dukungan `@nuxtjs/color-mode` dan preferensi sistem.
- 🧩 **Koleksi Section & UI Lengkap**: Hero, Skills, Featured Projects, Experience Timeline, Testimonials, FAQ Accordion, Contact Copy-to-Clipboard, Image Carousel, dan Modal.
- ⚡ **Static Site Generation (SSG)**: Konfigurasi prerender siap deploy ke GitHub Pages, Vercel, Netlify, atau Cloudflare Pages.

---

## Instalasi

Gunakan CLI `create-nuxt-one` untuk membuat project baru:

::: code-group

```bash [pnpm]
pnpm create nuxt-one
```

```bash [npm]
npx create-nuxt-one
```

```bash [yarn]
yarn create nuxt-one
```

```bash [bun]
bunx create-nuxt-one
```

:::

Saat prompt pemilihan template muncul, pilih opsi **`Blog`**.

---

## Menjalankan Server Development

Masuk ke folder project yang baru dibuat dan jalankan:

```bash
cd my-blog
pnpm dev
```

Buka peramban di `http://localhost:3000`.

---

## Menghasilkan Static Site (SSG Build)

Untuk menghasilkan file statis HTML/CSS/JS siap deploy ke GitHub Pages atau CDN apa pun:

```bash
pnpm generate
```

Hasil build akan berada di direktori `.output/public/` dan siap diunggah ke hosting statis.

---

## Langkah Kustomisasi Cepat

Untuk mulai mempersonalisasi situs dengan data diri kamu:

1. Buka file `content/www/profile.yml` dan ubah nama, bio, avatar, serta lokasi.
2. Buka `content/www/social.yml` dan masukkan link GitHub, X (Twitter), dan LinkedIn kamu.
3. Buka `content/www/overview.yml` untuk menyesuaikan teks heading Hero section dan daftar FAQ.
4. Buat artikel blog pertama kamu di folder `content/blog/` dengan ekstensi `.md`.

Lanjutkan membaca [Struktur Proyek](/templates/blog/project-structure) dan [Data Portofolio YAML](/templates/blog/yaml-collections) untuk panduan lengkap.

