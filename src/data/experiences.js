export const experiences = [
  {
    id: 1,
    company: "TRUMPF Machines SARL",
    type: "Stage - BTS SIO - 2e année",
    location: "Haguenau",
    locationLink: "https://maps.app.goo.gl/JtfJ2MSKFyGbX4aH6",
    startDate: "12/01/2026",
    endDate: "13/02/2026",
    missions: [
      "Maintenance sur une application PowerApps.",
      "Développement d'outils Excel avec VBA.",
      "Missions de cybersécurité et rédaction de procédures techniques."
    ],
    logo: "/Logo_Trumpf.png",
    intro: `Durant ma deuxième année de BTS SIO, j’ai effectué un stage au sein de TRUMPF Machines SARL à Haguenau, du 12 janvier 2026 au 13 février 2026.

    Ce stage m’a permis de participer à différents projets informatiques, notamment autour des outils Microsoft (Power Apps, Excel, VBA), de la cybersécurité et de la gestion des systèmes d’information.`,
  detailedMissions: [
    {
        title : "Intégration et environnement de travail",
        content : `À mon arrivée, j’ai été accueilli au sein de l’entreprise et j’ai effectué une visite des locaux. J’ai pris en main l’environnement informatique, avec quelques difficultés initiales de connexion au compte Windows et à Workday liées à un problème de compte.

        J’ai également réalisé l’ensemble des e-learning obligatoires du site TRUMPF Haguenau (santé et sécurité au travail, sécurité informatique, environnement et énergie, compliance, qualité) ainsi que des formations du groupe TRUMPF telles que Digital Transformation, Data Protection et la formation obligatoire « AI Basic: Ready for AI ».

        Ces formations m’ont permis de comprendre les fondamentaux de l’IA, les risques, les exigences réglementaires comme l’EU AI Act, ainsi que la stratégie IA du groupe TRUMPF.`
    },
    {
        title: "Application de commande de repas – Power Apps / Power Automate",
        content: `Un dysfonctionnement a été identifié sur l’application de commande de repas : les flux Power Automate ne fonctionnaient plus. Ce problème était lié à l’adresse mail utilisée pour l’exécution des flux, rattachée à un collaborateur en arrêt maladie de longue durée.

        Pour des raisons de sécurité, tout compte inactif pendant plus de trois mois est automatiquement désactivé par l’entreprise, ce qui a entraîné l’arrêt des flux.

        Une demande a donc été effectuée auprès du groupe TRUMPF via un ticket afin de savoir s’il était possible d’utiliser une adresse mail générique pour l’exécution des flux Power Automate, dans le but d’éviter ce type de problème à l’avenir.

        En attendant une réponse, l’application Power Apps a été modifiée afin de supprimer l’utilisation des flux Power Automate et de les remplacer par des formulaires intégrés directement dans Power Apps.

        Par la suite, j'ai rédigé un mode opératoire expliquant : la modification d’une adresse mail dans un connecteur Power Automate, l’actualisation du flux dans l’application Power Apps et la publication de l’application.`
    },
    {
        title: "Amélioration de l’application Power Apps",
        content:
        `Des fonctionnalités supplémentaires ont été ajoutées à l’application, notamment la gestion des jours fériés. Une fonction permettant de calculer automatiquement la date de Pâques a également été implémentée à l’aide de l’algorithme de Meeus, basé sur le calendrier grégorien.`
    },
    {
        title: "Création d’un outil Excel – Échéancier fiscal",
        content:
        `J’ai développé un fichier Excel avec code VBA permettant de générer automatiquement un échéancier fiscal semestriel. Le tableau affiche les mois de l’année, le jour de la semaine, le numéro du jour, les initiales des responsables ainsi que les informations relatives aux jours fériés et échéances fiscales.

        Les week-ends et jours fériés sont automatiquement grisés. Si une échéance tombe un jour non ouvré, elle est reportée au prochain jour ouvré et mise en évidence en rouge.

        L’algorithme de Meeus a été implémenté en VBA afin de calculer automatiquement la date de Pâques. Le fichier a ensuite été optimisé pour faciliter la modification des dates d’échéance et du système d’initiales. Un manuel d’utilisation et un guide de modification ont été rédigés.`
    },
    {
        title: "Cybersécurité et analyse des politiques internes",
        content:
        `Une formation en cybersécurité en anglais a été suivie, incluant l’utilisation d’une machine virtuelle composée d’un contrôleur de domaine Windows, de serveurs Windows et de serveurs Linux.

        Des exercices pratiques ont été réalisés : récupération de mots de passe avec Mimikatz, infiltration de serveurs et accès à des données sensibles. L’objectif était de comprendre les mécanismes d’attaque afin d’identifier les mesures de protection à mettre en place.

        Des documents de sécurité informatique du groupe TRUMPF ont également été étudiés (anglais et allemand). Leur contenu a été synthétisé en français afin de faciliter leur compréhension, certains documents d’une vingtaine de pages ayant été résumés en quatre à cinq pages.

        Un document interne de sensibilisation à la sécurité informatique a également été rédigé pour les collaborateurs de TRUMPF Haguenau. Il aborde notamment la responsabilité du matériel informatique, la gestion des mots de passe, le MFA, les catégories de données (Business, Confidential, Critical), le RGPD et la sécurité lors des déplacements professionnels.`
    },
    {
        title: "Organisation et outils informatiques",
        content:
        `J'ai créé un fichier Excel afin de recenser l’ensemble des sites SharePoint et canneaux Teams créés au sein de TRUMPF Haguenau. Cet outil permet d’avoir une vision globale des sites et canneaux, d’identifier leurs propriétaires et de faciliter la réattribution des droits en cas de départ d’un collaborateur.

        L’entreprise utilise l’ERP SAP (en cours de migration vers SAP Cloud) pour la production, les achats, la gestion de stocks, RH, etc... , Workday pour les ressources humaines et la suite Microsoft 365.`
    },
  ]
  },
  {
    id: 2,
    company: "TRUMPF Machines SARL",
    type: "Stage - BTS SIO - 1e année",
    location: "Haguenau",
    locationLink: "https://maps.app.goo.gl/JtfJ2MSKFyGbX4aH6",
    startDate: "02/06/2025",
    endDate: "04/07/2025",
    missions: [
      "Maintenance sur une application PowerApps.",
      "Correction de problèmes d’affichage et amélioration de la fiabilité de l’interface."
    ],
    logo: "/Logo_Trumpf.png",
    intro: "Ce stage avait pour objectif principal la maintenance, l’optimisation et l’évolution d’une application interne de commande de repas développée sous Microsoft Power Apps et connectée à SharePoint et Power Automate.",
    detailedMissions: [
      {
        title: "Analyse et rédaction du cahier des charges",
        content: "Le stage a débuté par la rédaction d’un cahier des charges complet afin de cadrer les modifications et évolutions à apporter à l’application de commande de repas. Plusieurs réunions ont été organisées avec les différents services afin d’identifier précisément les besoins des utilisateurs standards et administrateurs."
      },
      {
        title: "Amélioration et optimisation de l’application Power Apps",
        content: `
        L’application existante a été retravaillée afin d’améliorer l’ergonomie et les performances. Le système de modification et d’annulation de commande a été entièrement refait en utilisant des flux Power Automate connectés à SharePoint.

        Des vérifications ont été ajoutées afin d’empêcher la modification d’une commande pour un jour passé ou après l’heure limite (9h pour les utilisateurs standards, et plus pour les administrateurs afin qu'ils puissent effectuer des modifications au dernier moment).

        Le système de vérification des commandes existantes a été optimisé en supprimant certaines dépendances aux flux Power Automate, permettant un gain significatif de rapidité.`
     },
      {
        title: "Gestion des droits et rôles",
        content: `
        Un système de gestion des rôles a été mis en place pour différents profils : IT, RH, gestion des repas, direction, membres CSE, etc...

        Plusieurs pages administrateur ont été développées :`,
        subList: ["Affichage des profils ayant des droits spécifiques", "Ajout de nouveaux utilisateurs avec rôles", "Modification des droits existants"]
      },
      {
        title: "Optimisation technique et Déploiement",
        content: "Renommage des variables pour la lisibilité, optimisation des collections et rédaction de la documentation technique (guides administrateur et utilisateur).",
        subList: ["Mode opératoire", "Guide administrateur", "Documentation technique"]
      }
    ]
  },
  {
    id: 3,
    company: "TRUMPF Machines SARL",
    type: "Stage - BAC PRO SN",
    location: "Haguenau",
    locationLink: "https://maps.app.goo.gl/JtfJ2MSKFyGbX4aH6",
    startDate: "11/03/2024",
    endDate: "05/04/2024",
    missions: [
      "Tests et mise en service d’une application développée en interne.",
      "Validation des fonctionnalités et accompagnement des utilisateurs."
    ],
    logo: "/Logo_Trumpf.png"
  },
  {
    id: 4,
    company: "TRUMPF Machines SARL",
    type: "Stage - BAC PRO SN",
    location: "Haguenau",
    locationLink: "https://maps.app.goo.gl/JtfJ2MSKFyGbX4aH6",
    displayDate: "Du 25/09/23 au 20/10/23 et du 05/06/23 au 30/06/23",
    missions: [
      "Développement d’une application PowerApps pour la commande de repas par les salariés.",
      "Tests, mise en service et suivi du déploiement dans l’entreprise."
    ],
    logo: "/Logo_Trumpf.png"
  },
  {
    id: 5,
    company: "GILGER",
    type: "Stage - BAC PRO SN",
    location: "Niederbronn-les-Bains",
    locationLink: "https://maps.app.goo.gl/1HRYhzcDYAmtKrqG7",
    startDate: "21/03/2022",
    endDate: "08/04/2022",
    missions: [
      "Installation et maintenance d’équipements électroniques.",
      "Réparation d’équipements électriques et participation à des travaux techniques."
    ]
  }
];