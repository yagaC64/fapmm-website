# FAPMM — Fundación Amigos Padre Mateo Mateo

Website migration and modernization project for **Fundación Amigos Padre Mateo Mateo (FAPMM)**, preserving and sharing the life and works of Padre Mateo Mateo. The goal is to migrate and secure the legacy website [https://mateomateo.org](https://mateomateo.org) under a sustainable Firebase Hosting setup, with static content in Spanish and minimal maintenance for María del Socorro Orantes.

---

## 🌐 Objectives

- Rebuild the legacy HTML site (home, biographical pages, works, contact, and donations) on **Firebase Hosting**.
- Maintain full Spanish content and structure.
- Simplify editing and maintenance for non-technical users.
- Improve performance, security, and accessibility.

---

## 🔧 Project Structure

```
fapmm-website/
├─ public/
│  ├─ index.html               # Home (Hogar)
│  ├─ sobre-pmm/index.html     # Sobre Padre Mateo Mateo
│  ├─ sobre-fapmm/index.html   # Sobre la Fundación
│  ├─ obras/index.html         # Obras
│  ├─ contacto/index.html      # Contacto
│  ├─ assets/
│  │  ├─ css/styles.css        # Global styles
│  │  ├─ js/main.js            # Basic scripts
│  │  └─ img/                  # Optimized images
│  └─ favicon.ico (optional)
├─ .gitignore
├─ .firebaserc
├─ firebase.json
├─ .env.example               # Example of environment variables (not used in prod)
└─ README.md
```

---

## 🛋️ Setup & Local Preview

### 1. Clone the repository

```bash
git clone https://github.com/yagaC64/fapmm-website.git
cd fapmm-website
```

### 2. Install Firebase CLI (if not installed)

```bash
npm install -g firebase-tools
firebase login
```

### 3. Local preview

```bash
firebase emulators:start
```

Then open the local preview URL (usually `http://localhost:5000`).

### 4. Deploy to Firebase Hosting

```bash
firebase deploy --only hosting
```

---

## 🔄 GitHub Actions (Automatic Deployment)

- **Branch:** `main`
- **Workflows:**
  - `.github/workflows/firebase-hosting-merge.yml` → deploys on merge to main.
  - `.github/workflows/firebase-hosting-pull-request.yml` → deploys previews for PRs.

### Secret

`FIREBASE_SERVICE_ACCOUNT_FAPMM_WEBSITE_PR_2025` automatically created and managed by Firebase.

---

## 📖 Notes

- No build step required (pure static site).
- The PayPal donation form is hardcoded for simplicity:
  ```html
  <form action="https://www.paypal.com/donate" method="post" target="_blank">
    <input type="hidden" name="business" value="fundacionpadremateomateo@gmail.com" />
    <input type="hidden" name="item_name" value="Fundación Amigos Padre Mateo Mateo" />
    <input type="hidden" name="currency_code" value="USD" />
    <button type="submit" class="primary">Donar con PayPal</button>
  </form>
  ```
- Accessibility and SEO optimization planned for Phase 2 (adding alt text, meta tags, and image compression).

---

## 🌟 Team & Credits

- **Steward:** María del Socorro Orantes
- **Technical Lead:** WD Martinez (GitHub: [@yagaC64](https://github.com/yagaC64))
- **Platform:** Firebase Hosting + GitHub Actions
- **Language:** Spanish (Español)

---

## 🛠️ Maintenance Commands

| Action                  | Command                                            |
| ----------------------- | -------------------------------------------------- |
| Start local preview     | `firebase emulators:start`                         |
| Deploy manually         | `firebase deploy --only hosting`                   |
| Check hosting site list | `firebase hosting:sites:list`                      |
| View Actions logs       | `https://github.com/yagaC64/fapmm-website/actions` |

---

## ♻️ Recuperar la versión oficial desde GitHub

Si en algún momento tu carpeta local queda con cambios accidentales, puedes volver exactamente al estado publicado en GitHub (esto elimina cambios locales, haz copia de lo que quieras conservar):

```bash
cd /ruta/al/clon/fapmm-website
git fetch origin
git reset --hard origin/main
git clean -fd
```

- `git fetch origin` trae la última versión remota.
- `git reset --hard origin/main` deja la rama `main` idéntica a GitHub.
- `git clean -fd` borra archivos o carpetas no rastreados.

¿Prefieres empezar desde cero? Clona de nuevo:

```bash
git clone https://github.com/yagaC64/fapmm-website.git
```

Con eso tendrás la misma versión que María deploya desde GitHub.

---

### 🙏 Gracias

This effort preserves the cultural and spiritual legacy of Padre Mateo Mateo through technology and collaboration.
