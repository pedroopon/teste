

const loadingElement = document.querySelector("#loading")
const postscontainer = document.querySelector("#posts-container")
const botao = document.querySelector("#botaobuscar")
 
//pegar URL
const urlParametros = new URLSearchParams(window.location.search)
const IdPost = urlParametros.get("id")

/* botao.addEventListener("click", (e) => {
    buscarTodosOsPosts()
 }) */

 if(!IdPost){
    buscarTodosOsPosts()
 }else{
    
 }

async function buscarTodosOsPosts() {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/posts")
    console.log(resposta)

    const data = await resposta.json()
    console.log(data)


    loadingElement.classList.add("hide")

    data.map((postagem) => {
        const div = document.createElement("div")
        const title = document.createElement("h2")
        const body = document.createElement("p")
        const link = document.createElement("a")

        title.innerText = postagem.title
        body.innerText = postagem.body
        // como se tivese criando uma tag de link no html, so que usaando o JS e no automatico
        link.innerText = "ler"
        link.setAttribute("href", './post.html?id=' + postagem.id)

        div.appendChild(title)
        div.appendChild(body)
        div.appendChild(link)
        postscontainer.appendChild(div)






    })
}