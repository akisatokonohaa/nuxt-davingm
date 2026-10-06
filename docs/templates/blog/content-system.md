# Nuxt Content Engine & Skema (Template Blog)

Starter Blog & Portofolio menggunakan **Nuxt Content v3** — content engine modern untuk ekosistem Nuxt 4 yang mengubah file Markdown dan data YAML menjadi database internal berperforma tinggi dengan validasi skema berbasis **Zod**.

---

## Konsep Nuxt Content v3

Berbeda dengan Nuxt Content v2 yang menggunakan `queryContent()`, pada **Nuxt Content v3**:
1. Setiap koleksi data didefinisikan secara eksplisit di file root `content.config.ts` menggunakan `defineCollection()`.
2. Terdapat 2 tipe koleksi utama:
   - `type: 'page'` — Untuk dokumen Markdown konten berhalaman (seperti artikel blog).
   - `type: 'data'` — Untuk dokumen data struktural (seperti file YAML atau JSON).
3. Data di-query menggunakan fungsi bawaan `queryCollection('namaKoleksi')`.

---

## Definisi Koleksi di `content.config.ts`

Berikut adalah cuplikan deklarasi koleksi di `content.config.ts`:

```typescript
import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    // 1. Koleksi Artikel Blog (Markdown)
    blog: defineCollection({
      type: "page",
      source: "blog/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        author: z.object({
          name: z.string(),
          avatar: z.string(),
          role: z.string().optional(),
        }).optional(),
        tags: z.array(z.string()).default([]),
        readTime: z.string().optional(),
        image: z.string().optional(),
        featured: z.boolean().default(false),
      }),
    }),

    // 2. Koleksi Profil Pengembang (YAML)
    wwwProfile: defineCollection({
      type: "data",
      source: "www/profile.yml",
      schema: z.object({
        name: z.string(),
        handle: z.string(),
        role: z.string(),
        bio: z.string(),
        location: z.string(),
        email: z.string(),
        avatar: z.string(),
        availability: z.string(),
      }),
    }),

    // 3. Koleksi Pengalaman Kerja
    wwwExperience: defineCollection({
      type: "data",
      source: "www/experience.yml",
      schema: z.object({
        items: z.array(
          z.object({
            role: z.string(),
            company: z.string(),
            location: z.string(),
            period: z.string(),
            logo: z.string().optional(),
            description: z.string(),
            achievements: z.array(z.string()),
            skills: z.array(z.string()),
          })
        ),
      }),
    }),

    // Koleksi lainnya: wwwSocial, wwwSite, wwwOverview, wwwProjects, wwwGallery, wwwFriends...
  },
});
```

---

## Mengambil Data di Komponen Vue

Semua pemanggilan data telah dibungkus rapi dalam composable `app/composables/useUser.ts`:

```typescript
// Contoh di useUser.ts:
export const useUserProfile = () =>
  queryCollection("wwwProfile").first() as Promise<UserProfile>;

export const useUserExperience = async (): Promise<UserExperience[]> => {
  const data = await queryCollection("wwwExperience").first();
  return (data as any)?.items ?? [];
};
```

### Contoh Pemakaian di Komponen Vue (`HeroSection.vue`):

```vue
<script setup lang="ts">
const profile = await useUserProfile();
const social = await useUserSocial();
</script>

<template>
  <section>
    <img :src="profile.avatar" :alt="profile.name" class="w-20 h-20 rounded-full" />
    <h1 class="text-3xl font-bold">{{ profile.name }}</h1>
    <p class="text-neutral-500">{{ profile.role }} · {{ profile.location }}</p>
    <p class="mt-4">{{ profile.bio }}</p>
    
    <div class="flex gap-4 mt-6">
      <a :href="social.github" target="_blank">GitHub</a>
      <a :href="social.twitter" target="_blank">Twitter</a>
    </div>
  </section>
</template>
```

---

## Mengambil Artikel Blog

Untuk mengambil daftar artikel blog di halaman `app/pages/blog/index.vue`:

```vue
<script setup lang="ts">
const { data: posts } = await useAsyncData('blog-posts', () =>
  queryCollection('blog').order('date', 'DESC').all()
);
</script>
```

Dan untuk merender halaman detail artikel di `app/pages/blog/[...slug].vue`:

```vue
<script setup lang="ts">
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () =>
  queryCollection('blog').path(route.path).first()
);
</script>

<template>
  <main v-if="page">
    <ContentRenderer :value="page" class="prose dark:prose-invert max-w-none" />
  </main>
</template>
```

