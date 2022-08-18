function getRepoDetails(nome, repo) {
    return new Promise((resolve, reject) => {
    fetch(`https://api.github.com/repos/${nome}/${repo}`)
        .then((response) => response.json())
        .then((response) => {
        resolve(response)
        })
    .catch((error) => {
        reject("Error: " + error)
    })
    })
}

function getAvatarAndStarsFrom(nome, repo, callback) {
    getRepoDetails(nome, repo).then((response) => {
      callback({
        "stars": response.stargazers_count,
      })
    })
}
  
for (i of lista){
    let nome = i.nome
    let link = i.username
    let lonk = i.link
    let exibirAluno=(
        (data) => {
        let documento = document.getElementById('buserteco')
        let novoEl = document.createElement('article')
        novoEl.innerHTML =`               
        <h3 class="major">${nome}</h3>
        <a
        href=${lonk}
        class="special"
        target="_blank"
        >${link}</a
        >
        <p>Estrelas: ${data.stars}</p>
    
        `    
        documento.appendChild(novoEl)
    })
    getAvatarAndStarsFrom(i.username, i.repo, exibirAluno)
}
