/* ================================================
   ÉCOLE BILINGUE DU CONGO - JAVASCRIPT
   ================================================
   Interactivité, animations, formulaire et langue
   ================================================ */

// ========== VARIABLES GLOBALES ==========
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const langBtns = document.querySelectorAll('.lang-btn');
const contactForm = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

let currentLanguage = localStorage.getItem('language') || 'fr';

// ========== INITIALISATION ==========
document.addEventListener('DOMContentLoaded', function() {
    initMenu();
    initLanguage();
    initForm();
    initAnimations();
    initGallery();
    initVideos();
    initPerformanceOptimizations();
    initAdvancedAnimations();
    initDarkMode();
    console.log('%c École Bilingue du Congo', 'font-size: 20px; color: #1a3a52; font-weight: bold;');
    console.log('%c Site créé par les élèves - Programme Entrepreneurial', 'color: #ff6b35; font-size: 12px;');
});

// ========== 1. MENU HAMBURGER ==========
/**
 * Initialise le menu hamburger pour mobile
 */
function initMenu() {
    // Ouvre/ferme le menu au clic sur le hamburger
    hamburger.addEventListener('click', toggleMenu);

    // Ferme le menu quand on clique sur un lien
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Ferme le menu si on clique en dehors
    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);

        if (!isClickInsideMenu && !isClickOnHamburger && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });
}

/**
 * Bascule l'état du menu (ouvert/fermé)
 */
function toggleMenu() {
    const isActive = hamburger.classList.toggle('actif');
    navMenu.classList.toggle('active');
    
    // Mettre à jour les attributs d'accessibilité
    hamburger.setAttribute('aria-expanded', isActive);
    hamburger.setAttribute('aria-label', isActive ? 'Fermer le menu' : 'Ouvrir le menu');
}

/**
 * Ferme le menu hamburger
 */
function closeMenu() {
    hamburger.classList.remove('actif');
    navMenu.classList.remove('active');
    
    // Mettre à jour les attributs d'accessibilité
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Ouvrir le menu');
}

// ========== 2. SYSTÈME DE LANGUE BILINGUE ==========
/**
 * Initialise le système de langue
 */
function initLanguage() {
    // Marquer le bouton actif
    updateActiveLanguageButton();

    // Appliquer la langue au chargement
    updateContent();

    // Ajouter les écouteurs sur les boutons de langue
    langBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            currentLanguage = this.getAttribute('data-lang');
            localStorage.setItem('language', currentLanguage);
            updateActiveLanguageButton();
            updateContent();
        });
    });
}

/**
 * Met à jour l'affichage du bouton de langue actif
 */
function updateActiveLanguageButton() {
    langBtns.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
        
        if (btn.getAttribute('data-lang') === currentLanguage) {
            btn.classList.add('active');
            btn.setAttribute('aria-pressed', 'true');
        }
    });
}

/**
 * Met à jour tout le contenu du site selon la langue
 */
function updateContent() {
    // Récupérer tous les éléments avec données de langue
    const elements = document.querySelectorAll('[data-fr][data-en]');

    elements.forEach(element => {
        if (currentLanguage === 'fr') {
            element.textContent = element.getAttribute('data-fr');
        } else {
            element.textContent = element.getAttribute('data-en');
        }
    });

    // Mettre à jour la langue HTML
    document.documentElement.lang = currentLanguage;
}

// ========== 3. FORMULAIRE DE CONTACT AMÉLIORÉ ==========
/**
 * Initialise le formulaire de contact avec validation en temps réel
 */
function initForm() {
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
        
        // Initialiser les compteurs de caractères
        initCharacterCounters();
        
        // Initialiser la validation en temps réel
        initRealTimeValidation();
        
        // Initialiser le bouton de réinitialisation
        initResetButton();
        
        // Initialiser l'indicateur de progression
        initFormProgress();
    }
}

/**
 * Initialise les compteurs de caractères
 */
function initCharacterCounters() {
    const counters = [
        { input: document.getElementById('nom'), counter: document.getElementById('nom-counter'), max: 50 },
        { input: document.getElementById('sujet'), counter: document.getElementById('sujet-counter'), max: 100 },
        { input: document.getElementById('message'), counter: document.getElementById('message-counter'), max: 500 }
    ];
    
    counters.forEach(({ input, counter, max }) => {
        if (input && counter) {
            updateCharacterCounter(input, counter, max);
            
            input.addEventListener('input', () => {
                updateCharacterCounter(input, counter, max);
            });
        }
    });
}

