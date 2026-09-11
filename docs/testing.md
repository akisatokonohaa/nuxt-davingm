# Testing Mechanism

Davingm Nuxt Starter uses an automated end-to-end (E2E) testing mechanism to ensure all templates are healthy and buildable.

## Overview

We use [Vitest](https://vitest.dev/) to execute concurrent tests for every project inside the `templates` directory. This ensures that:
1. All templates can be copied successfully without leaking artifacts.
2. The package dependencies install seamlessly without errors.
3. The Nuxt build process (`nuxt build`) succeeds.

## How to Run the Tests

To run the template verification tests locally, execute the following command in the root directory:

```bash
npm run test
# or
pnpm test
```

### What happens behind the scenes?

When you run the test command:
1. Vitest discovers `test/e2e/templates.test.js`.
2. The test runner loops through all folders inside the `templates/` directory.
3. For each template, it creates a temporary clone inside `test/.davingm/test-<template-name>`.
4. It runs `pnpm install` and `npm run build` within that temporary directory to simulate a real-world user scaffolding and building the application.
5. Once complete, Vitest provides an audit report in the terminal.

## Error Handling & Interactive Output

Because we are using **Vitest**, the terminal output acts like an interactive checklist.
- **Concurrent Execution**: All templates run at the same time.
- **Isolasi Error**: Jika ada 1 template yang *error*, pengujian untuk template tersebut akan ditandai dengan **silang merah (❌)**, tetapi template lain yang sedang berjalan **akan tetap dilanjutkan** hingga selesai.
- **Detail Error**: Jika sebuah template gagal di tahap instalasi atau *build*, Vitest akan langsung mencetak *log error* spesifik (karena kita menggunakan opsi `stdio: 'pipe'`) ke layar terminal. Anda bisa melihat baris mana dan *package* mana yang membuat *build* Nuxt gagal.

## Ignored Artifacts

The temporary directory `test/.davingm/` is explicitly added to `.gitignore` and `.npmignore` to prevent test artifacts from being committed to the repository or published to NPM.
