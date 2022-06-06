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

document.addEventListener("DOMContentLoaded", function () {
    var buscarPeople = document.getElementById("buscarPeople");
  
    buscarPeople.addEventListener("click", function () {
      var idPeople = $("#idPeople").val();
  
      var myHEADER = "https://swapi.dev/api/people/" + idPeople + "";
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
          var res = JSON.parse(this.response);
          document.getElementById("name").value = res.name;
          document.getElementById("height").value = res.height;
          document.getElementById("birth_year").value = res.birth_year;
        }
      };
  
      xmlhttp.open("GET", myHEADER);
  
      xmlhttp.send();
      console.log("acabou");
    });
  });
