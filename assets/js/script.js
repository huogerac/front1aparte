const section = document.querySelector('.features')
let namesArray = ['Ana Carolina Milos', 'Ana Clara Coelho', 'Beatriz Ramalho',
'Breno Martins', 'Bruna Andrade', 'Cainã Lucas', 'Caio Peternela',
'Clara Santos', 'Daniel Alves', 'Daniel Dantas', 'David Satoshi',
'Edinaildo Costa', 'Eliel Clementino', 'Evandro Pereira', 'Fabricio Asssunção', 'Felipe Soares',
'Fernanda Liz', 'Gabriel Santos', 'Gabriela Victoria', 'Gislane Nunes',
'Glória Felix', 'Ingrid Caroline', 'João Vitor', 'Laura Nascimento',
'Lorrana Camargo', 'Lucas Mariano', 'Lucca Nunes', 'Marcela Lima',
'Marcelo Henrique', 'Marcos Ornellas', 'Marcos Viana', 'Marília Moraes',
'Rafael Leone', 'Roberto de Moraes', 'Ronald Perdigão', 'Sara Brangioni',
'Tábata de Faria', 'Victor Magalhães', 'Victor Prata']

let repositories = [
    'https://anacmas.github.io/Desafio_final/', 'https://anaclaracoelho.github.io/Dfinal_paginapessoal/', 'https://beatrizresteves.github.io/Desafio_final_pgpessoal/',
    'https://obrenoms.github.io/d8.2/','https://andradebru.github.io/dfinal-minha-pagina/','https://cainlucas.github.io/paginaoficial/',
    'https://caiopeternela.github.io/dfinal-pagina-pessoal/pagina-pessoal/index.html','https://clarasantosmf.github.io/BuserTech-D8-Personal-page/',
    'https://inczdan.github.io/D8-PgPessoal/','https://danidanis.github.io/D--Final/',
    'https://davidsatag.github.io/Pagina_pessoal/','https://edinaildo.github.io/Desafio-Final/', 'https://elielclementino.github.io/D9_minha_pagina_pessoal/','https://evandropcs.github.io/Pagina-Pessoal/','https://fbc00.github.io/p-gina-pessoal-desafioFinal/','https://felipesoaresfl.github.io/busertech-D9-personal-page/','https://fernandalizs.github.io/Desafio-Final/', 'https://gabriels999.github.io/DF-PaginaPessoal/','https://gabyvictoria0122.github.io/Minha-Pagina-Pessoal/','https://gf-nunes.github.io/D9.P-ginaPessoal/','https://globrito.github.io/d.9_pagina_pessoal_final_/','https://carolineingrid.github.io/D-Final-Pagina-Pessoal/','https://joaoprocopio.github.io/dfinal-pag-pessoal/','https://launasci.github.io/D.FinalPagPessoal/','https://lorrananeves.github.io/dfinal/','https://lukemariano.github.io/D9-Pagina-Pessoal/','https://luccaribeiro.github.io/d9-final/','https://marcelavie.github.io/Pagina-pessoal/','https://mhenrique94.github.io/DFinal-Pag_Pessoal/','https://129-ornellas.github.io/P-gina-Pessoal---Marcos-Ornellas/','https://marcosgrandesso.github.io/D_Final_Pag_pessoal_marcos/','https://marilia-borgo.github.io/Portfolio_2022/','https://rafaelleone.github.io/dfinal/index.html','https://rdemora2.github.io/D.Final---Pagina_Pessoal/','https://ronald-ps.github.io/Page-ronald/,https://sarabrangioni.github.io/P-gina-Pessoal/','https://tabataf.github.io/Tabata-pagina-pessoal/','https://victormagalhaesbarreto.github.io/D-Final/','https://ovictorprata.github.io/d9-pagina-pessoal/',
]
const usernames = ['anacmas', 'AnaClaraCoelho', 'Beatrizresteves', 'oBrenoMS', 'andradebru', 'cainlucas', 'caiopeternela', 'ClaraSantosmf', 'inczDan', 'DaniDanis', 'davidsatag', 'edinaildo', 'ElielClementino', 'evandropcs', 'fbc00', 'felipesoaresfl', 'fernandalizs', 'Gabriels999', 'GabyVictoria0122', 'nunes', 'globrito', 'carolineingrid', 'joaoprocopio', 'launasci', 'lorrananeves', 'lukemariano', 'luccaribeiro', 'marcelavie', 'mhenrique94', 'ornellas', 'MarcosGrandesso', 'borgo', 'rafaelleone', 'Rdemora2', 'ps', 'sarabrangioni', 'tabataf', 'VictorMagalhaesBarreto', 'ovictorprata']
let students = {}

// Api fetch data
let gitStars
async function githubUser(){
    const url = `https://api.github.com/repos/ElielClementino/D9_minha_pagina_pessoal`
    const response = await fetch(url)
    const data = await response.json()
    gitStars = data.stargazers_count
}

// creating DOM tags
function createH3Tag(name){
    let creatingH3 = document.createElement('h3')
    creatingH3.classList.add('major')
    creatingH3.innerText = `${name}`
    return creatingH3
}


function createLinkTag(repository){
    let creatingLink = document.createElement('a')
    creatingLink.classList.add('special')
    creatingLink.href = `${repository}`
    creatingLink.target = '_blank'
    return creatingLink
}


function creatingH2Tag(){
    let creatingH2 = document.createElement('h2')
    creatingH2.innerText = `⭐`.repeat(gitStars)
    return creatingH2
}


function createArticleTag(){
    let creatingArticle = document.createElement('article')
    creatingArticle.append(createH3Tag(students.name))
    creatingArticle.append(creatingH2Tag())
    creatingArticle.append(createLinkTag(students.repositories))
    return creatingArticle
}


// Event trigger
const butom = document.querySelector('.butom')

githubUser()

butom.addEventListener('click', event =>{
    butom.classList.add('hiden')
    for(cont in namesArray){
        students = {
            'name':namesArray[cont],
            'repositories':repositories[cont]
        }
        section.append(createArticleTag())
    }
})