/**
 * Met à jour le compteur de caractères
 */
function updateCharacterCounter(input, counter, max) {
    const current = input.value.length;
    const percentage = (current / max) * 100;
    
    counter.textContent = `${current}/${max}`;
    counter.className = 'char-counter';
    
    if (percentage >= 90) {
        counter.classList.add('error');
    } else if (percentage >= 75) {
        counter.classList.add('warning');
    }
}

/**
 * Initialise la validation en temps réel
 */
function initRealTimeValidation() {
    const fields = [
        { input: document.getElementById('nom'), validator: validateName, feedback: document.getElementById('nom-error') },
        { input: document.getElementById('email'), validator: validateEmail, feedback: document.getElementById('email-error') },
        { input: document.getElementById('sujet'), validator: validateSubject, feedback: document.getElementById('sujet-error') },
        { input: document.getElementById('message'), validator: validateMessage, feedback: document.getElementById('message-error') }
    ];
    
    fields.forEach(({ input, validator, feedback }) => {
        if (input && feedback) {
            // Validation à la saisie
            input.addEventListener('input', () => {
                validateField(input, validator, feedback);
            });
            
            // Validation à la perte de focus
            input.addEventListener('blur', () => {
                validateField(input, validator, feedback);
            });
        }
    });
}

/**
 * Valide un champ spécifique
 */
function validateField(input, validator, feedback) {
    const result = validator(input.value);
    
    // Mettre à jour les classes de l'input
    input.classList.remove('error', 'success');
    
    if (result.valid) {
        input.classList.add('success');
        feedback.className = 'field-feedback success';
        feedback.textContent = result.message || '';
    } else {
        input.classList.add('error');
        feedback.className = 'field-feedback error';
        feedback.textContent = result.message;
        
        // Ajouter l'animation de secousse si nécessaire
        if (input.value.length > 0) {
            input.parentElement.classList.add('shake');
            setTimeout(() => {
                input.parentElement.classList.remove('shake');
            }, 500);
        }
    }
    
    return result.valid;
}

/**
 * Valide le nom
 */
function validateName(value) {
    if (value.length === 0) {
        return { valid: false, message: 'Le nom est requis' };
    }
    if (value.length < 2) {
        return { valid: false, message: 'Le nom doit contenir au moins 2 caractères' };
    }
    if (value.length > 50) {
        return { valid: false, message: 'Le nom ne peut pas dépasser 50 caractères' };
    }
    if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(value)) {
        return { valid: false, message: 'Le nom contient des caractères invalides' };
    }
    return { valid: true, message: 'Nom valide' };
}

/**
 * Valide l'email
 */
function validateEmail(value) {
    if (value.length === 0) {
        return { valid: false, message: 'L\'email est requis' };
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
        return { valid: false, message: 'Veuillez entrer une adresse email valide' };
    }
    return { valid: true, message: 'Email valide' };
}

/**
 * Valide le sujet
 */
function validateSubject(value) {
    if (value.length > 100) {
        return { valid: false, message: 'Le sujet ne peut pas dépasser 100 caractères' };
    }
    return { valid: true, message: value.length > 0 ? 'Sujet valide' : '' };
}

/**
 * Valide le message
 */
function validateMessage(value) {
    if (value.length === 0) {
        return { valid: false, message: 'Le message est requis' };
    }
    if (value.length < 10) {
        return { valid: false, message: 'Le message doit contenir au moins 10 caractères' };
    }
    if (value.length > 500) {
        return { valid: false, message: 'Le message ne peut pas dépasser 500 caractères' };
    }
    return { valid: true, message: 'Message valide' };
}

/**
 * Initialise le bouton de réinitialisation
 */
function initResetButton() {
    const resetBtn = document.getElementById('reset-btn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            resetForm();
        });
    }
}

/**
 * Initialise l'indicateur de progression du formulaire
 */
