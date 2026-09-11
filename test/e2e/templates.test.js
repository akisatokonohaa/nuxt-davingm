import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { describe, it, expect, beforeAll } from 'vitest';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '../../');
const templatesDir = path.join(rootDir, 'templates');
const testOutputDir = path.join(rootDir, 'test/.davingm');

describe('Templates Verification', () => {
  const templates = fs.readdirSync(templatesDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);

  // Run tests concurrently for each template found
  it.concurrent.each(templates)('should build template: %s', (templateName) => {
    const sourcePath = path.join(templatesDir, templateName);
    const targetPath = path.join(testOutputDir, `test-${templateName}`);

    // 0. Bersihkan folder test HANYA untuk template ini (bukan hapus semua)
    // Ini lebih baik agar saat Anda memfilter test (misal: pnpm test -t auth), template lain tidak terhapus
    if (fs.existsSync(targetPath)) {
      fs.rmSync(targetPath, { recursive: true, force: true });
    }
    fs.mkdirSync(targetPath, { recursive: true });

    // 1. Copy template to the test directory, ignoring built/installed artifacts
    fs.cpSync(sourcePath, targetPath, {
      recursive: true,
      filter: (source) => {
        const name = path.basename(source);
        return !['node_modules', '.nuxt', '.output', 'dist', '.git'].includes(name);
      }
    });

    // 2. Install dependencies menggunakan pnpm
    // (pnpm JAUH lebih cepat dan hemat storage karena menggunakan global store,
    // sangat penting jika jumlah template mencapai puluhan di masa depan)
    execSync('pnpm install --no-audit --no-fund', { cwd: targetPath, stdio: 'pipe' });

    // 3. Build the project to verify it compiles correctly
    execSync('npm run build', { cwd: targetPath, stdio: 'pipe' });

    // If it reaches here without execSync throwing an error, the template works!
    expect(true).toBe(true);
  }, 180000); // 3 minutes timeout
});
