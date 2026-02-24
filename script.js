const logo_linkedin = document.querySelector(".logo-linkedin");

if (logo_linkedin) {
  logo_linkedin.addEventListener("mouseover", () => {
    logo_linkedin.src = "./assets/linkedin logo sakura.png";
  });

  logo_linkedin.addEventListener("mouseout", () => {
    logo_linkedin.src = "./assets/linkedin logo blanc.png";
  });
}

document
  .querySelectorAll(".la-6-eme, .la-5-eme, .la-4-eme, .la-3-eme")
  .forEach((choixClasse) => {
    choixClasse.addEventListener("click", () => {
      const isAlreadySelected = choixClasse.classList.contains(
        "classe-selectionnee",
      );

      document
        .querySelectorAll(".la-6-eme, .la-5-eme, .la-4-eme, .la-3-eme")
        .forEach((choixClasse) =>
          choixClasse.classList.remove("classe-selectionnee"),
        );

      if (!isAlreadySelected) {
        choixClasse.classList.add("classe-selectionnee");
      }
    });
  });

const boutonValider = document.getElementById("valider-classe");

if (boutonValider)
  boutonValider.addEventListener("click", () => {
    const selection = document.querySelector(".classe-selectionnee");

    if (selection) {
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

const burgerBtn = document.getElementById("burger-btn");
const navUl = document.querySelector("nav ul");

if (burgerBtn && navUl) {
  burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("open");
    navUl.classList.toggle("open");
  });

  navUl.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      burgerBtn.classList.remove("open");
      navUl.classList.remove("open");
    });
  });
}

const navBarBurger = document.getElementById("nav-bar-burger");
const navBarUl = document.querySelector(".nav-bar ul");

if (navBarBurger && navBarUl) {
  navBarBurger.addEventListener("click", () => {
    navBarBurger.classList.toggle("open");
    navBarUl.classList.toggle("open");
  });

  navBarUl.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navBarBurger.classList.remove("open");
      navBarUl.classList.remove("open");
    });
  });
}

const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);

revealEls.forEach((el) => revealObserver.observe(el));
