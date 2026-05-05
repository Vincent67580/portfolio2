export const skills = [
    { 
        id: "web",
        title: "Développement Web", 
        icon: "noto:desktop-computer", 
        desc: "HTML, CSS, JavaScript, PHP, MySQL",
        detailText: `Je maîtrise les langages du développement web, notamment HTML5, CSS3 et JavaScript pour la partie front-end, ainsi que PHP et MySQL pour le back-end. 
        J’ai également l’habitude de gérer les formulaires, les sessions utilisateurs et les interactions avec des bases de données.`,
        technos: [
            { name: "HTML5", icon: "vscode-icons:file-type-html" },
            { name: "CSS3", icon: "simple-icons:css3", color: "#1572B6" },
            { name: "JavaScript", icon: "logos:javascript" },
            { name: "PHP", icon: "vscode-icons:file-type-php" },
            { name: "MySQL", icon: "logos:mysql-icon" }
        ]
    },
    { 
        id: "prog",
        title: "Programmation", 
        icon: "eos-icons:rotating-gear", 
        desc: "Python, JavaScript, Java",
        detailText: `En programmation, j’utilise régulièrement Python, Java et JavaScript. 
        Je conçois des programmes orientés objet (POO), en mettant l’accent sur les structures de données et les algorithmes. 
        J’ai également de l’expérience en automatisation de tâches.`,
        technos: [
            { name: "Python", icon: "logos:python" },
            { name: "Java", icon: "logos:java" },
            { name: "JavaScript", icon: "logos:javascript" }
        ]
    },
    { 
        id: "db",
        title: "Bases de données", 
        icon: "devicon:azuresqldatabase", 
        desc: "SQL, PhpMyAdmin, SQLite",
        detailText: `Je sais concevoir et manipuler des bases de données relationnelles à l’aide du langage SQL : création de tables, écriture de requêtes complexes (JOIN, GROUP BY, etc.) et optimisation de performances.`,
        technos: [
            { name: "MySQL", icon: "logos:mysql-icon" },
            { name: "SQLite", icon: "vscode-icons:file-type-sqlite" },
            { name: "PhpMyAdmin", icon: "simple-icons:phpmyadmin" }
        ]
    },
    { 
        id: "apps",
        title: "Développement d’applications", 
        icon: "basil:apps-solid", 
        desc: "PowerApps, WinDev",
        detailText: `J’ai participé à la création d’applications à l’aide d’environnements tels que WinDev et PowerApps. Cela inclut la conception d’interfaces utilisateur et l’intégration de bases de données.`,
        technos: [
            { name: "WinDev", icon: "mdi:application", color: "#FFD000" },
            { name: "PowerApps", icon: "simple-icons:powerapps", color: "#742774" }
        ]
    },
    { 
        id: "tools",
        title: "Outils & Méthodes", 
        icon: "noto:puzzle-piece", 
        desc: "Git, VS Code, GitHub",
        detailText: `J’utilise des outils de développement comme Git, GitHub et Visual Studio Code. Je travaille principalement sous Windows, avec quelques notions sur Linux.`,
        technos: [
            { name: "Git", icon: "logos:git-icon" },
            { name: "GitHub", icon: "mdi:github" },
            { name: "VS Code", icon: "vscode-icons:file-type-vscode" },
            { name: "Windows", icon: "mdi:microsoft-windows", color: "#0078D6" },
            { name: "Linux", icon: "logos:linux-tux" }
        ]
    },
    { 
        id: "others",
        title: "Autres compétences", 
        icon: "noto:books", 
        desc: "Bureautique, Langues",
        detailText: `Je possède de bonnes connaissances en bureautique et je parle français (langue maternelle), anglais et allemand (notions).`,
        technos: [
            { name: "Word", icon: "vscode-icons:file-type-word" },
            { name: "Excel", icon: "vscode-icons:file-type-excel" },
            { name: "PowerPoint", icon: "vscode-icons:file-type-powerpoint" },
            { name: "Français", icon: "twemoji:flag-france" },
            { name: "Anglais", icon: "twemoji:flag-united-kingdom" },
            { name: "Allemand", icon: "twemoji:flag-germany" }
        ]
    }
];