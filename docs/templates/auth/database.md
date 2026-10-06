# Database & Migrasi (Template Auth)

Starter kit **Auth** menggunakan **SQLite** via driver modern **`@libsql/client`** dan **Drizzle ORM** untuk type safety query. File database disimpan di `.data/database.sqlite` dan dibuat otomatis saat server pertama kali dijalankan.

---

## Driver `@libsql/client` & SQLite

`@libsql/client` adalah klien database modern berbasis pure ESM yang sangat ringan dan kompatibel penuh dengan SQLite. Driver ini memungkinkan aplikasi berjalan secara lokal menggunakan file SQLite (`file:.data/database.sqlite`) maupun dihubungkan ke serverless distributed database seperti **Turso** cukup dengan mengubah URL di `.env`.

---

## Cara Kerja Inisialisasi Database

Saat `pnpm dev` atau `pnpm build` dijalankan, plugin server Nitro `server/plugins/db.ts` dipanggil otomatis:

```
Server Start (Nitro Hook)
     └─ server/plugins/db.ts
            └─ initDb()
                  ├─ runMigrations()   → membuat tabel jika belum ada
                  └─ DatabaseSeeder.run() → mengisi user admin default jika tabel kosong
```

Pengembang **tidak perlu menjalankan migrasi manual** setiap kali setup awal. Semuanya berjalan otomatis!

---

## Skema Tabel (`server/database/schema.ts`)

Skema didefinisikan secara deklaratif menggunakan Drizzle ORM:

### 1. Tabel `users`

| Kolom | Tipe Data | Keterangan |
|---|---|---|
| `id` | `INTEGER` | Primary Key, Auto Increment |
| `name` | `TEXT` | Nama lengkap pengguna |
| `email` | `TEXT` | Alamat email unik (disimpan lowercase) |
| `password` | `TEXT` | Hashed password menggunakan bcryptjs (12 rounds) |
| `created_at` | `DATETIME` | Waktu registrasi (`CURRENT_TIMESTAMP`) |
| `updated_at` | `DATETIME` | Waktu update profil |

### 2. Tabel `sessions`

| Kolom | Tipe Data | Keterangan |
|---|---|---|
| `id` | `TEXT` | UUID sesi unik |
| `user_id` | `INTEGER` | Foreign Key ke `users.id` (`ON DELETE CASCADE`) |
| `token` | `TEXT` | Token aman yang disimpan pada `httpOnly` cookie |
| `expires_at` | `DATETIME` | Waktu kedaluwarsa sesi (default: 7 hari) |
| `created_at` | `DATETIME` | Waktu login dibuat |

---

## Cara Menambahkan Tabel Baru

Berikut alur praktis menambahkan tabel baru ke dalam proyek:

### Langkah 1 — Definisikan Skema di `server/database/schema.ts`

```typescript
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { users } from "./schema";

export const posts = sqliteTable("posts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  userId: integer("user_id").notNull().references(() => users.id, { onDelete: "cascade" }),
  title: text("title").notNull(),
  content: text("content").notNull(),
  createdAt: text("created_at"),
  updatedAt: text("updated_at"),
});

export type Post = typeof posts.$inferSelect;
export type NewPost = typeof posts.$inferInsert;
```

### Langkah 2 — Tambahkan SQL Migrasi di `server/database/migrations/index.ts`

```typescript
const CREATE_POSTS = `
  CREATE TABLE IF NOT EXISTS posts (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id    INTEGER NOT NULL,
    title      TEXT NOT NULL,
    content    TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  );
`;
```

Tambahkan `CREATE_POSTS` ke dalam fungsi `runMigrations()`:

```typescript
await db.execute(CREATE_USERS);
await db.execute(CREATE_SESSIONS);
await db.execute(CREATE_POSTS); // ← tambahkan di sini
```

Dan daftarkan drop table di `freshDatabase()`:

```typescript
await db.execute("DROP TABLE IF EXISTS posts"); // ← drop tabel anak terlebih dahulu
await db.execute(DROP_SESSIONS);
await db.execute(DROP_USERS);
```

### Langkah 3 — Buat Helper Query di `server/utils/db.ts`

Gunakan klien `@libsql/client` asynchronous yang terintegrasi:

```typescript
export interface PostRecord {
  id: number;
  user_id: number;
  title: string;
  content: string;
  created_at?: string;
}

export async function findPostsByUserId(userId: number): Promise<PostRecord[]> {
  await initDb();
  const conn = getConnection();
  const result = await conn.execute({
    sql: "SELECT * FROM posts WHERE user_id = ? ORDER BY created_at DESC",
    args: [userId],
  });
  return result.rows as unknown as PostRecord[];
}

export async function createPost(userId: number, title: string, content: string): Promise<PostRecord> {
  await initDb();
  const conn = getConnection();
  const result = await conn.execute({
    sql: "INSERT INTO posts (user_id, title, content) VALUES (?, ?, ?)",
    args: [userId, title, content],
  });
  
  const insertedId = Number(result.lastInsertRowid);
  const findResult = await conn.execute({
    sql: "SELECT * FROM posts WHERE id = ? LIMIT 1",
    args: [insertedId],
  });
  return findResult.rows[0] as unknown as PostRecord;
}
```

### Langkah 4 — Buat Endpoint API Nitro

Buat file `server/api/posts/index.get.ts`:

```typescript
export default defineEventHandler(async (event) => {
  const user = await getUserFromEvent(event);
  if (!user) {
    throw createError({ statusCode: 401, statusMessage: "Unauthorized" });
  }

  const posts = await findPostsByUserId(user.id);
  return { posts };
});
```

---

## Perintah Database CLI

Proyek menyertakan skrip CLI berbasis `tsx` untuk manajemen database:

```bash
# Jalankan migrasi tabel
pnpm db:migrate

# Jalankan seeder data awal
pnpm db:seed

# Reset database (drop semua tabel + migrasi ulang)
pnpm db:fresh

# Reset database sekaligus jalankan seeder
pnpm db:fresh:seed
```

---

## Menambahkan Seeder Baru

Buat file seeder di `server/database/seeders/PostSeeder.ts`:

```typescript
import { Seeder } from "./Seeder";
import { createPost, findUserByEmail } from "../../utils/db";

export class PostSeeder extends Seeder {
  async run(): Promise<void> {
    console.log("  [PostSeeder] Membuat data postingan contoh...");
    const admin = await findUserByEmail("admin@example.com");
    if (admin) {
      await createPost(admin.id, "Halo Nuxt 4", "Ini adalah postingan pertama dari seeder.");
    }
    console.log("  [PostSeeder] Selesai.");
  }
}
```

Daftarkan di `server/database/seeders/DatabaseSeeder.ts`:

```typescript
import { PostSeeder } from "./PostSeeder";

export class DatabaseSeeder extends Seeder {
  async run(): Promise<void> {
    await this.call([
      UserSeeder,
      PostSeeder, // ← tambahkan di sini
    ]);
  }
}
```

---

## FAQ Database & Driver

### Mengapa memilih `@libsql/client` daripada native SQLite bindings?
`@libsql/client` adalah library pure TypeScript/ESM yang tidak memerlukan kompilasi C++ (`node-gyp`). Ini membuatnya berjalan mulus di Windows, Linux, macOS, Docker container, dan lingkungan serverless tanpa masalah error binary mismatch.

### Di mana file database disimpan?
File database disimpan di `.data/database.sqlite`. Folder `.data/` sudah di-ignore oleh Git sehingga database lokal kamu tidak akan terunggah ke repositori publik.
