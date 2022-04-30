document.getElementById("app").innerHTML = `
<h1>Menu de selección de ejercicios </h1>

<select id="menuTarea">
        <option value="1">Calculadora simple</option>
        <option value="2">Area de un rectangulo</option>
        <option value="3">Descuento de un producto</option>
        <option value="4">Auto de carrera</option>
</select>

<button id="ir"> Ir a seleccion </button>

`;

let irTrabajo = document.getElementById("ir");
let decision: number = Number(menuTarea.value);

irTrabajo.addEventListener("click", () => {
  document.getElementById("menu").innerHTML = `




    `;
});

//este archivo puede usarse para gestionar el archivo html como menu
//y dar acceso a las multiples tareas, pruebas y ejercicios.
