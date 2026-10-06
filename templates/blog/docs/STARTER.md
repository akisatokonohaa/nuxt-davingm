# Nuxt Blog & Portofolio Starter — Dokumentasi

Starter kit modern untuk membangun **Personal Portfolio & Blog** bertenaga Nuxt 4, Nuxt Content v3, Tailwind CSS, dan Dark/Light Mode.

## Fitur Unggulan

- **Nuxt 4 & Nuxt Content v3**: Content engine berbasis Zod schema di `content.config.ts`.
- **Data-Driven YAML**: Edit seluruh biodata, keahlian, riwayat kerja, proyek, testimoni, FAQ, dan galeri di `content/www/*.yml`.
- **Markdown Blog**: Tulis artikel teknis di `content/blog/*.md` dengan frontmatter lengkap dan tipografi elegan.
- **QuickSearch Command Palette (`Ctrl+K`)**: Modal pencarian instan antar halaman.
- **Geist Sans & Mono Font**: Tipografi modern kelas dunia.
- **Dark / Light Mode**: Dukungan `@nuxtjs/color-mode` siap pakai.
- **Static Site Generation (SSG)**: Cepat dan hemat biaya untuk deploy ke GitHub Pages / Vercel / Netlify.

---

## Menjalankan Proyek

```bash
# Install dependencies
pnpm install

# Jalankan server development
pnpm dev

# Build Static Site Generation (SSG)
pnpm generate

# Preview build statis
pnpm preview
```

---

## Cara Kustomisasi Konten

1. **Biodata & Profil**: Edit `content/www/profile.yml`
2. **Akun Sosial Media**: Edit `content/www/social.yml`
3. **Menu Navigasi & Search Palette**: Edit `content/www/site.yml`
4. **Hero, Skills, FAQ, Testimoni, Kontak**: Edit `content/www/overview.yml`
5. **Riwayat Karier**: Edit `content/www/experience.yml`
6. **Katalog Proyek**: Edit `content/www/projects.yml`
7. **Foto Galeri**: Edit `content/www/gallery.yml`
8. **Jejaring Teman**: Edit `content/www/friends.yml`
9. **Menulis Artikel Blog**: Buat file `.md` baru di folder `content/blog/`

---

## Struktur Folder Kunci

- `app/` — Kode aplikasi Vue 3, layout, halaman (`/`, `/projects`, `/blog`, `/gallery`, `/friends`), section, dan UI components.
- `content/` — Sumber data portofolio (YAML) dan artikel blog (Markdown).
- `content.config.ts` — Skema validasi Zod untuk Nuxt Content v3.
- `tailwind.config.ts` — Konfigurasi styling & typography.