function initFormProgress() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    // Créer l'indicateur de progression
    const progressDiv = document.createElement('div');
    progressDiv.className = 'form-progress';
    progressDiv.innerHTML = '<div class="form-progress-fill"></div>';
    
    form.insertBefore(progressDiv, form.firstChild);
    
    // Mettre à jour la progression
    const updateProgress = () => {
        const fields = form.querySelectorAll('input[required], textarea[required]');
        const filledFields = Array.from(fields).filter(field => field.value.trim().length > 0);
        const progress = (filledFields.length / fields.length) * 100;
        
        progressDiv.querySelector('.form-progress-fill').style.width = progress + '%';
    };
    
    // Écouter les changements
    form.addEventListener('input', updateProgress);
    form.addEventListener('change', updateProgress);
}

/**
 * Gère la soumission du formulaire avec états de chargement
 */
function handleFormSubmit(event) {
    event.preventDefault();

    // Récupérer les valeurs et les champs
    const nomField = document.getElementById('nom');
    const emailField = document.getElementById('email');
    const sujetField = document.getElementById('sujet');
    const messageField = document.getElementById('message');
    const submitBtn = document.getElementById('submit-btn');
    
    const nom = nomField.value.trim();
    const email = emailField.value.trim();
    const sujet = sujetField.value.trim();
    const message = messageField.value.trim();

    // Valider tous les champs
    const validators = [
        { field: nomField, validator: validateName, feedback: document.getElementById('nom-error') },
        { field: emailField, validator: validateEmail, feedback: document.getElementById('email-error') },
        { field: sujetField, validator: validateSubject, feedback: document.getElementById('sujet-error') },
        { field: messageField, validator: validateMessage, feedback: document.getElementById('message-error') }
    ];
    
    let isValid = true;
    validators.forEach(({ field, validator, feedback }) => {
        if (!validateField(field, validator, feedback)) {
            isValid = false;
        }
    });

    if (isValid) {
        // Afficher l'état de chargement
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');
        submitBtn.querySelector('.btn-loading').style.display = 'flex';
        
        // Simuler l'envoi avec délai
        setTimeout(() => {
            console.log('✅ Formulaire envoyé:', { nom, email, sujet, message });
            
            // Réinitialiser le bouton
            submitBtn.disabled = false;
            submitBtn.classList.remove('loading');
            submitBtn.querySelector('.btn-loading').style.display = 'none';
            
            // Afficher le message de succès
            showSuccessMessage();
            
            // Réinitialiser le formulaire
            resetForm();
        }, 2000); // Simuler un délai d'envoi
    } else {
        // Faire défiler jusqu'au premier champ invalide
        const firstInvalid = document.querySelector('.form-group input.error, .form-group textarea.error');
        if (firstInvalid) {
            firstInvalid.focus();
            firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
}

/**
 * Valide les champs du formulaire
 */
function validateForm(nom, email, message) {
    // Validation du nom
    if (nom.length < 2) {
        showError('Veuillez entrer un nom valide (minimum 2 caractères)');
        return false;
    }

    if (nom.length > 50) {
        showError('Le nom ne peut pas dépasser 50 caractères');
        return false;
    }

    // Validation de l'email
    const emailRegex = /^[^[\s@]+@[^[\s@]+\.[^[\s@]+$/;
    if (!emailRegex.test(email)) {
        showError('Veuillez entrer une adresse email valide');
        return false;
    }

    // Validation du message
    if (message.length < 10) {
        showError('Le message doit contenir au moins 10 caractères');
        return false;
    }

    if (message.length > 500) {
        showError('Le message ne peut pas dépasser 500 caractères');
        return false;
    }

    return true;
}

/**
 * Affiche un message de succès
 */
function showSuccessMessage() {
    if (successMessage) {
        successMessage.classList.add('show');

        // Masquer après 5 secondes (augmenté pour plus de temps de lecture)
        setTimeout(() => {
            successMessage.classList.remove('show');
        }, 5000);
        
        // Réinitialiser le formulaire
        if (contactForm) {
            contactForm.reset();
        }
    }
}

/**
 * Affiche une notification d'erreur
 */
function showError(message) {
    // Créer une notification d'erreur
    const notification = document.createElement('div');
    notification.className = 'notification error';
    notification.innerHTML = `
        <i class="fas fa-exclamation-circle"></i>
        <span>${message}</span>
        <button class="notification-close" onclick="this.parentElement.remove()">&times;</button>
    `;
    
    // Ajouter au corps du document
    document.body.appendChild(notification);
    
    // Animation d'entrée
    setTimeout(() => notification.classList.add('show'), 10);
    
    // Masquer automatiquement après 5 secondes
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// ========== 4. ANIMATIONS AU SCROLL ==========
/**
 * Initialise les animations au scroll
 */
function initAnimations() {
    // Configuration de l'Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    // Créer l'observateur
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Ajouter la classe d'animation
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observer les cartes et autres éléments
    const animatedElements = document.querySelectorAll(
        '.level-card, .benefit-card, .value-card, .feature, .info-card, ' +
        '.gallery-item, .video-card, .team-card, .activity-card, .testimonial-card, .portfolio-card'
    );

    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// ========== 5. EFFETS INTERACTIFS SOURIS ==========
/**
 * Ajouter des effets au survol des cartes
 */
document.addEventListener('mousemove', function(event) {
    const cards = document.querySelectorAll('.level-card, .benefit-card, .value-card');

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const angleX = (y - centerY) / 10;
        const angleY = (centerX - x) / 10;

        // Appliquer une légère rotation 3D au survol (effet subtil)
        if (x > 0 && x < rect.width && y > 0 && y < rect.height) {
            card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
        } else {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        }
    });
});

// ========== 6. LISSAGE DU SCROLL ==========
/**
 * Active le lissage du scroll pour tous les liens internes
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();

            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ========== 7. COMPTEUR D'ANIMATIONS ==========
/**
 * Animer les nombres (s'il y en a besoin)
 */
function animateCounters() {
    const counters = document.querySelectorAll('.benefit-number');

    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        let current = 0;
        const increment = target / 20;

        const interval = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = String(target).padStart(2, '0');
                clearInterval(interval);
            } else {
                counter.textContent = String(Math.floor(current)).padStart(2, '0');
            }
        }, 50);
    });
}

