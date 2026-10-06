# Apa itu Nuxt Starter?

`create-nuxt-one` adalah CLI generator untuk membuat project [Nuxt 4](https://nuxt.com) baru dengan opinionated setup yang sudah dikurasi. Terinspirasi dari `create-vite` dan `create-nuxt`, tool ini dirancang agar proses scaffolding project menjadi instan, rapi, dan langsung siap pakai untuk level production.

## Motivasi

Setiap kali memulai project Nuxt baru, pengembang sering menghabiskan waktu berjam-jam untuk setup berulang — mengonfigurasi Tailwind CSS, styling font, linter & formatter, database ORM, autentikasi sesi, sistem konten blog, testing, hingga setup CI/CD.

`create-nuxt-one` hadir untuk menghilangkan boilerplate tersebut dengan menyediakan starter kit yang dirancang dengan standar arsitektur terbaik.

Cukup satu perintah, dan kamu mendapat project yang:

- Menggunakan **Nuxt 4** dan **Vue 3** versi terbaru
- Sudah dikonfigurasi dengan **best practices** arsitektur Nuxt
- Siap untuk **development** maupun **production**
- Menggunakan **tooling modern** seperti Biome (pengganti ESLint & Prettier yang jauh lebih cepat), Vitest, Tailwind CSS, dan Iconify

---

## 3 Starter Kit yang Tersedia

CLI menyertakan 3 starter kit terkurasi sesuai tipe aplikasi yang ingin kamu bangun:

1. **Default Template**: Starter clean Nuxt 4 dengan Tailwind CSS, Iconify, Biome, Vitest, dan pola service composables (`useUserService`, `useApi`). Cocok untuk pondasi umum aplikasi web modern.
2. **Auth Template (Full-stack)**: Boilerplate aplikasi full-stack Nuxt 4 dengan autentikasi lengkap (login, register, cookie session, JWT), SQLite database via Drizzle ORM & `@libsql/client`, auto-migrations & seeders, proteksi middleware, serta komponen UI modern berbasis Radix Vue.
3. **Blog & Portofolio Template**: Situs portofolio personal interaktif dan blog modern bertenaga **Nuxt Content v3**, Dark/Light mode (`@nuxtjs/color-mode`), QuickSearch (Ctrl+K palette), Typography styling, serta data-driven YAML configuration di mana kamu bisa mengubah seluruh info situs tanpa menyentuh kode Vue.

---

## Cara Kerja

```bash
npx create-nuxt-one
```

CLI akan menampilkan serangkaian prompt interaktif:

1. **Pilih template preset** — `Default`, `Auth`, atau `Blog`
2. **Tentukan lokasi project** — misal `./my-app`
3. **Pilih package manager** — `pnpm`, `npm`, `yarn`, atau `bun` (otomatis mendeteksi yang terpasang)
4. **Initialize git repository** — otomatis menjalankan `git init` (opsional jika Git terpasang)

Setelah konfirmasi, CLI akan:

- Menyalin template yang dipilih ke folder tujuan
- Menginisialisasi git repository (jika dipilih)
- Menginstall semua dependencies secara otomatis
- Menampilkan petunjuk **next steps** untuk langsung mulai development

---

## Perbandingan dengan create-nuxt Official

| Fitur | `create-nuxt-one` | `create-nuxt` (official) |
|---|:---:|:---:|
| **Nuxt 4 Ready** | ✓ | ✓ |
| **Tailwind CSS & Forms** | ✓ Terintegrasi | ✘ Manual |
| **Linting & Formatting** | ✓ Biome super cepat | ✘ Manual |
| **Unit Testing (Vitest)** | ✓ Siap pakai | ✘ Tidak termasuk |
| **Fullstack Auth & Database** | ✓ Preset Auth (Drizzle + LibSQL) | ✘ Manual |
| **Nuxt Content v3 & Blog** | ✓ Preset Blog (YAML + Markdown) | ✘ Manual |
| **Multi Package Manager** | ✓ Deteksi otomatis 4 PM | ✓ |
| **DevContainer & CI/CD** | ✓ Disediakan | ✘ Manual |
