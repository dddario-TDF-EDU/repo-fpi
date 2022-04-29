document.getElementById("app").innerHTML = `
<h1>Calculando el area de un rectangulo</h1>

<h3>ingrese la base</h3>
<input id="base"> </input>

<h3>ingrese la altura</h3>
<input id="altura"> </input>

<br>
<button id="calculo"> calcular </button>
`;

//let numBase.getElementById.innerHTML(base);

//let numAltura.getElementById.innerHTML(altura);

let calcular = document.getElementById("calculo");

calcular.addEventListener("click", () => {
  let numB: number = Number(base.value);
  let numH: number = Number(altura.value);

  let resultado: number = numB * numH;

  console.log(resultado);
});
