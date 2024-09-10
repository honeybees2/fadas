function buscar() {
let section = document.getElementById("resultados-pesquisa")
console.log(section);

let campoPesquisa = document.getElementById("campo-pesquisa").value

if(campoPesquisa == ""){
    section.innerHTML = "<p> Nenhum resultado encontrado. </p>"
    return
}
campoPesquisa = campoPesquisa.toLowerCase()

console.log(campoPesquisa);

let resultados = "";
let titulo = "";
let descricao = "";

for(let dado of dados) {
    titulo = dado.titulo.toLocaleLowerCase()
    descricao = dado.descricao.toLocaleLowerCase()
    // se o dado titulo inclui o campoPesquisa
    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
        // cria um novo elemento
        resultados += `
        <div class="item-resultado">
            <h2> 
                <a href='#' target="_blank">${dado.titulo}</a>
            </h2>
                <p class="descrição-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Saiba mais</a>
        </div> 
    `;
    }

}
section.innerHTML = resultados


}



    