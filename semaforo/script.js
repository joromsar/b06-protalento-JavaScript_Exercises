let coloresSemaforos = ["/semaforo/rojo.png", "/semaforo/amarillo.png", "/semaforo/verde.png"];

const semaforoImagen = document.querySelector('#semaforo');

let contador = 0;

   function cambiarLuzSemaforo() {
        semaforoImagen.src = coloresSemaforos[contador % coloresSemaforos.length];
        contador++;
   }
    

const intervalo = setInterval(cambiarLuzSemaforo, 1500)

