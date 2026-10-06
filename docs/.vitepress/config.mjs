import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Nuxt One Starter',
  titleTemplate: ':title | Nuxt One Starter',
  description: 'Dokumentasi Resmi create-nuxt-one — CLI generator opinionated untuk scaffolding proyek Nuxt 4 modern, aman, dan siap produksi dalam hitungan detik.',
  lang: 'id',

  // Base URL untuk GitHub Pages / Custom Domain
  base: '/',

  // Otomatis men-generate sitemap.xml untuk Google, Baidu, Bing & crawler lainnya
  sitemap: {
    hostname: 'https://nuxt.davingm.com',
  },

  head: [
    // Favicon & Icons
    ['link', { rel: 'icon', type: 'image/png', href: '/image.png' }],
    ['link', { rel: 'shortcut icon', href: '/image.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/image.png' }],
    
    // SEO & Indexing Meta Tags
    ['meta', { name: 'theme-color', content: '#00DC82' }],
    ['meta', { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' }],
    ['meta', { name: 'googlebot', content: 'index, follow' }],
    ['meta', { name: 'baiduspider', content: 'index, follow' }],
    ['meta', { name: 'author', content: 'Davingm' }],
    ['meta', { 
      name: 'keywords', 
      content: 'Nuxt, Nuxt 4, Nuxt 3, Vue, Vue 3, Nuxt Starter, Nuxt Boilerplate, Nuxt Template, create-nuxt-one, Nuxt Auth, Nuxt Blog, Nuxt Content, Drizzle ORM, LibSQL, SQLite, Tailwind CSS, Biome, Vitest, TypeScript, Scaffolding CLI, Web Development' 
    }],
    
    // Open Graph / Facebook / WhatsApp / LinkedIn
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'Nuxt One Starter' }],
    ['meta', { property: 'og:title', content: 'Nuxt One Starter — Generator Proyek Nuxt 4 Modern' }],
    ['meta', { property: 'og:description', content: 'Scaffold proyek Nuxt 4 lengkap dengan pilihan starter Default, Auth (Full-stack), dan Blog/Portofolio dalam hitungan detik.' }],
    ['meta', { property: 'og:image', content: 'https://nuxt.davingm.com/image.png' }],
    ['meta', { property: 'og:image:alt', content: 'Nuxt One Starter Logo & Banner' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { property: 'og:url', content: 'https://nuxt.davingm.com/' }],
    ['meta', { property: 'og:locale', content: 'id_ID' }],

    // Twitter / X Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@davingm' }],
    ['meta', { name: 'twitter:creator', content: '@davingm' }],
    ['meta', { name: 'twitter:title', content: 'Nuxt One Starter — Generator Proyek Nuxt 4' }],
    ['meta', { name: 'twitter:description', content: 'Scaffold proyek Nuxt 4 lengkap dengan pilihan starter Default, Auth, dan Blog dalam hitungan detik.' }],
    ['meta', { name: 'twitter:image', content: 'https://nuxt.davingm.com/image.png' }],

    // Schema.org Structured Data (JSON-LD) for Search Engine Rich Snippets
    [
      'script',
      { type: 'application/ld+json' },
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'create-nuxt-one',
        operatingSystem: 'Windows, macOS, Linux',
        applicationCategory: 'DeveloperApplication',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        description: 'Opinionated Nuxt 4 starter generator and scaffolding tool with Default, Auth, and Blog presets.',
        url: 'https://nuxt.davingm.com',
        author: {
          '@type': 'Person',
          name: 'Davingm',
          url: 'https://davingm.com',
        },
      }),
    ],
  ],

  transformPageData(pageData) {
    const canonicalUrl = `https://nuxt.davingm.com/${pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2')}`
    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push([
      'link',
      { rel: 'canonical', href: canonicalUrl }
    ])
  },

  themeConfig: {
    logo: '/image.png',
    siteTitle: 'Nuxt One',

    nav: [
      { text: 'Panduan', link: '/guide/getting-started' },
      { text: 'Template', link: '/templates/overview' },
      { text: 'CLI Reference', link: '/cli/usage' },
      {
        text: 'v0.1.7',
        items: [
          { text: 'Changelog', link: '/changelog' },
          { text: 'Kontribusi', link: '/contributing' },
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Pengenalan',
          items: [
            { text: 'Apa itu Nuxt Starter?', link: '/guide/what-is' },
            { text: 'Mulai Cepat', link: '/guide/getting-started' },
            { text: 'Persyaratan', link: '/guide/requirements' },
          ]
        },
        {
          text: 'Penggunaan',
          items: [
            { text: 'Membuat Project Baru', link: '/guide/create-project' },
            { text: 'Package Manager', link: '/guide/package-managers' },
            { text: 'Git Integration', link: '/guide/git-integration' },
          ]
        },
      ],
      '/templates/': [
        {
          text: 'Overview & Starter',
          items: [
            { text: 'Overview Template', link: '/templates/overview' },
            { text: 'Template Default', link: '/templates/default' },
          ]
        },
        {
          text: 'Template Auth (Fullstack)',
          collapsed: false,
          items: [
            { text: 'Memulai', link: '/templates/auth/getting-started' },
            { text: 'Struktur Proyek', link: '/templates/auth/project-structure' },
            { text: 'Autentikasi & Sesi', link: '/templates/auth/authentication' },
            { text: 'Database & Migrasi', link: '/templates/auth/database' },
            { text: 'Environment Variables', link: '/templates/auth/environment' },
            { text: 'Testing', link: '/templates/auth/testing' },
            { text: 'Deployment', link: '/templates/auth/deployment' },
          ]
        },
        {
          text: 'Template Blog & Portofolio',
          collapsed: false,
          items: [
            { text: 'Memulai', link: '/templates/blog/getting-started' },
            { text: 'Struktur Proyek', link: '/templates/blog/project-structure' },
            { text: 'Nuxt Content Engine', link: '/templates/blog/content-system' },
            { text: 'Data Portofolio (YAML)', link: '/templates/blog/yaml-collections' },
            { text: 'Menulis Artikel Blog', link: '/templates/blog/writing-articles' },
            { text: 'Komponen UI & Fitur', link: '/templates/blog/components-and-ui' },
            { text: 'Kustomisasi & FAQ', link: '/templates/blog/customization-and-faq' },
          ]
        },
      ],
      '/cli/': [
        {
          text: 'CLI Reference',
          items: [
            { text: 'Penggunaan', link: '/cli/usage' },
            { text: 'Opsi & Prompt', link: '/cli/options' },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/davingm/nuxt-davingm' },
    ],

    footer: {
      message: 'Dirilis di bawah MIT License.',
      copyright: '© 2026 <a href="https://davingm.com">Davingm</a>'
    },

    editLink: {
      pattern: 'https://github.com/davingm/nuxt-davingm/edit/main/docs/:path',
      text: 'Edit halaman ini di GitHub'
    },

    search: {
      provider: 'local'
    },

    docFooter: {
      prev: 'Sebelumnya',
      next: 'Selanjutnya'
    },
  }
})