// ========== 8. BARRE DE PROGRESSION SCROLL ==========
/**
 * Ajouter une barre de progression au scroll
 */
function addScrollProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #ff6b35, #2ecc71);
        z-index: 9999;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', function() {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / scrollHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Appeler la barre de progression
addScrollProgressBar();

// ========== 9. GALERIE INTERACTIVE ==========
/**
 * Initialise la galerie avec lightbox et filtrage
 */
function initGallery() {
    // Initialiser les boutons de filtrage
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-filter');
            filterGallery(category);

            // Mettre à jour le bouton actif
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Initialiser les éléments de la galerie
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            openLightbox(imgSrc);
        });
    });

    // Fermer la lightbox au clic sur le bouton de fermeture
    const closeBtn = document.querySelector('.lightbox-close');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
    }

    // Fermer la lightbox au clic en dehors de l'image
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // Fermer la lightbox avec la touche Échap
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
}

/**
 * Ouvre la lightbox avec l'image sélectionnée
 */
function openLightbox(imageSrc) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.querySelector('.lightbox-image');

    if (lightbox && lightboxImage) {
        lightboxImage.src = imageSrc;
        lightbox.style.display = 'flex';

        // Animation d'entrée
        setTimeout(() => {
            lightbox.style.opacity = '1';
        }, 10);
    }
}

/**
 * Ferme la lightbox
 */
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.style.opacity = '0';
        setTimeout(() => {
            lightbox.style.display = 'none';
        }, 300);
    }
}

/**
 * Filtre les éléments de la galerie selon la catégorie
 */
function filterGallery(category) {
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');

        if (category === 'all' || itemCategory === category) {
            item.style.display = 'block';
            // Animation d'entrée
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            }, 10);
        } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
}

// ========== 10. VIDÉOS (LAZY LOADING OPTIONNEL) ==========
/**
 * Initialise les vidéos avec lazy loading optionnel
 */
