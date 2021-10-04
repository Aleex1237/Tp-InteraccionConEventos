window.onload = function () {
  let body = document.querySelector("body");
  let moviesListTitulo = document.querySelector(".moviesListTitulo");
  let logo = document.querySelector(".logoDH");
  let btnAdd = document.querySelector(".botonAgregar");

  console.log(btnAdd);
  btnAdd.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "red";
  });
  btnAdd.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "green";
  });

  logo.addEventListener("mouseover", () => {
    body.style.backgroundColor = "#7f7f7f";
    body.classList.add("fondoMoviesList");
  });

  moviesListTitulo.innerHTML = "LISTADO DE PELÍCULAS";
  moviesListTitulo.style.color = "white";
  moviesListTitulo.style.backgroundColor = "teal";
  moviesListTitulo.style.padding = "20px";
};
