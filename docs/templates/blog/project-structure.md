# Struktur Proyek (Template Blog)

Berikut adalah peta lengkap struktur direktori dan file dalam template **Blog & Portofolio**.

```
my-blog/
├── app/                              # Kode aplikasi Nuxt 4
│   ├── assets/
│   │   └── css/
│   │       └── tailwind.css          # Styling Tailwind & Geist font import
│   ├── components/                   # Komponen Vue terstruktur
│   │   ├── AppFooter.vue             # Footer dengan link status & hak cipta
│   │   ├── AppHeader.vue             # Header sticky dengan navigasi & search trigger
│   │   ├── QuickSearch.vue           # Command palette modal (Ctrl+K)
│   │   ├── section/                  # Section komponen halaman beranda
│   │   │   ├── ContactSection.vue
│   │   │   ├── ExperienceSection.vue
│   │   │   ├── FaqSection.vue
│   │   │   ├── FeaturedProjectsSection.vue
│   │   │   ├── HeroSection.vue
│   │   │   ├── LatestPostsSection.vue
│   │   │   ├── SkillsSection.vue
│   │   │   └── TestimonialsSection.vue
│   │   └── ui/                       # Komponen UI atomik
│   │       ├── Accordion.vue
│   │       ├── Badge.vue
│   │       ├── Button.vue
│   │       ├── Card.vue
│   │       ├── CopyButton.vue
│   │       ├── ImageCarousel.vue
│   │       ├── Kbd.vue
│   │       ├── Modal.vue
│   │       └── ThemeToggle.vue
│   ├── composables/                  # Nuxt auto-imported composables
│   │   ├── useApi.ts                 # HTTP fetch wrapper
│   │   ├── usePortfolio.ts           # Fallback profile & title helper
│   │   ├── useTheme.ts               # Theme state helper
│   │   └── useUser.ts                # Wrapper query typed Nuxt Content collections
│   ├── layouts/
│   │   └── default.vue               # Layout default dengan Header, Footer & Search
│   ├── pages/                        # Rute halaman aplikasi
│   │   ├── index.vue                 # Halaman beranda (merender semua Section)
│   │   ├── projects.vue              # Halaman katalog seluruh proyek & filter kategori
│   │   ├── gallery.vue               # Halaman galeri foto & deskripsi
│   │   ├── friends.vue               # Halaman jaringan teman / link web sahabat
│   │   └── blog/
│   │       ├── index.vue             # Halaman arsip artikel blog & tag
│   │       └── [...slug].vue         # Halaman pembaca konten artikel markdown
│   ├── types/
│   │   └── user.ts                   # Antarmuka model data TypeScript
│   └── app.vue                       # Root Vue component
├── content/                          # Sumber konten (Nuxt Content v3)
│   ├── blog/                         # Artikel blog berformat Markdown (.md)
│   └── www/                          # Data konfigurasi portofolio format YAML
│       ├── experience.yml            # Riwayat pekerjaan & pengalaman
│       ├── friends.yml               # Daftar teman & tautan web
│       ├── gallery.yml               # Galeri fotografi / momen
│       ├── overview.yml              # Teks Hero, skills, FAQ, kontak, testimoni
│       ├── profile.yml               # Biodata personal & avatar
│       ├── projects.yml              # Detail semua proyek & repository
│       ├── site.yml                  # Metadata merek, menu navigasi, search
│       └── social.yml                # Tautan media sosial
├── public/                           # Aset statis publik (favicon, robots.txt)
├── test/                             # Unit tests dengan Vitest
│   ├── setup.ts
│   └── unit/
│       ├── usePortfolio.spec.ts
│       └── useUser.spec.ts
├── .biome.json                       # Konfigurasi linter & formatter Biome
├── content.config.ts                 # Definisi skema Zod Nuxt Content v3
├── nuxt.config.ts                    # Konfigurasi modul Nuxt 4
├── package.json
└── tailwind.config.ts                # Konfigurasi styling & typography
```

---

## File Konfigurasi Kunci

### 1. `content.config.ts`
File ini mendefinisikan koleksi Nuxt Content v3 menggunakan skema validasi **Zod**. Setiap koleksi seperti `blog`, `wwwProfile`, `wwwProjects` dideklarasikan dengan tipe skema yang ketat. Jika ada format YAML atau frontmatter Markdown yang salah, sistem akan memberikan pesan error yang jelas saat build.

### 2. `nuxt.config.ts`
Mengaktifkan modul:
- `@nuxt/content`: Content engine
- `@nuxt/icon`: Icon loader
- `@nuxtjs/color-mode`: Pengatur tema gelap/terang
- Konfigurasi `nitro.prerender` untuk optimasi SSG crawling.

### 3. `app/composables/useUser.ts`
Menyediakan fungsi-fungsi composable asynchronous berorientasi Nuxt Content v3:
- `useUserProfile()` → membaca `content/www/profile.yml`
- `useUserSocial()` → membaca `content/www/social.yml`
- `useUserSite()` → membaca `content/www/site.yml`
- `useUserOverview()` → membaca `content/www/overview.yml`
- `useUserExperience()` → membaca `content/www/experience.yml`
- `useUserProjects()` → membaca `content/www/projects.yml`
- `useUserGallery()` → membaca `content/www/gallery.yml`
- `useUserFriends()` → membaca `content/www/friends.yml`

