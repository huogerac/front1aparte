alunos = [
    /*{"nome": 'Ana Carolina',
    "repo_url": 'https://anacmas.github.io/Desafio-final/',
    "username": 'anacmas' ,}, */
    {
        "nome": 'Ana Clara',
        "repo_url": 'https://anaclaracoelho.github.io/Dfinal_paginapessoal/',
        "username": 'AnaClaraCoelho' ,
    },
    {
        "nome": 'Beatriz Ramalho',
        "repo_url": 'https://beatrizresteves.github.io/Desafio_final_pgpessoal/',
        "username": 'Beatrizresteves' ,
    },
    {
        "nome": 'Breno Martins',
        "repo_url": 'https://obrenoms.github.io/d8.2/',
        "username": 'oBrenoMS' ,
    },
    {
        "nome": 'Bruna Andrade',
        "repo_url": "https://andradebru.github.io/dfinal-minha-pagina/",
        "username": 'andradebru' ,
        }, 
]


for(aluno of alunos){
    repo_url = aluno["repo_url"].slice(0,aluno["repo_url"].length-1)
    repo_url = repo_url.split("").reverse().join("");
    indice = repo_url.indexOf("/")
    repo_url = repo_url.slice(0,indice).split("").reverse().join("");
    estrela_url = []
    getAvatarAndStarsFrom(aluno['username'], repo_url, (data) => {
        estrela_url = []
        estrela_url.push(data['stars'])
        estrela_url.push(data['avatar'])
        var text = document.createElement("text");
        text.textContent = `O aluno ${data['username']} tem no repositorio ${data['url']} | ${estrela_url[0]} estrelas`
        document.getElementById('imagens').appendChild(text);
        var img = document.createElement("IMG");
        img.src = `${estrela_url[1]}`;
        img.style.width = "300px";
        img.style.height = "300px";
        document.getElementById('imagens').appendChild(img);
      })
}

function getAvatarAndStarsFrom(username, repository, callback) {
    getRepoDetails(username, repository).then((response) => {
      callback({
        "stars": response.stargazers_count,
        "avatar": response.owner.avatar_url,
        "username": response.owner.login,
        "url": response.html_url,
      })
    })
  }

function getRepoDetails(username, repository) {
  return new Promise((resolve, reject) => {
    fetch(`https://api.github.com/repos/${username}/${repository}`)
      .then((response) => response.json())
      .then((response) => {
        resolve(response)
      })
    .catch((error) => {
      reject("Error: " + error)
    })
  })
}
