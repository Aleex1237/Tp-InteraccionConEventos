window.onload = function () {
  let titulo = document.querySelector(".moviesAddTitulo");
  let formulario = document.querySelector("#formulario");
  let article = document.querySelector("article");
  titulo.innerHTML = "AGREGAR PELÍCULA";
  titulo.classList.add("titulo");
  article.classList.add("fondoTransparente");
  formulario.classList.add("fondoCRUD");

  let inputTitle = document.querySelector("#titulo");
  inputTitle.addEventListener("keypress", (e) => {
    let estadoSecreto = 0;

    let key = e.key;
    switch (key) {
      case "s":
        estadoSecreto = 1;
        console.log(estadoSecreto);
        break;
      case "e":
        estadoSecreto = 2;
        console.log(estadoSecreto);
        break;
      case "c":
        estadoSecreto = 3;
        console.log(estadoSecreto);
        break;
      case "r":
        estadoSecreto = 4;
        console.log(estadoSecreto);
        break;
      case "e":
        estadoSecreto = 5;
        console.log(estadoSecreto);
        break;
      case "t":
        estadoSecreto = 6;
        console.log(estadoSecreto);
        break;
      case "o":
        estadoSecreto = 0;
        console.log(estadoSecreto);
        window.alert("SECRETO MAGICO".toUpperCase());
        break;
      default:
        break;
    }
  });
};
