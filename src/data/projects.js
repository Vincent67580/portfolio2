// src/data/projects.js
export const projects = [
{
  id: 1,
  title: "Portfolio personnel (V1)",
  description: "Développement complet de mon premier site portfolio afin de présenter mes compétences, mes projets et mon parcours professionnel. Le site a été entièrement conçu en HTML, CSS et JavaScript, avec une attention particulière portée à la responsivité et l’esthétique.",
  image: "images/imageProjetPortfolio.png",
  link: "https://vincent67580.github.io/portfolio",
  
  tech: ["HTML", "CSS", "JavaScript"],
  
  // Bibliothèques et Outils
  details: [
    { name: "HTML5", icon: "vscode-icons:file-type-html" },
    { name: "CSS3", icon: "simple-icons:css3", color: "#1572B6" },
    { name: "JavaScript", icon: "logos:javascript" },
    { name: "VS Code", icon: "vscode-icons:file-type-vscode" },
    { name: "GitHub Pages", icon: "mdi:github", color: "#000000" }
  ],
  
  // Fonctionnalités 
  features: [
    { label: "Design Responsive", icon: "mdi:devices", color: "#4CAF50" },
    { label: "Interface Esthétique", icon: "mdi:palette", color: "#FF7043" },
    { label: "Hébergement automatisé", icon: "mdi:cloud-check", color: "#0288D1" }
  ]
},
{
  id: 2,
  title: "Application Python de gestion de rendez-vous",
  description: "Développement d’une application en Python fonctionnant en mode console, permettant de gérer des rendez-vous clients (ajout, affichage, modification, suppression) et d’envoyer automatiquement un e-mail de confirmation ou d’annulation à chaque action.",
  image: "images/imageProjetPythonGestionRDV.png",
  // Liens vers les fichiers dans ton dossier public/projets/
  link: "projets/projetPythonGestionRDV.txt", 
  downloadLink: "projets/projetPythonGestionRDV.zip",
  // Catégories techniques
  tech: ["Python", "SQLite3"],
  // Liste détaillée 
  details: [
    { name: "Python", icon: "logos:python" },
    { name: "SQLite3", icon: "logos:sqlite" },
    { name: "smtplib", icon: "mdi:email-send", color: "#0078D4" },
    { name: "email", icon: "mdi:email", color: "#E53935" }
  ],
  // Tes fonctionnalités avec leurs icônes respectives
  features: [
    { label: "Prise de rendez-vous", icon: "mdi:calendar-plus", color: "#4CAF50" },
    { label: "Suppression / modification", icon: "mdi:calendar-remove", color: "#FF7043" },
    { label: "Notifications e-mail", icon: "mdi:email-fast", color: "#0288D1" }
  ]
},
{
  id: 3,
  title: "Bot Python de recherche de restaurants",
  description: "Développement d’un bot console permettant de rechercher des restaurants autour d’une ville via les API OpenStreetMap (Nominatim & Overpass). L’utilisateur choisit le rayon, le nombre de résultats et peut exporter la liste au format CSV.",
  image: "images/imageProjetPythonBotResto.png",
  
  link: "projets/projetPythonBotRechercheResto.txt",
  downloadLink: "projets/projetPythonBotRechercheResto.zip",
  
  tech: ["Python", "API", "CSV"],
  
  // Bibliothèques et API avec leurs icônes respectives
  details: [
    { name: "Python", icon: "logos:python" },
    { name: "Requests", icon: "simple-icons:python", color: "#3776AB" },
    { name: "JSON", icon: "vscode-icons:file-type-json" },
    { name: "CSV", icon: "bi:filetype-csv", color: "#0A7F42" },
    { name: "Nominatim", icon: "simple-icons:openstreetmap", color: "#77B255" },
    { name: "Overpass API", icon: "mdi:earth", color: "#2E7D32" }
  ],
  
  // Fonctionnalités clés
  features: [
    { label: "Recherche par ville & rayon", icon: "mdi:magnify", color: "#1565C0" },
    { label: "Affichage des coordonnées GPS", icon: "mdi:silverware-fork-knife", color: "#8D6E63" },
    { label: "Export automatique CSV", icon: "bi:filetype-csv", color: "#0A7F42" }
  ]
},
{
  id: 4,
  title: "Web application recherche de restaurants",
  description: "Développement d’une application web interactive permettant de localiser des restaurants autour d’une ville. Utilisation d'OpenStreetMap pour les données et Leaflet pour le rendu cartographique, avec options de filtrage par rayon et export CSV.",
  image: "images/imageProjetRechercheRestaurant.png",
  // Chemin vers ton fichier HTML de démo dans le dossier public
  link: "projets/rechercheRestaurant.html", 
  
  tech: ["HTML", "CSS","JavaScript", "Leaflet", "APIs"],

  // Bibliothèques et API
  details: [
    { name: "JavaScript", icon: "logos:javascript" },
    { name: "HTML5", icon: "vscode-icons:file-type-html" },
    { name: "CSS3", icon: "simple-icons:css3", color: "#1572B6" },
    { name: "Leaflet", icon: "simple-icons:leaflet", color: "#4A90E2" },
    { name: "Overpass API", icon: "mdi:earth", color: "#2E7D32" },
    { name: "Photon", icon: "mdi:map-marker-radius", color: "#FF5722" }
  ],

  // Fonctionnalités
  features: [
    { label: "Carte interactive Leaflet", icon: "mdi:map", color: "#4CAF50" },
    { label: "Géocodage (Nominatim/Photon)", icon: "mdi:magnify", color: "#1565C0" },
    { label: "Affichage détaillé des résultats", icon: "mdi:format-list-bulleted", color: "#FF9800" },
    { label: "Export des données en CSV", icon: "bi:filetype-csv", color: "#0A7F42" }
  ]
},
{
  id: 5,
  title: "Portfolio personnel",
  description: "Conception et développement d'une application web moderne avec React.js. Architecture basée sur des composants réutilisables, gestion du routage dynamique et déploiement automatisé via GitHub Actions.",
  image: "images/imagePortfolioReact.png", 
  link: "#", 
  
  tech: ["React", "Vite", "React Router"],
  
  details: [
    { name: "React", icon: "logos:react" },
    { name: "Vite", icon: "logos:vitejs" },
    { name: "React Router", icon: "logos:react-router" },
    { name: "Iconify", icon: "simple-icons:iconify", color: "#1797DB" },
    { name: "CSS3", icon: "simple-icons:css3", color: "#1572B6" }
  ],
  
  features: [
    { label: "Architecture Composants", icon: "mdi:hexagon-multiple", color: "#61DAFB" },
    { label: "Routage Dynamique", icon: "mdi:routes", color: "#FF4400" },
    { label: "Design Antéchronologique", icon: "mdi:sort-variant", color: "#4CAF50" },
    { label: "Optimisation Vite.js", icon: "mdi:lightning-bolt", color: "#FFD600" }
  ]
}
];