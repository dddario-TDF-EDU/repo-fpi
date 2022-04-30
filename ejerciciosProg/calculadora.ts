document.getElementById("app").innerHTML = `
<h1>Calculadora</h1>

<h3>ingrese el primer numero</h3>
  <input id="numA"> </input>

<h3>ingrese segundo numero</h3>
  <input id="numB"> </input>

<br>

<select id="operacion">
        <option value="1">Suma</option>
        <option value="2">Resta</option>
        <option value="3">Multiplicacion</option>
        <option value="4">Division</option>
        <option value="5">Raiz</option>
        <option value="6">Potencia</option>
        <option value="7">Porcentaje</option>
</select>

<button id="calculo"> Calcular </button>
`;

let calcular = document.getElementById("calculo");
let decision: number = Number(operacion.value);

calcular.addEventListener("click", () => {
  let num1: number = Number(numA.value);
  let num2: number = Number(numB.value);

  let resultado: number;

  let newDecision: number = Number(operacion.value);

  let decision = newDecision;

  if (decision === 1) let resultado = num1 + num2;
  else if (decision === 2) let resultado = num1 - num2;
  else if (decision === 3) let resultado = num1 * num2;
  else if (decision === 4) let resultado = num1 / num2;
  else if (decision === 5) let resultado = num1 ** (1 / num2);
  else if (decision === 6) let resultado = num1 ** num2;
  else if (decision === 7) let resultado = (num1 * num2) / 100;

  console.log(resultado);
});
