//récupérer les sections dans le DOM

let sectionHero = document.getElementById("hero");
let sectionProblematique = document.getElementById("problematique");
let sectionSolution = document.getElementById("solution");
let sectionBenefices = document.getElementById("benefices");
let sectionPreuve = document.getElementById("preuve");
let sectionPartenaires = document.getElementById("partenaires");
let sectionEngagement = document.getElementById("engagement");
let footer = document.getElementsByTagName("footer")[0];

let listeAncres = [sectionHero, sectionProblematique, sectionSolution, sectionBenefices, sectionPreuve, sectionPartenaires, sectionEngagement, footer];
let index = 0;

document.addEventListener("keydown", (e) => {
    // écouter appui flèche du bas
  // if (e.which === 40) {
  if (e.key === "ArrowDown") {
    
    if (index < listeAncres.length -1) {
          e.preventDefault();

      console.log("downArrowKey was pressed")
      // naviguer jusqu'à section suivante (+1 dans la liste)
      index++;
      listeAncres[index].scrollIntoView({behavior: 'smooth' });
    }
  }
    // écouter appui flèche du haut
  // else if (e.which === 38) {
  else if (e.key === "ArrowUp") {
    e.preventDefault();

    if (index > 0) {
      console.log("upArrowKey was pressed")
      // naviguer jusqu'à section précédente (-1 dans la liste)
      index--;
      listeAncres[index].scrollIntoView({behavior: 'smooth' });
    }
  }
});

