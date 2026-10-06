# Mulai Cepat

Panduan ringkas untuk membuat project Nuxt baru dengan `create-nuxt-one`.

## Prasyarat

Sebelum mulai, pastikan sistem kamu telah memenuhi syarat berikut:

- **Node.js** versi `18.0.0` atau lebih baru
- Salah satu package manager: `pnpm` (sangat direkomendasikan), `npm`, `yarn`, atau `bun`

Cek versi Node.js yang terpasang di terminal:

```bash
node --version
# Output minimal: v18.0.0
```

---

## Membuat Project Baru

Jalankan perintah berikut sesuai package manager pilihan kamu:

::: code-group

```bash [npm]
npx create-nuxt-one
```

```bash [pnpm]
pnpm create nuxt-one
```

```bash [yarn]
yarn create nuxt-one
```

```bash [bun]
bunx create-nuxt-one
```

:::

---

## Langkah-langkah Prompt Interaktif

CLI akan memandu kamu melalui 4 langkah interaktif:

### 1. Memilih Template Starter

```
◆  Template mana yang ingin Anda gunakan?
│  ● Default (Davingm recommended starter)
│  ○ Auth
│  ○ Blog
```

- **Default**: Starter clean Nuxt 4 untuk aplikasi umum.
- **Auth**: Full-stack Nuxt 4 dengan Autentikasi, Drizzle ORM, SQLite/LibSQL & UI Radix.
- **Blog**: Situs Portofolio & Blog bertenaga Nuxt Content v3, Markdown & konfigurasi data YAML.

Lihat [Overview Template](/templates/overview) untuk perbandingan lengkap.

### 2. Menentukan Lokasi Folder Project

```
◆  Di mana project ingin dibuat?
│  ./my-project
```

Ketikkan path folder untuk project baru (misal `./my-app` atau `my-portfolio`). Default: `./my-project`.

### 3. Memilih Package Manager

```
◆  Package manager mana yang ingin digunakan?
│  ● pnpm
│  ○ npm
│  ○ Yarn
│  ○ Bun
```

CLI otomatis hanya menampilkan package manager yang terpasang di sistem kamu.

### 4. Inisialisasi Git Repository

```
◆  Initialize git repository?
│  ● Yes / ○ No
```

Pilih `Yes` jika ingin langsung membuat repository Git lokal (`git init`).

---

## Menjalankan Project

Setelah proses scaffolding dan instalasi dependencies selesai, CLI akan menampilkan pesan langkah selanjutnya:

```
╭── 👉 Next steps ───╮
│                    │
│   › cd ./my-project│
│   › pnpm run dev   │
│                    │
╰────────────────────╯
```

Masuk ke folder project dan nyalakan development server:

```bash
cd my-project
pnpm dev
```

Buka peramban kamu di `http://localhost:3000`. Selamat, project Nuxt 4 kamu sudah aktif dan siap dikembangkan! 🚀
