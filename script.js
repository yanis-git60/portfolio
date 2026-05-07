const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");

    if (mobileMenu.classList.contains("hidden")) {
      menuBtn.textContent = "☰";
    } else {
      menuBtn.textContent = "×";
    }
  });
}

document.querySelectorAll("#mobileMenu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    menuBtn.textContent = "☰";
  });
});

const copyMessageBtn = document.getElementById("copyMessageBtn");
const copyStatus = document.getElementById("copyStatus");

if (copyMessageBtn && copyStatus) {
  copyMessageBtn.addEventListener("click", async () => {
    const message = `Bonjour,

Je suis étudiant ingénieur informatique en alternance et je propose des petites missions en développement web et automatisation.

Je peux vous aider sur :
- site vitrine responsive ;
- dashboard ou outil interne ;
- automatisation Excel/CSV ;
- nettoyage ou export de données ;
- mise en ligne avec GitHub/Netlify.

Voici deux exemples de projets :
- Site vitrine : https://site-vitrine-exemple-medecin.netlify.app
- Dashboard CSV : https://demo-dashboard-csv.netlify.app

Mon profil Codeur.com :
https://www.codeur.com/-yanisr1ef8

Je peux vous proposer une première version simple, propre et bien cadrée selon votre besoin.`;

    try {
      await navigator.clipboard.writeText(message);
      copyStatus.textContent = "Message copié.";
      copyStatus.classList.remove("hidden");

      setTimeout(() => {
        copyStatus.classList.add("hidden");
      }, 3000);
    } catch (error) {
      copyStatus.textContent = "Impossible de copier automatiquement.";
      copyStatus.classList.remove("hidden");
    }
  });
}