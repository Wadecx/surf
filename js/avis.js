async function afficherAvis() {
  try {
    const response = await fetch("/js/avis.json");
    if (!response.ok) throw new Error("Erreur lors du chargement des avis.");

    const avisClients = await response.json();

    const sectionAvis = document.querySelector(".avis");
    if (!sectionAvis) return;

    sectionAvis.innerHTML = `
      <h2>Avis de nos clients</h2>
      <div class="avis-list">
        ${avisClients
          .map(
            (avis) => `
          <article class="avis-item">
            <h3>${avis.nom}</h3>
            <p class="stars">${avis.avis}</p>
            <p class="description">${avis.description}</p>
          </article>`
          )
          .join("")}
      </div>
    `;
  } catch (error) {
    console.error(error);
  }
}

document.addEventListener("DOMContentLoaded", afficherAvis);
