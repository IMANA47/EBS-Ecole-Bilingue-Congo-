# 🚀 GUIDE RAPIDE - POUR LES ÉLÈVES

## Comment lancer le site?

### ✅ Méthode 1: Ouvrir directement (le plus simple)
```
Double-cliquez sur le fichier: index.html
Le site s'ouvre dans votre navigateur!
```

### ✅ Méthode 2: Avec Visual Studio Code
```
1. Ouvrir le dossier dans VSCode
2. Installer l'extension "Live Server" (par Ritwick Dey)
3. Clic droit sur index.html → "Open with Live Server"
```

---

## 📁 Structure du Projet

```
Site-web-projet/
├── 📄 index.html       ← Le contenu (structure HTML)
├── 📁 css/
│   └── styles.css      ← L'apparence (couleurs, formes, animations)
├── 📁 js/
│   └── script.js       ← Les interactions (menu, formulaire, langue)
└── 📄 README.md        ← Documentation complète
```

### Qu'est-ce que chaque fichier fait?

| Fichier | Rôle | Exemple |
|---------|------|---------|
| `index.html` | Structure de la page | `<h1>`, `<button>`, `<section>` |
| `css/styles.css` | Design & couleurs | `color: blue;`, `border-radius: 10px;` |
| `js/script.js` | Interactions | `onclick`, animations, formulaire |

---

## 🎨 Comment personnaliser?

### 1️⃣ Changer les couleurs

Ouvrir `css/styles.css` et chercher:

```css
:root {
    --primary: #1a3a52;      /* Bleu → Changez cette couleur */
    --secondary: #ff6b35;    /* Orange → Changez cette couleur */
    --accent: #2ecc71;       /* Vert → Changez cette couleur */
}
```

**Comment trouver une couleur?**
- Utilisez [colorpicker.com](https://colorpicker.com)
- Remplacez le code hexadécimal (ex: `#ff6b35`)

### 2️⃣ Changer les textes

Ouvrir `index.html` et chercher le texte à modifier:

```html
<h1 data-fr="Former les Leaders de Demain" data-en="Training Tomorrow's Leaders">
    Former les Leaders de Demain
</h1>
```

Modifier:
- `data-fr="..."` = Texte en français
- `data-en="..."` = Texte en anglais
- Le texte entre les balises

### 3️⃣ Changer les icônes

Les icônes viennent de [FontAwesome](https://fontawesome.com).

```html
<i class="fas fa-graduation-cap"></i>  ← Icône chapeau de graduation
```

Remplacer `graduation-cap` par une autre icône.

**Exemples d'icônes:**
- `fa-book` = Livre
- `fa-star` = Étoile
- `fa-heart` = Cœur
- `fa-rocket` = Fusée

---

## 🌐 Comment tester la langue?

1. Ouvrir le site
2. Cliquer sur **FR** ou **EN** en haut à droite
3. Tout change de langue! ✨

---

## 📝 Comment modifier le formulaire?

Le formulaire dans `index.html` a ces champs:

```html
<input type="text" id="nom" name="nom" required>      ← Champ Nom
<input type="email" id="email" name="email" required> ← Champ Email
<textarea id="message" name="message" required></textarea> ← Champ Message
```

**Le site n'envoie rien réellement** (c'est une simulation pour l'école).

---

## 🎬 Comment ajouter une nouvelle section?

1. Ouvrir `index.html`
2. Avant `</body>`, ajouter:

```html
<section class="ma-section">
    <div class="container">
        <h2>Mon Titre</h2>
        <p>Mon contenu ici</p>
    </div>
</section>
```

3. Ouvrir `css/styles.css` et ajouter:

```css
.ma-section {
    padding: var(--spacing-2xl) var(--spacing-lg);
    background: var(--white);
}
```

---

## 🔗 Liens utiles pour les élèves

| Sujet | Ressource |
|-------|-----------|
| Apprendre HTML | [MDN Web Docs](https://developer.mozilla.org/fr/docs/Web/HTML) |
| Apprendre CSS | [CSS-Tricks](https://css-tricks.com/) |
| Apprendre JavaScript | [JavaScript.info](https://fr.javascript.info/) |
| Icônes | [FontAwesome](https://fontawesome.com/icons) |
| Couleurs | [Color Hunt](https://colorhunt.co/) |
| Polices | [Google Fonts](https://fonts.google.com/) |

---

## ⚠️ Erreurs courantes et solutions

### Le site ne charge pas
**Solution:** Vérifions que tous les fichiers sont au bon endroit:
```
Site-web-projet/
├── index.html
├── css/styles.css
└── js/script.js
```

### Les styles ne s'appliquent pas
**Solution:** Vérifier que `index.html` a:
```html
<link rel="stylesheet" href="css/styles.css">
```

### JavaScript ne fonctionne pas
**Solution:** Vérifier que `index.html` a:
```html
<script src="js/script.js"></script>
```

### Les icônes n'affichent pas
**Solution:** Vérifier que `index.html` a:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

---

## 🎓 Concepts clés à comprendre

### HTML = Structure (Quoi?)
```html
<h1>Titre</h1>
<p>Paragraphe</p>
<button>Bouton</button>
```

### CSS = Style (Comment?)
```css
h1 {
    color: blue;
    font-size: 48px;
}
```

### JavaScript = Interaction (Quand et Pourquoi?)
```javascript
// Quand on clique le bouton
button.addEventListener('click', function() {
    // Faire quelque chose
    alert('Cliqué!');
});
```

---

## 🏆 Projet Entrepreneurial

Ce site est:
- ✅ **Moderne** - Design 2025
- ✅ **Professionnel** - Prêt pour une vraie école
- ✅ **Responsive** - Fonctionne sur téléphone
- ✅ **Bilingue** - Français & Anglais
- ✅ **Documenté** - Facile à modifier

### À ajouter dans le futur:

- 📷 Galerie d'images
- 🗓️ Calendrier d'événements
- 📧 Vrai système de contact (backend)
- 📱 Application mobile
- 🔒 Espace parent/élève

---

## 💡 Conseils pour les présentation

### Comment présenter votre projet:

1. **Montrer le design** - "Regardez ce logo qui bouge!"
2. **Tester la langue** - "Cliquez FR/EN"
3. **Tester le formulaire** - "Entrez vos infos et envoyez!"
4. **Montrer le code** - "C'est HTML, CSS et JavaScript"
5. **Explique la structure** - "Fichiers séparés = professionnel"

### Phrases clés à dire:

> "Notre site est **responsive** - il fonctionne sur mobile, tablette et desktop!"

> "Le **bilinguisme** permet d'atteindre plus de parents dans le Congo!"

> "L'**architecture séparé** (HTML/CSS/JS) rend le code facile à maintenir!"

> "Les **animations** rendent le site plus attrayant et moderne!"

---

## 🤝 Comment continuer le projet?

1. **Ajouter des pages** - Pages "Programmes", "Professeurs", etc.
2. **Ajouter des images** - Remplacer les icônes par des vrais photos
3. **Ajouter un backend** - Django, Flask ou Node.js pour les vrais emails
4. **SEO** - Optimiser pour Google
5. **Analytics** - Voir combien de personnes visitent

---

## ❓ Questions?

- 🎓 Demandez à votre professeur
- 💻 Cherchez sur Google
- 🔗 Consultez les ressources ci-dessus
- 📚 Lisez le README.md complet

---

**Bonne chance avec votre projet! 🚀**

*Créé par et pour les élèves de l'École Bilingue du Congo*  
*Programme Entrepreneurial - 2025-2026*
