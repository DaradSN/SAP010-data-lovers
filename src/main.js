import cardData from "./tarot.js";
import { createCardElement, displayCards, activateFilterLink } from "./data.js";

const container = document.querySelector("#cardContainer");


// Função para ordenar as cartas por nome
function sortCardsByName(cards, sortOrder) {
  cards.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (sortOrder === "name-asc") {
      return nameA.localeCompare(nameB);
    } else if (sortOrder === "name-desc") {
      return nameB.localeCompare(nameA);
    } else {
      return 0;
    }
  });
}

const urlParams = new URLSearchParams(window.location.search);
const filterType = urlParams.get("type");
const filterSuit = urlParams.get("suit");
const sortParam = urlParams.get("sort");

// Aplica a ordenação se o parâmetro de ordenação estiver presente
sortCardsByName(cardData, sortParam);

// Limpa o container antes de adicionar os cards
container.innerHTML = "";

// Cria os cards ordenados e adiciona-os ao container
for (let i = 0; i < cardData.length; i++) {
  const card = createCardElement(cardData[i]);
  container.appendChild(card);
}

// Event listener para o link "Arcanos Maiores"
linkBigger.addEventListener("click", function () {
  if (currentFilter !== "maior") {
    currentFilter = "maior";
    activateFilterLink(linkBigger);
    displayCards(["maior"]); // Exibe apenas os arcanos maiores
  }
});

// Event listener para o link "Arcanos Menores"
linkMinors.addEventListener("click", function () {
  if (currentFilter !== "menor") {
    currentFilter = "menor";
    activateFilterLink(linkMinors);
    displayCards(["menor"]); // Exibe apenas os arcanos menores
  }
});

// Event listener para o link "Todas as Cartas"
linkCardall.addEventListener("click", function () {
  if (currentFilter !== "all") {
    currentFilter = "all";
    activateFilterLink(linkCardall);
    displayCards(["all"]); // Exibe todas as cartas, passando uma lista vazia
  }
});

// Event listener para o link "Copas"
linkCopas.addEventListener("click", function () {
  if (currentFilter !== "copas") {
    currentFilter = "copas";
    activateFilterLink(linkCopas);
    displayCards(["copas"]); // Exibe apenas as cartas de copas
  }
});

// Event listener para o link "Ouros"
linkOuros.addEventListener("click", function () {
  if (currentFilter !== "ouros") {
    currentFilter = "ouros";
    activateFilterLink(linkOuros);
    displayCards(["ouros"]); // Exibe apenas as cartas de ouros
  }
});

// Event listener para o link "Paus"
linkPaus.addEventListener("click", function () {
  if (currentFilter !== "paus") {
    currentFilter = "paus";
    activateFilterLink(linkPaus);
    displayCards(["paus"]); // Exibe apenas as cartas de paus
  }
});

// Event listener para o link "Espadas"
linkEspadas.addEventListener("click", function () {
  if (currentFilter !== "espadas") {
    currentFilter = "espadas";
    activateFilterLink(linkEspadas);
    displayCards(["espadas"]); // Exibe apenas as cartas de espadas
  }
});

const filterLinks = document.querySelectorAll(".filtro01 a");

filterLinks.forEach((filterLink) => {
  filterLink.addEventListener("click", function () {
    const filter = filterLink.getAttribute("data-filter");

    if (currentFilter !== filter) {
      currentFilter = filter;
      activateFilterLink(filterLink);
      displayCards([filter]);
    }
  });
});

// Exibe os cards com base nos filtros
const filters = [];
if (filterType) {
  filters.push(filterType);
}
if (filterSuit) {
  filters.push(filterSuit);
}
displayCards(filters);