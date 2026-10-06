# Overview Starter Template

`create-nuxt-one` menyediakan 3 pilihan template preset resmi yang dirancang dengan kebutuhan spesifik:

1. **Default** — Starter clean Nuxt 4 standar untuk aplikasi web modern.
2. **Auth** — Boilerplate full-stack Nuxt 4 dengan Autentikasi, Drizzle ORM, SQLite/LibSQL, dan UI Radix.
3. **Blog** — Situs Portofolio personal dan Blog modern bertenaga Nuxt Content v3, Markdown, dan data YAML.

---

## Tabel Perbandingan Fitur

| Fitur / Modul | Default | Auth (Fullstack) | Blog & Portofolio |
|---|:---:|:---:|:---:|
| **Versi Framework** | Nuxt 4 + Vue 3 | Nuxt 4 + Vue 3 | Nuxt 4 + Vue 3 |
| **Language & Type Safety** | TypeScript | TypeScript | TypeScript |
| **Styling CSS** | Tailwind CSS v3 | Tailwind CSS + Animate | Tailwind CSS + Typography |
| **Linter & Formatter** | Biome | Biome | Biome |
| **Unit Testing** | Vitest | Vitest | Vitest |
| **Icons Integration** | Nuxt Icon (Heroicons & Simple Icons) | Nuxt Icon + Lucide Vue | Nuxt Icon (Lucide, Simple Icons) |
| **UI Components** | Custom Header, Footer, Hero | Radix Vue (Shadcn style) | Custom Section UI + Accordion, Modal |
| **Database ORM** | ✘ | Drizzle ORM + `@libsql/client` | Better-SQLite3 (Nuxt Content cache) |
| **Sistem Autentikasi** | ✘ | JWT + Cookie Session + bcryptjs | ✘ |
| **Auto Migration & Seed** | ✘ | ✓ (`pnpm db:migrate`, `pnpm db:seed`) | ✘ |
| **Nuxt Content Engine** | ✘ | ✘ | ✓ (Nuxt Content v3 + Zod Schemas) |
| **Headless Data YAML** | ✘ | ✘ | ✓ (`content/www/*.yml`) |
| **Markdown Blog Support** | ✘ | ✘ | ✓ (`content/blog/*.md`) |
| **Dark / Light Mode** | Custom composable | Client plugin | `@nuxtjs/color-mode` |
| **Quick Search Palette** | ✘ | ✘ | ✓ (`Ctrl+K` command search) |
| **DevContainer Docker** | ✓ | ✓ | ✓ |
| **GitHub Actions CI** | ✓ | ✓ | ✓ |
| **Target Deployment** | SSR / SSG (Vercel, Netlify, VPS) | SSR / Node (VPS, Docker, PM2) | SSG / SSR (GitHub Pages, Vercel, VPS) |

---

## Panduan Memilih Template

### 1. Gunakan Template **Default** jika:
- Kamu ingin membuat website atau aplikasi Nuxt 4 clean tanpa dependensi database atau CMS bawaan.
- Kamu menghubungkan aplikasi ke backend terpisah (misalnya Laravel API, Express, Go, NestJS, atau Supabase).
- Kamu membutuhkan setup standar dengan arsitektur composable service (`useUserService`, `useApi`).

👉 [Lihat Panduan Lengkap Template Default](/templates/default)

### 2. Gunakan Template **Auth** jika:
- Kamu ingin membangun aplikasi **full-stack mandiri** yang memiliki fitur login, register, dan dashboard admin tanpa backend terpisah.
- Membutuhkan sistem database lokal atau embedded serverless (SQLite / LibSQL / Turso) dengan migrasi otomatis.
- Menginginkan komponen UI siap pakai bergaya *shadcn-vue* berbasis Radix Vue (Sidebar, Dropdown, Modal, Form, Input, Card).
- Butuh middleware keamanan route (`auth.ts`, `guest.ts`, `redirect-authenticated.ts`).

👉 [Lihat Panduan Lengkap Template Auth](/templates/auth/getting-started)

### 3. Gunakan Template **Blog** jika:
- Kamu ingin memiliki **Personal Portfolio & Blog** modern kelas dunia dengan performa instan.
- Ingin mengedit biodata, keahlian (*skills*), portofolio proyek, riwayat karier, galeri foto, FAQ, dan link teman hanya dengan mengedit file **YAML** tanpa menyentuh kode Vue.
- Menulis artikel blog teknis dengan format **Markdown** yang indah dan SEO-optimized.
- Membutuhkan fitur navigasi keyboard cepat dengan QuickSearch Command Palette (`Ctrl+K` / `Cmd+K`).

👉 [Lihat Panduan Lengkap Template Blog](/templates/blog/getting-started)

---

## Bagian yang Umum Diedit Pengembang

| Bagian | Lokasi File | Fungsi |
|---|---|---|
| **Variabel Lingkungan** | `.env` / `.env.example` | Base API, DB connection, Secret Key, Nama Aplikasi |
| **Konfigurasi Nuxt** | `nuxt.config.ts` | Modul, plugins, runtimeConfig, routeRules, SEO |
| **Tema & Warna** | `tailwind.config.ts` | Color palette, font-family, tema styling |
| **Aturan Lint / Format** | `.biome.json` | Aturan indentation, formatter, linter rules |
| **Pipeline CI/CD** | `.github/workflows/ci.yml` | Pengujian otomatis & build di GitHub |
| **Halaman & Rute** | `app/pages/` | Routing berbasis file Nuxt |
| **Logika Bisnis & Fetch** | `app/composables/` | Auto-imported state & API handler |

---

## FAQ Singkat Pengembang

### Mengapa menggunakan Biome daripada ESLint + Prettier?
Biome ditulis menggunakan Rust dan berjalan 10–20x lebih cepat dibanding kombinasi ESLint dan Prettier. Biome menggabungkan formatting dan linting dalam satu konfigurasi minimal `.biome.json`.

### Apakah struktur folder menggunakan standar Nuxt 4?
Ya! Seluruh template menggunakan folder `app/` untuk kode frontend (components, pages, layouts, composables, assets) dan `server/` untuk backend/API Nitro.

### Bagaimana jika ingin menambahkan template kustom sendiri?
Kamu dapat menambahkan folder preset baru di dalam folder `templates/` pada repository ini. CLI akan otomatis mendeteksi nama folder tersebut sebagai preset saat dijalankan.
