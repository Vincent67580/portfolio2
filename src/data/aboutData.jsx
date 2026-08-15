export const aboutSections = [
  {
    id: "info",
    title: "Informations personnelles",
    className: "detail-card",
    content: (
      <p>
        Je m’appelle <strong>Vincent Bonnet</strong>. Je suis récemment <strong>diplômé du BTS SIO</strong> 
        (Services Informatiques aux Organisations), option <strong>SLAM</strong> (Solutions Logicielles et Applications Métiers) 
        au lycée René Cassin à Strasbourg. Passionné par le <em>développement web</em> et la <em>programmation</em>, 
        j’aime créer des solutions logicielles utiles, modernes et efficaces.
      </p>
    )
  },
  {
    id: "objective",
    title: "Mon objectif actuel",
    className: "detail-card objective-card",
    content: (
      <p>
        Déterminé à poursuivre et approfondir mes compétences, je recherche activement une <strong>alternance</strong> 
        pour intégrer le <strong>Bachelor CDA (Concepteur Développeur d’Applications)</strong> au 
        <strong>CCI Campus Strasbourg</strong> pour l'année universitaire 2026-2027. Ce rythme me permettra d'allier 
        théorie académique et immersion concrète en entreprise.
      </p>
    )
  },
  {
    id: "interests",
    title: "Mes centres d’intérêt",
    className: "detail-card",
    content: (
      <p>
        En dehors du développement, je m’intéresse de près à la <strong>veille technologique</strong> et au domaine de la 
        <strong>data science / intelligence artificielle</strong>. J’aime aussi le sport, les jeux vidéo et la musique, 
        qui me permettent de garder un bon équilibre au quotidien.
      </p>
    )
  }
];

export const cvConfig = {
  filePath: "documents/2026_CV_BONNET-Vincent.pdf",
  description: "Vous pouvez consulter ou télécharger mon CV pour en savoir plus sur mon parcours et mes compétences."
};