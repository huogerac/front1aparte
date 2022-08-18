const tecos = [
    "vitoiuo/site_status",
    "fbc00/animal-game",
    //   "http://127.0.0.1:5500/index.html#continue",
    //   "anacmas.github.io/Desafio-final/",
    //   "anaclaracoelho.github.io/Dfinal_paginapessoal/",
    //   "beatrizresteves.github.io/Desafio_final_pgpessoal/",
    //   "obrenoms.github.io/d8.2/",
    //   "andradebru.github.io/dfinal-minha-pagina/",
    //   "cainlucas.github.io/paginaoficial/",
    //   "caiopeternela.github.io/dfinal-pagina-pessoal/pagina-pessoal/index.html",
    //   "clarasantosmf.github.io/BuserTech-D8-Personal-page/",
    //   "inczdan.github.io/D8-PgPessoal/",
    //   "danidanis.github.io/D--Final/",
    //   "davidsatag.github.io/Pagina_pessoal/",
    //   "edinaildo.github.io/Desafio-Final/",
    //   "elielclementino.github.io/D9_minha_pagina_pessoal/",
    //   "evandropcs.github.io/Pagina-Pessoal/",
    //   "fbc00.github.io/p-gina-pessoal-desafioFinal/",
    //   "felipesoaresfl.github.io/busertech-D9-personal-page/",
    //   "fernandalizs.github.io/Desafio-Final/",
    //   "gabriels999.github.io/DF-PaginaPessoal/",
    //   "gabyvictoria0122.github.io/Minha-Pagina-Pessoal/",
    //   "gf-nunes.github.io/D9.P-ginaPessoal/",
    //   "globrito.github.io/d.9_pagina_pessoal_final_/",
    //   "carolineingrid.github.io/D-Final-Pagina-Pessoal/",
    //   "joaoprocopio.github.io/dfinal-pag-pessoal/",
    //   "launasci.github.io/D.FinalPagPessoal/",
    //   "lorrananeves.github.io/dfinal/",
    //   "lukemariano.github.io/D9-Pagina-Pessoal/",
    //   "luccaribeiro.github.io/d9-final/",
    //   "marcelavie.github.io/Pagina-pessoal/",
    //   "mhenrique94.github.io/DFinal-Pag_Pessoal/",
    //   "129-ornellas.github.io/P-gina-Pessoal---Marcos-Ornellas/",
    //   "marcosgrandesso.github.io/D_Final_Pag_pessoal_marcos/",
    //   "marilia-borgo.github.io/Portfolio_2022/",
    //   "rafaelleone.github.io/dfinal/index.html",
    //   "rdemora2.github.io/D.Final---Pagina_Pessoal/",
    //   "ronald-ps.github.io/Page-ronald/",
    //   "sarabrangioni.github.io/P-gina-Pessoal/",
    //   "tabataf.github.io/Tabata-pagina-pessoal/",
    //   "victormagalhaesbarreto.github.io/D-Final/",
    //   "huogerac/front1aparte",
  ];
  
  let elSection = document.querySelector(".features");
  function crielArt() {
    const article = document.createElement("article");
    return article;
  }
  
  function crieHtml(username, link, stars) {
    let estrela = "⭐".repeat(stars);
    const html = `
      <h3 class="major">${username}</h3>
      <a href=${link} class="special" target="_blank">${username}</a>
      <span> ${estrela}</span>
      `;
    return html;
  }
  
  const accessAllLinks = (tecos) => {
    let estrela;
    let nome;
    let link;
    for (i of tecos) {
      fetch(`https://api.github.com/repos/${i}`)
        .then((response) => response.json())
        .then((response) => {
          estrela = response.stargazers_count;
          nome = response.owner.login;
          link = response.owner.html_url;
          let el = crielArt();
          let html = crieHtml(nome, link, estrela);
          el.innerHTML = html;
          elSection.appendChild(el);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };
  
  // let el = crielArt();
  // let html = crieHtml("Victor", "vitoiuo", "hdashdhad", 1);
  // el.innerHTML = html;
  // elSection.appendChild(el);
  
  accessAllLinks(tecos);