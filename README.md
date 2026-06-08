# 🚀 Portfolio Professionnel - Vincent Bonnet

Bienvenue sur le dépôt de mon portfolio en ligne. Ce site me permet de présenter mes compétences, mes projets phares développés au cours de mes études, mes expériences en entreprise ainsi que mon travail de veille technologique.

Actuellement diplômé d'un BAC Pro SN et venant de terminer mon cursus de **BTS SIO (option SLAM)**, j'utilise cette vitrine pour ma recherche d'une **alternance en Bachelor CDA (Concepteur Développeur d’Applications)** au CCI Campus Strasbourg pour l'année universitaire 2026-2027.

---

## 🛠️ Technologies & Outils Utilisés

* **Framework Frontend :** React (avec Vite)
* **Navigation & Routage :** React Router DOM (`HashRouter` utilisé pour le déploiement)
* **Design & Styles :** CSS3 Moderne (Variables CSS, Flexbox, Grid, Animations fluides)
* **Icônes :** Iconify (`@iconify/react`)
* **Effets visuels :** Arrière-plan dynamique codé en pur HTML5 Canvas (constellations de particules réactives)

---

## ✨ Fonctionnalités Majeures

* **Mode Sombre / Mode Clair :** Gestion dynamique du thème avec sauvegarde des préférences utilisateur.
* **Arrière-plan interactif :** Réseau de particules mouvantes utilisant les couleurs dynamiques du thème principal (Rouge/Bleu) et ajusté pour ne pas bloquer les clics.
* **Parcours Complet :** Présentation détaillée de mes formations, de mes objectifs professionnels et de mes soft-skills.
* **Gestion des Expériences & Projets :** 
  * Page d'accueil avec affichage limité (Top projets / expériences).
  * Pages dédiées répertoriant l'ensemble des réalisations.
  * Structure conditionnelle (ternaire) gérant l'absence de données textuelles détaillées pour les missions avec un message d'erreur clair.
* **Page d'erreur 404 personnalisée :** Redirection propre de l'utilisateur égaré vers l'accueil via un composant dédié.
* **Optimisation de l'affichage :** Utilisation de `ScrollToTop` pour réinitialiser le défilement à chaque changement de page.

---

## 📦 Installation et Lancement en Local

Pour faire tourner le projet sur votre machine, suivez ces étapes :

### 1. Cloner le projet
git clone [https://github.com/votre-nom-d-utilisateur/nom-du-repo.git](https://github.com/votre-nom-d-utilisateur/nom-du-repo.git)
cd nom-du-repo

### 2. Installer les dépendances
npm install

### 3. Lancer le serveur de développement
npm run dev

Le projet sera alors accessible dans votre navigateur à l'adresse locale indiquée par Vite (généralement http://localhost:5173).

---

## 📁 Structure du Projet (Points clés)

src/
├── components/          # Composants réutilisables (Navbar, Footer, Hero, About...)
│   ├── CanvasBackground.jsx  # Arrière-plan de particules dynamiques (HTML5 Canvas)
│   └── ScrollToTop.jsx       # Reset du scroll lors de la navigation
├── pages/               # Vues principales du routeur (AllProjects, Veille, AboutFull...)
├── App.jsx              # Structure globale et configuration des routes
├── App.css              # Styles globaux et variables de thèmes (Light/Dark)
└── main.jsx             # Point d'entrée de l'application

---

## ✉️ Me Contacter
LinkedIn : https://www.linkedin.com/in/vincent-bonnet-06-

CV : Consultable et téléchargeable directement au format PDF depuis la section "A propos" du site.