function initVideos() {
    // Lazy loading pour les vidéos YouTube
    const videoWrappers = document.querySelectorAll('.video-wrapper');

    if ('IntersectionObserver' in window) {
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const iframe = entry.target.querySelector('iframe');
                    if (iframe && iframe.dataset.src) {
                        iframe.src = iframe.dataset.src;
                        iframe.removeAttribute('data-src');
                        videoObserver.unobserve(entry.target);
                    }
                }
            });
        });

        videoWrappers.forEach(wrapper => {
            videoObserver.observe(wrapper);
        });
    }
}

// ========== 9. DARK MODE (OPTIONNEL) ==========
/**
 * Ajouter le support du mode sombre
 */
function initDarkMode() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    if (isDarkMode || prefersDark.matches) {
        document.body.classList.add('dark-mode');
    }

    // Observer les changements
    prefersDark.addEventListener('change', (e) => {
        if (e.matches) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'true');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', 'false');
        }
    });
}

// ========== 10. NOTIFICATIONS CONSOLE ==========
/**
 * Affiche les fonctionnalités dans la console
 */
console.log(`
╔════════════════════════════════════════╗
║  ÉCOLE BILINGUE DU CONGO              ║
║  Site Web Moderne & Professionnel     ║
╚════════════════════════════════════════╝

✨ FONCTIONNALITÉS:
  ✓ Design responsive et moderne
  ✓ Système bilingue (FR/EN)
  ✓ Menu hamburger mobile
  ✓ Formulaire avec validation
  ✓ Animations au scroll
  ✓ Effets 3D au survol
  ✓ Barre de progression
  ✓ Stockage local (localStorage)

🎨 DESIGN:
  - Palette: Bleu professionnel & Orange dynamique
  - Polices: Google Fonts (Sora)
  - Icônes: FontAwesome 6.4
  - Grid/Flexbox pour responsive

📱 COMPATIBLE:
  ✓ Desktop
  ✓ Tablette
  ✓ Mobile

👨‍💼 Créé par: Les élèves du programme entrepreneurial
📅 Année: 2025-2026
`);

// ========== 11. OBJET POUR EXPORTER LES FONCTIONS ==========
/**
 * API publique du site
 */
const SiteAPI = {
    // Changer la langue
    setLanguage: (lang) => {
        currentLanguage = lang;
        localStorage.setItem('language', lang);
        updateActiveLanguageButton();
        updateContent();
    },

    // Obtenir la langue actuelle
    getLanguage: () => currentLanguage,

    // Ouvrir le menu
    openMenu: toggleMenu,

    // Fermer le menu
    closeMenu: closeMenu,

    // Afficher les logs
    showInfo: () => console.log('ℹ️ Site Version 1.0 - 2025')
};

// Rendre accessible dans la console
window.SiteAPI = SiteAPI;

// ========== 12. ÉVÉNEMENTS PERSONNALISÉS ==========
/**
 * Déclencher des événements personnalisés pour plus de flexibilité
 */
function triggerCustomEvent(eventName, detail) {
    const event = new CustomEvent(eventName, { detail });
    document.dispatchEvent(event);
}

// Exemple d'utilisation:
// triggerCustomEvent('languageChanged', { language: currentLanguage });

// ========== 7. OPTIMISATION DES PERFORMANCES ==========
/**
 * Initialise les optimisations de performance
 */
function initPerformanceOptimizations() {
    // Lazy loading pour les images
    lazyLoadImages();
    
    // Préchargement des images importantes
    preloadCriticalImages();
    
    // Optimisation du scroll
    optimizeScrollPerformance();
}

/**
 * Lazy loading pour les images
 */
function lazyLoadImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

/**
 * Préchargement des images critiques
 */
