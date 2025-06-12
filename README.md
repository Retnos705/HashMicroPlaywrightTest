# 🎯 Playwright Automation Test – HashMicro Sample Flow

Repository ini berisi skenario automation testing menggunakan [Playwright](https://playwright.dev/) dengan JavaScript, untuk mensimulasikan alur pengguna pada aplikasi e-commerce:

✅ Login → 🛒 Add to Cart → 🧾 View Cart → 🧾 Checkout → 🔒 Logout

---

## 📁 Struktur Project

```
HASHMICROPLAYWRIGHTTEST/
├── tests/
│   └── saucedemo-flow.spec.js   ← Skenario utama
├── package.json                 ← Dependency & script project
├── playwright.config.js         ← Konfigurasi Playwright
└── .gitignore
```

---

## 🚀 Cara Menjalankan Project

### 1. Clone Repo
```bash
git clone https://github.com/your-username/hashmicro-playwright-test.git
cd hashmicro-playwright-test
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Jalankan Test
```bash
npx playwright test
```

### 4. (Opsional) Jalankan dengan Browser Terbuka
```bash
npx playwright test --headed
```

### 5. (Opsional) Generate HTML Report
```bash
npx playwright test --reporter=html
npx playwright show-report
```

---

## 🧪 Detail Flow (`saucedemo-flow.spec.js`)

1. Akses halaman login `https://www.saucedemo.com`
2. Login dengan:
   - Username: `standard_user`
   - Password: `secret_sauce`
3. Klik tombol **Add to Cart** pada 2 produk pertama
4. Validasi badge cart menunjukkan angka `2`
5. Klik ikon **Cart**
6. Klik tombol **Checkout**
7. Isi form checkout (First Name, Last Name, Postal Code)
8. Klik **Continue**, kemudian **Finish**
9. Validasi teks: `Thank you for your order!`
10. Klik menu (burger icon) → Logout
11. Pastikan user kembali ke halaman login

---

## 🛠 Teknologi yang Digunakan

- [Playwright](https://playwright.dev/) – Automation Testing Framework
- JavaScript
- Chromium browser (default)

---

## 👤 Untuk Reviewer

Untuk langsung menjalankan skenario utama:
```bash
npx playwright test tests/saucedemo-flow.spec.js --headed
```

---

## 📩 Kontak

Jika ada pertanyaan atau klarifikasi lebih lanjut, silakan hubungi saya melalui GitHub Issue atau email: retnosari705@hotmail.com