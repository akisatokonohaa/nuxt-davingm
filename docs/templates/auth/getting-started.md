# Memulai Template Auth

Panduan langkah demi langkah menjalankan template full-stack **Auth** Nuxt 4.

## Prasyarat

- **Node.js** >= `18.0.0`
- **pnpm** (direkomendasikan) atau npm/yarn/bun

---

## Instalasi

Buat project baru menggunakan CLI `create-nuxt-one`:

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

Saat prompt muncul, pilih preset **`Auth`**.

---

## Konfigurasi Environment (`.env`)

Salin file `.env.example` menjadi `.env`:

```bash
cp .env.example .env
```

Contoh konfigurasi default:

```ini
# Nama Aplikasi
NAME_APP="Nuxt Auth Pro"

# Secret Key untuk penandatanganan JWT (GANTI di production!)
JWT_SECRET="supersecretkey_change_me_in_production_min_32_chars"

# Driver & Lokasi Database
DB_CONNECTION="sqlite"
DB_DATABASE=".data/database.sqlite"

# Mode Database saat startup server:
# "update"      → membuat tabel baru jika belum ada, data lama tetap aman (default)
# "create-drop" → menghapus semua tabel dan membuat ulang saat server start (hanya untuk reset testing)
DB_TYPE="update"
```

> **Catatan Penting:** File database `.data/database.sqlite` akan dibuat **secara otomatis** saat server pertama kali dijalankan. Kamu tidak perlu membuat file database ini secara manual.

---

## Menjalankan Development Server

```bash
pnpm dev
```

Buka peramban di `http://localhost:3000`.

Saat server pertama kali start, plugin server `server/plugins/db.ts` akan otomatis:
1. Menyiapkan folder `.data/`
2. Menjalankan migrasi tabel `users` dan `sessions`
3. Menjalankan seeder akun administrator awal

---

## Akun Administrator Default (Seeder)

Starter kit telah menyediakan akun awal siap pakai:

| Field | Nilai Akun |
|---|---|
| **Email** | `admin@example.com` |
| **Password** | `password` |

Gunakan akun ini untuk login ke halaman `/login` dan mengakses `/dashboard`.

---

## Build untuk Production

```bash
# Build aplikasi Nuxt & Nitro server
pnpm build

# Preview hasil build production lokal
pnpm preview
```

Pastikan di environment production nilai `DB_TYPE` selalu diset ke `update` agar data pengguna tidak terhapus saat server melakukan restart.
