tecos_nomes = [
  "Ana Carolina",
  "Ana Clara",
  "Beatriz Ramalho",
  "Breno Martins",
  "Bruna Andrade",
  "Cainã Lucas",
  "Caio Peternela",
  "Clara Santos",
  "Daniel Alves",
  "Daniel Dantas",
  "David Satoshi",
  "Edinaildo Costa",
  "Eliel Clementino",
  "Evandro Pereira",
  "Fabricio Assunção",
  "Felipe Soares",
  "Fernanda Liz",
  "Gabriel Santos",
  "Gabriela Victoria",
  "Gislane Nunes",
  "Glória Felix",
  "Ingrid Caroline",
  "João Vitor",
  "Laura Nascimento",
  "Lorrana Camargo",
  "Lucas Mariano",
  "Lucca Nunes",
  "Marcela Lima",
  "Marcelo Henrique",
  "Marcos Ornellas",
  "Marcos Viana",
  "Marília Moraes",
  "Rafael Leone",
  "Roberto de Moraes Zarzur",
  "Ronald Perdigão",
  "Sara Brangioni Santa Rita",
  "Tábata de Faria",
  "Victor Magalhães Barreto",
  "Victor Prata",
];
tecos_user = [
  "anacmas",
  "Dfinal_paginapessoal",
  "Beatrizresteves",
  "oBrenoMS",
  "andradebru",
  "paginaoficial",
  "caiopeternela",
  "ClaraSantosmf",
  "inczDan",
  "DaniDanis",
  "davidsatag",
  "edinaildo",
  "ElielClementino",
  "evandropcs",
  "fbc00",
  "felipesoaresfl",
  "fernandalizs",
  "gabriels999",
  "GabyVictoria0122",
  "gf-nunes",
  "globrito",
  "carolineingrid",
  "joaoprocopio",
  "launasci",
  "lorrananeves",
  "lukemariano",
  "luccaribeiro",
  "marcelavie",
  "mhenrique94",
  "129-ornellas",
  "MarcosGrandesso",
  "marilia-borgo",
  "rafaelleone",
  "Rdemora2",
  "ronald-ps",
  "sarabrangioni",
  "tabataf",
  "VictorMagalhaesBarreto",
  "ovictorprata",
];
tecos_repos = [
  "Desafio-final",
  "AnaClaraCoelho",
  "Desafio_final_pgpessoal",
  "d8.2",
  "dfinal-minha-pagina",
  "cainlucas",
  "dfinal-pagina-pessoal/pagina-pessoal/index.html",
  "BuserTech-D8-Personal-page",
  "D8-PgPessoal",
  "D--Final",
  "Pagina_pessoal",
  "Desafio-Final",
  "D9_minha_pagina_pessoal",
  "Pagina-Pessoal",
  "p-gina-pessoal-desafioFinal",
  "busertech-D9-personal-page",
  "Desafio-Final",
  "DF-PaginaPessoal",
  "Minha-Pagina-Pessoal",
  "D9.P-ginaPessoal",
  "d.9_pagina_pessoal_final_",
  "D-Final-Pagina-Pessoal",
  "dfinal-pag-pessoal",
  "D.FinalPagPessoal",
  "dfinal",
  "D9-Pagina-Pessoal",
  "d9-final",
  "Pagina-pessoal",
  "DFinal-Pag_Pessoal",
  "P-gina-Pessoal---Marcos-Ornellas",
  "D_Final_Pag_pessoal_marcos",
  "Portfolio_2022",
  "dfinal/index.html",
  "D.Final---Pagina_Pessoal",
  "Page-ronald",
  "P-gina-Pessoal",
  "Tabata-pagina-pessoal",
  "D-Final",
  "https://bit.ly/3lUllvf",
];

function showRepos() {
  const body = document.querySelector("body");
  const features = document.querySelector(".features");
  let link = data.url;
  let stars = data.stargazers_count;
  const article = document.createElement("article");

  const h3 = document.createElement("h3");
  article.appendChild(h3);
  h3.classList.add("major");
  h3.textContent = tecos_nomes[i];

  const a = document.createElement("a");
  a.classList.add("special");
  article.appendChild(a);
  a.setAttribute("href", link);
  a.setAttribute("target", "_blank");
  a.textContent = tecos_user[i];

  const span = document.createElement("span");
  article.appendChild(span);
  span.textContent = "⭐".repeat(stars);
  features.appendChild(article);
}

for (i = 0; i < tecos_nomes.length; i++) {
  fetch(`https://api.github.com/repos/${tecos_user[i]}/${tecos_repos[i]}`)
    .then((response) => response.json())
    .then((data) => showRepos(data));
}
