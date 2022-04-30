document.getElementById("app").innerHTML = `
<h1>Descuentos de un producto</h1>

<br>

<h3>El producto cuesta $450,50</h3>

<h3>¿qué porcentaje de descuento desea aplicar?</h3>

<select id="operacion">
        <option value="1">10%</option>
        <option value="2">20%</option>
        <option value="3">30%</option>
        <option value="4">40%</option>
        <option value="5">50%</option>
        <option value="6">60%</option>
        <option value="7">70%</option>
        <option value="8">80%</option>
        <option value="9">90%</option>
</select>

<button id="calculo"> Calcular descuento </button>
`;

let calcular = document.getElementById("calculo");
let decision: number = Number(operacion.value);

calcular.addEventListener("click", () => {
  let resultado: number;

  let precioTotal: number = 450.5;

  let newDecision: number = Number(operacion.value);

  let decision = newDecision;

  if (decision === 1) let resultado = precioTotal - precioTotal * 0.1;
  else if (decision === 2) let resultado = precioTotal - precioTotal * 0.2;
  else if (decision === 3) let resultado = precioTotal - precioTotal * 0.3;
  else if (decision === 4) let resultado = precioTotal - precioTotal * 0.4;
  else if (decision === 5) let resultado = precioTotal - precioTotal * 0.5;
  else if (decision === 6) let resultado = precioTotal - precioTotal * 0.6;
  else if (decision === 7) let resultado = precioTotal - precioTotal * 0.7;
  else if (decision === 8) let resultado = precioTotal - precioTotal * 0.8;
  else if (decision === 9) let resultado = precioTotal - precioTotal * 0.9;

  console.log("El precio con el descuento aplicado es: ", resultado);
});
