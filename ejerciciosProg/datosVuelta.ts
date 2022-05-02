document.getElementById("app").innerHTML = `
  <h1>Calculadora de vueltas</h1>

  <h3>Ingrese los tiempos por vuelta</h3>
  <input id="vVuelta"></input>
  <button id="ingresoDato">Ingresar Tiempo</button>

`;

  let tiempoVuelta:number =0;
  let tomarDato=document.getElementById("ingresoDato");
  let tiempoTotal:number = 0;
  let contador:number =0;
  let promedio:number=0;
  
tomarDato.addEventListener("click", () => {

    
    if (contador <=4) {
    let tiempoVuelta:number = Number(vVuelta.value);
    tiempoTotal=(tiempoVuelta+tiempoTotal);
    contador=(contador+1);  
    console.log(contador);
      if (contador ===4) {  
        let promedio= (tiempoTotal/contador);
        console.log("el promedio es "+promedio);
      }
    }


      //document.getElementById("app").innerHTML = `
        //<h1>Calculadora de vueltas</h1>
        //<h3>El promedio de tiempo por vueltas es:<script>promedio</script></h3>
        //<h3>El tiempo total es:<script>tiempoTotal</script></h3>

}