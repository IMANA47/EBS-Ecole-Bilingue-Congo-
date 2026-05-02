# 🎓 École Bilingue du Congo - Site Web Moderne

> **Site web professionnel, moderne et responsive** pour l'École Bilingue du Congo à Brazzaville.
> Projet réalisé par les élèves - Programme Entrepreneurial

---

## 📋 Table des matières

- [Architecture](#architecture)
- [Démarrage](#démarrage)
- [Structure du projet](#structure-du-projet)
- [Fonctionnalités](#fonctionnalités)
- [Personnalisation](#personnalisation)
- [Technologies](#technologies)

---

## 🏗️ Architecture

```
Site-web-projet/
├── index.html          # Fichier HTML principal
├── css/
│   └── styles.css      # Tous les styles CSS
├── js/
│   └── script.js       # Toute l'interactivité JavaScript
└── README.md           # Ce fichier
```

### Avantages de cette architecture:

✅ **Séparation des responsabilités** - HTML, CSS, JS complètement séparés  
✅ **Maintenabilité** - Facile à modifier et comprendre  
✅ **Performance** - Fichiers minifiables et cacheable  
✅ **Scalabilité** - Simple d'ajouter des pages et des assets  

---

## 🚀 Démarrage

### Option 1: Ouvrir directement

```bash
# Double-cliquez sur index.html
# OU ouvrez avec votre navigateur
```

### Option 2: Serveur local (recommandé)

```bash
# Avec Python 3
python -m http.server 8000

# Avec Node.js + http-server
npx http-server

# Avec Visual Studio Code
# Installer l'extension "Live Server"
# Clic droit sur index.html → "Open with Live Server"
```

---

## 📁 Structure du Projet

### `index.html` - Structure HTML
```html
<!-- En-tête et navigation -->
<header>...</header>

<!-- Section Hero - Accueil spectaculaire -->
<section class="hero">...</section>

<!-- À propos -->
<section class="about">...</section>

<!-- Niveaux scolaires -->
<section class="levels">...</section>

<!-- Avantages bilinguisme -->
<section class="bilingualism">...</section>

<!-- Actualités -->
<section class="news">...</section>

<!-- Entrepreneuriat -->
<section class="entrepreneurship">...</section>

<!-- Formulaire de contact -->
<section class="contact">...</section>

<!-- Pied de page -->
<footer>...</footer>
```

### `css/styles.css` - Styles modernes
- **Système de variables CSS** pour personnalisation
- **Design responsive** (mobile, tablet, desktop)
- **Animations fluides** et effets hover
- **Palettes de dégradés modernes**
- **Grid et Flexbox** pour layouts flexibles

### `js/script.js` - Interactivité
- **Gestion du menu hamburger** (mobile)
- **Système bilingue** (FR/EN)
- **Validation de formulaire**
- **Animations au scroll**
- **Effets 3D au survol**
- **Barre de progression**

---

## ✨ Fonctionnalités

### 1️⃣ Bilinguisme (Français/Anglais)
```javascript
// Utiliser les attributs data-fr et data-en
<h1 data-fr="Accueil" data-en="Welcome">Accueil</h1>

// Changer la langue
SiteAPI.setLanguage('en');
```

### 2️⃣ Menu Responsive
- Menu normal sur desktop
- Menu hamburger sur mobile
- Fermeture automatique au clic

### 3️⃣ Formulaire de Contact
- Validation des champs
- Message de succès
- Pas d'envoi réel (simulation)

### 4️⃣ Animations
- Au scroll (Intersection Observer)
- Au survol (3D perspective)
- Barre de progression
- Transitions fluides

---

## 🎨 Personnalisation

### Changer les couleurs

Dans `css/styles.css`, modifiez les variables CSS:

```css
:root {
    --primary: #1a3a52;      /* Bleu principal */
    --secondary: #ff6b35;    /* Orange */
    --accent: #2ecc71;       /* Vert */
}
```

### Changer les textes

Modifiez directement dans `index.html`:

```html
<h1 data-fr="Mon Titre" data-en="My Title">Mon Titre</h1>
```

### Ajouter une nouvelle section

```html
<section class="nouvelle-section">
    <div class="container">
        <h2>Mon contenu</h2>
    </div>
</section>
```

Puis ajouter les styles CSS:

```css
.nouvelle-section {
    padding: var(--spacing-2xl) var(--spacing-lg);
    background: var(--light);
}
```

---

## 📱 Responsive Design

| Breakpoint | Écran |
|-----------|--------|
| 1200px+ | Desktop |
| 768px - 1199px | Tablet |
| < 768px | Mobile |
| < 480px | Small Mobile |

---

## 🔧 Technologies

### Frontend
- **HTML5** - Structure sémantique
- **CSS3** - Design moderne, animations
- **JavaScript (ES6+)** - Interactivité

### Frameworks & Librairies
- **Google Fonts** - Typographie (Sora, Space Mono)
- **FontAwesome 6.4** - 2000+ icônes
- **CSS Grid & Flexbox** - Layouts responsives

### Features Modernes
- **Intersection Observer** - Animations au scroll
- **localStorage** - Sauvegarde des préférences
- **CSS Custom Properties** - Variables CSS
- **Gradient Meshes** - Effets visuels premium

---

## 📝 Guide du développement

### Ajouter une page

1. Créer `nouvelle-page.html`
2. Copier la structure HTML d'`index.html`
3. Modifier le contenu

### Ajouter des animations

```javascript
// Dans js/script.js
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
        }
    });
});

observer.observe(document.querySelector('.mon-element'));
```

### Améliorer les performances

1. **Minifier CSS/JS** - Utiliser webpack, parcel ou esbuild
2. **Optimiser images** - Utiliser WebP, compression
3. **Service Worker** - Ajouter le offline support
4. **Lazy loading** - Images chargées à la demande

---

## 🌍 Déploiement

### Option 1: GitHub Pages (Gratuit)

```bash
# Créer un repo GitHub
# Push les fichiers
# Activer GitHub Pages dans les paramètres
```

### Option 2: Netlify (Gratuit)

```bash
# Drag & drop le dossier sur netlify.com
# Site en ligne en 30 secondes
```

### Option 3: Hébergement classique

- Télécharger tous les fichiers via FTP
- Accessible via votre domaine

---

## 🎯 Objectifs Pédagogiques

Ce projet permet aux élèves de:

✅ Comprendre l'architecture web (HTML/CSS/JS séparé)  
✅ Apprendre les bonnes pratiques (code propre, commenté)  
✅ Découvrir JavaScript moderne (API web, localStorage)  
✅ Créer un portfolio professionnel  
✅ Comprendre la responsivité et les animations  

---

## 📞 Contact & Infos

**École Bilingue du Congo**
- 📍 Avenue 18 parcelles, n°16, Binza-Macampagne, Brazzaville
- 📞 +242 06 576 01 19
- 📧 contact@ecolebilingueducongo.com
- 🕐 Lun-Ven: 7h-17h | Sam: 8h-12h

---

## 📄 Licence

Ce projet est créé par les élèves du programme entrepreneurial.
Libre d'utilisation à but éducatif.

---

## 🙏 Remerciements

Merci à tous les élèves et l'équipe pédagogique qui ont contribué à ce projet!

---

**Dernière mise à jour:** Mai 2025  
**Version:** 1.0.0  
**Status:** ✅ Production Ready
