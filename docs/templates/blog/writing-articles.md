# Menulis Artikel Blog (Markdown)

Starter kit Blog & Portofolio mendukung penulisan artikel berformat Markdown dengan skema frontmatter yang kaya, penataan tipografi otomatis `@tailwindcss/typography`, dan rendering kode berbasis Shiki.

---

## Lokasi File Artikel

Semua artikel blog disimpan di direktori:

```
content/
└── blog/
    ├── first-blog.md
    ├── understanding-nuxt4.md
    └── building-with-drizzle.md
```

Nama file Markdown akan otomatis menjadi slug URL artikel. Contoh: `content/blog/understanding-nuxt4.md` dapat diakses di URL `/blog/understanding-nuxt4`.

---

## Format Frontmatter (Metadata Artikel)

Setiap file Markdown harus menyertakan frontmatter YAML di bagian atas sesuai skema `blog` di `content.config.ts`:

```markdown
---
title: "Panduan Lengkap Arsitektur Nuxt 4 untuk Pemula"
description: "Pelajari konsep baru di Nuxt 4 mulai dari struktur folder app/, server Nitro, hingga optimasi SSR."
date: "2026-10-06"
author:
  name: "Davin"
  avatar: "https://github.com/davingm.png"
  role: "Frontend Engineer"
tags:
  - Nuxt
  - Vue
  - TypeScript
readTime: "6 min read"
image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200"
featured: true
---

Tulis konten artikel kamu di sini menggunakan format Markdown standar...
```

---

## Daftar Field Frontmatter

| Field | Tipe | Wajib | Keterangan |
|---|---|:---:|---|
| `title` | `string` | **Ya** | Judul utama artikel |
| `description` | `string` | **Ya** | Deskripsi ringkas untuk cuplikan daftar artikel dan SEO Meta |
| `date` | `string` | **Ya** | Tanggal rilis artikel (format: `YYYY-MM-DD`) |
| `author` | `object` | Opsional | Informasi penulis: `name`, `avatar`, `role` |
| `tags` | `array` | Opsional | Daftar topik tag (misal: `[Nuxt, TypeScript]`) |
| `readTime` | `string` | Opsional | Perkiraan durasi membaca (misal: `"5 min read"`) |
| `image` | `string` | Opsional | URL gambar cover artikel (Open Graph & thumbnail) |
| `featured` | `boolean` | Opsional | Jika `true`, artikel akan disorot di Hero / Latest Posts Section |

---

## Menambahkan Cuplikan Kode & Syntax Highlighting

Nuxt Content secara otomatis melakukan syntax highlighting untuk berbagai bahasa pemrograman:

````markdown
```typescript
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxt/icon'],
})
```
````

---

## Menggunakan Alert & Callout

Kamu dapat menambahkan catatan penting di dalam artikel:

```markdown
> 💡 **Tip:** Gunakan ekstensi VS Code Nuxtr untuk kemudahan menulis komponen dan artikel.
```

