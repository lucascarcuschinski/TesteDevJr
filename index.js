const personagensContador = document.getElementById("Personagens");
const filmesContador = document.getElementById("Filmes");
const navesContador = document.getElementById("Naves");
const planetasContador = document.getElementById("Planetas");


preencherContadores();

function preencherContadores() {
    Promise.all([
                 swapiGet("people/"),
                 swapiGet("films/"),
                 swapiGet("starships/"),
                 swapiGet("planets")

    ]).then(function(results) {
        console.log(results);
        personagensContador.innerHTML = results[0].data.count;
        filmesContador.innerHTML = results[1].data.count;
        navesContador.innerHTML = results[2].data.count;
        planetasContador.innerHTML = results[3].data.count;

    });
}
function swapiGet(param) {
    return axios.get(`https://swapi.dev/api/${param}`)

}