function preloadCriticalImages() {
    const criticalImages = [
        'https://picsum.photos/seed/ecolebilingue/1200/630.jpg'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

/**
 * Optimisation des performances de scroll
 */
function optimizeScrollPerformance() {
    let ticking = false;
    
    function updateScrollEffects() {
        // Mettre à jour les effets de scroll ici
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    }, { passive: true });
}

// ========== 8. GESTION GLOBALE DES ERREURS ==========
/**
 * Gestion globale des erreurs
 */
window.addEventListener('error', function(event) {
    console.error('❌ Erreur détectée:', event.message);
});

/**
 * Monitoring des performances
 */
if ('performance' in window) {
    window.addEventListener('load', () => {
        const perfData = performance.getEntriesByType('navigation')[0];
        console.log(`⚡ Page load time: ${Math.round(perfData.loadEventEnd - perfData.loadEventStart)}ms`);
    });
}

// ========== 9. ANIMATIONS AVANCÉES ==========
/**
 * Initialise les animations avancées
 */
function initAdvancedAnimations() {
    initStaggeredAnimations();
    initMagneticButtons();
    initParticleEffects();
    initParallaxEffects();
    initTypingEffect();
    initScrollProgress();
}

/**
 * Initialise les animations décalées pour les grilles
 */
function initStaggeredAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const staggerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const grid = entry.target;
                const items = grid.querySelectorAll('.level-card, .benefit-card, .gallery-item, .team-card');
                
                items.forEach((item, index) => {
                    item.classList.add('animate-stagger');
                    item.style.animationDelay = `${index * 0.1}s`;
                });
                
                staggerObserver.unobserve(grid);
            }
        });
    }, observerOptions);

    // Observer les grilles
    document.querySelectorAll('.levels-grid, .benefits-grid, .gallery-grid, .team-grid').forEach(grid => {
        staggerObserver.observe(grid);
    });
}

/**
 * Initialise l'effet magnétique sur les boutons
 */
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.classList.add('magnetic-btn');
        
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            button.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = '';
        });
    });
}

/**
 * Initialise les effets de particules
 */
function initParticleEffects() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;
    
    // Créer des particules flottantes
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createParticle(heroSection);
        }, i * 200);
    }
    
    // Continuer à créer des particules
    setInterval(() => {
        createParticle(heroSection);
    }, 3000);
}

/**
 * Crée une particule flottante
 */
function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 2 + 's';
    particle.style.animationDuration = (3 + Math.random() * 2) + 's';
    
    container.appendChild(particle);
    
    // Supprimer la particule après l'animation
    setTimeout(() => {
        particle.remove();
    }, 5000);
}

/**
 * Initialise les effets de parallaxe
 */
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.hero-visual, .hero-shape');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach((element, index) => {
            const speed = index === 0 ? 0.5 : 0.3;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }, { passive: true });
}

/**
 * Initialise l'effet de typographie
 */
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero-text h1');
    if (!heroTitle) return;
    
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.classList.add('typing-effect');
    
    setTimeout(() => {
        heroTitle.textContent = text;
    }, 500);
}

/**
 * Initialise la barre de progression de scroll
 */
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.innerHTML = '<div class="progress-fill" style="--progress: 0%"></div>';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: rgba(255, 255, 255, 0.1);
        z-index: 10000;
    `;
    
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrolled = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        progressBar.querySelector('.progress-fill').style.setProperty('--progress', scrolled + '%');
    }, { passive: true });
}

/**
 * Ajoute des classes d'animation aux éléments au scroll
 */
function addScrollAnimations() {
    const animatedElements = document.querySelectorAll('.level-card, .benefit-card, .gallery-item, .team-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(element => {
        observer.observe(element);
    });
}

// ========== 10. DARK MODE TOGGLE ==========
/**
 * Initialise le mode sombre
 */
function initDarkMode() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    // Récupérer le thème sauvegardé
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Détecter les préférences système
    if (!localStorage.getItem('theme')) {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
    }
    
    // Écouter les changements de préférences système
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
}

/**
 * Bascule le thème
 */
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Ajouter un effet de transition
    document.body.style.transition = 'opacity 0.3s ease';
    document.body.style.opacity = '0.95';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 150);
}

/**
 * Définit le thème
 */
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    
    const themeIcon = document.getElementById('theme-icon');
    const themeToggle = document.getElementById('theme-toggle');
    
    if (themeIcon) {
        themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
    
    if (themeToggle) {
        themeToggle.setAttribute('aria-pressed', theme === 'dark');
        themeToggle.setAttribute('aria-label', 
            theme === 'dark' ? 'Basculer vers le mode clair' : 'Basculer vers le mode sombre'
        );
    }
    
    // Mettre à jour la meta tag pour les navigateurs
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
        metaTheme.content = getComputedStyle(document.documentElement)
            .getPropertyValue('--primary').trim();
    }
    
    // Déclencher un événement personnalisé
    window.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
}

// ========== FIN DU SCRIPT ==========
