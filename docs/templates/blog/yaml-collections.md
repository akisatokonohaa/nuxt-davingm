# Data Portofolio (YAML Collections)

Seluruh informasi dan konten website portofolio dikelola secara terpusat melalui file-file YAML di dalam folder `content/www/`. Kamu dapat menyesuaikan seluruh teks, riwayat kerja, katalog proyek, FAQ, dan media sosial cukup dengan mengedit file YAML tersebut.

---

## Daftar File Konfigurasi YAML

| File YAML | Deskripsi & Isi |
|---|---|
| [`profile.yml`](#1-profileyml) | Identitas pengembang, peran, bio singkat, avatar, status ketersediaan kerja |
| [`social.yml`](#2-socialyml) | Tautan akun GitHub, Twitter/X, LinkedIn |
| [`site.yml`](#3-siteyml) | Nama merek, menu navigasi, hak cipta footer, daftar search page |
| [`overview.yml`](#4-overviewyml) | Teks Hero, kategori keahlian (*skills*), FAQ, testimoni, aksi kontak |
| [`experience.yml`](#5-experienceyml) | Riwayat karier pekerjaan, deskripsi, pencapaian & tech stack |
| [`projects.yml`](#6-projectsyml) | Katalog portofolio proyek, demo live, link repo GitHub, tag, status |
| [`gallery.yml`](#7-galleryyml) | Galeri foto, lokasi, kamera yang digunakan, deskripsi momen |
| [`friends.yml`](#8-friendsyml) | Tautan jejaring teman/kolega dan template pengajuan PR pertukaran link |

---

## 1. `profile.yml`

Menyimpan data profil utama pengembang:

```yaml
name: "Davin"
handle: "@davingm"
role: "Frontend Engineer & CLI Creator"
bio: "Membangun pengalaman web minimalis, perkakas ekosistem Nuxt, dan otomatisasi workflow DevOps."
location: "Jakarta, ID (UTC+7)"
email: "davin@davingm.com"
avatar: "https://github.com/davingm.png"
availability: "Available for Projects" # Status badge di navbar / hero
```

---

## 2. `social.yml`

Tautan akun media sosial yang otomatis dipakai oleh tombol sosial di header, footer, dan contact section:

```yaml
github: "https://github.com/davingm"
twitter: "https://x.com/davingm"
linkedin: "https://linkedin.com/in/davingm"
```

---

## 3. `site.yml`

Konfigurasi merek situs, menu navigasi atas, footer, dan item QuickSearch:

```yaml
brandName: "Davingm"
brandDomain: "davingm.com"
version: "4.0.0"
cliRepoUrl: "https://github.com/davingm/nuxt-davingm"

seo:
  title: "Davin — Portfolio & Blog"
  description: "Personal website, projects, and technical writing by Davin."

nav:
  - label: "Proyek"
    to: "/projects"
  - label: "Blog"
    to: "/blog"
  - label: "Galeri"
    to: "/gallery"
  - label: "Teman"
    to: "/friends"

footer:
  status: "All systems normal"
  credit: "Built with Nuxt 4 & Nuxt Content v3"
  links:
    - label: "Source"
      to: "https://github.com/davingm/nuxt-davingm"
    - label: "Sponsor"
      to: "https://davingm.com/sponsor"

search:
  placeholder: "Cari halaman, proyek, artikel..."
  empty: "Tidak ditemukan hasil pencarian."
  trigger: "Cari..."
  pages:
    - title: "Beranda"
      to: "/"
      icon: "lucide:home"
      category: "Navigasi"
    - title: "Katalog Proyek"
      to: "/projects"
      icon: "lucide:folder-git-2"
      category: "Navigasi"
    - title: "Artikel Blog"
      to: "/blog"
      icon: "lucide:book-open"
      category: "Navigasi"
```

---

## 4. `overview.yml`

Mengontrol konten halaman beranda utama (Hero, Skills, Testimonials, FAQ, Contact):

```yaml
seo:
  title: "Davin — Frontend Engineer & Creator"
  description: "Selamat datang di website personal Davin."

hero:
  heading: "Membangun perangkat lunak yang cepat, sederhana, dan elegan."
  bio: "Saya seorang insinyur web yang fokus pada ekosistem Vue/Nuxt, developer tools, dan antarmuka minimalis."
  cli:
    label: "CLI Resmi"
    description: "Scaffold Nuxt 4 dalam hitungan detik"
    command: "npx create-nuxt-one"
  actions:
    - label: "Lihat Proyek"
      to: "/projects"
      variant: "primary"
    - label: "Hubungi Saya"
      to: "#contact"
      variant: "secondary"

skills:
  heading: "Keahlian & Teknologi"
  subheading: "Teknologi yang biasa saya gunakan setiap hari untuk membangun produk."
  categories:
    - title: "Frontend"
      icon: "lucide:layout"
      description: "Pengembangan antarmuka reaktif"
      skills:
        - name: "Vue 3 / Nuxt 4"
          icon: "simple-icons:nuxtdotjs"
          highlight: true
        - name: "Tailwind CSS"
          icon: "simple-icons:tailwindcss"
        - name: "TypeScript"
          icon: "simple-icons:typescript"

testimonials:
  heading: "Testimoni & Rekomendasi"
  subheading: "Apa yang dikatakan rekan kerja dan klien."
  items:
    - quote: "Davin mampu menerjemahkan ide kompleks menjadi antarmuka Nuxt yang cepat dan intuitif."
      author: "Alex"
      role: "Lead Engineer"
      company: "Tech Corp"
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100"

faq:
  heading: "Pertanyaan yang Sering Diajukan"
  subheading: "Jawaban untuk beberapa hal umum seputar kolaborasi dan proyek."
  items:
    - title: "Apakah kamu menerima pekerjaan freelance atau konsultasi?"
      content: "Ya, saya terbuka untuk proyek freelance terpilih, konsultasi arsitektur Nuxt, dan kolaborasi open source."
    - title: "Tech stack apa yang menjadi spesialisasi utamamu?"
      content: "Spesialisasi utama saya adalah Nuxt 4, Vue 3, Tailwind CSS, TypeScript, dan arsitektur backend Nitro / Node.js."

contact:
  heading: "Mari Berkolaborasi"
  subheading: "Punya ide proyek menarik atau ingin berdiskusi? Jangan ragu untuk menyapa!"
  actions:
    copyEmail: "Salin Email"
    copyEmailSuccess: "Email Disalin!"
    sendEmail: "Kirim Email"
    dmTwitter: "Kirim Pesan di X"
    github: "Lihat GitHub"
```

---

## 5. `experience.yml`

Menyimpan lini masa karier profesional kamu:

```yaml
items:
  - role: "Senior Frontend Engineer"
    company: "Acme Inc."
    location: "Remote"
    period: "2024 — Sekarang"
    logo: "https://example.com/logo.png"
    description: "Memimpin arsitektur frontend web aplikasi berskala besar menggunakan Nuxt 4 dan micro-frontends."
    achievements:
      - "Meningkatkan skor performa Lighthouse dari 68 menjadi 98."
      - "Mengurangi waktu build CI/CD sebesar 40% dengan integrasi Biome dan Turborepo."
    skills:
      - "Nuxt 4"
      - "TypeScript"
      - "Tailwind CSS"
      - "GraphQL"
```

---

## 6. `projects.yml`

Katalog semua portofolio proyek kamu untuk halaman `/projects`:

```yaml
categories:
  - "Semua"
  - "Open Source"
  - "Web App"
  - "CLI Tools"

searchPlaceholder: "Cari proyek berdasarkan nama atau teknologi..."
emptyState: "Tidak ada proyek yang sesuai dengan kriteria."

actions:
  liveDemo: "Live Demo"
  source: "Source Code"

items:
  - title: "create-nuxt-one"
    description: "CLI generator opinionated untuk scaffolding Nuxt 4 starter instan."
    category: "CLI Tools"
    tags: ["Node.js", "CLI", "Nuxt 4", "Clack"]
    stars: 120
    demoUrl: "https://nuxt.davingm.com"
    githubUrl: "https://github.com/davingm/nuxt-davingm"
    highlights:
      - "Mendukung multi package manager (pnpm, npm, yarn, bun)."
      - "3 template resmi dengan auto-migrasi database dan Nuxt Content v3."
    status: "Active" # Pilihan status: Active | Maintained | Beta
```

---

## 7. `gallery.yml` & `friends.yml`

- **`gallery.yml`**: Berisi foto-foto kegiatan/fotografi dengan metadata kamera, tanggal, dan lokasi.
- **`friends.yml`**: Berisi daftar sahabat pengembang lain beserta tautan situs mereka dan formulir modal petunjuk submit PR untuk bertukar backlink!

