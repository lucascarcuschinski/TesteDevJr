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
          document.getElementById("hair_color").value = res.hair_color;
          document.getElementById("gender").value = res.gender;
          document.getElementById("eye_color").value = res.eye_color;
        }
      };

      xmlhttp.open("GET", myHEADER);
      xmlhttp.send();
      console.log("acabou");
    });
});

document.addEventListener("DOMContentLoaded", function () {

        var buscarFilmes = document.getElementById("buscarFilmes");
      
        buscarFilmes.addEventListener("click", function () {
          var idFilmes = $("#idFilmes").val();
      
          var myHEADER = "https://swapi.dev/api/films/" + idFilmes + "";
          var xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {
              var rest = JSON.parse(this.response);
              document.getElementById("title").value = rest.title;
              document.getElementById("episode_id").value = rest.episode_id;
              document.getElementById("director").value = rest.director;
              document.getElementById("producer").value = rest.producer;
              document.getElementById("release_date").value = rest.release_date;
            }
        };
  
        xmlhttp.open("GET", myHEADER);
        xmlhttp.send();
        console.log("acabou");
      });
  });
    document.addEventListener("DOMContentLoaded", function () {

    var buscarNaves = document.getElementById("buscarNaves");
    
    buscarNaves.addEventListener("click", function () {
      var idNaves = $("#idNaves").val();
    
      var myHEADER = "https://swapi.dev/api/starships/" + idNaves + "";
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
          var rest = JSON.parse(this.response);
          document.getElementById("nameN").value = rest.name;
          document.getElementById("passengers").value = rest.passengers;
          document.getElementById("manufacturer").value = rest.manufacturer;
        }
    };
    
    xmlhttp.open("GET", myHEADER);
    xmlhttp.send();
    console.log("acabou");
    });
    });

  document.addEventListener("DOMContentLoaded", function () {

    var buscarPlanetas = document.getElementById("buscarPlanetas");
  
    buscarPlanetas.addEventListener("click", function () {
      var idPlanetas = $("#idPlanetas").val();
  
      var myHEADER = "https://swapi.dev/api/planets/" + idPlanetas + "";
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
          var rest = JSON.parse(this.response);
          console.log(rest.episode_id)
          document.getElementById("nameP").value = rest.name;
          document.getElementById("gravity").value = rest.gravity;
          document.getElementById("terrain").value = rest.terrain;
        }
    };

    xmlhttp.open("GET", myHEADER);
    xmlhttp.send();
    console.log("acabou");
  });
});
