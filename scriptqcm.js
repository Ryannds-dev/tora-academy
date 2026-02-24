console.log("JS chargé !");

const questionElement = document.getElementById("question");
const boutonsReponse = document.getElementById("boutons-reponse");
const boutonSuivant = document.getElementById("bouton-suivant");

let numeroQuestionActuelle = 0;
let score = 0;

function afficherQuestion() {
  const questionActuelle = questions[numeroQuestionActuelle];

  // Affiche le numéro + la question dans le H2
  //et pour éviter de concaténer avec des + à chaque fois tu peux faire le combo backtick et $ et accolade plus propre
  questionElement.textContent = `${numeroQuestionActuelle + 1}. ${
    questionActuelle.question
  }`;
  boutonsReponse.innerHTML = "";
  boutonSuivant.style.display = "none";

  questionActuelle.reponses.forEach((reponse) => {
    const bouton = document.createElement("button");
    bouton.classList.add("reponse");
    bouton.textContent = reponse.contenu;

    bouton.addEventListener("click", () => {
      // Empêche de cliquer plusieurs fois
      const tousLesBoutons = boutonsReponse.querySelectorAll("button");
      tousLesBoutons.forEach(
        (boutonReponse) => (boutonReponse.disabled = true),
      );

      // Coloration de toutes les réponses
      tousLesBoutons.forEach((boutonReponse) => {
        const texte = boutonReponse.textContent;
        const bonne = questionActuelle.reponses.find(
          (reponse) => reponse.vraioufaux && reponse.contenu === texte,
        );
        if (bonne) {
          boutonReponse.style.backgroundColor = "#28a745";
          boutonReponse.style.color = "white";
        }
      });

      // Si mauvaise réponse, on colore en rouge
      if (!reponse.vraioufaux) {
        bouton.style.backgroundColor = "#dc3545";
        bouton.style.color = "white";
      } else {
        score++;
      }

      // Affiche le bouton suivant
      boutonSuivant.style.display = "block";
    });

    boutonsReponse.appendChild(bouton);
  });
}

boutonSuivant.addEventListener("click", () => {
  numeroQuestionActuelle++;
  if (numeroQuestionActuelle < questions.length) {
    afficherQuestion();
  } else {
    afficherScoreFinal();
  }
});

const boutonRecommencer = document.getElementById("bouton-recommencer");
const conteneurBoutonsFin = document.getElementById("boutons-fin");

function afficherScoreFinal() {
  questionElement.textContent = `QCM terminé ! 🌟 Ton score : ${score} / ${questions.length}`;
  boutonsReponse.innerHTML = "";
  boutonSuivant.style.display = "none";
  conteneurBoutonsFin.style.display = "block";
}

boutonRecommencer.addEventListener("click", () => {
  numeroQuestionActuelle = 0;
  score = 0;
  conteneurBoutonsFin.style.display = "none";
  boutonSuivant.style.display = "none";
  afficherQuestion();
});

// Lancer la première question
afficherQuestion();
