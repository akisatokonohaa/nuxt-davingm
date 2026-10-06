# Changelog

Semua perubahan penting pada `create-nuxt-one` didokumentasikan di sini.

Format mengacu pada [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), dan proyek ini mengikuti [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [0.1.7] — 2026

### Added
- 🎉 Dukungan penuh **Nuxt 4** dan **Nuxt Content v3**
- 3 Template Preset resmi terkurasi:
  - **Default**: Nuxt 4 standar dengan composable service, Biome & Vitest
  - **Auth (Full-stack)**: Drizzle ORM, SQLite/LibSQL, JWT session cookie & Radix UI
  - **Blog & Portofolio**: Personal portfolio berbasis data YAML + Markdown blog
- QuickSearch Command Palette (`Ctrl+K`) pada template Blog
- Sistem auto-migration dan seeder terintegrasi pada template Auth
- Dokumentasi lengkap berbasis VitePress dengan sitemap otomatis, SEO meta tags, dan Open Graph branding baru

---

## [0.1.0] — 2026

### Added
- 🎉 Rilis perdana `create-nuxt-one`
- CLI interaktif dengan prompt berbasis `@clack/prompts`
- Dukungan multi package manager: pnpm, npm, yarn, bun
- Deteksi otomatis package manager yang tersedia di sistem
- Integrasi opsional dengan `git init`
- Validasi nama folder dan penanganan folder yang sudah ada
- Banner ASCII art custom
- Opsi Replace atau Cancel jika folder tujuan sudah ada
- Filter otomatis `node_modules`, `.nuxt`, `.git` saat menyalin template
