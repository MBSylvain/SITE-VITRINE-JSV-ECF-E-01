# 🎨 Guide des Animations - SITE-VITRINE-JSV-ECF-E-01

## 📋 Table des matières
1. [Vue d'ensemble](#vue-densemble)
2. [Fichiers créés](#fichiers-créés)
3. [Animations CSS](#animations-css)
4. [Animations JavaScript](#animations-javascript)
5. [Utilisation](#utilisation)
6. [Personnalisation](#personnalisation)
7. [Performance](#performance)
8. [Navigateurs supportés](#navigateurs-supportés)

---

## 🎯 Vue d'ensemble

Ce guide décrit les améliorations apportées au site JSV avec des animations professionnelles et modernes.

### ✨ Nouvelles fonctionnalités :
- ✅ Animations d'entrée au scroll (Fade In, Slide, Scale)
- ✅ Effet parallax sur l'image d'accueil
- ✅ Animations de cartes améliorées
- ✅ Boutons avec effet ripple (ondes)
- ✅ Navigation fluide entre sections
- ✅ Bouton "Retour au top" animé
- ✅ Mise en évidence des liens actifs
- ✅ Animations responsive
- ✅ Support des préférences utilisateur (prefers-reduced-motion)

---

## 📁 Fichiers créés

### 1. **animations.css**
Fichier CSS principal contenant toutes les animations et transitions.

**Taille** : ~12 KB  
**Organisation** :
- Animations d'entrée (keyframes)
- Animations de survol
- Classes d'animation
- Responsive design

### 2. **animations.js**
Fichier JavaScript pour les interactions avancées.

**Taille** : ~8 KB  
**Fonctionnalités** :
- Intersection Observer (animations au scroll)
- Parallax effect
- Smooth scroll
- Gestion des événements
- Optimisation performance (throttle/debounce)

### 3. **ANIMATIONS_GUIDE.md** (ce fichier)
Documentation complète des animations.

---

## 🎬 Animations CSS

### Animations d'entrée

#### 1. **fadeInUp**
```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```
**Utilisation** : Entrée depuis le bas avec fade in

#### 2. **fadeInDown**
Entrée depuis le haut avec fade in

#### 3. **fadeInLeft**
Entrée depuis la gauche avec fade in

#### 4. **fadeInRight**
Entrée depuis la droite avec fade in

#### 5. **scaleIn**
Entrée avec zoom progressif

### Classe d'animation au scroll : `animate-on-scroll`

```html
<div class="animate-on-scroll fade-in-up">
    <!-- Contenu -->
</div>
```

**Propriétés** :
- `animation-duration: 0.8s`
- `animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1)`
- Délais cascadés automatiques

### Animations de survol

#### **Glow Effect**
```css
@keyframes glow {
    0% {
        box-shadow: 0 0 10px rgba(0, 119, 182, 0.3);
    }
    50% {
        box-shadow: 0 0 20px rgba(0, 119, 182, 0.6);
    }
    100% {
        box-shadow: 0 0 10px rgba(0, 119, 182, 0.3);
    }
}
```

#### **Pulse**
Effet de pulsation (agrandissement/rétrécissement cyclique)

#### **Bounce**
Effet de rebondissement

---

## ⚙️ Animations JavaScript

### 1. **Intersection Observer - Animations au scroll**

```javascript
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);
```

**Effet** : Les éléments s'animent quand ils deviennent visibles

### 2. **Parallax Effect**

```javascript
const parallaxBg = document.querySelector('.image-accueil');
window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    parallaxBg.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
});
```

**Effet** : L'image d'accueil se déplace légèrement lors du scroll

### 3. **Smooth Scroll**

Navigation fluide vers les sections avec :
```javascript
target.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
});
```

### 4. **Scroll to Top Button**

Bouton qui apparaît en bas-droit après 300px de scroll.

**Fonctionnalités** :
- Animation smooth au scroll
- Click pour revenir au haut
- Animation de retour fluide

### 5. **Active Link Highlight**

Les liens de navigation se mettent en surbrillance selon la section visible.

```css
.nav-link::after {
    content: '';
    width: 0;
    height: 2px;
    transition: width 0.3s;
}

.nav-link.active::after {
    width: 100%;
}
```

### 6. **Ripple Effect**

Effet d'onde au clic sur les boutons.

```javascript
function createRipple(event) {
    // Création d'une onde depuis le point du clic
}
```

### 7. **Lazy Loading Images**

Les images s'animent à l'apparition :
```html
<img src="placeholder.jpg" data-src="image.jpg" />
```

### 8. **Navbar Sticky avec Animation**

La navbar remonte/descend selon le sens du scroll.

---

## 🎯 Utilisation

### Ajouter une classe animate-on-scroll

```html
<!-- Entrée depuis le bas -->
<div class="animate-on-scroll fade-in-up">
    <h1>Titre</h1>
</div>

<!-- Entrée depuis la gauche -->
<div class="animate-on-scroll fade-in-left">
    <p>Contenu</p>
</div>

<!-- Entrée avec zoom -->
<div class="animate-on-scroll scale-in">
    <img src="image.jpg" />
</div>
```

### Délais d'animation

Les délais sont appliqués automatiquement sur les enfants :

```html
<div class="row">
    <div class="col animate-on-scroll"><!-- Délai: 0s --></div>
    <div class="col animate-on-scroll"><!-- Délai: 0.15s --></div>
    <div class="col animate-on-scroll"><!-- Délai: 0.3s --></div>
    <div class="col animate-on-scroll"><!-- Délai: 0.45s --></div>
</div>
```

### Cartes animées

```html
<div class="card animate-on-scroll">
    <img class="card-img-top" src="image.jpg" />
    <div class="card-body">
        <h5 class="card-title">Titre</h5>
        <p class="card-text">Description</p>
        <button class="btn btn-sport">En savoir plus</button>
    </div>
</div>
```

Au survol :
- ✅ Montée avec scale (translateY + scale)
- ✅ Ombre augmentée
- ✅ Image zoom + rotation légère
- ✅ Titre change de couleur

### Boutons

```html
<!-- Bouton sport -->
<button class="btn btn-sport">Cliquez-moi</button>

<!-- Bouton primaire Bootstrap -->
<button class="btn btn-primary">Soumettre</button>
```

Effet au survol :
- Remontée légère
- Ombre augmentée
- Effet ripple au clic

---

## 🎨 Personnalisation

### Modifier la durée des animations

Dans `animations.css`, ajustez :

```css
.animate-on-scroll {
    animation-duration: 0.8s; /* Changer à 1s, 0.5s, etc. */
}
```

### Changer les couleurs de gradient

```css
.btn-sport {
    background: linear-gradient(90deg, #0077b6 0%, #00b4d8 100%);
    /* Remplacer #0077b6 et #00b4d8 par les couleurs souhaitées */
}
```

### Modifier les délais en cascade

Dans `animations.css` :

```css
.animate-on-scroll:nth-child(1) { animation-delay: 0s; }
.animate-on-scroll:nth-child(2) { animation-delay: 0.25s; } /* Augmenter délai */
```

### Ajouter une nouvelle animation

1. Créer la keyframe :

```css
@keyframes myAnimation {
    from {
        /* État initial */
    }
    to {
        /* État final */
    }
}
```

2. Créer la classe :

```css
.animate-on-scroll.my-animation {
    animation-name: myAnimation;
}
```

3. Utiliser en HTML :

```html
<div class="animate-on-scroll my-animation">
    <!-- Contenu -->
</div>
```

---

## ⚡ Performance

### Optimisations implémentées

1. **Throttle & Debounce**
   - Scroll events limités à 10ms
   - Améliore performance de 60fps

2. **Intersection Observer**
   - Natif et performant
   - Observe seulement les éléments visibles

3. **prefers-reduced-motion**
   - Respect des préférences utilisateur
   - Animations réduites si demandé

4. **CSS Transforms**
   - Utilisation de `transform` et `opacity`
   - Pas de reflow/repaint coûteux

5. **Hardware Acceleration**
   - `transform: translateZ(0)` pour 3D

### Conseils de performance

- ✅ Limiter le nombre d'éléments animés
- ✅ Utiliser `will-change` pour les éléments clés
- ✅ Éviter les animations sur `top`, `left`, `width`, `height`
- ✅ Tester sur appareils mobiles

---

## 🌐 Navigateurs supportés

| Navigateur | Version | Support |
|-----------|---------|---------|
| Chrome    | 60+     | ✅ Complet |
| Firefox   | 55+     | ✅ Complet |
| Safari    | 12+     | ✅ Complet |
| Edge      | 79+     | ✅ Complet |
| Opera     | 47+     | ✅ Complet |
| IE 11     | -       | ❌ Non supporté |

### Fallback pour IE11
Pour les navigateurs anciens, les animations dégradent gracieusement (pas d'erreur, juste pas d'animation).

---

## 🐛 Dépannage

### Les animations ne fonctionnent pas

1. Vérifier que les fichiers sont chargés :
   - `animations.css` dans le `<head>`
   - `animations.js` avant `</body>`

2. Vérifier la console pour les erreurs :
   - F12 → Console
   - Chercher les messages d'erreur

3. Vérifier la classe CSS :
   ```html
   <!-- Correct -->
   <div class="animate-on-scroll fade-in-up"></div>
   
   <!-- Incorrect -->
   <div class="animate-on-scroll fadeInUp"></div>
   ```

### Les animations sont hachées

1. Réduire le nombre d'animations simultanées
2. Vérifier les performances CPU/GPU
3. Essayer dans un autre navigateur

### Scroll to top button ne s'affiche pas

```javascript
// Vérifier que Font Awesome est chargé
// Si non, remplacer par du texte :
button.innerHTML = '↑';
```

---

## 📚 Ressources supplémentaires

- [CSS Animations MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [Cubic-bezier.com](https://cubic-bezier.com/) - Générer des timing functions

---

## 📝 Versions

| Version | Date       | Changements |
|---------|-----------|-------------|
| 1.0     | 2026-05-15 | Initial - Création animations pro |

---

## 🤝 Support

Pour toute question ou amélioration :
- Créer une issue sur GitHub
- Consulter la documentation Bootstrap
- Vérifier les exemples dans `index.html`

---

## 📄 Licence

Ces animations sont libres d'utilisation pour le projet JSV.

**Créé avec ❤️ pour Jeunesse Sport avec sa Ville**
