// POUR LOGO LINKEDIN**************************************************

const logo_linkedin = document.querySelector(".logo-linkedin");

logo_linkedin.addEventListener("mouseover", () => {
  logo_linkedin.src = "./assets/linkedin logo sakura.png";
});

logo_linkedin.addEventListener("mouseout", () => {
  logo_linkedin.src = "./assets/linkedin logo blanc.png";
});

// POUR EFFET SELECTION CLASSE**************************************************

document
  .querySelectorAll(".la-6-eme, .la-5-eme, .la-4-eme, .la-3-eme")
  .forEach((choixClasse) => {
    choixClasse.addEventListener("click", () => {
      const isAlreadySelected = choixClasse.classList.contains(
        "classe-selectionnee"
      );

      // Supprimer la classe de tous les éléments
      document
        .querySelectorAll(".la-6-eme, .la-5-eme, .la-4-eme, .la-3-eme")
        .forEach((choixClasse) =>
          choixClasse.classList.remove("classe-selectionnee")
        );

      // Si ce n'était pas déjà sélectionné, on le sélectionne
      if (!isAlreadySelected) {
        choixClasse.classList.add("classe-selectionnee");
      }
      // Sinon on ne fait rien et ils sont tous désélectionnés
    });
  });

// POUR BOUTON VALIDER**************************************************

// Sélection du bouton
const boutonValider = document.getElementById("valider-classe");

// Lorsqu'on clique sur "VALIDER"
boutonValider.addEventListener("click", () => {
  const selection = document.querySelector(".classe-selectionnee");

  if (selection) {
    // Vérifie quelle classe est sélectionnée et redirige vers la bonne page
    if (selection.classList.contains("la-6-eme")) {
      window.location.href = "6eme.html";
    } else if (selection.classList.contains("la-5-eme")) {
      window.location.href = "5eme.html";
    } else if (selection.classList.contains("la-4-eme")) {
      window.location.href = "4eme.html";
    } else if (selection.classList.contains("la-3-eme")) {
      window.location.href = "3eme.html";
    }
  } else {
    alert("Veuillez sélectionner une classe avant de valider.");
  }
});
