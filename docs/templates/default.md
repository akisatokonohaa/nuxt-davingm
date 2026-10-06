# Template Default

Template clean dan terstruktur — direkomendasikan sebagai pondasi awal untuk sebagian besar proyek Nuxt 4.

## Deskripsi

Template **Default** adalah opini starter yang dirancang khusus untuk membangun aplikasi frontend Nuxt 4 modern. Template ini mengadopsi arsitektur composable service yang rapi, tooling linter & testing berkecepatan tinggi, serta konfigurasi deployment multi-platform (Vercel, Netlify, Docker).

---

## Tech Stack

| Teknologi | Kategori | Keterangan |
|---|---|---|
| [Nuxt 4](https://nuxt.com) | Framework | Full-stack Vue 3 framework dengan auto-imports |
| [Vue 3](https://vuejs.org) | UI Framework | Composition API & Script Setup |
| [TypeScript](https://typescriptlang.org) | Bahasa | Type safety & IntelliSense penuh |
| [Tailwind CSS v3](https://tailwindcss.com) | Styling | Utility-first CSS dengan plugin Forms |
| [Biome](https://biomejs.dev) | Tooling | Linter & Formatter Rust-based pengganti ESLint + Prettier |
| [Vitest](https://vitest.dev) | Testing | Unit & integration testing dengan Vue Test Utils & JSDOM |
| [@nuxt/icon](https://github.com/nuxt/icon) | Icons | Server & client icon bundle (Heroicons & Simple Icons) |
| [DevContainer](https://containers.dev/) | Dev Environment | Environment Docker konsisten untuk VS Code |
| [GitHub Actions](https://docs.github.com/en/actions) | CI/CD | Pipeline otomatis lint, test, dan build |

---

## Struktur Folder Proyek

```
my-project/
├── .devcontainer/              # Konfigurasi container Docker VS Code
│   ├── devcontainer.json
│   └── Dockerfile
├── .github/                    # Template issue, PR & workflow CI
│   ├── ISSUE_TEMPLATE/
│   ├── workflows/
│   │   └── ci.yml
│   └── PULL_REQUEST_TEMPLATE.md
├── app/                        # Direktori utama kode aplikasi Nuxt 4
│   ├── assets/
│   │   └── css/
│   │       └── tailwind.css    # Definisi CSS Tailwind global
│   ├── components/             # Komponen UI Vue (Auto-imported)
│   │   ├── AppFooter.vue
│   │   ├── AppHeader.vue
│   │   ├── HeroSection.vue
│   │   ├── NextSteps.vue
│   │   └── UserList.vue
│   ├── composables/            # State & Composable Service (Auto-imported)
│   │   ├── useApi.ts           # Wrapper Fetch API terstandarisasi
│   │   ├── useTheme.ts         # Composable tema aplikasi
│   │   └── useUserService.ts   # Contoh HTTP service terisolasi
│   ├── layouts/
│   │   └── default.vue         # Layout standar dengan Header & Footer
│   ├── pages/
│   │   └── index.vue           # Halaman utama aplikasi
│   ├── types/
│   │   └── user.ts             # Definisi antarmuka TypeScript
│   └── app.vue                 # Root component aplikasi
├── docs/                       # Dokumentasi internal proyek
│   ├── api.md
│   ├── DEPLOYMENT.md
│   ├── PRODUCTION_CONTAINER.md
│   └── STARTER.md
├── public/                     # File statis publik (favicon, robots.txt)
├── test/                       # Unit testing Vitest
│   ├── setup.ts
│   └── unit/
│       └── useUserService.spec.ts
├── .biome.json                 # Konfigurasi linter & formatter Biome
├── .env.example                # Template konfigurasi variabel lingkungan
├── nuxt.config.ts              # Konfigurasi utama Nuxt
├── package.json
├── tailwind.config.ts          # Konfigurasi tema Tailwind CSS
├── tsconfig.json
├── vercel.json                 # Konfigurasi deployment Vercel
└── vitest.config.ts            # Konfigurasi testing Vitest
```

---

## Pola Composable Service (`useApi` & `useUserService`)

Template Default mengadopsi pola pemisahan logika fetching ke dalam composable service. Ini membuat pemanggilan data di komponen UI menjadi sangat bersih dan mudah diuji (*unit test*).

### 1. File `app/composables/useApi.ts`
Wrapper fetch bawaan Nuxt (`$fetch` / `useFetch`) yang membaca base URL dari `runtimeConfig.public.apiBase`:

```typescript
export const useApi = () => {
  const config = useRuntimeConfig()
  const baseURL = config.public.apiBase || ''

  return {
    get: <T>(endpoint: string) => $fetch<T>(`${baseURL}${endpoint}`),
    post: <T>(endpoint: string, body: any) => $fetch<T>(`${baseURL}${endpoint}`, { method: 'POST', body }),
  }
}
```

### 2. File `app/composables/useUserService.ts`
Service khusus untuk mengelola endpoint pengguna:

```typescript
import type { User } from '~/types/user'

export const useUserService = () => {
  const api = useApi()

  return {
    getAll: () => api.get<User[]>('/users'),
    getById: (id: string | number) => api.get<User>(`/users/${id}`),
  }
}
```

### 3. Pemakaian di Halaman `app/pages/index.vue`

```vue
<script setup lang="ts">
const userService = useUserService()

// Menggunakan useAsyncData untuk SSR yang optimal
const { data: users, pending, error } = await useAsyncData('users', () =>
  userService.getAll()
)
</script>

<template>
  <div>
    <div v-if="pending">Memuat data pengguna...</div>
    <div v-else-if="error">Terjadi kesalahan: {{ error.message }}</div>
    <UserList v-else :users="users" />
  </div>
</template>
```

---

## Bagian yang Bisa Diedit / Dikustomisasi Pengguna

1. **Variabel Lingkungan (`.env`)**:
   Salin `.env.example` ke `.env` dan atur URL backend API kamu:
   ```env
   API_BASE=https://api.domainkamu.com/v1
   ```
2. **Definisi Type TypeScript (`app/types/`)**:
   Tambahkan file model data seperti `product.ts`, `order.ts`, dll.
3. **Membuat Composable Service Baru (`app/composables/`)**:
   Misal `useProductService.ts` untuk menangani API katalog produk.
4. **Desain & Tema (`tailwind.config.ts`)**:
   Kustomisasi warna merek, font, dan breakpoints di `tailwind.config.ts`.
5. **Halaman & Navigasi (`app/pages/` & `app/layouts/`)**:
   Tambahkan file seperti `app/pages/about.vue`, `app/pages/products/[id].vue` untuk routing dinamis.

---

## Perintah CLI yang Tersedia

```bash
# Menjalankan server development (http://localhost:3000)
pnpm dev

# Build aplikasi untuk production
pnpm build

# Preview hasil build production secara lokal
pnpm preview

# Format kode dengan Biome
pnpm format

# Cek linting dan error statis dengan Biome
pnpm lint

# Menjalankan unit test Vitest
pnpm test

# Menjalankan test sekali (CI mode)
pnpm test:run

# Menjalankan test dengan antarmuka UI interaktif
pnpm test:ui
```

---

## FAQ Template Default

### Di mana saya harus meletakkan komponen Vue baru?
Letakkan di folder `app/components/`. Nuxt 4 akan otomatis mengimpor komponen tanpa perlu menulis `import MyComponent from '...'`.

### Bagaimana cara menambahkan icon baru?
Starter menggunakan modul `@nuxt/icon`. Kamu bisa langsung memakai ribuan icon dari Heroicons atau Simple Icons:
```vue
<Icon name="heroicons:bolt" class="w-6 h-6 text-yellow-500" />
<Icon name="simple-icons:github" class="w-6 h-6 text-neutral-800" />
```

### Bagaimana cara menjalankan test dengan Vitest?
Jalankan `pnpm test`. File konfigurasi ada di `vitest.config.ts` dan contoh pengujian service dengan mock API ada di `test/unit/useUserService.spec.ts`.
