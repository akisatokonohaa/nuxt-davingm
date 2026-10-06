# Opsi & Prompt

Detail setiap prompt yang ditampilkan oleh CLI beserta opsi yang tersedia.

## Prompt 1: Pilih Template

```
◆  Template mana yang ingin Anda gunakan?
```

**Tipe:** Single select  
**Opsi:** Daftar folder yang ada di direktori `templates/`

| Nilai | Label | Hint | Keterangan |
|---|---|---|---|
| `default` | Default | "Davingm recommended starter" | Starter clean Nuxt 4 standar |
| `auth` | Auth | — | Full-stack Nuxt 4 dengan Drizzle ORM, SQLite/LibSQL & Auth Session |
| `blog` | Blog | — | Portofolio & Blog bertenaga Nuxt Content v3 & YAML data |

Nama template diformat otomatis oleh CLI: `my-template` → `My Template`.

---

## Prompt 2: Lokasi Project

```
◆  Di mana project ingin dibuat?
```

**Tipe:** Text input  
**Default:** `./my-project`

**Validasi:**
- Tidak boleh kosong
- Tidak boleh menggunakan `.` (folder saat ini)
- Nama folder hanya boleh mengandung: huruf, angka, `-`, `_`
- Tidak boleh sama dengan direktori kerja saat ini

---

## Prompt 3: Folder Sudah Ada (Kondisional)

Hanya muncul jika folder tujuan sudah ada dan tidak kosong.

```
◆  Folder "[path]" sudah ada. Apa yang ingin dilakukan?
```

**Tipe:** Single select

| Nilai | Label | Hint |
|---|---|---|
| `replace` | Replace | "Hapus isi folder dan buat project baru" |
| `cancel` | Cancel | "Batalkan pembuatan project" |

---

## Prompt 4: Package Manager

```
◆  Package manager mana yang ingin digunakan?
```

**Tipe:** Single select  
**Opsi:** Hanya package manager yang terdeteksi di PATH sistem kamu

| Nilai | Label | Deteksi |
|---|---|---|
| `pnpm` | pnpm | `which pnpm` |
| `npm` | npm | `which npm` |
| `yarn` | Yarn | `which yarn` |
| `bun` | Bun | `which bun` |

---

## Prompt 5: Initialize Git (Kondisional)

Hanya muncul jika binary `git` terdeteksi di sistem kamu.

```
◆  Initialize git repository?
```

**Tipe:** Confirm (Yes/No)  
**Default:** `Yes`

Jika `git` tidak ditemukan di environment sistem, langkah ini dilewati otomatis dengan notifikasi:

```
⚠  Git tidak ditemukan. Repository Git akan dilewati.
```

---

## Membatalkan Prompt

Tekan `Ctrl + C` kapan saja untuk membatalkan proses. CLI akan menampilkan:

```
◆  Dibatalkan.
```

dan keluar dengan exit code `0`.
