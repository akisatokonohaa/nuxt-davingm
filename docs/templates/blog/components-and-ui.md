# Komponen UI & Fitur (Template Blog)

Template Blog & Portofolio dilengkapi dengan sekumpulan komponen antarmuka yang dirancang secara modular dan dapat digunakan ulang di seluruh halaman.

---

## 1. QuickSearch Command Palette (`QuickSearch.vue`)

Fitur pencarian instan berbasis popup keyboard shortcut (`Ctrl+K` di Windows/Linux atau `Cmd+K` di macOS).

### Cara Kerja:
1. `AppHeader.vue` menyertakan tombol trigger pencarian.
2. Listener global menangani kombinasi tombol `Ctrl+K` / `Cmd+K` dan `Escape`.
3. QuickSearch mengambil daftar halaman, tautan, dan kategori dari `site.yml` (`search.pages`).
4. Pengguna dapat mengetikkan kata kunci untuk memfilter halaman tujuan secara realtime dan berpindah halaman dengan tombol `Enter`.

---

## 2. Section Components (`app/components/section/`)

Halaman beranda (`app/pages/index.vue`) disusun dari serangkaian section yang membaca data langsung dari Nuxt Content collections:

| Komponen Section | Deskripsi | Sumber Data |
|---|---|---|
| `<SectionHeroSection />` | Bagian pembuka dengan bio, avatar status, tombol aksi, dan banner CLI | `overview.yml` & `profile.yml` |
| `<SectionSkillsSection />` | Grid kategori keahlian teknis dengan icon dan penanda highlight | `overview.yml` (`skills`) |
| `<SectionFeaturedProjectsSection />` | Kartu sorotan proyek terbaik lengkap dengan tag dan link GitHub/Demo | `projects.yml` |
| `<SectionExperienceSection />` | Lini masa riwayat karier, pencapaian, dan teknologi yang digunakan | `experience.yml` |
| `<SectionLatestPostsSection />` | Daftar artikel blog terbaru yang telah dirilis | Koleksi `blog` Markdown |
| `<SectionTestimonialsSection />` | Kutipan rekomendasi dan testimoni klien/rekan | `overview.yml` (`testimonials`) |
| `<SectionFaqSection />` | Daftar tanya-jawab interaktif dengan komponen Accordion | `overview.yml` (`faq`) |
| `<SectionContactSection />` | Tombol kontak sosial dan tombol salin email instan (Copy-to-Clipboard) | `overview.yml` & `profile.yml` |

---

## 3. Komponen UI Atomik (`app/components/ui/`)

Komponen UI atomik terletak di `app/components/ui/`:

- **`Accordion.vue`**: Menampilkan item expandable/collapsible dengan animasi halus. Digunakan pada `FaqSection`.
- **`ThemeToggle.vue`**: Tombol switch tema yang berganti antara Dark mode, Light mode, dan preferensi System via `@nuxtjs/color-mode`.
- **`CopyButton.vue`**: Tombol utilitas yang menyalin teks ke clipboard dengan indikator visual checklist saat berhasil.
- **`ImageCarousel.vue`**: Komponen geser foto interaktif untuk halaman galeri atau cuplikan tangkapan layar proyek.
- **`Badge.vue` & `Button.vue`**: Komponen tombol dan badge status dengan varian warna Tailwind yang konsisten.
- **`Modal.vue`**: Dialog pop-up yang dapat diakses dengan tombol penutup dan backdrop blur. Digunakan pada formulir submit pertukaran link teman di `friends.vue`.
- **`Kbd.vue`**: Label keyboard shortcut bergaya retro yang rapi untuk menampilkan `Ctrl + K`.

